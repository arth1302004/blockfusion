"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp, DollarSign, Percent, TrendingUp } from "lucide-react"

export function PortfolioOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Overview</CardTitle>
        <CardDescription>Your tokenized assets across markets</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="summary">
          <TabsList className="grid w-full max-w-[400px] grid-cols-3">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="allocation">Allocation</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="summary" className="mt-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-2 bg-primary/10">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Total Value</div>
                      <div className="text-2xl font-bold">$12,345.67</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-2 bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">24h Change</div>
                      <div className="flex items-center text-2xl font-bold text-green-500">
                        <ArrowUp className="h-4 w-4 mr-1" />
                        $234.56
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-2 bg-primary/10">
                      <Percent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">24h Percent</div>
                      <div className="flex items-center text-2xl font-bold text-green-500">
                        <ArrowUp className="h-4 w-4 mr-1" />
                        1.94%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="allocation" className="mt-4">
            <div className="text-center p-12 text-muted-foreground">
              Portfolio allocation chart will be displayed here
            </div>
          </TabsContent>
          <TabsContent value="history" className="mt-4">
            <div className="text-center p-12 text-muted-foreground">Portfolio history chart will be displayed here</div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
