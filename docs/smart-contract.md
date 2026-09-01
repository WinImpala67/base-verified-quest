# Smart Contract

## Purpose

The smart contract will manage participation in Base Verified Quest.

## Planned Features

- Verify Base Verify credentials onchain
- Store verified identities
- Prevent duplicate participation
- Emit an event when a user joins the quest
- Work on Base Sepolia

## User Flow

A user connects a wallet and completes the verification process.

The verification result is submitted to the smart contract.

The contract checks the verification and the identity hash.

If the identity has already participated, the transaction is rejected.

Otherwise, the identity is registered as a participant.

## Current Status

The contract currently contains only the initial project structure.

Base Verify integration will be added in the next development stage.
