// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ENS {
    struct Person {
        string name;
        uint age;
        address add;
    }

    Person p1;

    constructor() {
        p1 = Person("Shubham", 21, msg.sender);
    }

    function getPerson() public view returns (string memory) {
        return p1.name;
    }
}
