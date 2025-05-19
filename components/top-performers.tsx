"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp } from "lucide-react"
import { topPerformers } from "@/lib/market-data"

export function TopPerformers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performers</CardTitle>
        <CardDescription>Best performing assets across markets</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="daily">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="daily" className="space-y-4 mt-4">
            {topPerformers.daily.map((asset, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="font-medium">{asset.symbol}</div>
                  <div className="text-sm text-muted-foreground">{asset.name}</div>
                </div>
                <div className="flex items-center text-green-500">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  {asset.change}%
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="weekly" className="space-y-4 mt-4">
            {topPerformers.weekly.map((asset, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="font-medium">{asset.symbol}</div>
                  <div className="text-sm text-muted-foreground">{asset.name}</div>
                </div>
                <div className="flex items-center text-green-500">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  {asset.change}%
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="monthly" className="space-y-4 mt-4">
            {topPerformers.monthly.map((asset, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="font-medium">{asset.symbol}</div>
                  <div className="text-sm text-muted-foreground">{asset.name}</div>
                </div>
                <div className="flex items-center text-green-500">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  {asset.change}%
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
