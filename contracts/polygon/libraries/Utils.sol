// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol";

library Utils {
    function matchTickSpacingDown(
        int24 tick,
        int24 tickSpacing
    ) internal pure returns (int24) {
        uint absTick = tick < 0 ? uint(-int(tick)) : uint(int(tick));
        absTick -= absTick % uint(int(tickSpacing));
        return
            tick < 0 ? -int24(int(absTick)) - tickSpacing : int24(int(absTick));
    }

    function matchTickSpacingUp(
        int24 tick,
        int24 tickSpacing
    ) internal pure returns (int24) {
        uint absTick = tick < 0 ? uint(-int(tick)) : uint(int(tick));
        absTick -= absTick % uint(int(tickSpacing));
        return
            tick < 0 ? -int24(int(absTick)) : int24(int(absTick)) + tickSpacing;
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

    /**
     * @dev Returns the square root of a number. It the number is not a perfect square, the value is rounded down.
     *
     * Inspired by Henry S. Warren, Jr.'s "Hacker's Delight" (Chapter 11).
     */
    function sqrt(uint256 a) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }

        // For our first guess, we get the biggest power of 2 which is smaller than the square root of the target.
        // We know that the "msb" (most significant bit) of our target number `a` is a power of 2 such that we have
        // `msb(a) <= a < 2*msb(a)`.
        // We also know that `k`, the position of the most significant bit, is such that `msb(a) = 2**k`.
        // This gives `2**k < a <= 2**(k+1)` → `2**(k/2) <= sqrt(a) < 2 ** (k/2+1)`.
        // Using an algorithm similar to the msb conmputation, we are able to compute `result = 2**(k/2)` which is a
        // good first aproximation of `sqrt(a)` with at least 1 correct bit.
        uint256 result = 1;
        uint256 x = a;
        if (x >> 128 > 0) {
            x >>= 128;
            result <<= 64;
        }
        if (x >> 64 > 0) {
            x >>= 64;
            result <<= 32;
        }
        if (x >> 32 > 0) {
            x >>= 32;
            result <<= 16;
        }
        if (x >> 16 > 0) {
            x >>= 16;
            result <<= 8;
        }
        if (x >> 8 > 0) {
            x >>= 8;
            result <<= 4;
        }
        if (x >> 4 > 0) {
            x >>= 4;
            result <<= 2;
        }
        if (x >> 2 > 0) {
            result <<= 1;
        }

        // At this point `result` is an estimation with one bit of precision. We know the true value is a uint128,
        // since it is the square root of a uint256. Newton's method converges quadratically (precision doubles at
        // every iteration). We thus need at most 7 iteration to turn our partial result with one bit of precision
        // into the expected uint128 result.
        result = (result + a / result) >> 1;
        result = (result + a / result) >> 1;
        result = (result + a / result) >> 1;
        result = (result + a / result) >> 1;
        result = (result + a / result) >> 1;
        result = (result + a / result) >> 1;
        result = (result + a / result) >> 1;
        return min(result, a / result);
    }

    /**
     * @dev Returns the smallest of two numbers.
     */
    function min(uint256 a, uint256 b) internal pure returns (uint256) {
        return a < b ? a : b;
    }
}
