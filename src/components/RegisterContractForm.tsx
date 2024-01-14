import React, { useState } from "react";
import registerHashWithExistingContract from "../blockchain-interactions/register-hash";

const RegisterContractForm = () => {
  const [contentHash, setContentHash] = useState("");
  const [author, setAuthor] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegisterHash = async () => {
    try {
      setLoading(true);
      // Define your provider address, contract address, and private key here
      const providerAddress = process.env.REACT_APP_PROVIDER_ADDRESS || "";
      const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your contract address
      const privateKey = process.env.REACT_APP_PRIVATE_KEY || "";

      // Trigger hash registration
      await registerHashWithExistingContract({
        providerAddress,
        contractAddress,
        privateKey,
        contentHash,
        author,
        timestamp: Number(timestamp),
      });

      // Optionally, you can handle any state updates or UI changes here
    } catch (error) {
      console.error("Hash registration failed:", error.message);
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
      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border rounded-md py-1 px-2"
          placeholder="Author"
        />
      </div>
      <div>
        <label htmlFor="timestamp">Timestamp</label>
        <input
          type="text"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          className="border rounded-md py-1 px-2"
          placeholder="Timestamp"
        />
      </div>
      <button
        onClick={handleRegisterHash}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        {loading ? "Registering..." : "Register Hash"}
      </button>
    </div>
  );
};

export default RegisterContractForm;
