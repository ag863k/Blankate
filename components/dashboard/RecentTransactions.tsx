'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { ArrowUpIcon, ArrowDownIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface Transaction {
  id: string
  type: 'send' | 'receive' | 'swap'
  amount: string
  token: string
  to?: string
  from?: string
  hash: string
  timestamp: Date
  status: 'confirmed' | 'pending' | 'failed'
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'receive',
    amount: '2.5',
    token: 'ETH',
    from: '0x742d35Cc6527C0532925a3b8b39f39c24C3b39f3',
    hash: '0x8f9e7c2b1a0d4e5f6c8b9a0d1e2f3c4b5a6d7e8f9c0b1a2d3e4f5c6b7a8d9e0f',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    status: 'confirmed'
  },
  {
    id: '2',
    type: 'send',
    amount: '1000',
    token: 'USDC',
    to: '0x123e4567e89b12d3a456426655440000d38b39f3',
    hash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    status: 'confirmed'
  },
  {
    id: '3',
    type: 'swap',
    amount: '0.5',
    token: 'ETH → USDC',
    hash: '0x9f8e7d6c5b4a3928374657483920384756473829384756473829384756473829',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
    status: 'confirmed'
  }
]

export function RecentTransactions() {
  const { isConnected } = useAccount()
  const [transactions] = useState<Transaction[]>(mockTransactions)

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'send':
        return <ArrowUpIcon className="w-4 h-4 text-red-500" />
      case 'receive':
        return <ArrowDownIcon className="w-4 h-4 text-green-500" />
      case 'swap':
        return <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white">⇄</span>
        </div>
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'text-green-500'
      case 'pending':
        return 'text-yellow-500'
      case 'failed':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Recent Transactions
        </h3>
        {isConnected && (
          <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
            View all
          </button>
        )}
      </div>
      
      {!isConnected ? (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">
            Connect your wallet to view recent transactions
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="flex items-center space-x-3">
                {getTransactionIcon(tx.type)}
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900 dark:text-white capitalize">
                      {tx.type}
                    </span>
                    <span className={`text-xs font-medium ${getStatusColor(tx.status)}`}>
                      {tx.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {tx.type === 'send' && tx.to && `To: ${formatAddress(tx.to)}`}
                    {tx.type === 'receive' && tx.from && `From: ${formatAddress(tx.from)}`}
                    {tx.type === 'swap' && 'Token swap'}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-medium text-gray-900 dark:text-white">
                  {tx.type === 'send' ? '-' : tx.type === 'receive' ? '+' : ''}{tx.amount} {tx.token}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  {tx.timestamp.toLocaleTimeString()}
                  <a
                    href={`https://etherscan.io/tx/${tx.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    title="View on Etherscan"
                  >
                    <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
