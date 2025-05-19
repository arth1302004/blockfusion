export const marketData = {
  forex: [
    { symbol: "EUR/USD", name: "Euro / US Dollar", price: "1.0892", change: 0.15 },
    { symbol: "GBP/USD", name: "British Pound / US Dollar", price: "1.2654", change: -0.23 },
    { symbol: "USD/JPY", name: "US Dollar / Japanese Yen", price: "149.67", change: 0.42 },
    { symbol: "USD/CAD", name: "US Dollar / Canadian Dollar", price: "1.3524", change: -0.18 },
  ],
  crypto: [
    { symbol: "BTC/USD", name: "Bitcoin / US Dollar", price: "68,245.67", change: 2.34 },
    { symbol: "ETH/USD", name: "Ethereum / US Dollar", price: "3,456.78", change: 1.56 },
    { symbol: "SOL/USD", name: "Solana / US Dollar", price: "145.67", change: 3.45 },
    { symbol: "ADA/USD", name: "Cardano / US Dollar", price: "0.5678", change: -1.23 },
  ],
}

export const allMarkets = {
  forex: [
    { symbol: "EUR/USD", name: "Euro / US Dollar", price: "1.0892", change: 0.15 },
    { symbol: "GBP/USD", name: "British Pound / US Dollar", price: "1.2654", change: -0.23 },
    { symbol: "USD/JPY", name: "US Dollar / Japanese Yen", price: "149.67", change: 0.42 },
    { symbol: "USD/CAD", name: "US Dollar / Canadian Dollar", price: "1.3524", change: -0.18 },
    { symbol: "AUD/USD", name: "Australian Dollar / US Dollar", price: "0.6578", change: 0.31 },
    { symbol: "NZD/USD", name: "New Zealand Dollar / US Dollar", price: "0.6123", change: -0.12 },
    { symbol: "USD/CHF", name: "US Dollar / Swiss Franc", price: "0.8976", change: 0.25 },
    { symbol: "EUR/GBP", name: "Euro / British Pound", price: "0.8567", change: -0.08 },
  ],
  crypto: [
    { symbol: "BTC/USD", name: "Bitcoin / US Dollar", price: "68,245.67", change: 2.34 },
    { symbol: "ETH/USD", name: "Ethereum / US Dollar", price: "3,456.78", change: 1.56 },
    { symbol: "SOL/USD", name: "Solana / US Dollar", price: "145.67", change: 3.45 },
    { symbol: "ADA/USD", name: "Cardano / US Dollar", price: "0.5678", change: -1.23 },
    { symbol: "DOT/USD", name: "Polkadot / US Dollar", price: "7.89", change: 0.78 },
    { symbol: "XRP/USD", name: "Ripple / US Dollar", price: "0.5432", change: -0.45 },
    { symbol: "DOGE/USD", name: "Dogecoin / US Dollar", price: "0.1234", change: 5.67 },
    { symbol: "AVAX/USD", name: "Avalanche / US Dollar", price: "34.56", change: 2.34 },
  ],
}

export const topPerformers = {
  daily: [
    { symbol: "DOGE/USD", name: "Dogecoin", change: 5.67 },
    { symbol: "SOL/USD", name: "Solana", change: 3.45 },
    { symbol: "BTC/USD", name: "Bitcoin", change: 2.34 },
    { symbol: "AVAX/USD", name: "Avalanche", change: 2.34 },
    { symbol: "ETH/USD", name: "Ethereum", change: 1.56 },
  ],
  weekly: [
    { symbol: "SOL/USD", name: "Solana", change: 15.45 },
    { symbol: "DOGE/USD", name: "Dogecoin", change: 12.67 },
    { symbol: "AVAX/USD", name: "Avalanche", change: 10.34 },
    { symbol: "BTC/USD", name: "Bitcoin", change: 8.34 },
    { symbol: "ETH/USD", name: "Ethereum", change: 7.56 },
  ],
  monthly: [
    { symbol: "BTC/USD", name: "Bitcoin", change: 25.34 },
    { symbol: "SOL/USD", name: "Solana", change: 22.45 },
    { symbol: "ETH/USD", name: "Ethereum", change: 18.56 },
    { symbol: "AVAX/USD", name: "Avalanche", change: 16.34 },
    { symbol: "DOGE/USD", name: "Dogecoin", change: 14.67 },
  ],
}

export const recentTransactions = [
  { symbol: "BTC/USD", date: "2023-05-15T10:30:00", amount: "0.05 BTC", value: "3,412.28", type: "buy" },
  { symbol: "ETH/USD", date: "2023-05-14T14:45:00", amount: "1.2 ETH", value: "4,148.14", type: "buy" },
  { symbol: "SOL/USD", date: "2023-05-13T09:15:00", amount: "10 SOL", value: '1,456.70", type: ' },
  { symbol: "SOL/USD", date: "2023-05-13T09:15:00", amount: "10 SOL", value: "1,456.70", type: "sell" },
  { symbol: "RELIANCE", date: "2023-05-12T11:20:00", amount: "5 RELIANCE", value: "12,283.75", type: "buy" },
  { symbol: "EUR/USD", date: "2023-05-11T15:30:00", amount: "1000 EUR", value: "1,089.20", type: "sell" },
]

export const portfolioAssets = [
  { symbol: "BTC", name: "Bitcoin", amount: "0.25", value: "17,061.42", change: 2.34 },
  { symbol: "ETH", name: "Ethereum", amount: "3.5", value: "12,098.73", change: 1.56 },
  { symbol: "SOL", name: "Solana", amount: "25", value: "3,641.75", change: 3.45 },
  { symbol: "RELIANCE", name: "Reliance Industries", amount: "10", value: "24,567.50", change: 1.25 },
  { symbol: "TCS", name: "Tata Consultancy Services", amount: "5", value: "17,839.00", change: -0.75 },
  { symbol: "EUR", name: "Euro", amount: "2000", value: "2,178.40", change: 0.15 },
]

export const marketTrends = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  data: [1000, 1200, 1100, 1300, 1500, 1400, 1600, 1800, 1700, 1900, 2100, 2000],
}

export const portfolioPerformance = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  data: [5000, 5500, 5300, 6000, 6500, 6300, 7000, 7500, 8000, 8500, 9000, 10000],
}
