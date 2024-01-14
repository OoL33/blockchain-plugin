import React, { useState } from "react";
import BlockchainInteractionForm from "./BlockchainInteractionForm";
import DeployContractForm from "./DeployContractForm";
import RegisterContractForm from "./RegisterContractForm";
import ValidateContractForm from "./ValidateContractForm";

const SmartContractContainer = () => {
  const [selectedAction, setSelectedAction] = useState("");

  const renderForm = () => {
    switch (selectedAction) {
      case "deploy":
        return <DeployContractForm />;
      case "register":
        return <RegisterContractForm />;
      case "validate":
        return <ValidateContractForm />;
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Select Action
        </label>
        <select
          onChange={(e) => setSelectedAction(e.target.value)}
          value={selectedAction}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select an action</option>
          <option value="deploy">Deploy Contract</option>
          <option value="register">Register Contract</option>
          <option value="validate">Validate Contract</option>
        </select>
      </div>
      {renderForm()}
    </div>
  );
};

export default SmartContractContainer;
