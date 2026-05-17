import React, {FC, useMemo} from 'react'
import { ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css'


const App = () => {

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [
    new UnsafeBurnerWalletAdapter(),
  ], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
    {/* // <ConnectionProvider endpoint={"https://api.devnet.solana.com"}> */}
      <WalletProvider wallets={wallets} autoConnect>
      {/* <WalletProvider wallets={[]} autoConnect> */}
        <WalletModalProvider>
            <div style={{display: 'flex' , justifyContent: 'space-between'}}>
              <WalletMultiButton />
              <WalletDisconnectButton />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App