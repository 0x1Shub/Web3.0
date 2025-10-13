// 1. Deploy a mock when we are on local avil chain
// 2. Keep track of different address across different chains

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {Script} from "forge-std/Script.sol";

contract HelperConfig is Script {
    NetworkConfig public activeNetworkConfig;
    struct NetworkConfig {
        address priceFeed;
    }

    constructor() {
        if (block.chainid == 11155111) {
            activeNetworkConfig = getSepoliaEthConfig();
        } else {
            activeNetworkConfig = getAnvilEthConfig();
        }
    }

    function getSepoliaEthConfig() public pure returns (NetworkConfig memory) {
        // Price Feed Address
        NetworkConfig memory sepoliaConfig = NetworkConfig({
            priceFeed: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
        });

        return sepoliaConfig;
    }

    function getAnvilEthAddress() public pure returns (NetworkConfig memory) {}
}
