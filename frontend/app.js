const connectButton = document.getElementById("connectButton");
const verifyButton = document.getElementById("verifyButton");
const status = document.getElementById("status");

let connectedAddress = null;

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
