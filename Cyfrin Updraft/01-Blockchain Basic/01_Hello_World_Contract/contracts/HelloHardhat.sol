// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloHardhat {
    event Greet(address indexed from, string message);

    function hello(string calldata message) external {
        emit Greet(msg.sender, message);
    }
}