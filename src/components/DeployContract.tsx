import React, { useState } from "react";
import deployContract from "../blockchain-interactions/deployment";

const DeployContract = () => {
  const [deployedAddress, setDeployedAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDeployContract = async () => {
    try {
      setLoading(true);

      const providerAddress = process.env.REACT_APP_PROVIDER_ADDRESS || "";
      const privateKey = process.env.REACT_APP_PRIVATE_KEY || "";

      if (!providerAddress || !privateKey) {
        throw new Error("Provider address or private key not provided");
      }
      const deployedAddress = await deployContract(providerAddress, privateKey);

      setDeployedAddress(deployedAddress);
    } catch (error) {
      console.error("Deployment failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleDeployContract}>Deploy Contract</button>
      {loading ? "Deploying..." : "Deploy Contract"}
      {deployedAddress && (
        <p>Contract Deployed at Address: {deployedAddress}</p>
      )}
    </div>
  );
};

export default DeployContract;
