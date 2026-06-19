import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React from 'react'

const RequestAirdrop = () => {
    const wallet = useWallet();
    const { connection } = useConnection(); 

    const requestAirDrop = () => {
        const publicKey = wallet.publicKey;
        const amount = document.getElementById("amount").value;
        connection.requestAirdrop(publicKey, amount*LAMPORTS_PER_SOL)
    }

  return (
    <div style={{
        marginTop: '20px',
        gap: '10px',
    }}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
        }}>
            <input type="text" placeholder='Amount' id='amount' />
            <button onClick={requestAirDrop}>Request Airdrop</button> 
        </div>
        
        {wallet.publicKey?.toBase58()}
    </div>
  )
}

export default RequestAirdrop