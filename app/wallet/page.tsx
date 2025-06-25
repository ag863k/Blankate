import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wallet - Blankate',
  description: 'Connect and manage your crypto wallet',
}

export default function WalletPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Wallet
        </h1>
      </div>

      {/* Wallet Connection Placeholder */}
      <div className="card p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl">💳</span>
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            Connect Your Wallet
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Connect your crypto wallet to view balances, transaction history, and manage your assets.
          </p>
          <button className="btn-primary">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  )
}
