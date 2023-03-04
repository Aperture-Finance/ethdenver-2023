// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma abicoder v2;

import "forge-std/Test.sol";
import "../contracts/polygon/LimitOrderChainlink.sol";

contract LimitOrder is Test {
    INonfungiblePositionManager NFPM =
        INonfungiblePositionManager(0xC36442b4a4522E871399CD717aBDD847Ab11FE88);
    AutomationRegistryInterface registry =
        AutomationRegistryInterface(0x02777053d6764996e594c3E88AF1D58D5363a2e6);
    IERC20 tokenA = IERC20(0x3428F678C364341785C0CafEd75B608393B6711D);
    IERC20 tokenB = IERC20(0xD3c193236659cD8350FAD39aB4fF97536Ed72998);
    LinkTokenInterface LINK;
    LimitOrderChainlink LO;

    address user = 0xaBf6B4d17a6eb35E9E384924A3C58097c2243946;

    function setUp() public {
        vm.createSelectFork(vm.rpcUrl("polygon_mumbai"));

        LO = new LimitOrderChainlink(registry, NFPM);
        LINK = LO.i_link();
        deal(address(LINK), address(LO), 5000000000000000000);
        console2.log("Link token %s", address(LINK));
        console2.log(LO.registrar());
    }

    function testCreateLimitOrder() public {
        vm.startPrank(user);
        tokenA.approve(address(LO), type(uint256).max);
        tokenB.approve(address(LO), type(uint256).max);
        LO.createLimitOrder(
            address(tokenB),
            address(tokenA),
            100000,
            20000,
            3000
        );
        vm.stopPrank();
    }
}
