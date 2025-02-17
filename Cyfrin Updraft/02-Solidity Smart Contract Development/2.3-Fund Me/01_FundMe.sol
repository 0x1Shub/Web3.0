// Get funds fron user
// Withdraw funds
// Set Minimum funding value in USD

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {PriceConverter} from "./02_PriceConverter.sol";

contract FundMe {
    using PriceConverter for uint256;
    uint256 public myValue = 1;
    uint256 public constant MINIMUM_USD = 1e18;

    address[] public funders;
    mapping(address funder => uint256 amountFunded)
        public addressToAmountFunded;

    address public immutable i_owner;

    constructor() {
        i_owner = msg.sender;
    }

    function fund() public payable {
        // Allow user to send $
        // Have a minimum $ sent
        // 1. How do we send ETH in contract
        // myValue = myValue + 2;
        require(msg.value.getConversionRate() >= MINIMUM_USD, "Send more ETH");
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] =
            addressToAmountFunded[msg.sender] +
            msg.value;
    }

    function withdraw() public onlyOwner {
        for (
            uint256 funderIndex = 0;
            funderIndex < funders.length;
            funderIndex++
        ) {
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }

        funders = new address[](0);

        // // transer
        // payable(msg.sender).transfer(address(this).balance);

        // // send
        // bool sendSucces = payable(msg.sender).send(address(this).balance);
        // require(sendSucces, "Send Failed");

        // call
        (bool callSuccess, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(callSuccess, "Call Failed");
    }

    modifier onlyOwner() {
        require(msg.sender == i_owner, "Sender is not owner");
        _;
    }
}
