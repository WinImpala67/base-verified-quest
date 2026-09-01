# Architecture

## Overview

Base Verified Quest is a learning project focused on user verification and Sybil resistance on Base.

## Planned Flow

1. User connects a wallet.
2. User signs a verification request.
3. The application sends the request to Base Verify.
4. Base Verify checks the configured requirements.
5. The application receives the verification result.
6. The smart contract verifies the result.
7. The user can participate in the quest once.

## Network

The project is being developed for Base Sepolia.

## Security

Secrets and API keys must never be stored in frontend code or committed to the repository.

## Status

🚧 Work in progress
