import { createConfig, http } from 'wagmi'
import { mainnet, polygon, arbitrum } from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

export const config = getDefaultConfig({
  appName: 'Blankate',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains: [mainnet, polygon, arbitrum],
  ssr: true,
})

export const supportedChains = [mainnet, polygon, arbitrum]

export const formatWalletAddress = (address: string): string => {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export const formatTokenAmount = (amount: number, decimals: number = 18): string => {
  const divisor = Math.pow(10, decimals)
  const value = amount / divisor
  
  if (value < 0.01) return '<0.01'
  if (value < 1) return value.toFixed(4)
  if (value < 1000) return value.toFixed(2)
  if (value < 1000000) return `${(value / 1000).toFixed(2)}K`
  return `${(value / 1000000).toFixed(2)}M`
}
