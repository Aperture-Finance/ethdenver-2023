// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma abicoder v2;

import "@chainlink/contracts/src/v0.7/interfaces/KeeperCompatibleInterface.sol";

import "./UniV3Automan.sol";

contract LimitOrderChainlink is KeeperCompatibleInterface, UniV3Automan {
    constructor(
        INonfungiblePositionManager nonfungiblePositionManager,
        address V3_FACTORY
    ) UniV3Automan(nonfungiblePositionManager, V3_FACTORY) {}

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
        decreaseLiquidity(positionId, liquidity, 0, 0);
        collect(positionId);
    }
}
