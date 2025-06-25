import { NextRequest, NextResponse } from 'next/server'
import { coinGeckoAPI } from '@/lib/api'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    
    const coins = await coinGeckoAPI.getTopCoins(limit)
    
    return NextResponse.json({
      success: true,
      data: coins,
      timestamp: Date.now()
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch coin data',
        timestamp: Date.now()
      },
      { status: 500 }
    )
  }
}
