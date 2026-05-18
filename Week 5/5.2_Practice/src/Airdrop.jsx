import React, { useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

const Airdrop = () => {
  const [amount, setAmount] = useState();
  const wallet = useWallet();
  const { connection } = useConnection();

  const handleAirdrop = async () => {
    await connection.requestAirdrop(wallet.publicKey, 1000000000)
    // await connection.requestAirdrop(wallet.publicKey, amount)
    alert("Airdropped Sol");
  }

  return (
    <div>
      {wallet.publicKey && (
        <h3>Hello {wallet.publicKey.toString()}</h3>
      )}
      <input type="number" placeholder='Amount' onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleAirdrop}>Send Airdrop</button>
    </div>
  )
}

export default Airdrop