// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CallContract {
    constructor() {}

    function callStorage(address storageContractAdd, uint _num) public {
        IStorage(storageContractAdd).setNumber(_num);
    }
}

contract Storage {
    uint public num;
    constructor() {}

    function setNumber(uint _num) public {
        num = _num;
    }
}

interface IStorage {
    function setNumber(uint _num) external;
}
