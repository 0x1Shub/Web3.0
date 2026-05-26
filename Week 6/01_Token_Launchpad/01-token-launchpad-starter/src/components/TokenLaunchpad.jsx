import React from "react";

const TokenLaunchpad = () => {
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