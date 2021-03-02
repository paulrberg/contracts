// SPDX-License-Identifier: LGPL-3.0-or-later
pragma solidity ^0.8.0;

import "./Erc20.sol";

/// @title GodModeErc20
/// @author Paul Razvan Berg
/// @notice Implementation that allows anyone to mint or burn tokens belonging to any address.
/// @dev Strictly for test purposes.
contract GodModeErc20 is Erc20 {
    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_
    ) Erc20(name_, symbol_, decimals_) {} // solhint-disable-line no-empty-blocks

    /// @notice Destroys `burnAmount` tokens from `holder`, reducing the token supply.
    /// @param holder The account whose tokens to burn.
    /// @param burnAmount The amount of fyTokens to destroy.
    function burn(address holder, uint256 burnAmount) external {
        burnInternal(holder, burnAmount);
    }

    /// @notice Prints new tokens into existence and assigns them to `beneficiary`, increasing the
    /// total supply.
    /// @param beneficiary The account for which to mint the tokens.
    /// @param mintAmount The amount of fyTokens to print into existence.
    function mint(address beneficiary, uint256 mintAmount) external {
        mintInternal(beneficiary, mintAmount);
    }
}