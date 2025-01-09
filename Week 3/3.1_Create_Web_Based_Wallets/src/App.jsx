import React, { useState } from "react";
import WalletGenerator from "./components/WalletGenerator";
import WalletList from "./components/WalletList";

const App = () => {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-10">
      <h1 className="text-3xl font-bold mb-8">Web-Based Crypto Wallet</h1>
      <WalletGenerator onGenerate={setMnemonic} />
      <div className="mt-8">
        <WalletList mnemonic={mnemonic} />
      </div>
    </div>
  );
};

export default App;
