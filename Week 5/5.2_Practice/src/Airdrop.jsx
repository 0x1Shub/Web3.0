import React, { useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

const Airdrop = () => {
  const [amount, setAmount] = useState();
  const wallet = useWallet();
  const { connection } = useConnection();

  const handleAirdrop = async () => {
    debugger;
    if (!wallet.publicKey) {
      alert("Connect wallet first");
      return;
    }

    try {
     // const amount = document.getElementById("amount").value;

     const amountInLamports = Number(amount) * 1000000000;

     // await connection.requestAirdrop(wallet.publicKey, 1000000000)
     const result = await connection.requestAirdrop(wallet.publicKey, amountInLamports);
     await connection.confirmTransaction(result);
     console.log(result);
     alert("Airdropped Sol");
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      {wallet.publicKey && (
        <h3>Hello {wallet.publicKey.toString()}</h3>
      )}
      <input type="number" id='amount' placeholder='Amount' onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleAirdrop}>Send Airdrop</button>
    </div>
  )
}

export default Airdrop