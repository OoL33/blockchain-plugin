import React, { useState } from "react";
import registerHas hFunction from "./blockchain-interactions/register-hash"; // Import your refactored function

const BlockchainInteractionForm = () => {
  const [contentHash, setContentHash] = useState("");
  const [author, setAuthor] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleBlockchainInteraction = async () => {
    try {
      // Perform validations if needed on contentHash, author, timestamp before proceeding
      // ...

      // Call the blockchain function from the imported module
      await registerHashFunction(contentHash, author, timestamp);

      // Provide feedback to the user indicating success
      console.log("Transaction successful!");
    } catch (error) {
      // Handle errors and display to the user
      console.error("Transaction failed:", error);
    }
  };

  return (
    <div>
      <input
        value={contentHash}
        onChange={(e) => setContentHash(e.target.value)}
      />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input value={timestamp} onChange={(e) => setTimestamp(e.target.value)} />
      <button onClick={handleBlockchainInteraction}>
        Interact with Blockchain
      </button>
    </div>
  );
};

export default BlockchainInteractionForm;
