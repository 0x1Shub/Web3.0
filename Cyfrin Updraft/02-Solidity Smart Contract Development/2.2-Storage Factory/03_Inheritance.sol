// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {SimpleStorage} from "./01_Simple_Storage.sol";

contract AddFiveStorage is SimpleStorage {
    function sayHello() public pure returns (string memory) {
        return "Hello";
    }

    function setNum(uint256 _num) public override {
        myNum = _num + 5;
    }
}
