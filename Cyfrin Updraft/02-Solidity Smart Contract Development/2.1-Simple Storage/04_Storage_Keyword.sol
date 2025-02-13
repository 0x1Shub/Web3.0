// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract StorageExample {
    uint256 public stateVariable; // Stored in storage

    function storeValue(uint256 _value) public {
        stateVariable = _value; // Modifying storage variable
    }
}
