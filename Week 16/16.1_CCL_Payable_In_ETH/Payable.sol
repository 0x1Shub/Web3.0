// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Money {
    uint public totalMoney;

    function deposit() public payable {
        totalMoney += msg.value;
    }

    function withdraw(address payable recipent) public {
        payable(recipent).transfer(totalMoney);
        totalMoney = 0;
    }

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }
}