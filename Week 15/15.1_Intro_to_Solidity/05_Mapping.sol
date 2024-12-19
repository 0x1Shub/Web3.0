// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ENS {
    mapping(address => string) users;

    constructor() {}

    function Signup(string memory userName) public {
        users[msg.sender] = userName;
    }

    function WhoamI() public view returns (address) {
        return msg.sender;
    }

    function getUsers() public view returns (string memory) {
        return users[msg.sender];
    }
}
