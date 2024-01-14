import React, { useState } from "react";
import deployContract from "../blockchain-interactions/deployment";

const DeployContractForm = ({ providerAddress, privateKey, onDeployment }) => {
  const [loading, setLoading] = useState(false);

  const handleDeployContract = async () => {
    try {
      setLoading(true);

      if (!providerAddress || !privateKey) {
        throw new Error("Provider address or private key not provided");
      }

      const deployedAddress = await deployContract(providerAddress, privateKey);

      // Callback to parent component with the deployed address
      onDeployment(deployedAddress);
    } catch (error) {
      console.error("Deployment failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleDeployContract}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        {loading ? "Deploying..." : "Deploy Contract"}
      </button>
    </div>
  );
};

export default DeployContractForm;
