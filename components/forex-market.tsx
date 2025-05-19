"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowDown, ArrowUp, Search } from "lucide-react"
import { allMarkets } from "@/lib/market-data"
import { ForexChart } from "@/components/forex-chart"
import { ForexTradeForm } from "@/components/forex-trade-form"

export function ForexMarket() {
  const [selectedPair, setSelectedPair] = useState(allMarkets.forex[0])
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMarkets = allMarkets.forex.filter(
    (market) =>
      market.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{selectedPair.symbol}</CardTitle>
              <CardDescription>{selectedPair.name}</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{selectedPair.price}</div>
              <div
                className={`flex items-center justify-end text-sm ${selectedPair.change > 0 ? "text-green-500" : "text-red-500"}`}
              >
                {selectedPair.change > 0 ? (
                  <ArrowUp className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 mr-1" />
                )}
                {selectedPair.change}%
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="chart">
            <TabsList className="grid w-full max-w-[400px] grid-cols-3">
              <TabsTrigger value="chart">Chart</TabsTrigger>
              <TabsTrigger value="orderbook">Orderbook</TabsTrigger>
              <TabsTrigger value="trades">Trades</TabsTrigger>
            </TabsList>
            <TabsContent value="chart" className="mt-4">
              <ForexChart pair={selectedPair.symbol} />
            </TabsContent>
            <TabsContent value="orderbook" className="mt-4">
              <div className="text-center p-12 text-muted-foreground">Orderbook will be displayed here</div>
            </TabsContent>
            <TabsContent value="trades" className="mt-4">
              <div className="text-center p-12 text-muted-foreground">Recent trades will be displayed here</div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Trade</CardTitle>
            <CardDescription>Buy or sell currency pairs</CardDescription>
          </CardHeader>
          <CardContent>
            <ForexTradeForm pair={selectedPair.symbol} price={selectedPair.price} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Market Pairs</CardTitle>
            <CardDescription>Select a currency pair to trade</CardDescription>
            <div className="relative mt-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search pairs..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {filteredMarkets.map((market) => (
                <Button
                  key={market.symbol}
                  variant="ghost"
                  className="w-full justify-between"
                  onClick={() => setSelectedPair(market)}
                >
                  <div className="font-medium">{market.symbol}</div>
                  <div className={`flex items-center ${market.change > 0 ? "text-green-500" : "text-red-500"}`}>
                    {market.change > 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                    {market.change}%
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
