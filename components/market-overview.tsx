"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { marketData } from "@/lib/market-data"
import { AnimatedPriceCard } from "@/components/animated-price-card"

export function MarketOverview() {
  const [activeTab, setActiveTab] = useState("forex")
  const [markets, setMarkets] = useState(marketData.forex)

  useEffect(() => {
    setMarkets(marketData[activeTab])
  }, [activeTab])

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>Real-time market data across multiple markets</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="forex" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="forex">Forex</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
          </TabsList>
          <TabsContent value="forex" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              {markets.map((market) => (
                <AnimatedPriceCard
                  key={market.symbol}
                  symbol={market.symbol}
                  name={market.name}
                  price={market.price}
                  change={market.change}
                  type="forex"
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="crypto" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              {markets.map((market) => (
                <AnimatedPriceCard
                  key={market.symbol}
                  symbol={market.symbol}
                  name={market.name}
                  price={market.price}
                  change={market.change}
                  type="crypto"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
