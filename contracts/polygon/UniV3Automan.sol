// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma abicoder v2;

import "@uniswap/v3-core/contracts/interfaces/pool/IUniswapV3PoolState.sol";
import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";
import "@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol";
import "@uniswap/v3-periphery/contracts/libraries/LiquidityAmounts.sol";

import "./interfaces/IUniV3Automan.sol";

contract UniV3Automan is IUniV3Automan {
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

        ) = positions(positionId);
        return (
            PoolAddress.PoolKey(token0, token1, fee),
            tickLower,
            tickUpper,
            liquidity
        );
    }

    /// @inheritdoc IUniV3Automan
    function positions(
        uint256 tokenId
    )
        public
        view
        override
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

    /// @inheritdoc IUniV3Automan
    function mint(
        INonfungiblePositionManager.MintParams memory params
    )
        public
        payable
        override
        returns (
            uint256 tokenId,
            uint128 liquidity,
            uint256 amount0,
            uint256 amount1
        )
    {
        return NFPM.mint{value: msg.value}(params);
    }

    /// @inheritdoc IUniV3Automan
    function increaseLiquidity(
        INonfungiblePositionManager.IncreaseLiquidityParams memory params
    )
        public
        payable
        override
        returns (uint128 liquidity, uint256 amount0, uint256 amount1)
    {
        return NFPM.increaseLiquidity{value: msg.value}(params);
    }

    /// @inheritdoc IUniV3Automan
    function decreaseLiquidity(
        INonfungiblePositionManager.DecreaseLiquidityParams memory params
    ) public payable override returns (uint256 amount0, uint256 amount1) {
        return NFPM.decreaseLiquidity{value: msg.value}(params);
    }

    /// @inheritdoc IUniV3Automan
    function collect(
        INonfungiblePositionManager.CollectParams memory params
    ) public payable override returns (uint256 amount0, uint256 amount1) {
        return NFPM.collect{value: msg.value}(params);
    }

    /// @inheritdoc IUniV3Automan
    function burn(uint256 tokenId) public payable override {
        return NFPM.burn(tokenId);
    }

    function onERC721Received(
        address operator,
        address from,
        uint tokenId,
        bytes calldata
    ) external returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }
}
