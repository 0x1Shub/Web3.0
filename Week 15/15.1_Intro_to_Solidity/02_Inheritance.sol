// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract User {
    string public name;
    uint public age;

    constructor(string memory _name, uint _age) {
        name = _name;
        age = _age;
    }

    function updateUser(string memory _name, uint _age) public {
        name = _name;
        age = _age;
    }

    function getUserDetails() public view returns (string memory, uint) {
        return (name, age);
    }
}

contract Admin is User {
    bool public isAdmin;

    constructor(string memory _name, uint _age, bool _isAdmin) User(_name, _age) {
        isAdmin = _isAdmin;
    }

    function toggleAdminStatus() public {
        isAdmin = !isAdmin;
    }

    function getAdminDetails() public view returns (string memory, uint, bool) {
        return (name, age, isAdmin);
    }
}
