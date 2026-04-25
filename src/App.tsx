import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

interface Crypto {
  id: string
  name: string
  symbol: string
  current_price: number
  market_cap: number
  price_change_percentage_24h: number
}

function App() {
  const [cryptos, setCryptos] = useState<Crypto[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1')
        setCryptos(response.data)
      } catch (error) {
        console.error('Error fetching crypto data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchCryptos()
  }, [])

  return (
    <div className="app">
      <header className="header">
        <h1>Cryptonex</h1>
        <p>Your Crypto Dashboard</p>
      </header>

      <main>
        <section className="crypto-list">
          <h2>Top Cryptocurrencies</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="crypto-grid">
              {cryptos.map((crypto) => (
                <div key={crypto.id} className="crypto-card">
                  <h3>{crypto.name} ({crypto.symbol.toUpperCase()})</h3>
                  <p>Price: ${crypto.current_price.toFixed(2)}</p>
                  <p>Market Cap: ${crypto.market_cap.toLocaleString()}</p>
                  <p className={crypto.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                    24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="wallet">
          <h2>My Wallet</h2>
          <div className="wallet-balance">
            <p>Total Balance: $1,250.00</p>
            <div className="wallet-assets">
              <div className="asset">
                <span>Bitcoin (BTC)</span>
                <span>0.05 BTC</span>
              </div>
              <div className="asset">
                <span>Ethereum (ETH)</span>
                <span>1.2 ETH</span>
              </div>
              <div className="asset">
                <span>USDT</span>
                <span>500 USDT</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
