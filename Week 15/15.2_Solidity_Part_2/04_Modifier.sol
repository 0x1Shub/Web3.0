// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DynamicArrayExample {
    uint256 number;
    address owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "You are not owner");
        _;
    }

    function addNumber(uint a) public onlyOwner {
        number = number + a;
    }

    function subtractNumber(uint a) public onlyOwner {
        number = number - a;
    }

    function getNumber() public view returns (uint) {
        return number;
    }
}
