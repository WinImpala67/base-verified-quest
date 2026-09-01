const connectButton = document.getElementById("connectButton");
const verifyButton = document.getElementById("verifyButton");
const status = document.getElementById("status");

const BASE_SEPOLIA_CHAIN_ID = "0x14a34";

let connectedAddress = null;

async function checkNetwork() {
  const chainId = await window.ethereum.request({
    method: "eth_chainId"
  });

  return chainId === BASE_SEPOLIA_CHAIN_ID;
}

connectButton.addEventListener("click", async () => {
  if (!window.ethereum) {
    status.textContent = "Please install a Web3 wallet.";
    return;
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });

    connectedAddress = accounts[0];

    const isBaseSepolia = await checkNetwork();

    if (!isBaseSepolia) {
      status.textContent = "Please switch your wallet to Base Sepolia.";
      verifyButton.disabled = true;
      return;
    }

    status.textContent = `Connected: ${connectedAddress}`;
    connectButton.textContent = "Wallet Connected";
    verifyButton.disabled = false;
  } catch (error) {
    status.textContent = "Wallet connection was rejected.";
  }
});

verifyButton.addEventListener("click", () => {
  if (!connectedAddress) {
    status.textContent = "Please connect your wallet first.";
    return;
  }

  status.textContent = "Verification will be added soon.";
});
