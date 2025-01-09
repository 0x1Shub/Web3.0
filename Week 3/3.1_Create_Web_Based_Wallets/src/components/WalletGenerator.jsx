import React, { useState } from "react";
import { generateMnemonic } from "bip39";

const WalletGenerator = ({ onGenerate }) => {
  const [mnemonic, setMnemonic] = useState("");

  const createMnemonic = () => {
    const generatedMnemonic = generateMnemonic();
    setMnemonic(generatedMnemonic);
    onGenerate(generatedMnemonic);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
      <button
        onClick={createMnemonic}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate Mnemonic
      </button>
      {mnemonic && (
        <div className="mt-4">
          <p className="font-bold">Your Mnemonic Phrase:</p>
          <p className="p-2 bg-white border rounded">{mnemonic}</p>
        </div>
      )}
    </div>
  );
};

export default WalletGenerator;
