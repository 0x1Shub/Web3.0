import React, { useState } from "react";
import { ethers } from "ethers";

const WalletList = ({ mnemonic }) => {
  const [wallets, setWallets] = useState([]);

  const addWallet = () => {
    if (!mnemonic) {
      alert("Generate a mnemonic first!");
      return;
    }
    const wallet = ethers.Wallet.fromMnemonic(
      mnemonic,
      `m/44'/60'/0'/0/${wallets.length}`
    );
    setWallets([...wallets, wallet]);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
      <button
        onClick={addWallet}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Wallet
      </button>

      <h3 className="mt-4 text-lg font-semibold">Wallets List</h3>
      <ul className="mt-4 space-y-2">
        {wallets.map((wallet, index) => (
          <li key={index} className="p-2 bg-white border rounded">
            <strong>Wallet {index + 1}:</strong> {wallet.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WalletList;
