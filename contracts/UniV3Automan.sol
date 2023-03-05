// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
import "@uniswap/v3-core/contracts/libraries/TickMath.sol";
import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";
import "@uniswap/v3-periphery/contracts/libraries/LiquidityAmounts.sol";

import "./libraries/Utils.sol";

contract UniV3Automan is IERC721Receiver {
    using SafeERC20 for IERC20;
    using TickMath for int24;

    INonfungiblePositionManager public immutable NFPM;
    address internal immutable factory;

    struct LimitOrder {
        // User who placed the order
        address owner;
        // If exchanging from token0 to token1
        bool isZeroForOne;
        bool completed;
        // Initial liquidity
        uint128 liquidity;
        uint256 upkeepID;
        // Trading fees earned
        uint128 earned0;
        uint128 earned1;
    }

    // Position id to limit order mapping
    mapping(uint256 => LimitOrder) public orderInfo;
    // List of limit orders
    uint256[] public orderBook;

    constructor(INonfungiblePositionManager nonfungiblePositionManager) {
        NFPM = nonfungiblePositionManager;
        factory = nonfungiblePositionManager.factory();
    }

    function orderNumber() external view returns (uint256) {
        return orderBook.length;
    }

    function orderList() external view returns (uint256[] memory) {
        return orderBook;
    }

    function tokenURI(uint256 tokenId) public view returns (string memory) {
        return NFPM.tokenURI(tokenId);
    }

    function getLiquidityAmounts(
        uint256 positionId
    ) internal view returns (uint128, uint256, uint256) {
        (
            address token0,
            address token1,
            uint24 fee,
            int24 tickLower,
            int24 tickUpper,
            uint128 liquidity,
            ,

        ) = _positions(positionId);
        address pool = Utils.computePoolAddress(factory, token0, token1, fee);
        (uint160 sqrtPriceX96, , , , , , ) = IUniswapV3PoolState(pool).slot0();

        // Find current amount of the two tokens in the liquidity position.
        (uint256 amount0, uint256 amount1) = LiquidityAmounts
            .getAmountsForLiquidity(
                sqrtPriceX96,
                tickLower.getSqrtRatioAtTick(),
                tickUpper.getSqrtRatioAtTick(),
                liquidity
            );
        return (liquidity, amount0, amount1);
    }

    struct PositionInfo {
        uint256 positionId;
        address owner;
        bool isZeroForOne;
        bool completed;
        uint256 upkeepID;
        address token0;
        address token1;
        uint24 fee;
        int24 tickLower;
        int24 tickUpper;
        uint128 liquidity;
        uint256 amount0;
        uint256 amount1;
        uint256 desiredAmount;
        uint128 earned0;
        uint128 earned1;
    }

    /// @dev To avoid "stack too deep"
    function expandPositionInfo(PositionInfo memory posInfo) internal view {
        (
            posInfo.token0,
            posInfo.token1,
            posInfo.fee,
            posInfo.tickLower,
            posInfo.tickUpper,
            posInfo.liquidity,
            posInfo.earned0,
            posInfo.earned1
        ) = _positions(posInfo.positionId);
    }

    function getPositionInfo(
        uint256 positionId
    ) public view returns (PositionInfo memory posInfo) {
        LimitOrder storage order = orderInfo[positionId];
        posInfo.positionId = positionId;
        posInfo.owner = order.owner;
        posInfo.isZeroForOne = order.isZeroForOne;
        posInfo.completed = order.completed;
        posInfo.upkeepID = order.upkeepID;
        expandPositionInfo(posInfo);

        if (posInfo.completed) {
            posInfo.earned0 = order.earned0;
            posInfo.earned1 = order.earned1;
            // Use initial liquidity
            posInfo.liquidity = order.liquidity;
        }
        address pool = Utils.computePoolAddress(
            factory,
            posInfo.token0,
            posInfo.token1,
            posInfo.fee
        );
        (uint160 sqrtPriceX96, , , , , , ) = IUniswapV3PoolState(pool).slot0();

        uint160 sqrtLowerPriceX96 = posInfo.tickLower.getSqrtRatioAtTick();
        uint160 sqrtUpperPriceX96 = posInfo.tickUpper.getSqrtRatioAtTick();
        // Find current amount of the two tokens in the liquidity position.
        (posInfo.amount0, posInfo.amount1) = LiquidityAmounts
            .getAmountsForLiquidity(
                sqrtPriceX96,
                sqrtLowerPriceX96,
                sqrtUpperPriceX96,
                posInfo.liquidity
            );
        if (posInfo.isZeroForOne) {
            posInfo.desiredAmount = LiquidityAmounts.getAmount1ForLiquidity(
                sqrtLowerPriceX96,
                sqrtUpperPriceX96,
                posInfo.liquidity
            );
        } else {
            posInfo.desiredAmount = LiquidityAmounts.getAmount0ForLiquidity(
                sqrtLowerPriceX96,
                sqrtUpperPriceX96,
                posInfo.liquidity
            );
        }
    }

    /// @notice All open and closed positions
    function allPositions() external view returns (PositionInfo[] memory pos) {
        uint256 length = orderBook.length;
        pos = new PositionInfo[](length);
        for (uint256 i; i < length; ++i) {
            pos[i] = getPositionInfo(orderBook[i]);
        }
    }

    /// @notice Get a user's positions
    function getPositions(
        address user
    ) external view returns (PositionInfo[] memory pos, string[] memory URIs) {
        uint256 length = orderBook.length;
        uint256 counter;
        for (uint256 i; i < length; ++i) {
            if (orderInfo[orderBook[i]].owner == user) {
                counter += 1;
            }
        }
        pos = new PositionInfo[](counter);
        URIs = new string[](counter);
        counter = 0;
        for (uint256 i; i < length; ++i) {
            uint256 positionId = orderBook[i];
            if (orderInfo[positionId].owner == user) {
                pos[counter] = getPositionInfo(positionId);
                URIs[counter] = tokenURI(positionId);
                counter += 1;
            }
        }
    }

    /// @dev Wrapper around `INonfungiblePositionManager.positions`
    function _positions(
        uint256 tokenId
    )
        internal
        view
        returns (
            address token0,
            address token1,
            uint24 fee,
            int24 tickLower,
            int24 tickUpper,
            uint128 liquidity,
            uint128 tokensOwed0,
            uint128 tokensOwed1
        )
    {
        (
            ,
            ,
            token0,
            token1,
            fee,
            tickLower,
            tickUpper,
            liquidity,
            ,
            ,
            tokensOwed0,
            tokensOwed1
        ) = NFPM.positions(tokenId);
    }

    /// @dev Pull tokens from caller and approve the v3 position manager to spend
    function transferAndApprove(
        address token0,
        address token1,
        uint256 amount0Desired,
        uint256 amount1Desired
    ) internal {
        if (amount0Desired > 0) {
            IERC20(token0).safeTransferFrom(
                msg.sender,
                address(this),
                amount0Desired
            );
            IERC20(token0).safeApprove(address(NFPM), amount0Desired);
        }
        if (amount1Desired > 0) {
            IERC20(token1).safeTransferFrom(
                msg.sender,
                address(this),
                amount1Desired
            );
            IERC20(token1).safeApprove(address(NFPM), amount1Desired);
        }
    }

    function refundSurplus(
        address token0,
        address token1,
        uint256 amount0Desired,
        uint256 amount1Desired,
        uint256 amount0Used,
        uint256 amount1Used
    ) internal {
        if (amount0Used < amount0Desired) {
            IERC20(token0).safeApprove(address(NFPM), 0);
            IERC20(token0).safeTransfer(
                msg.sender,
                amount0Desired - amount0Used
            );
        }
        if (amount1Used < amount1Desired) {
            IERC20(token1).safeApprove(address(NFPM), 0);
            IERC20(token1).safeTransfer(
                msg.sender,
                amount1Desired - amount1Used
            );
        }
    }

    /// @notice Creates a new position wrapped in a NFT
    /// @dev Call this when the pool does exist and is initialized. Note that if the pool is created but not initialized
    /// a method does not exist, i.e. the pool is assumed to be initialized.
    /// @param amount0Desired The desired amount of token0 to be spent
    /// @param amount1Desired The desired amount of token1 to be spent
    /// @return tokenId The ID of the token that represents the minted position
    /// @return liquidity The amount of liquidity for this position
    /// @return amount0 The amount of token0
    /// @return amount1 The amount of token1
    function mint(
        address token0,
        address token1,
        uint24 fee,
        int24 tickLower,
        int24 tickUpper,
        uint256 amount0Desired,
        uint256 amount1Desired
    )
        internal
        returns (
            uint256 tokenId,
            uint128 liquidity,
            uint256 amount0,
            uint256 amount1
        )
    {
        transferAndApprove(token0, token1, amount0Desired, amount1Desired);
        (tokenId, liquidity, amount0, amount1) = NFPM.mint{value: msg.value}(
            INonfungiblePositionManager.MintParams({
                token0: token0,
                token1: token1,
                fee: fee,
                tickLower: tickLower,
                tickUpper: tickUpper,
                amount0Desired: amount0Desired,
                amount1Desired: amount1Desired,
                amount0Min: 0,
                amount1Min: 0,
                recipient: address(this),
                deadline: type(uint256).max
            })
        );
        refundSurplus(
            token0,
            token1,
            amount0Desired,
            amount1Desired,
            amount0,
            amount1
        );
    }

    /// @notice Increases the amount of liquidity in a position, with tokens paid by the `msg.sender`
    /// @param tokenId The ID of the token for which liquidity is being increased
    /// @param amount0Desired The desired amount of token0 to be spent
    /// @param amount1Desired The desired amount of token1 to be spent
    /// @return liquidity The new liquidity amount as a result of the increase
    /// @return amount0 The amount of token0 to acheive resulting liquidity
    /// @return amount1 The amount of token1 to acheive resulting liquidity
    function increaseLiquidity(
        uint256 tokenId,
        uint256 amount0Desired,
        uint256 amount1Desired
    ) internal returns (uint128 liquidity, uint256 amount0, uint256 amount1) {
        (address token0, address token1, , , , , , ) = _positions(tokenId);
        transferAndApprove(token0, token1, amount0Desired, amount1Desired);
        (liquidity, amount0, amount1) = NFPM.increaseLiquidity{
            value: msg.value
        }(
            INonfungiblePositionManager.IncreaseLiquidityParams({
                tokenId: tokenId,
                amount0Desired: amount0Desired,
                amount1Desired: amount1Desired,
                amount0Min: 0,
                amount1Min: 0,
                deadline: type(uint256).max
            })
        );
        refundSurplus(
            token0,
            token1,
            amount0Desired,
            amount1Desired,
            amount0,
            amount1
        );
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
                    recipient: orderInfo[tokenId].owner,
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
