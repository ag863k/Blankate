'use client'

import { useState } from 'react'
import { useAccount, useBalance } from 'wagmi'
import { formatCurrency } from '@/lib/web3'

interface TokenBalance {
  symbol: string
  name: string
  balance: string
  value: number
  change24h: number
}

const mockTokens: TokenBalance[] = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    balance: '2.5',
    value: 6419.73,
    change24h: 2.45
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    balance: '1,500.00',
    value: 1500.00,
    change24h: 0.01
  },
  {
    symbol: 'UNI',
    name: 'Uniswap',
    balance: '50.0',
    value: 450.00,
    change24h: -1.23
  }
]

export function WalletBalance() {
  const { address, isConnected } = useAccount()
  const { data: ethBalance } = useBalance({ address })
  const [tokens] = useState<TokenBalance[]>(mockTokens)

  const totalValue = tokens.reduce((sum, token) => sum + token.value, 0)

  if (!isConnected) {
    return (
      <div className="card p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Wallet Balance
        </h3>
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">
            Connect your wallet to view balances
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Wallet Balance
        </h3>
        <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
          Add token
        </button>
      </div>

      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          Total Balance
        </div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {formatCurrency(totalValue)}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </div>
      </div>

      <div className="space-y-4">
        {ethBalance && (
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">ETH</span>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  Ethereum
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  ETH
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-gray-900 dark:text-white">
                {parseFloat(ethBalance.formatted).toFixed(4)} ETH
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {formatCurrency(parseFloat(ethBalance.formatted) * 2567.89)}
              </div>
            </div>
          </div>
        )}

        {tokens.slice(1).map((token) => (
          <div key={token.symbol} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">{token.symbol}</span>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {token.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {token.symbol}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-gray-900 dark:text-white">
                {token.balance} {token.symbol}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {formatCurrency(token.value)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
