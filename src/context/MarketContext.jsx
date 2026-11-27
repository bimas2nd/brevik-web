import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { stock } from '../data/brevikData'

const MarketContext = createContext(null)

const seedSeries = [146.32, 146.71, 147.04, 146.82, 147.36, 147.88, 147.61, 148.05, 147.92, 148.4]

export function MarketProvider({ children }) {
  const [quote, setQuote] = useState({
    price: stock.price,
    previousClose: stock.previousClose,
    change: stock.change,
    changePercent: stock.changePercent,
    direction: 1,
  })
  const [series, setSeries] = useState(seedSeries)
  const priceRef = useRef(stock.price)

  useEffect(() => {
    const interval = window.setInterval(() => {
      const move = (Math.random() - 0.47) * 0.18
      const nextPrice = Math.min(152.8, Math.max(143.2, Number((priceRef.current + move).toFixed(2))))
      priceRef.current = nextPrice
      const change = Number((nextPrice - stock.previousClose).toFixed(2))
      const changePercent = Number(((change / stock.previousClose) * 100).toFixed(2))
      setQuote((previous) => ({
        ...previous,
        price: nextPrice,
        change,
        changePercent,
        direction: move >= 0 ? 1 : -1,
      }))
    }, 9000)
    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    setSeries((previous) => [...previous, quote.price].slice(-30))
  }, [quote.price])

  const value = useMemo(
    () => ({
      quote,
      series,
      isPositive: quote.changePercent >= 0,
    }),
    [quote, series],
  )

  return <MarketContext.Provider value={value}>{children}</MarketContext.Provider>
}

export function useMarket() {
  const context = useContext(MarketContext)
  if (!context) {
    throw new Error('useMarket must be used within a MarketProvider')
  }
  return context
}
