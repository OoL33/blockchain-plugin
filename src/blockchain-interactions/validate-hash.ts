import { ethers } from "ethers";

interface ValidationOptions {
  providerAddress: string;
  contractAddress: string;
  contentHash: string;
}

const validateContractHash = async (options: ValidationOptions) => {
  const { providerAddress, contractAddress, contentHash } = options;

  // ABI for your smart contract, adjust it based on your contract's functions
  const abi = [
    "function verifyCopyright(bytes32 contentHash) public view returns (address author, uint256 timestamp)",
  ];

  // Connect to the Ethereum network
  const provider = new ethers.JsonRpcProvider(providerAddress);

  // Create a contract instance
  const contract = new ethers.Contract(contractAddress, abi, provider);

  try {
    // Call the verifyCopyright function
    const overrides = { gasLimit: 300000 }; // Replace with an appropriate gas limit
    const foundRecord = await contract.verifyCopyright(contentHash, overrides);

    console.log("\n======= Found hash meta info =======\n");
    console.log(`Author: ${foundRecord.author}`);
    console.log(`Timestamp: ${foundRecord.timestamp}`);

    return foundRecord;
  } catch (error: any) {
    console.error("Error validating hash:", error);
    throw new Error(`Validation failed: ${error.message}`);
  }
};

export default validateContractHash;
