'use client'

import { WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet, polygon, arbitrum, base } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { ThemeProvider } from 'next-themes'
import { ReactNode, useState } from 'react'

const config = getDefaultConfig({
  appName: 'Blankate',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || 'fallback-project-id',
  chains: [mainnet, polygon, arbitrum, base],
  ssr: true,
})

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  )
}
