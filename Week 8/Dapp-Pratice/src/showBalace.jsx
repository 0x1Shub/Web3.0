import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React, { useEffect } from 'react'

const showBalace = () => {
    const { connection } = useConnection();
    const wallet = useWallet();

    const getBalance = async () => {
        const balance = await connection.getBalance(wallet.publicKey);
        document.getElementById('balance').innerHTML = balance;
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

export default showBalace