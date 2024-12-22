// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStorage {
    function getNum() external view returns (uint);
    function addNum() external;
}

contract Contract2 {
    constructor() {}

    function proxyAdd() public {
        IStorage(0x93f8dddd876c7dBE3323723500e83E202A7C96CC).addNum();
    }

    function proxyGet() public view returns (uint) {
        uint value = IStorage(0x93f8dddd876c7dBE3323723500e83E202A7C96CC)
            .getNum();
        return value;
    }
}
