"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface AnimatedPriceCardProps {
  symbol: string
  name: string
  price: string
  change: number
  type: "crypto" | "forex"
}

export function AnimatedPriceCard({ symbol, name, price, change, type }: AnimatedPriceCardProps) {
  const [animate, setAnimate] = useState(false)
  const [priceValue, setPriceValue] = useState(price)
  const [priceDirection, setPriceDirection] = useState<"up" | "down" | null>(null)

  useEffect(() => {
    // Simulate price changes
    const interval = setInterval(() => {
      const currentPrice = Number.parseFloat(priceValue.replace(/,/g, ""))
      const randomChange = (Math.random() - 0.5) * 0.01 * currentPrice
      const newPrice = (currentPrice + randomChange).toFixed(
        priceValue.includes(".") ? priceValue.split(".")[1].length : 2,
      )

      setPriceDirection(randomChange > 0 ? "up" : "down")
      setPriceValue(newPrice)
      setAnimate(true)

      const timeout = setTimeout(() => {
        setAnimate(false)
      }, 1000)

      return () => clearTimeout(timeout)
    }, 5000)

    return () => clearInterval(interval)
  }, [priceValue])

  const getColorClass = () => {
    if (type === "crypto") {
      if (symbol.includes("BTC")) return "crypto-bitcoin"
      if (symbol.includes("ETH")) return "crypto-ethereum"
      if (symbol.includes("SOL")) return "crypto-solana"
      return ""
    } else {
      if (symbol.includes("USD")) return "forex-usd"
      if (symbol.includes("EUR")) return "forex-eur"
      if (symbol.includes("GBP")) return "forex-gbp"
      return ""
    }
  }

  return (
    <Card
      className={cn(
        "transition-all duration-300 hover:shadow-lg border-l-4",
        `border-l-${type}-${getColorClass()}`,
        animate && priceDirection === "up" ? "bg-green-500/5" : "",
        animate && priceDirection === "down" ? "bg-red-500/5" : "",
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">{symbol}</div>
            <div className="text-sm text-muted-foreground">{name}</div>
          </div>
          <div className="text-right">
            <div
              className={cn(
                "font-medium transition-all duration-300",
                animate && priceDirection === "up" ? "text-green-500" : "",
                animate && priceDirection === "down" ? "text-red-500" : "",
              )}
            >
              {priceValue}
            </div>
            <div className={`text-sm flex items-center ${change > 0 ? "text-green-500" : "text-red-500"}`}>
              {change > 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
              {change}%
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
