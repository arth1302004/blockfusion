"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUp, Search } from "lucide-react"
import { allMarkets } from "@/lib/market-data"

export function MarketsList() {
  const [activeTab, setActiveTab] = useState("forex")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMarkets = allMarkets[activeTab].filter(
    (market) =>
      market.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Markets</CardTitle>
        <CardDescription>Browse and search all available markets</CardDescription>
        <div className="flex items-center gap-2 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search markets..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline">Filter</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="forex" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="forex">Forex</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
          </TabsList>
          <TabsContent value="forex" className="mt-4">
            <div className="rounded-md border">
              <div className="grid grid-cols-4 p-4 font-medium border-b">
                <div>Symbol</div>
                <div>Name</div>
                <div className="text-right">Price</div>
                <div className="text-right">Change</div>
              </div>
              <div className="divide-y">
                {filteredMarkets.map((market) => (
                  <div key={market.symbol} className="grid grid-cols-4 p-4 hover:bg-muted/50">
                    <div className="font-medium">{market.symbol}</div>
                    <div className="text-muted-foreground">{market.name}</div>
                    <div className="text-right">{market.price}</div>
                    <div
                      className={`text-right flex items-center justify-end ${market.change > 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {market.change > 0 ? (
                        <ArrowUp className="h-3 w-3 mr-1" />
                      ) : (
                        <ArrowDown className="h-3 w-3 mr-1" />
                      )}
                      {market.change}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="crypto" className="mt-4">
            <div className="rounded-md border">
              <div className="grid grid-cols-4 p-4 font-medium border-b">
                <div>Symbol</div>
                <div>Name</div>
                <div className="text-right">Price</div>
                <div className="text-right">Change</div>
              </div>
              <div className="divide-y">
                {filteredMarkets.map((market) => (
                  <div key={market.symbol} className="grid grid-cols-4 p-4 hover:bg-muted/50">
                    <div className="font-medium">{market.symbol}</div>
                    <div className="text-muted-foreground">{market.name}</div>
                    <div className="text-right">{market.price}</div>
                    <div
                      className={`text-right flex items-center justify-end ${market.change > 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {market.change > 0 ? (
                        <ArrowUp className="h-3 w-3 mr-1" />
                      ) : (
                        <ArrowDown className="h-3 w-3 mr-1" />
                      )}
                      {market.change}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
