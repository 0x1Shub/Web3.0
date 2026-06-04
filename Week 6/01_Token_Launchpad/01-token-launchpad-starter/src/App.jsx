import './App.css'
import TokenLaunchpad from './components/TokenLaunchpad'
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'
import { 
  WalletModalProvider, 
  WalletDisconnectButton, 
  WalletMultiButton 
} from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'
import { useMemo } from 'react'

function App() {

  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  const wallets = useMemo(() => 
  [new UnsafeBurnerWalletAdapter()]
  ,[])


  return (
    <div className='w-full'>
      <ConnectionProvider endpoint={'https://api.devnet.solana.com'}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div style={{display: "flex", justifyContent: "space-between", padding: "20px 20px 0px 20px"}}>
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <TokenLaunchpad />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App
