'use client'

import { useState, useEffect } from 'react'
import { TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/24/outline'

interface MarketData {
  totalMarketCap: number
  totalVolume: number
  btcDominance: number
  marketCapChange: number
}

export function MarketOverview() {
  const [marketData, setMarketData] = useState<MarketData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMarketData()
  }, [])

  const fetchMarketData = async () => {
    try {
      // Simulate API call - replace with actual CoinGecko API
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMarketData({
        totalMarketCap: 1234567890000,
        totalVolume: 45678901234,
        btcDominance: 52.3,
        marketCapChange: 2.45
      })
    } catch (error) {
      console.error('Error fetching market data:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2
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

  if (!marketData) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Market Cap
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(marketData.totalMarketCap)}
            </p>
            <div className="flex items-center mt-2">
              {marketData.marketCapChange >= 0 ? (
                <TrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <TrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm font-medium ${
                marketData.marketCapChange >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {marketData.marketCapChange >= 0 ? '+' : ''}{marketData.marketCapChange.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              24h Volume
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(marketData.totalVolume)}
            </p>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              BTC Dominance
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {marketData.btcDominance}%
            </p>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Active Cryptocurrencies
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              13,456
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
