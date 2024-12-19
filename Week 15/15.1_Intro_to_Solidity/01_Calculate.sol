// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {

    uint num;

    constructor(uint _initialValue){
        num = _initialValue;
    }

    function add(uint _val) public {
        num += _val;
    }

    function subtract(uint _val) public {
        num -= _val;
    }

    function multiply(uint _val) public {
        num *= _val;
    }

    function division(uint _val) public {
        require(_val != 0, "Value Cannot be equal to 0");
        num /= _val;
    }

    function getValue() public view returns (uint) {
        return num;
    }
}
