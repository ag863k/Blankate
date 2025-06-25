import { Metadata } from 'next'
import { PortfolioOverview } from '@/components/dashboard/PortfolioOverview'
import { RecentTransactions } from '@/components/dashboard/RecentTransactions'
import { PriceChart } from '@/components/dashboard/PriceChart'
import { WalletBalance } from '@/components/dashboard/WalletBalance'

export const metadata: Metadata = {
  title: 'Dashboard - Blankate',
  description: 'Your crypto portfolio overview and analytics',
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>

      {/* Portfolio Overview */}
      <PortfolioOverview />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Chart and Transactions */}
        <div className="lg:col-span-2 space-y-8">
          <PriceChart />
          <RecentTransactions />
        </div>

        {/* Right Column - Wallet Balance */}
        <div className="space-y-8">
          <WalletBalance />
        </div>
      </div>
    </div>
  )
}
