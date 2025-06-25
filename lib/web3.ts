import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, polygon, arbitrum, base } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Blankate',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || 'fallback-project-id',
  chains: [mainnet, polygon, arbitrum, base],
  ssr: true,
})

export const supportedChains = [mainnet, polygon, arbitrum, base]

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

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: value < 1 ? 6 : 2
  }).format(value)
}

export const formatMarketCap = (value: number): string => {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`
  if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`
  return `$${value.toFixed(2)}`
}
