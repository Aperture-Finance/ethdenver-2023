// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma abicoder v2;

import {AutomationRegistryInterface, State, Config} from "./interfaces/AutomationRegistryInterface1_2.sol";
import {KeeperRegistrarInterface} from "./interfaces/KeeperRegistrarInterface.sol";
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.7/interfaces/LinkTokenInterface.sol";
import {KeeperCompatibleInterface} from "@chainlink/contracts/src/v0.7/interfaces/KeeperCompatibleInterface.sol";
import {FullMath} from "@uniswap/v3-core/contracts/libraries/FullMath.sol";

import "./UniV3Automan.sol";

contract LimitOrderChainlink is KeeperCompatibleInterface, UniV3Automan {
    using FullMath for uint256;

    LinkTokenInterface public immutable i_link;
    address public immutable registrar;
    AutomationRegistryInterface public immutable i_registry;
    bytes4 registerSig = KeeperRegistrarInterface.register.selector;

    constructor(
        AutomationRegistryInterface _registry,
        INonfungiblePositionManager nonfungiblePositionManager
    ) UniV3Automan(nonfungiblePositionManager) {
        i_registry = _registry;
        (, Config memory config, ) = _registry.getState();
        address _registrar = config.registrar;
        registrar = _registrar;
        i_link = KeeperRegistrarInterface(_registrar).LINK();
    }

    /// @param name	Name of Upkeep
    /// @param encryptedEmail Not in use in programmatic registration. Please specify with 0x
    /// @param upkeepContract Address of Keepers-compatible contract that will be automated
    /// @param gasLimit	The maximum amount of gas that will be used to execute your function on-chain
    /// @param adminAddress	Address for Upkeep administrator. Upkeep administrator can fund contract.
    /// @param checkData ABI-encoded fixed and specified at Upkeep registration and used in every checkUpkeep. Can be empty (0x)
    /// @param amount The amount of LINK (in Wei) to fund your Upkeep. The minimum amount is 5 LINK. To fund 5 LINK please set this to 5000000000000000000
    /// @param source Not in use in programmatic registration. Please specify with 0.
    /// @return upkeepID
    function registerAndPredictID(
        string memory name,
        bytes memory encryptedEmail,
        address upkeepContract,
        uint32 gasLimit,
        address adminAddress,
        bytes memory checkData,
        uint96 amount,
        uint8 source
    ) internal returns (uint256 upkeepID) {
        (State memory state, , ) = i_registry.getState();
        uint256 oldNonce = state.nonce;
        bytes memory payload = abi.encode(
            name,
            encryptedEmail,
            upkeepContract,
            gasLimit,
            adminAddress,
            checkData,
            amount,
            source,
            address(this)
        );
        i_link.transferAndCall(
            registrar,
            amount,
            abi.encodeWithSelector(registerSig, payload)
        );
        (state, , ) = i_registry.getState();
        if (state.nonce == oldNonce + 1) {
            upkeepID = uint256(
                keccak256(
                    abi.encodePacked(
                        blockhash(block.number - 1),
                        address(i_registry),
                        uint32(oldNonce)
                    )
                )
            );
        } else {
            revert("auto-approve disabled");
        }
    }

    function calculateTickAmount(
        IUniswapV3Pool pool,
        uint256 inputAmount,
        uint256 outputAmount,
        bool isZeroForOne
    )
        internal
        view
        returns (
            int24 tickLower,
            int24 tickUpper,
            uint256 amount0Desired,
            uint256 amount1Desired
        )
    {
        int24 currentTick;
        int24 tickSpacing;
        {
            (, currentTick, , , , , ) = pool.slot0();
            tickSpacing = (pool).tickSpacing();
        }
        if (isZeroForOne) {
            uint160 sqrtLimitPriceX96 = uint160(
                Utils.sqrt(outputAmount.mulDiv(1 << 192, inputAmount))
            );
            tickLower = Utils.matchTickSpacing(
                TickMath.getTickAtSqrtRatio(sqrtLimitPriceX96),
                tickSpacing
            );
            tickUpper = currentTick;
            (amount0Desired, amount1Desired) = (inputAmount, 0);
        } else {
            uint160 sqrtLimitPriceX96 = uint160(
                Utils.sqrt(inputAmount.mulDiv(1 << 192, outputAmount))
            );
            tickUpper = Utils.matchTickSpacing(
                TickMath.getTickAtSqrtRatio(sqrtLimitPriceX96),
                tickSpacing
            );
            tickLower = currentTick;
            (amount0Desired, amount1Desired) = (0, inputAmount);
        }
    }

    /// @notice Create a Uni v3 LP and limit order
    /// @param inputToken Token to sell
    /// @param outputToken Token to receive
    /// @param inputAmount Amount to sell
    /// @param outputAmount Amount to receive if sold at the limit price
    /// @param fee Uni v3 pool fee tier
    function createLimitOrder(
        address inputToken,
        address outputToken,
        uint256 inputAmount,
        uint256 outputAmount,
        uint24 fee
    ) external payable {
        bool isZeroForOne = inputToken < outputToken;
        (address token0, address token1) = isZeroForOne
            ? (inputToken, outputToken)
            : (outputToken, inputToken);
        address pool = Utils.computePoolAddress(factory, token0, token1, fee);
        (
            int24 tickLower,
            int24 tickUpper,
            uint256 amount0Desired,
            uint256 amount1Desired
        ) = calculateTickAmount(
                IUniswapV3Pool(pool),
                inputAmount,
                outputAmount,
                isZeroForOne
            );

        (uint256 tokenId, , , ) = mint(
            token0,
            token1,
            fee,
            tickLower,
            tickUpper,
            amount0Desired,
            amount1Desired
        );

        uint256 upkeepID = registerAndPredictID(
            "LimitOrder",
            new bytes(0),
            address(this),
            uint32(2000000),
            address(this),
            abi.encode(tokenId),
            uint96(0),
            uint8(0)
        );
        orderBook.push(tokenId);
        orderInfo[tokenId] = LimitOrder({
            owner: msg.sender,
            isZeroForOne: isZeroForOne,
            completed: false,
            upkeepID: upkeepID
        });
    }

    function cancelLimitOrder(uint256 positionId) external {
        LimitOrder storage order = orderInfo[positionId];
        require(msg.sender == order.owner, "Only owner can cancel");
        i_registry.cancelUpkeep(order.upkeepID);
        (uint128 liquidity, , ) = getLiquidityAmounts(positionId);
        closePosition(positionId, liquidity);
    }

    function closePosition(uint256 positionId, uint128 liquidity) internal {
        decreaseLiquidity(positionId, liquidity, 0, 0);
        collect(positionId);
        orderInfo[positionId].completed = true;
    }

    /**
     * @notice method that is simulated by the keepers to see if the limit order
     * has been fulfilled and therefore the underlying liquidity position should
     * be closed.
     * @param checkData specified in the upkeep registration so it is always the
     * same for a registered upkeep. This encodes the following parameter:
     * - uint256 positionId: the id of the underlying Uniswap V3 position.
     * @return upkeepNeeded boolean to indicate whether the keeper should call
     * performUpkeep or not.
     * @return performData bytes that the keeper should call performUpkeep with, if
     * upkeep is needed. If you would like to encode data to decode later, try
     * `abi.encode`.
     */
    function checkUpkeep(
        bytes calldata checkData
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes calldata performData)
    {
        uint256 positionId;
        assembly {
            positionId := calldataload(checkData.offset)
        }
        (upkeepNeeded, ) = checkUpkeepInternal(positionId);
        performData = checkData;
    }

    function checkUpkeepInternal(
        uint256 positionId
    ) internal view returns (bool, uint128) {
        (
            uint128 liquidity,
            uint256 amount0,
            uint256 amount1
        ) = getLiquidityAmounts(positionId);

        bool upkeepNeeded;
        if (orderInfo[positionId].isZeroForOne) {
            upkeepNeeded = amount0 == 0 && amount1 > 0;
        } else {
            upkeepNeeded = amount1 == 0 && amount0 > 0;
        }
        return (upkeepNeeded, liquidity);
    }

    /**
     * @notice method that is actually executed by the keepers, via the registry.
     * The data returned by the checkUpkeep simulation will be passed into
     * this method to actually be executed.
     * @dev The input to this method should not be trusted, and the caller of the
     * method should not even be restricted to any single registry. Anyone should
     * be able call it, and the input should be validated, there is no guarantee
     * that the data passed in is the performData returned from checkUpkeep. This
     * could happen due to malicious keepers, racing keepers, or simply a state
     * change while the performUpkeep transaction is waiting for confirmation.
     * Always validate the data passed in.
     * @param performData is the data which was passed back from the checkData
     * simulation. If it is encoded, it can easily be decoded into other types by
     * calling `abi.decode`. This data should not be trusted, and should be
     * validated against the contract's current state.
     */
    function performUpkeep(bytes calldata performData) external override {
        uint256 positionId;
        assembly {
            positionId := calldataload(performData.offset)
        }
        (bool upkeepNeeded, uint128 liquidity) = checkUpkeepInternal(
            positionId
        );
        require(upkeepNeeded, "condition not met");
        closePosition(positionId, liquidity);
    }
}
