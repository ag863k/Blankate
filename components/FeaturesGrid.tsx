'use client'

import { 
  WalletIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  PhotoIcon,
  ShieldCheckIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Wallet Integration',
    description: 'Connect your MetaMask, Coinbase, and other popular wallets with one click.',
    icon: WalletIcon,
  },
  {
    name: 'Real-time Analytics',
    description: 'Track crypto prices, market trends, and portfolio performance in real-time.',
    icon: ChartBarIcon,
  },
  {
    name: 'Token Management',
    description: 'Manage your crypto portfolio with detailed insights and performance metrics.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'NFT Explorer',
    description: 'Discover, view, and manage your NFT collection across multiple blockchains.',
    icon: PhotoIcon,
  },
  {
    name: 'Secure Trading',
    description: 'Execute trades with confidence using our secure, audited smart contracts.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Multi-chain Support',
    description: 'Access Ethereum, Polygon, Arbitrum, and more blockchains from one interface.',
    icon: GlobeAltIcon,
  },
]

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.name} className="card p-6 hover:shadow-lg transition-shadow">
          <div>
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-md mb-4">
              <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {feature.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
