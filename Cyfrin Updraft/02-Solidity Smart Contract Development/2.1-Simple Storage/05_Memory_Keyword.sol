// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MemoryExample {
    function processData(uint256 _input) public pure returns (uint256) {
        uint[] memory tempArray = new uint[](1);
        tempArray[0] = _input;
        return tempArray[0];
    }
}
