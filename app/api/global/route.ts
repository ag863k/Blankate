import { NextRequest, NextResponse } from 'next/server'
import { coinGeckoAPI } from '@/lib/api'

export async function GET() {
  try {
    const globalData = await coinGeckoAPI.getGlobalData()

    return NextResponse.json({
      success: true,
      data: globalData,
      timestamp: Date.now()
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch global market data',
        timestamp: Date.now()
      },
      { status: 500 }
    )
  }
}
