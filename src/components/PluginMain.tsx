import React from "react";
// import ContractForm from "./ContractForm";
import SmartContractContainer from "./SmartContractContainer";

const PluginMain = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8">
        {/* <ContractForm /> */}
        <SmartContractContainer />
      </div>
    </div>
  );
};

export default PluginMain;
