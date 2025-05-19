"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"
import { portfolioAssets } from "@/lib/market-data"

export function PortfolioAssets() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Assets</CardTitle>
        <CardDescription>Tokenized assets in your portfolio</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {portfolioAssets.map((asset, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{asset.symbol}</div>
                <div className="text-sm text-muted-foreground">{asset.name}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">
                  {asset.amount} {asset.symbol}
                </div>
                <div className="flex items-center justify-end text-sm text-muted-foreground">
                  ${asset.value}
                  <span className={`ml-2 flex items-center ${asset.change > 0 ? "text-green-500" : "text-red-500"}`}>
                    {asset.change > 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                    {asset.change}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
