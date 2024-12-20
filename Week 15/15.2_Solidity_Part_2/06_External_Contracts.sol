// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

contract EventExample is Ownable {
    constructor() Ownable(msg.sender) {}

    event Transfer(address indexed from, address indexed to, uint256 value);

    function transfer(address to, uint256 value) public {
        emit Transfer(msg.sender, to, value);
    }
}
