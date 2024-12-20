// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DynamicArrayExample {
    function addNumber(uint[] memory a) public pure returns (uint) {
        uint ans = 0;
        for (uint i = 0; i < a.length; i++) {
            ans += a[i];
        }
        return ans;
    }
}
