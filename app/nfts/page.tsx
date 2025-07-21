import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NFTs - Blankate',
  description: 'Explore and manage your NFT collection',
}

function ConnectWalletButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition"
      aria-label="Connect Wallet"
      type="button"
    >
      {children}
    </button>
  )
}

export default function NFTsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          NFTs
        </h1>
        <div className="flex items-center space-x-3">
          <ConnectWalletButton>
            Connect Wallet
          </ConnectWalletButton>
        </div>
      </div>

      {/* NFT Collection Placeholder */}
      <div className="card p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl" aria-hidden="true">🖼️</span>
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            Your NFT Collection
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Connect your wallet to view and manage your NFT collection across multiple blockchains.
          </p>
          <ConnectWalletButton>
            Connect Wallet to View NFTs
          </ConnectWalletButton>
        </div>
      </div>
    </div>
  )
}
