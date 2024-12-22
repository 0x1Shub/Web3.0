// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Storage{

    uint num;

    constructor(uint _num){
        num = _num;
    }

    function getNum() public view returns (uint) {
        return num;
    }

    function addNum() public {
        num = num+1;
    }
}