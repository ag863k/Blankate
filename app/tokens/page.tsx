import { Metadata } from 'next'
import { TopTokens } from '@/components/TopTokens'
import { MarketOverview } from '@/components/MarketOverview'

export const metadata: Metadata = {
  title: 'Tokens - Blankate',
  description: 'Explore and track cryptocurrency tokens with real-time data',
}

export default function TokensPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Tokens
        </h1>
        <div className="flex items-center space-x-3">
          <button className="btn-secondary">
            Add Token
          </button>
          <button className="btn-primary">
            View Watchlist
          </button>
        </div>
      </div>

      {/* Market Overview */}
      <MarketOverview />

      {/* Top Tokens */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Top Cryptocurrencies
        </h2>
        {/* Pass showContract prop to display contract column */}
        <TopTokens showContract />
      </div>
    </div>
  )
}
