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
    LimitOrderChainlink LO;

    function setUp() public {
        vm.createSelectFork(vm.rpcUrl("polygon_mumbai"));

        LO = new LimitOrderChainlink(registry, NFPM);
    }
}
