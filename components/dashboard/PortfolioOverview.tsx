'use client'

import { useState, useEffect } from 'react'
import { TrendingUpIcon, TrendingDownIcon, WalletIcon, EyeIcon } from '@heroicons/react/24/outline'

interface PortfolioData {
  totalValue: number
  totalChange: number
  totalChangePercent: number
  assetsCount: number
}

export function PortfolioOverview() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPortfolioData()
  }, [])

  const fetchPortfolioData = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setPortfolioData({
        totalValue: 12750.45,
        totalChange: 567.89,
        totalChangePercent: 4.67,
        assetsCount: 8
      })
    } catch (error) {
      console.error('Error fetching portfolio data:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(value)
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="card p-6 animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!portfolioData) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Total Portfolio Value */}
      <div className="card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Portfolio Value
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(portfolioData.totalValue)}
            </p>
            <div className="flex items-center mt-2">
              {portfolioData.totalChange >= 0 ? (
                <TrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <TrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm font-medium ${
                portfolioData.totalChange >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {portfolioData.totalChange >= 0 ? '+' : ''}{formatCurrency(portfolioData.totalChange)}
              </span>
            </div>
          </div>
          <WalletIcon className="w-8 h-8 text-blue-500" />
        </div>
      </div>

      {/* 24h Change */}
      <div className="card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              24h Change
            </p>
            <p className={`text-2xl font-bold ${
              portfolioData.totalChangePercent >= 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {portfolioData.totalChangePercent >= 0 ? '+' : ''}{portfolioData.totalChangePercent.toFixed(2)}%
            </p>
          </div>
          {portfolioData.totalChangePercent >= 0 ? (
            <TrendingUpIcon className="w-8 h-8 text-green-500" />
          ) : (
            <TrendingDownIcon className="w-8 h-8 text-red-500" />
          )}
        </div>
      </div>

      {/* Assets Count */}
      <div className="card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Assets
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {portfolioData.assetsCount}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Tokens tracked
            </p>
          </div>
          <EyeIcon className="w-8 h-8 text-purple-500" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card p-6">
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Quick Actions
          </p>
          <div className="space-y-2">
            <button className="w-full btn-primary text-xs py-2">
              Add Token
            </button>
            <button className="w-full btn-secondary text-xs py-2">
              View NFTs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
