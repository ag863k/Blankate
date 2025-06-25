'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/24/outline'

interface Token {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
  total_volume: number
}

export function TopTokens() {
  const [tokens, setTokens] = useState<Token[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTopTokens()
  }, [])

  const fetchTopTokens = async () => {
    try {
      // Simulate API call - replace with actual CoinGecko API
      await new Promise(resolve => setTimeout(resolve, 1000))
      setTokens([
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          image: '/icons/bitcoin.png',
          current_price: 43250.00,
          price_change_percentage_24h: 2.45,
          market_cap: 847523000000,
          total_volume: 15234567890
        },
        {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          image: '/icons/ethereum.png',
          current_price: 2567.89,
          price_change_percentage_24h: -1.23,
          market_cap: 308456000000,
          total_volume: 8765432109
        },
        {
          id: 'binancecoin',
          name: 'BNB',
          symbol: 'BNB',
          image: '/icons/bnb.png',
          current_price: 307.45,
          price_change_percentage_24h: 3.67,
          market_cap: 47123000000,
          total_volume: 1234567890
        },
        {
          id: 'solana',
          name: 'Solana',
          symbol: 'SOL',
          image: '/icons/solana.png',
          current_price: 98.76,
          price_change_percentage_24h: 5.43,
          market_cap: 42345000000,
          total_volume: 2345678901
        },
        {
          id: 'cardano',
          name: 'Cardano',
          symbol: 'ADA',
          image: '/icons/cardano.png',
          current_price: 0.456,
          price_change_percentage_24h: -2.1,
          market_cap: 16123000000,
          total_volume: 567890123
        }
      ])
    } catch (error) {
      console.error('Error fetching tokens:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: value < 1 ? 6 : 2
    }).format(value)
  }

  const formatMarketCap = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(value)
  }

  if (loading) {
    return (
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Token
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  24h Change
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Market Cap
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full mr-3"></div>
                      <div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 mb-1"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Token
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                24h Change
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {tokens.map((token) => (
              <tr key={token.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                        {token.symbol.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {token.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {token.symbol.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {formatCurrency(token.current_price)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center">
                    {token.price_change_percentage_24h >= 0 ? (
                      <TrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={`font-medium ${
                      token.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {token.price_change_percentage_24h >= 0 ? '+' : ''}{token.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {formatMarketCap(token.market_cap)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
