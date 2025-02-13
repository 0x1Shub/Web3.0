// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract SimpleStorage {
    uint256 public myNum;
    uint256[] listOfNum;

    struct Person {
        uint256 num;
        string name;
    }

    // Dynamic Array
    Person[] public listOfPeople;

    // Person public per1 = Person({num: 10, name: "Shubham"});
    // Person public per2 = Person({num: 1, name: "John"});

    function addPerson(string memory name, uint256 _num) public {
        listOfPeople.push(Person(_num, name));
    }
}
