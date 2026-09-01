// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract VerifiedQuest {
    string public constant QUEST_NAME = "Base Verified Quest";
    string public constant QUEST_VERSION = "1";

    mapping(address => bool) public participants;

    event QuestJoined(address indexed participant);

    function joinQuest() external {
        require(!participants[msg.sender], "Already joined");

        participants[msg.sender] = true;

        emit QuestJoined(msg.sender);
    }

    function hasJoined(address user) external view returns (bool) {
        return participants[user];
    }
}
