//SPDX-License-Identifier: Unlicensed
pragma solidity  ^0.8.9;
//import hardhat
import "hardhat/console.sol";



contract myTest{
    uint public unlockedTime;
    address payable public owner;

    event withrawal( 
        uint256 amount, 
        uint256 when
    );

    constructor(uint _unlockedTime) payable{
        require(
            block.timestamp < _unlockedTime,
            "Unlocked time should be in future."
        );
        unlockedTime = _unlockedTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        require(
            block.timestamp >= unlockedTime,
            "Wait till the time period is completed."
        );
        require(
            msg.sender == owner,
            "Only the Owner is allowed to transfer funds."
        );

        emit withrawal(
            address(this).balance,
            block.timestamp
        );
        
        owner.transfer(address(this).balance);
    }
}

