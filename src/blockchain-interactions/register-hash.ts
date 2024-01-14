import { ethers } from "ethers";

interface RegistrationOptions {
  providerAddress: string;
  contractAddress: string;
  privateKey: string;
  contentHash: string;
  author: string;
  timestamp: number;
  gasLimit?: number;
}

const registerCopyrightHashWithExistingContract = async (
  options: RegistrationOptions
) => {
  const {
    providerAddress,
    contractAddress,
    privateKey,
    contentHash,
    author,
    timestamp,
    gasLimit = 300000,
  } = options;

  // ABI (Application Binary Interface) for your smart contract
  // See function signature in the contract code in /contracts/my-contract.sol
  const abi = [
    "function registerCopyright(bytes32 contentHash, address author, uint256 timestamp) public",
  ];

  // Connect to the Ethereum network
  // const provider = new ethers.JsonRpcProvider(providerAddress);
  // Connect to the Ethereum network
  const provider = new ethers.JsonRpcProvider(providerAddress, {
    ensAddress: null,
  });
  const wallet = new ethers.Wallet(privateKey, provider);

  // Create a contract instance
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  try {
    // Send a transaction to the registerCopyright function
    const overrides = { gasLimit };

    const tx = await contract.registerCopyright(
      contentHash,
      author,
      timestamp,
      overrides
    );

    await tx.wait(); // Wait for the transaction to be mined

    console.log("Transaction mined:", tx.hash);
  } catch (error: any) {
    console.error("Error sending transaction:", error);
    throw new Error(`Transaction failed: ${error.message}`);
  }
};

export default registerCopyrightHashWithExistingContract;
