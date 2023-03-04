// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import {LinkTokenInterface} from "@chainlink/contracts/src/v0.7/interfaces/LinkTokenInterface.sol";

interface KeeperRegistrarInterface {
    function LINK() external returns (LinkTokenInterface);

    /**
     * DISABLED: No auto approvals, all new upkeeps should be approved manually.
     * ENABLED_SENDER_ALLOWLIST: Auto approvals for allowed senders subject to max allowed. Manual for rest.
     * ENABLED_ALL: Auto approvals for all new upkeeps subject to max allowed.
     */
    enum AutoApproveType {
        DISABLED,
        ENABLED_SENDER_ALLOWLIST,
        ENABLED_ALL
    }

    /**
     * @notice read the current registration configuration
     */
    function getRegistrationConfig()
        external
        view
        returns (
            AutoApproveType autoApproveConfigType,
            uint32 autoApproveMaxAllowed,
            uint32 approvedCount,
            address keeperRegistry,
            uint256 minLINKJuels
        );

    /**
     * @notice register can only be called through transferAndCall on LINK contract
     * @param name string of the upkeep to be registered
     * @param encryptedEmail email address of upkeep contact
     * @param upkeepContract address to perform upkeep on
     * @param gasLimit amount of gas to provide the target contract when performing upkeep
     * @param adminAddress address to cancel upkeep and withdraw remaining funds
     * @param checkData data passed to the contract when checking for upkeep
     * @param amount quantity of LINK upkeep is funded with (specified in Juels)
     * @param source application sending this request
     * @param sender address of the sender making the request
     */
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
