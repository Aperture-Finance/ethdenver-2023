// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import {LinkTokenInterface} from "@chainlink/contracts/src/v0.7/interfaces/LinkTokenInterface.sol";

interface KeeperRegistrarInterface {
    function LINK() external returns (LinkTokenInterface);

    function register(
        string memory name,
        bytes calldata encryptedEmail,
        address upkeepContract,
        uint32 gasLimit,
        address adminAddress,
        bytes calldata checkData,
        uint96 amount,
        uint8 source,
        address sender
    ) external;
}
