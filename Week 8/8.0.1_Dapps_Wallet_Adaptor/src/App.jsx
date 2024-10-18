import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { RequestAirdrop } from "./RequestAirdrop";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import ShowBalance from "./ShowBalance";
import SendTokens from "./SendTokens";
import { SignMessage } from "./SignMessage";

function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >
            <WalletMultiButton />
          </div>
          <div
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <RequestAirdrop />
            <ShowBalance />
            <SendTokens />
            <SignMessage />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
