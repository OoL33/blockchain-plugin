// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CopyrightSystem {
    mapping(bytes32 => address) public contentCreators;
    mapping(bytes32 => uint256) public contentTimestamps;

    function registerCopyright(bytes32 contentHash, address author, uint256 timestamp) public {
        require(contentCreators[contentHash] == address(0), "Content already registered");
        contentCreators[contentHash] = author;
        contentTimestamps[contentHash] = timestamp;
    }

    function verifyCopyright(bytes32 contentHash) public view returns (address author, uint256 timestamp) {
        require(contentCreators[contentHash] != address(0), "Content not found");
        return (contentCreators[contentHash], contentTimestamps[contentHash]);
    }
}