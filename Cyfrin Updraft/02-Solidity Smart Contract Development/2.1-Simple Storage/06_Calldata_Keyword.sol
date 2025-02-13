// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract CalldataExample {
    function processCalldata(
        uint256[] calldata inputArray
    ) external pure returns (uint256) {
        return inputArray[0]; // Accessing data from calldata
    }
}
