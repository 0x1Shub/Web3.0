import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  const requestAirdrop = () => {
    const publicKey = wallet.publicKey;
    const amount = document.getElementById("amount").value;
    connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
  };

  return (
    <div>
      <input type="text" placeholder="Airdrop...." id="amount" />
      <br />
      <button onClick={requestAirdrop}>Request Airdrop</button>
      <br />
    </div>
  );
}
