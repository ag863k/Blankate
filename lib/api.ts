const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3'

export interface CoinGeckoResponse {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  total_volume: number
  price_change_percentage_24h: number
  market_cap_rank: number
}

export interface GlobalData {
  total_market_cap: Record<string, number>
  total_volume: Record<string, number>
  market_cap_percentage: Record<string, number>
  market_cap_change_percentage_24h_usd: number
}

export class CoinGeckoAPI {
  private apiKey?: string

  constructor(apiKey?: string) {
    this.apiKey = apiKey
  }

  private async fetchData(endpoint: string): Promise<any> {
    const url = `${COINGECKO_API_BASE}${endpoint}`
    const headers: Record<string, string> = {
      'accept': 'application/json',
    }

    if (this.apiKey) {
      headers['x-cg-demo-api-key'] = this.apiKey
    }

    const response = await fetch(url, {
      headers,
      next: { revalidate: 60 }
    })

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`)
    }

    return response.json()
  }

  async getTopCoins(limit: number = 10): Promise<CoinGeckoResponse[]> {
    return this.fetchData(
      `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
    )
  }

  async getCoinById(id: string): Promise<any> {
    return this.fetchData(`/coins/${id}`)
  }

  async getGlobalData(): Promise<GlobalData> {
    const response = await this.fetchData('/global')
    return response.data
  }

  async getCoinPrices(ids: string[]): Promise<Record<string, { usd: number }>> {
    const idsString = ids.join(',')
    return this.fetchData(`/simple/price?ids=${idsString}&vs_currencies=usd`)
  }
}

export const coinGeckoAPI = new CoinGeckoAPI(
  typeof window !== 'undefined' ? undefined : process.env.NEXT_PUBLIC_COINGECKO_API_KEY
)
