import { ethers } from "ethers";
import myContractArtifactJson from "../../artifacts/contracts/my-contract.sol/CopyrightSystem.json";

const deployContract = async (providerAddress: string, privateKey: string) => {
  try {
    const provider = new ethers.JsonRpcProvider(providerAddress);
    const wallet = new ethers.Wallet(privateKey, provider);

    const abi = myContractArtifactJson.abi;
    const bytecode = myContractArtifactJson.bytecode;

    const MyContractFactory = new ethers.ContractFactory(abi, bytecode, wallet);
    const deployedContract = await MyContractFactory.deploy();

    return deployedContract.getAddress();
  } catch (error: any) {
    throw new Error(`Contract deployment failed: ${error.message}`);
  }
};

export default deployContract;
