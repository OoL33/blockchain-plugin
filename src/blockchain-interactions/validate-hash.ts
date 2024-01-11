import {ethers} from 'ethers'

const validateCopyrightHashWithExistingContract = async () => {

  // Before this local ethereum node mock node can be used, download and install Ganache, and run it
  // Ganache is a personal blockchain for rapid Ethereum and Filecoin distributed application development. 
  // You can use Ganache across the entire development cycle; 
  // Enabling you to develop, deploy, and test your dApps in a safe and deterministic environment
  // Here is the documentation for Ganache https://www.trufflesuite.com/ganache
  const providerAddress = 'HTTP://127.0.0.1:7545';

  // TODO: The contract address is fake and is created by the deployment.ts script
  // Replace your deployed values with your contract address and private key
  // For further details, please see README.md
  const contractAddress = '0x6E3A8f3D1D2aA42beCC1a8e2F6Db826C88922f95';

  // TODO: The contract address is fake and is created by the deployment.ts script
  // Replace your deployed values with your contract address and private key
  // For further details, please see README.md
  const privateKey = '0xfefde28e2b0d42c3eb8ab6061d43a4b5b45410e9a18e538aa7d5fefc860b858e';

  // ABI (Application Binary Interface) for your smart contract
  // See function signature in the contract code in /contracts/my-contract.sol
  const abi = [
    ' function verifyCopyright(bytes32 contentHash) public view returns (address author, uint256 timestamp)',
  ];

  // Connect to the Ethereum network
  const provider = new ethers.JsonRpcProvider(providerAddress);
  const wallet = new ethers.Wallet(privateKey, provider);

  // Create a contract instance
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  // In order to validate successfully, this hash need to be the same as the one used in the register-hash.ts script
  const contentHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890123111';

  // Send a transaction to the verifyCopyright function
  async function sendTransaction() {
    try {
      const overrides = { gasLimit: 300000 }; // Replace with an appropriate gas limit
      const foundRecord = await contract.verifyCopyright(contentHash, overrides);
      console.log("\n======= Found hash meta info =======\n")
      console.log(`Author: ${foundRecord.author}`)
      console.log(`Timestamp: ${foundRecord.timestamp}`)
    } catch (error) {
      console.error('Error sending transaction:', error);
    }
  }
  await sendTransaction();
}

export default validateCopyrightHashWithExistingContract;

await validateCopyrightHashWithExistingContract();