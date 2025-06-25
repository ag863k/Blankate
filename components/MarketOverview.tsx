'use client'

import { useState, useEffect } from 'react'
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline'
import { coinGeckoAPI } from '@/lib/api'

interface MarketData {
  totalMarketCap: number
  totalVolume: number
  btcDominance: number
  marketCapChange: number
}

export function MarketOverview() {
  const [marketData, setMarketData] = useState<MarketData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMarketData()
  }, [])

  const fetchMarketData = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await coinGeckoAPI.getGlobalData()
      setMarketData({
        totalMarketCap: data.total_market_cap.usd || 0,
        totalVolume: data.total_volume.usd || 0,
        btcDominance: data.market_cap_percentage.btc || 0,
        marketCapChange: data.market_cap_change_percentage_24h_usd || 0
      })
    } catch (err) {
      setError('Failed to fetch market data')
      console.error('Error fetching market data:', err)
      // Fallback data
      setMarketData({
        totalMarketCap: 1234567890000,
        totalVolume: 45678901234,
        btcDominance: 52.3,
        marketCapChange: 2.45
      })
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value: number) => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`
    if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`
    return `$${value.toFixed(2)}`
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
    <div>
      {error && (
        <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400">
          <p className="text-yellow-700 dark:text-yellow-300">{error} - Showing demo data</p>
        </div>
      )}
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
                  <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <ArrowTrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
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
                {marketData.btcDominance.toFixed(1)}%
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
                13,456+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
