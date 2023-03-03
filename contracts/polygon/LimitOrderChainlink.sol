// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma abicoder v2;

import {AutomationRegistryInterface, State, Config} from "./interfaces/AutomationRegistryInterface1_2.sol";
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.7/interfaces/LinkTokenInterface.sol";
import {KeeperCompatibleInterface} from "@chainlink/contracts/src/v0.7/interfaces/KeeperCompatibleInterface.sol";

import "./UniV3Automan.sol";

interface KeeperRegistrarInterface {
    function register(
        string memory name,
        bytes calldata encryptedEmail,
        address upkeepContract,
        uint32 gasLimit,
        address adminAddress,
        bytes calldata checkData,
        uint96 amount,
        uint8 source,
        address sender
    ) external;
}

contract LimitOrderChainlink is KeeperCompatibleInterface, UniV3Automan {
    LinkTokenInterface public immutable i_link;
    address public immutable registrar;
    AutomationRegistryInterface public immutable i_registry;
    bytes4 registerSig = KeeperRegistrarInterface.register.selector;

    constructor(
        LinkTokenInterface _link,
        address _registrar,
        AutomationRegistryInterface _registry,
        INonfungiblePositionManager nonfungiblePositionManager,
        address V3_FACTORY
    ) UniV3Automan(nonfungiblePositionManager, V3_FACTORY) {
        i_link = _link;
        registrar = _registrar;
        i_registry = _registry;
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

    /// @notice Create a Uni v3 LP and limit order
    /// @param inputToken Token to sell
    /// @param outputToken Token to receive
    /// @param inputAmount Amount to sell
    /// @param fee Uni v3 pool fee tier
    /// @param limitPrice Limit price defined as (outputToken / inputToken) * 1e18
    function createLimitOrder(
        address inputToken,
        address outputToken,
        uint256 inputAmount,
        uint24 fee,
        uint256 limitPrice
    ) external payable {
        // TODO: Utils.matchTickSpacing
        (address token0, address token1) = Utils.sortTokens(
            inputToken,
            outputToken
        );
        bool isZeroForOne;
        int24 tickLower;
        int24 tickUpper;
        uint256 amount0Desired;
        uint256 amount1Desired;
        (
            uint256 tokenId,
            uint128 liquidity,
            uint256 amount0,
            uint256 amount1
        ) = mint(
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

    function cancelLimitOrder(uint256 positionId) external {}

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
            int24 tickLower,
            int24 tickUpper,
            uint128 liquidity,
            uint256 amount0,
            uint256 amount1
        ) = getLiquidityPositionInfo(positionId);

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
        decreaseLiquidity(positionId, liquidity, 0, 0);
        collect(positionId);
    }
}
