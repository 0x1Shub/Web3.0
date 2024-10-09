import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React from "react";

export const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const sendAirdopToUser = async () => {
    const amount = document.getElementById("publicKey").value;
    await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
    alert("Airdropped Sol");
  };

  return (
    <div>
      <input id="publicKey" type="text" placeholder="Amount" />
      <button onClick={sendAirdopToUser}>Send Airdrop</button>
    </div>
  );
};
