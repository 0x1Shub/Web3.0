import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useEffect } from 'react'

const ShowBalace = () => {
    const { connection } = useConnection();
    const wallet = useWallet();

    const getBalance = async () => {
        const balance = await connection.getBalance(wallet.publicKey);
        document.getElementById('balance').innerHTML = balance / LAMPORTS_PER_SOL;
    }

    useEffect(() => {
        getBalance();
    }, [wallet.publicKey]);

  return (
    <div>
        Balance: <span id='balance'></span> SOL
    </div>
  )
}

export default ShowBalace;