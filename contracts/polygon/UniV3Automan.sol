// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@uniswap/v3-core/contracts/interfaces/pool/IUniswapV3PoolState.sol";
import "@uniswap/v3-core/contracts/libraries/TickMath.sol";
import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";
import "@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol";
import "@uniswap/v3-periphery/contracts/libraries/LiquidityAmounts.sol";

contract UniV3Automan is IERC721Receiver {
    using SafeERC20 for IERC20;
    using TickMath for int24;

    INonfungiblePositionManager immutable NFPM;
    //        internal constant UNISWAP_V3_NONFUNGIBLE_POSITION_MANAGER =
    //        INonfungiblePositionManager(0xC36442b4a4522E871399CD717aBDD847Ab11FE88);
    address immutable factory;
    //        0x1F98431c8aD98523631AE4a59f267346ea31F984;

    // Position id to zeroForOne mapping, indicating whether a given position is
    // for a limit order exchanging from token0 for token1 or the other way around.
    mapping(uint256 => bool) positionIdToZeroForOne;

    // Position id to owner address mapping. Owner is the user that placed the
    // limit order.
    mapping(uint256 => address) positionIdToOwner;

    constructor(
        INonfungiblePositionManager nonfungiblePositionManager,
        address V3_FACTORY
    ) {
        NFPM = nonfungiblePositionManager;
        factory = V3_FACTORY;
    }

    function getLiquidityPositionInfo(
        uint256 positionId
    ) internal view returns (int24, int24, uint128, uint256, uint256) {
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

        ) = positions(positionId);
        PoolAddress.PoolKey memory pool_key = PoolAddress.PoolKey(
            token0,
            token1,
            fee
        );
        (uint160 sqrtPriceX96, , , , , , ) = IUniswapV3PoolState(
            PoolAddress.computeAddress(factory, pool_key)
        ).slot0();

        // Find current amount of the two tokens in the liquidity position.
        (uint256 amount0, uint256 amount1) = LiquidityAmounts
            .getAmountsForLiquidity(
                sqrtPriceX96,
                tickLower.getSqrtRatioAtTick(),
                tickUpper.getSqrtRatioAtTick(),
                liquidity
            );
        return (tickLower, tickUpper, liquidity, amount0, amount1);
    }

    function positions(
        uint256 tokenId
    )
        public
        view
        returns (
            uint96 nonce,
            address operator,
            address token0,
            address token1,
            uint24 fee,
            int24 tickLower,
            int24 tickUpper,
            uint128 liquidity,
            uint256 feeGrowthInside0LastX128,
            uint256 feeGrowthInside1LastX128,
            uint128 tokensOwed0,
            uint128 tokensOwed1
        )
    {
        // TODO: To be optimized
        return NFPM.positions(tokenId);
    }

    /// @notice Creates a new position wrapped in a NFT
    /// @dev Call this when the pool does exist and is initialized. Note that if the pool is created but not initialized
    /// a method does not exist, i.e. the pool is assumed to be initialized.
    /// @param params The params necessary to mint a position, encoded as `MintParams` in calldata
    /// @return tokenId The ID of the token that represents the minted position
    /// @return liquidity The amount of liquidity for this position
    /// @return amount0 The amount of token0
    /// @return amount1 The amount of token1
    function mint(
        INonfungiblePositionManager.MintParams memory params
    )
        public
        payable
        returns (
            uint256 tokenId,
            uint128 liquidity,
            uint256 amount0,
            uint256 amount1
        )
    {
        IERC20(params.token0).safeTransferFrom(
            msg.sender,
            address(this),
            params.amount0Desired
        );
        IERC20(params.token1).safeTransferFrom(
            msg.sender,
            address(this),
            params.amount1Desired
        );
        IERC20(params.token0).approve(address(NFPM), params.amount0Desired);
        IERC20(params.token1).approve(address(NFPM), params.amount1Desired);
        // TODO: TICK_SPACING, refund
        return NFPM.mint{value: msg.value}(params);
    }

    /// @notice Increases the amount of liquidity in a position, with tokens paid by the `msg.sender`
    /// @param params tokenId The ID of the token for which liquidity is being increased,
    /// amount0Desired The desired amount of token0 to be spent,
    /// amount1Desired The desired amount of token1 to be spent,
    /// amount0Min The minimum amount of token0 to spend, which serves as a slippage check,
    /// amount1Min The minimum amount of token1 to spend, which serves as a slippage check,
    /// deadline The time by which the transaction must be included to effect the change
    /// @return liquidity The new liquidity amount as a result of the increase
    /// @return amount0 The amount of token0 to acheive resulting liquidity
    /// @return amount1 The amount of token1 to acheive resulting liquidity
    function increaseLiquidity(
        INonfungiblePositionManager.IncreaseLiquidityParams memory params
    )
        public
        payable
        returns (uint128 liquidity, uint256 amount0, uint256 amount1)
    {
        // TODO: approve, transfer
        return NFPM.increaseLiquidity{value: msg.value}(params);
    }

    /// @notice Decreases the amount of liquidity in a position and accounts it to the position
    /// @param tokenId The ID of the token for which liquidity is being decreased
    /// @param liquidity The amount by which liquidity will be decreased
    /// @param amount0Min The minimum amount of token0 that should be accounted for the burned liquidity
    /// @param amount1Min The minimum amount of token1 that should be accounted for the burned liquidity
    /// @return amount0 The amount of token0 accounted to the position's tokens owed
    /// @return amount1 The amount of token1 accounted to the position's tokens owed
    function decreaseLiquidity(
        uint256 tokenId,
        uint128 liquidity,
        uint256 amount0Min,
        uint256 amount1Min
    ) internal returns (uint256 amount0, uint256 amount1) {
        return
            NFPM.decreaseLiquidity(
                INonfungiblePositionManager.DecreaseLiquidityParams({
                    tokenId: tokenId,
                    liquidity: liquidity,
                    amount0Min: amount0Min,
                    amount1Min: amount1Min,
                    deadline: type(uint256).max
                })
            );
    }

    /// @notice Collects up to a maximum amount of fees owed to a specific position to the recipient
    /// @param tokenId The ID of the NFT for which tokens are being collected
    /// @return amount0 The amount of fees collected in token0
    /// @return amount1 The amount of fees collected in token1
    function collect(
        uint256 tokenId
    ) public returns (uint256 amount0, uint256 amount1) {
        return
            NFPM.collect(
                INonfungiblePositionManager.CollectParams({
                    tokenId: tokenId,
                    recipient: positionIdToOwner[tokenId],
                    amount0Max: type(uint128).max,
                    amount1Max: type(uint128).max
                })
            );
    }

    /// @notice Burns a token ID, which deletes it from the NFT contract. The token must have 0 liquidity and all tokens
    /// must be collected first.
    /// @param tokenId The ID of the token that is being burned
    function burn(uint256 tokenId) internal {
        return NFPM.burn(tokenId);
    }

    function onERC721Received(
        address,
        address,
        uint,
        bytes calldata
    ) external pure override returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }
}
