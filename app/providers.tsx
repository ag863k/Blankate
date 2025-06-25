'use client'

import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { mainnet, polygon, arbitrum } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

// Configure chains
const { chains, publicClient } = configureChains(
  [mainnet, polygon, arbitrum],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY! }),
    publicProvider()
  ]
)

// Configure wallets
const { connectors } = getDefaultWallets({
  appName: 'Blankate',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains
})

// Create wagmi config
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export function Providers({ 
  children,
  session 
}: { 
  children: React.ReactNode
  session?: any
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </ThemeProvider>
    </SessionProvider>
  )
}
