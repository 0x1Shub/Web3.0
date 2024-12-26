// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Token {
    string public name = "ShubCoin";
    uint public supply;
    address public owner;
    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) public allowances;

    constructor() {
        owner = msg.sender;
    }

    function allow(address _spender, uint value) public returns (bool success) {
        allowances[msg.sender][_spender] = value;
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint _val
    ) public returns (bool success) {
        uint allowance = allowances[_from][msg.sender];
        require(allowance >= _val);

        uint balace = balances[_from];
        require(balace >= _val);

        balances[_from] -= _val;
        balances[_to] += _val;
        allowances[_from][msg.sender] -= _val;
    }
}
