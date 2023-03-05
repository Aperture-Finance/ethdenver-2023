// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma abicoder v2;

import "forge-std/Test.sol";
import "../contracts/polygon/LimitOrderChainlink.sol";

contract LimitOrder is Test {
    uint24 internal constant fee = 3000;

    INonfungiblePositionManager NFPM =
        INonfungiblePositionManager(0xC36442b4a4522E871399CD717aBDD847Ab11FE88);
    AutomationRegistryInterface registry =
        AutomationRegistryInterface(0x02777053d6764996e594c3E88AF1D58D5363a2e6);
    IERC20 tokenA = IERC20(0x3428F678C364341785C0CafEd75B608393B6711D);
    IERC20 tokenB = IERC20(0xD3c193236659cD8350FAD39aB4fF97536Ed72998);
    IUniswapV3Pool pool;
    LinkTokenInterface LINK;
    LimitOrderChainlink LO;

    address user = makeAddr("user");

    function setUp() public {
        vm.createSelectFork(vm.rpcUrl("polygon_mumbai"));

        pool = IUniswapV3Pool(
            Utils.computePoolAddress(
                NFPM.factory(),
                address(tokenA),
                address(tokenB),
                fee
            )
        );
        LO = new LimitOrderChainlink(registry, NFPM);
        LINK = LO.i_link();
        deal(address(LINK), address(LO), 5000000000000000000);
    }

    function createLimitOrder(
        address inputToken,
        address outputToken,
        uint256 inputAmount,
        uint256 outputAmount
    ) internal returns (uint256 tokenId) {
        deal(inputToken, user, inputAmount);
        vm.startPrank(user);
        tokenA.approve(address(LO), type(uint256).max);
        tokenB.approve(address(LO), type(uint256).max);
        tokenId = LO.createLimitOrder(
            inputToken,
            outputToken,
            inputAmount,
            outputAmount,
            fee
        );
        vm.stopPrank();
    }

    function testCreateLimitOrder(uint256 inputAmount) public {
        inputAmount = bound(inputAmount, 1, 1 << 64);
        (uint160 sqrtPriceX96, , , , , , ) = pool.slot0();
        uint256 outputAmount = Utils.mulSquareX96(inputAmount, sqrtPriceX96);
        createLimitOrder(
            address(tokenA),
            address(tokenB),
            inputAmount,
            outputAmount * 2
        );
    }

    function testCancelLimitOrder() public {
        createLimitOrder(address(tokenB), address(tokenA), 100000, 20000);
        (UniV3Automan.PositionInfo[] memory pos, ) = LO.getPositions(user);
        UniV3Automan.PositionInfo memory info = pos[0];
        vm.prank(user);
        LO.cancelLimitOrder(info.positionId);
    }

    function uniswapV3SwapCallback(
        int256 amount0Delta,
        int256 amount1Delta,
        bytes calldata
    ) external {
        if (amount0Delta > 0)
            tokenA.transfer(address(pool), uint256(amount0Delta));
        if (amount1Delta > 0)
            tokenB.transfer(address(pool), uint256(amount1Delta));
    }

    function testUpkeep() public {
        // To sell tokenB higher
        uint256 tokenId = createLimitOrder(
            address(tokenB),
            address(tokenA),
            100000,
            20000
        );
        uint256 poolBalance = tokenB.balanceOf(address(pool));
        int256 amountSpecified = -int256(poolBalance);
        deal(address(tokenA), address(this), 1e30);
        // Drain tokenB in pool to pump it
        pool.swap(
            address(this),
            true,
            amountSpecified,
            uint160(4295128740),
            new bytes(0)
        );
        // Trigger limit order
        LO.performUpkeep(abi.encode(tokenId));
        vm.expectRevert();
        LO.performUpkeep(abi.encode(tokenId));
        UniV3Automan.PositionInfo memory info = LO.getPositionInfo(tokenId);
        console2.log("Liquidity %d", uint256(info.liquidity));
        console2.log("Token 0 earned %d", uint256(info.earned0));
        console2.log("Token 1 earned %d", uint256(info.earned1));
    }
}
