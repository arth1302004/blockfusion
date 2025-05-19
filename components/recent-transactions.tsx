"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { recentTransactions } from "@/lib/market-data"

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your recent trading activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTransactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{transaction.symbol}</div>
                <div className="text-sm text-muted-foreground">{new Date(transaction.date).toLocaleDateString()}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <div className="font-medium">{transaction.amount}</div>
                  <div className="text-sm text-muted-foreground">${transaction.value}</div>
                </div>
                <Badge variant={transaction.type === "buy" ? "default" : "secondary"}>
                  {transaction.type === "buy" ? "Buy" : "Sell"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
