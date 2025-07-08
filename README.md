# 🚀 Blankate - Crypto & Web3 Dashboard

A modern, full-featured cryptocurrency and Web3 application built with Next.js, TypeScript, and the latest Web3 technologies.

## ✨ Features

- 🔐 **Wallet Integration** - Connect MetaMask, Coinbase, and other popular wallets
- 📈 **Real-time Analytics** - Track crypto prices and market trends
- 🪙 **Token Management** - Manage your crypto portfolio with detailed insights
- 🖼️ **NFT Explorer** - Discover and manage your NFT collection
- 🛡️ **Secure Trading** - Execute trades with audited smart contracts
- 🌐 **Multi-chain Support** - Ethereum, Polygon, Arbitrum, and more

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + Headless UI
- **Animation**: Framer Motion
- **Charts**: Chart.js & Recharts
- **Data Fetching**: SWR

### Web3 & Blockchain
- **Ethereum Integration**: Viem (modern, lightweight)
- **Wallet Connection**: Wagmi + RainbowKit
- **Multi-chain Support**: Ethereum, Polygon, Arbitrum

### APIs & Services
- **Crypto Data**: CoinGecko API
- **Blockchain Data**: Alchemy
- **Authentication**: NextAuth.js
- **Database**: Supabase (optional)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/blankate.git
   cd blankate
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Fill in your API keys in `.env.local`:
   ```env
   NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id
   NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_api_key
   NEXT_PUBLIC_COINGECKO_API_KEY=your_coingecko_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
blankate/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard pages
│   ├── tokens/           # Token pages
│   ├── nfts/            # NFT pages
│   ├── wallet/          # Wallet pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/            # React components
│   ├── dashboard/        # Dashboard components
│   ├── Navbar.tsx       # Navigation
│   ├── Hero.tsx         # Hero section
│   └── ...
├── lib/                  # Utility functions
│   ├── api.ts           # API utilities
│   ├── web3.ts          # Web3 utilities
│   └── utils.ts         # General utilities
├── public/               # Static assets
└── contracts/           # Smart contract ABIs
```

## 🔧 Configuration

### API Keys Required

1. **WalletConnect Project ID**: Get from [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. **Alchemy API Key**: Get from [Alchemy](https://www.alchemy.com/)
3. **CoinGecko API Key**: Get from [CoinGecko](https://www.coingecko.com/api) (optional for free tier)

### Supported Wallets

- MetaMask
- Coinbase Wallet
- WalletConnect
- Rainbow Wallet
- Trust Wallet
- And many more via RainbowKit

### Supported Networks

- Ethereum Mainnet
- Polygon
- Arbitrum
- (More chains can be added in `lib/web3.ts`)

## 🎯 Core Features

### Dashboard
- Portfolio overview with total value and P&L
- Real-time price charts
- Recent transaction history
- Asset allocation breakdown

### Token Management
- Top cryptocurrencies with live prices
- Search and filter tokens
- Detailed token information
- Price alerts and notifications

### NFT Explorer
- View your NFT collection
- Browse popular NFT collections
- NFT metadata and rarity information
- Multi-chain NFT support

### Wallet Integration
- One-click wallet connection
- Multi-wallet support
- Transaction signing
- Balance tracking across chains

## 🚀 Deployment

### Frontend Deployment (Netlify)

1. **Connect Repository**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build:netlify`
   - Set publish directory: `out`

2. **Environment Variables**
   ```env
   NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id
   NEXT_PUBLIC_COINGECKO_API_KEY=your_coingecko_api_key
   NETLIFY=true
   ```

3. **Deploy**
   - Push to main branch for automatic deployment
   - Or deploy manually via Netlify CLI

### Backend Deployment (Render)

1. **Connect Repository**
   - Connect your GitHub repository to Render
   - Use the `render.yaml` configuration file

2. **Environment Variables**
   ```env
   NODE_ENV=production
   NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id
   NEXT_PUBLIC_COINGECKO_API_KEY=your_coingecko_api_key
   ```

3. **Deploy**
   - Automatic deployment on push to main branch

### Docker Deployment

```bash
# Build the image
docker build -t blankate .

# Run the container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_PROJECT_ID=your_project_id \
  -e NEXT_PUBLIC_COINGECKO_API_KEY=your_api_key \
  blankate
```

## 🔧 Development Scripts

```bash
# Development
npm run dev              # Start development server
npm run type-check       # Type checking
npm run lint             # Lint code
npm run format           # Format code

# Building
npm run build            # Production build
npm run build:netlify    # Build for Netlify (static export)
npm run build:analyze    # Build with bundle analyzer

# Utilities
npm run clean            # Clean build artifacts
npm run docker:build     # Build Docker image
npm run docker:run       # Run Docker container
```

## 📊 Performance Optimizations

- **Next.js 14** with App Router for optimal performance
- **SWC** for fast compilation and minification
- **Tree shaking** to eliminate unused code
- **Image optimization** with Next.js Image component
- **Code splitting** for lazy loading
- **Caching strategies** for API responses
- **Gzip compression** enabled
- **Security headers** configured

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for beautiful styling
- [RainbowKit](https://rainbowkit.com/) for seamless wallet integration
- [CoinGecko](https://coingecko.com/) for reliable crypto data
- [Heroicons](https://heroicons.com/) for beautiful icons

---

**Built with ❤️ for the Web3 community**
