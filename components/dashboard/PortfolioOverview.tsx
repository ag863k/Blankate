'use client'

import { useState, useEffect } from 'react'
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline'
import { useAccount, useBalance } from 'wagmi'
import { formatCurrency } from '@/lib/web3'

interface PortfolioData {
  totalValue: number
  change24h: number
  changePercentage: number
  positions: number
}

export function PortfolioOverview() {
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({ address })
  const [portfolio, setPortfolio] = useState<PortfolioData>({
    totalValue: 0,
    change24h: 0,
    changePercentage: 0,
    positions: 0
  })

  useEffect(() => {
    if (isConnected && balance) {
      // In a real app, you'd fetch portfolio data from your backend
      // For now, we'll use mock data with the actual ETH balance
      const ethPrice = 2567.89 // Mock ETH price
      const ethValue = parseFloat(balance.formatted) * ethPrice
      
      setPortfolio({
        totalValue: ethValue,
        change24h: ethValue * 0.0245, // Mock 2.45% gain
        changePercentage: 2.45,
        positions: 3 // Mock number of positions
      })
    } else {
      // Demo data for when wallet is not connected
      setPortfolio({
        totalValue: 12485.67,
        change24h: 285.32,
        changePercentage: 2.34,
        positions: 5
      })
    }
  }, [isConnected, balance])

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Portfolio Value
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(portfolio.totalValue)}
            </p>
            <div className="flex items-center mt-2">
              {portfolio.changePercentage >= 0 ? (
                <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <ArrowTrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm font-medium ${
                portfolio.changePercentage >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {portfolio.changePercentage >= 0 ? '+' : ''}{formatCurrency(portfolio.change24h)} ({portfolio.changePercentage.toFixed(2)}%)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              24h Change
            </p>
            <p className={`text-2xl font-bold ${
              portfolio.changePercentage >= 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {portfolio.changePercentage >= 0 ? '+' : ''}{formatCurrency(portfolio.change24h)}
            </p>
            <p className={`text-sm ${
              portfolio.changePercentage >= 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {portfolio.changePercentage >= 0 ? '+' : ''}{portfolio.changePercentage.toFixed(2)}%
            </p>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Active Positions
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {portfolio.positions}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Tokens held
            </p>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Wallet Status
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {isConnected ? 'Connected' : 'Disconnected'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {isConnected ? address?.slice(0, 6) + '...' + address?.slice(-4) : 'Connect wallet'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
