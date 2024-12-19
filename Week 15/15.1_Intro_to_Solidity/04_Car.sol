// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./03_Vehicle.sol";

contract Car is Vehicle{
    uint numWheels;

    constructor(string memory _brand, uint _numWheels) Vehicle(_brand) {
        numWheels = _numWheels;
    }

    function description() public pure override returns (string memory) {
        return  "Hii I am a car";
    }
}