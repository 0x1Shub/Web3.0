import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import React from 'react';

const SendTokens = () => {
    const wallet = useWallet();
    const { connection } = useConnection();

    const handleSend = async () => {
        let to = document.getElementById('address').value;
        let lamport = document.getElementById('token').value * LAMPORTS_PER_SOL;
        const transaction = new Transaction();
        transaction.add(
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: lamport
            })
        )

        await wallet.sendTransaction(transaction, connection);
        alert("Send Successfully");
        
        document.getElementById('address').innerHTML = "";
        document.getElementById('token').innerHTML = "";
        
    }
    
    return (
        <div>
        <input type="text" id='address' placeholder='To' />
        <input type="text" id="token" placeholder='token' />
        <button onClick={handleSend}>Send Token</button>
    </div>
  )
}

export default SendTokens