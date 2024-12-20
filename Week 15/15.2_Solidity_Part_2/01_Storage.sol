// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DynamicArrayExample {
    uint[] public numbers;
    
    function addNumber(uint _num) public {
        numbers.push(_num);
    }

    function getNumbersCount() public view returns(uint) {
        return numbers.length;
    }

    function getNumber(uint index) public view returns(uint){
        return numbers[index];
    }
}