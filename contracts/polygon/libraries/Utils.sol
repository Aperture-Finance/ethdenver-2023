// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

import "@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol";

library Utils {
    function matchTickSpacing(
        int24 tick,
        int24 tickSpacing
    ) internal pure returns (int24) {
        uint absTick = tick < 0 ? uint(-int(tick)) : uint(int(tick));
        absTick -= absTick % uint(int(tickSpacing));
        return tick < 0 ? -int24(int(absTick)) : int24(int(absTick));
    }

    /// @notice Sorts two tokens to return token0 and token1
    /// @param tokenA The first token to sort
    /// @param tokenB The other token to sort
    /// @return token0 The smaller token by address value
    /// @return token1 The larger token by address value
    function sortTokens(
        address tokenA,
        address tokenB
    ) internal pure returns (address token0, address token1) {
        (token0, token1) = tokenA < tokenB
            ? (tokenA, tokenB)
            : (tokenB, tokenA);
    }

    function computePoolAddress(
        address factory,
        address token0,
        address token1,
        uint24 fee
    ) internal pure returns (address pool) {
        pool = PoolAddress.computeAddress(
            factory,
            PoolAddress.PoolKey(token0, token1, fee)
        );
    }
}
