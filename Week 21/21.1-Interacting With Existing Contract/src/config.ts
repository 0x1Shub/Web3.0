import { http, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { injected, metaMask } from 'wagmi/connectors'

export const config = createConfig({
    chains: [mainnet],
    connectors: [
      injected(),
      metaMask(),
    ],
	  transports: {
	    [mainnet.id]: http("https://eth-mainnet.g.alchemy.com/v2/UrxdAjN-s7wOo1M7Px7j7zCxWTODBcK_"),
  },
})