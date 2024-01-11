import { ethers } from "ethers";

const registerCopyrightHashWithExistingContract = async (
  contentHash,
  author,
  timestamp
) => {
  // Before this local ethereum node mock node can be used, download and install Ganache, and run it
  // Ganache is a personal blockchain for rapid Ethereum and Filecoin distributed application development.
  // You can use Ganache across the entire development cycle;
  // Enabling you to develop, deploy, and test your dApps in a safe and deterministic environment
  // Here is the documentation for Ganache https://www.trufflesuite.com/ganache
  const providerAddress = "HTTP://127.0.0.1:7545";

  // TODO: The contract address is fake and is created by the deployment.ts script
  // Replace your deployed values with your contract address and private key
  // For further details, please see README.md
  const contractAddress = "0x6E3A8f3D1D2aA42beCC1a8e2F6Db826C88922f95";

  // TODO: replace the private key with a preloaded account's private key
  // Use the second account's private key generated by ganache, since the first one was used to deploy the contract
  // Plese see README.md for more details
  const privateKey =
    "0xac9edeea4ac63de5800729cf906b4f12ae351547822989ac0765eb9437483b19";

  // ABI (Application Binary Interface) for your smart contract
  // See function signature in the contract code in /contracts/my-contract.sol
  const abi = [
    "function registerCopyright(bytes32 contentHash, address author, uint256 timestamp) public",
  ];

  // Connect to the Ethereum network
  const provider = new ethers.JsonRpcProvider(providerAddress);
  const wallet = new ethers.Wallet(privateKey, provider);

  // Create a contract instance
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  // Replace with your actual content hash
  const contentHash =
    "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890123111";

  // TODO: replace the address with a preloaded account's address
  // Use the second account's address generated by ganache, since the first one was used to deploy the contract
  // Plese see README.md for more details
  const author = "0x30d07E3eC0b2A59b4c44B10d2f7F41066a22ceF5";
  const timestamp = Math.floor(Date.now() / 1000); // Replace with your actual timestamp

  // Send a transaction to the registerCopyright function
  async function sendTransaction() {
    try {
      const overrides = { gasLimit: 300000 }; // Replace with an appropriate gas limit
      const tx = await contract.registerCopyright(
        contentHash,
        author,
        timestamp,
        overrides
      );
      await tx.wait(); // Wait for the transaction to be mined
      console.log("Transaction mined:", tx.hash);
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  }

  // Call the function to send the transaction
  await sendTransaction();
};

export default registerCopyrightHashWithExistingContract;

await registerCopyrightHashWithExistingContract();
