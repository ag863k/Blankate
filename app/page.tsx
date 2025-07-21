import { Hero } from '@/components/Hero'
import { MarketOverview } from '@/components/MarketOverview'
import { TopTokens } from '@/components/TopTokens'
import { FeaturesGrid } from '@/components/FeaturesGrid'

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Hero />

      {/* Market Overview */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Market Overview
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Real-time cryptocurrency market data and insights
          </p>
        </div>
        <MarketOverview />
      </section>

      {/* Top Tokens */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Top Cryptocurrencies
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Track the performance of leading digital assets
          </p>
        </div>
        <TopTokens />
      </section>

      {/* Features Grid */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Platform Features
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Everything you need for crypto and Web3 in one place
          </p>
        </div>
        <FeaturesGrid />
      </section>
    </div>
  )
}
