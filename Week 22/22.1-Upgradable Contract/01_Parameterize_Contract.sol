// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UpgradableEth {
    uint256 public num;
    uint256 public multiplier = 1;

    constructor() {}

    function setNumber(uint256 _num) public {
        num = multiplier * _num;
    }

    function setMultiplier(uint256 _multiplier) public {
        multiplier = _multiplier;
    }
}
