import { NextRequest, NextResponse } from 'next/server'
import { coinGeckoAPI } from '@/lib/api'

const DEFAULT_LIMIT = 10
const MAX_LIMIT = 100

function parseLimit(param: string | null): number {
  const limit = parseInt(param || `${DEFAULT_LIMIT}`, 10)
  return isNaN(limit) || limit < 1 || limit > MAX_LIMIT ? DEFAULT_LIMIT : limit
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const limit = parseLimit(url.searchParams.get('limit'))

  try {
    const coins = await coinGeckoAPI.getTopCoins(limit)

    return NextResponse.json({
      success: true,
      data: coins,
      timestamp: Date.now(),
    })
  } catch (error) {
    console.error('Failed to fetch coin data:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch coin data',
        timestamp: Date.now(),
      },
      { status: 500 }
    )
  }
}
