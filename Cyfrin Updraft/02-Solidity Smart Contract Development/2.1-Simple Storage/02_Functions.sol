// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract  SimpleStorage{
    uint256 public num;

    function setNum(uint256 _num) public {
        num = _num;
    }

    function getNum() public view returns (uint256) {
        return num;
    }
}
