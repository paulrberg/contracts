// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.4;

import { ERC20PermitUnitTest } from "../ERC20PermitUnitTest.t.sol";

contract ERC20Permit__DomainSeparator is ERC20PermitUnitTest {
    /// @dev it should return the EIP-2612 domain separator.
    function testDomainSeparator() external {
        bytes32 actualDomainSeparator = erc20Permit.DOMAIN_SEPARATOR();
        bytes32 expectedDomainSeparator = DOMAIN_SEPARATOR;
        assertEq(actualDomainSeparator, expectedDomainSeparator);
    }
}