const connectButton = document.getElementById("connectButton");
const status = document.getElementById("status");

connectButton.addEventListener("click", async () => {
  if (!window.ethereum) {
    status.textContent = "Please install a Web3 wallet.";
    return;
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });

    const address = accounts[0];

    status.textContent = `Connected: ${address}`;
    connectButton.textContent = "Wallet Connected";
  } catch (error) {
    status.textContent = "Wallet connection was rejected.";
  }
});
