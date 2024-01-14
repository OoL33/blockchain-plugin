import React, { useState } from "react";
import validateContractHash from "../blockchain-interactions/validate-hash";

const ValidateContractForm = ({ setValidationResult }) => {
  const [contentHash, setContentHash] = useState("");
  const [loading, setLoading] = useState(false);

  const handleValidateHash = async () => {
    try {
      setLoading(true);
      // Define your provider address, contract address, and private key here
      const providerAddress = process.env.REACT_APP_PROVIDER_ADDRESS || "";
      const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your contract address

      // Validate the contract hash
      const result = await validateContractHash({
        providerAddress,
        contractAddress,
        contentHash,
      });

      setValidationResult(result);
    } catch (error) {
      console.error("Hash validation failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="contentHash">Content Hash </label>
        <input
          type="text"
          value={contentHash}
          onChange={(e) => setContentHash(e.target.value)}
          className="border rounded-md py-1 px-2"
          placeholder="Content Hash"
        />
      </div>
      <button
        onClick={handleValidateHash}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        {loading ? "Validating..." : "Validate Hash"}
      </button>
    </div>
  );
};

export default ValidateContractForm;
