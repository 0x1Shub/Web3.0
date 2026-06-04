import React from "react";
import { createInitializeMint2Instruction, createMint, getMinimumBalanceForRentExemptMint } from '@solana/spl-token';
import { Keypair, SystemProgram, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import { useWallet } from '@solana/wallet-adapter-react';

const TokenLaunchpad = () => {

    const wallet = useWallet()

    const createToken = async () => {
        const lamports = await getMinimumBalanceForRentExemptMint(connection);
        const keypair = Keypair.generate();

        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: payer.publicKey,
                newAccountPubkey: keypair.publicKey,
                space: MINT_SIZE,
                lamports,
                programId,
            }),
            createInitializeMint2Instruction(keypair.publicKey, decimals, mintAuthority, freezeAuthority, programId),
        );

        transaction.partialSign(keypair);

        // await sendAndConfirmTransaction(connection, transaction, [payer, keypair], confirmOptions);
        await wallet.signTransaction(transaction);
        await wallet.sendTransaction(
            transaction,
            connection
        );
    }

    return (
        <div className="h-[100vh] w-full flex flex-col items-center justify-center gap-5">
            <h1 className="font-medium text-4xl mb-5">Solana Token Launchpad</h1>

            <input 
                type="text" 
                placeholder="Name" 
                id="name" 
                className="border px-5 py-2 rounded-md"
            />
            <input 
                type="text" 
                placeholder="Symbol" 
                id="symbol" 
                className="border px-5 py-2 rounded-md"
            />
            <input 
                type="url" 
                placeholder="Image URL" 
                id="image" 
                className="border px-5 py-2 rounded-md"
            />
            <input 
                type="number" 
                placeholder="Initial Supply" 
                id="supply"
                className="border px-5 py-2 rounded-md" 
            />

            <button 
                id="submit"
                className="border px-5 py-2 rounded-md bg-gray-600 cursor-pointer text-white" 
            >
                Create Token
            </button>
        </div>
    );
};

export default TokenLaunchpad;