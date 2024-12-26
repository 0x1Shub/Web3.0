// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Token {
    string public name = "ShubCoin";
    uint public supply;
    address public owner;
    mapping(address => uint) public balances;

    constructor() {
        owner = msg.sender;x
    }

    function mint(uint amount) public {
        require(msg.sender == owner);
        balances[owner] += amount;
        supply += amount;
    }

    function mintTo(address to, uint amount) public {
        require(msg.sender == owner);
        balances[to] += amount;
        supply += amount;
    }

    function transfer(address to, uint amount) public {
        uint balance = balances[msg.sender];
        require(balance >= amount, "You don't have enough balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function burn(uint amount) public {
        uint balance = balances[msg.sender];
        require(balance >= amount, "You don't have enough balance");
        balances[msg.sender] -= amount;
        supply -= amount;
    }
}
