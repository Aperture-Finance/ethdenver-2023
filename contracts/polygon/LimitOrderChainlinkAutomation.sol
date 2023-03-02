// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma abicoder v2;

import "@chainlink/contracts/src/v0.7/interfaces/KeeperCompatibleInterface.sol";
import "@uniswap/v3-core/contracts/interfaces/pool/IUniswapV3PoolState.sol";
import "@uniswap/v3-core/contracts/libraries/SafeCast.sol";
import "@uniswap/v3-core/contracts/libraries/SqrtPriceMath.sol";
import "@uniswap/v3-core/contracts/libraries/TickMath.sol";
import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";
import "@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol";

contract LimitOrderChainlinkAutomation is KeeperCompatibleInterface {
    using SafeCast for int256;
    INonfungiblePositionManager
        internal constant UNISWAP_V3_NONFUNGIBLE_POSITION_MANAGER =
        INonfungiblePositionManager(0xC36442b4a4522E871399CD717aBDD847Ab11FE88);
    address internal constant UNISWAP_V3_FACTORY_ADDRESS =
        0x1F98431c8aD98523631AE4a59f267346ea31F984;

    // Position id to zeroForOne mapping, indicating whether a given position is
    // for a limit order exchanging from token0 for token1 or the other way around.
    mapping(uint256 => bool) positionIdToZeroForOne;

    // Position id to owner address mapping. Owner is the user that placed the
    // limit order.
    mapping(uint256 => address) positionIdToOwner;

    /**
     * @notice method that is simulated by the keepers to see if the limit order
     * has been fulfilled and therefore the underlying liquidity position should
     * be closed.
     * @param checkData specified in the upkeep registration so it is always the
     * same for a registered upkeep. This encodes two params:
     * - uint256 positionId: the id of the underlying Uniswap V3 position.
     * - bool zeroForOne: if true, this limit order is swapping token0 for token1.
     * - address owner: address of the user who set up this limit order.
     * - TODO: store `zeroForOne` and `owner` in state variables.
     * @return upkeepNeeded boolean to indicate whether the keeper should call
     * performUpkeep or not.
     * @return performData bytes that the keeper should call performUpkeep with, if
     * upkeep is needed. If you would like to encode data to decode later, try
     * `abi.encode`.
     */
    function checkUpkeep(
        bytes calldata checkData
    )
        public
        view
        override
        returns (bool upkeepNeeded, bytes memory performData)
    {
        uint256 positionId = abi.decode(checkData, (uint256));
        (upkeepNeeded, ) = checkUpkeepInternal(positionId);
        if (upkeepNeeded) {
            performData = checkData;
        }
    }

    function getLiquidityPositionInfo(
        uint256 positionId
    )
        internal
        view
        returns (PoolAddress.PoolKey memory, int24, int24, uint128)
    {
        (
            ,
            ,
            address token0,
            address token1,
            uint24 fee,
            int24 tickLower,
            int24 tickUpper,
            uint128 liquidity,
            ,
            ,
            ,

        ) = UNISWAP_V3_NONFUNGIBLE_POSITION_MANAGER.positions(positionId);
        return (
            PoolAddress.PoolKey(token0, token1, fee),
            tickLower,
            tickUpper,
            liquidity
        );
    }

    function checkUpkeepInternal(
        uint256 positionId
    ) internal view returns (bool, uint128) {
        (
            PoolAddress.PoolKey memory pool_key,
            int24 tickLower,
            int24 tickUpper,
            uint128 liquidity
        ) = getLiquidityPositionInfo(positionId);
        address pool_address = PoolAddress.computeAddress(
            UNISWAP_V3_FACTORY_ADDRESS,
            pool_key
        );
        (uint160 sqrtPriceX96, int24 tick, , , , , ) = IUniswapV3PoolState(
            pool_address
        ).slot0();

        // Find current amount of the two tokens in the liquidity position.
        int128 negativeLiquidity = -int256(liquidity).toInt128();
        int256 amount0;
        int256 amount1;
        if (tick < tickLower) {
            amount0 = -SqrtPriceMath.getAmount0Delta(
                TickMath.getSqrtRatioAtTick(tickLower),
                TickMath.getSqrtRatioAtTick(tickUpper),
                negativeLiquidity
            );
        } else if (tick < tickUpper) {
            amount0 = -SqrtPriceMath.getAmount0Delta(
                sqrtPriceX96,
                TickMath.getSqrtRatioAtTick(tickUpper),
                negativeLiquidity
            );
            amount1 = -SqrtPriceMath.getAmount1Delta(
                TickMath.getSqrtRatioAtTick(tickLower),
                sqrtPriceX96,
                negativeLiquidity
            );
        } else {
            amount1 = -SqrtPriceMath.getAmount1Delta(
                TickMath.getSqrtRatioAtTick(tickLower),
                TickMath.getSqrtRatioAtTick(tickUpper),
                negativeLiquidity
            );
        }

        bool upkeepNeeded;
        if (positionIdToZeroForOne[positionId]) {
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
        uint256 positionId = abi.decode(performData, (uint256));
        (bool limitOrderFulfilled, uint128 liquidity) = checkUpkeepInternal(
            positionId
        );
        require(limitOrderFulfilled, "condition not met");
        UNISWAP_V3_NONFUNGIBLE_POSITION_MANAGER.decreaseLiquidity(
            INonfungiblePositionManager.DecreaseLiquidityParams({
                tokenId: positionId,
                liquidity: liquidity,
                amount0Min: 0,
                amount1Min: 0,
                deadline: type(uint256).max
            })
        );
        UNISWAP_V3_NONFUNGIBLE_POSITION_MANAGER.collect(
            INonfungiblePositionManager.CollectParams({
                tokenId: positionId,
                recipient: positionIdToOwner[positionId],
                amount0Max: type(uint128).max,
                amount1Max: type(uint128).max
            })
        );
    }
}
