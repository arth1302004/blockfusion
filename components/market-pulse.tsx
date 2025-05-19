"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

interface MarketUpdate {
  id: string
  message: string
  time: string
  type: "buy" | "sell" | "news" | "alert"
}

export function MarketPulse() {
  const [updates, setUpdates] = useState<MarketUpdate[]>([])

  useEffect(() => {
    // Initial updates
    setUpdates([
      {
        id: "1",
        message: "Bitcoin breaks $70,000 resistance level",
        time: "Just now",
        type: "news",
      },
      {
        id: "2",
        message: "Large buy order: 2.5 BTC at $68,245",
        time: "2 min ago",
        type: "buy",
      },
      {
        id: "3",
        message: "EUR/USD approaching key support level",
        time: "5 min ago",
        type: "alert",
      },
    ])

    // Simulate real-time updates
    const interval = setInterval(() => {
      const newUpdate = generateRandomUpdate()
      setUpdates((prev) => [newUpdate, ...prev.slice(0, 4)])
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  const generateRandomUpdate = (): MarketUpdate => {
    const types = ["buy", "sell", "news", "alert"] as const
    const type = types[Math.floor(Math.random() * types.length)]

    let message = ""
    switch (type) {
      case "buy":
        message = `Large buy order: ${(Math.random() * 5).toFixed(1)} ${Math.random() > 0.5 ? "BTC" : "ETH"} at $${Math.floor(Math.random() * 10000) + 60000}`
        break
      case "sell":
        message = `Sell order executed: ${(Math.random() * 10).toFixed(1)} ${Math.random() > 0.5 ? "SOL" : "ETH"} at $${Math.floor(Math.random() * 5000) + 1000}`
        break
      case "news":
        const newsItems = [
          "Market volatility increases as Fed announces policy review",
          "New regulations expected to impact crypto trading",
          "Major bank announces blockchain integration",
          "Trading volume reaches 3-month high",
        ]
        message = newsItems[Math.floor(Math.random() * newsItems.length)]
        break
      case "alert":
        const pairs = ["BTC/USD", "ETH/USD", "EUR/USD", "GBP/USD"]
        const actions = [
          "approaching key resistance",
          "breaking support level",
          "showing bullish pattern",
          "experiencing high volatility",
        ]
        message = `${pairs[Math.floor(Math.random() * pairs.length)]} ${actions[Math.floor(Math.random() * actions.length)]}`
        break
    }

    return {
      id: Math.random().toString(36).substring(2, 9),
      message,
      time: "Just now",
      type,
    }
  }

  const getBadgeVariant = (type: MarketUpdate["type"]) => {
    switch (type) {
      case "buy":
        return "default"
      case "sell":
        return "destructive"
      case "news":
        return "secondary"
      case "alert":
        return "outline"
      default:
        return "default"
    }
  }

  return (
    <Card className="bg-gradient-to-br from-background to-primary/5">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Market Pulse</CardTitle>
            <CardDescription>Real-time market updates</CardDescription>
          </div>
          <Sparkles className="h-5 w-5 text-primary animate-pulse-glow" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {updates.map((update, index) => (
            <div
              key={update.id}
              className={`flex items-start justify-between ${index === 0 ? "animate-shimmer bg-gradient-to-r from-transparent via-primary/5 to-transparent bg-[length:400%_100%]" : ""}`}
            >
              <div>
                <div className="font-medium">{update.message}</div>
                <div className="text-sm text-muted-foreground">{update.time}</div>
              </div>
              <Badge variant={getBadgeVariant(update.type)} className="ml-2">
                {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
