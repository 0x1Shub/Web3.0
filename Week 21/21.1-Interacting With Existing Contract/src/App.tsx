import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config'
import { Account } from './components/Account'
import { WalletOptions } from './components/wallet-options'
import "./App.css"
import { TotalSupply } from './components/TotolSupply'
import { AllowUSDT } from './components/AllowUSDT'

const queryClient = new QueryClient()

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <ConnectWallet />
        <TotalSupply />
        <AllowUSDT />
        <AccountConnected />
      </QueryClientProvider> 
    </WagmiProvider>
  )
}

function AccountConnected() {
  const {address} = useAccount();
  return <div>
    {address ? "You are connected "+address : "You are not connected"}
  </div>
}

export default App;