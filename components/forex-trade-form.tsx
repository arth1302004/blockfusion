"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/contexts/auth-context"

interface ForexTradeFormProps {
  pair: string
  price: string
}

export function ForexTradeForm({ pair, price }: ForexTradeFormProps) {
  const [amount, setAmount] = useState("")
  const [total, setTotal] = useState("")
  const { toast } = useToast()
  const { isAuthenticated } = useAuth()

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAmount(value)
    if (value) {
      const totalValue = (Number.parseFloat(value) * Number.parseFloat(price)).toFixed(2)
      setTotal(totalValue)
    } else {
      setTotal("")
    }
  }

  const handleTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setTotal(value)
    if (value) {
      const amountValue = (Number.parseFloat(value) / Number.parseFloat(price)).toFixed(4)
      setAmount(amountValue)
    } else {
      setAmount("")
    }
  }

  const handleBuy = () => {
    if (!isAuthenticated) {
      toast({
        variant: "destructive",
        title: "Authentication Required",
        description: "Please login or create an account to trade",
      })
      return
    }

    if (!amount || Number.parseFloat(amount) <= 0) {
      toast({
        variant: "destructive",
        title: "Invalid amount",
        description: "Please enter a valid amount",
      })
      return
    }

    toast({
      title: "Order Placed",
      description: `Successfully bought ${amount} ${pair} for $${total}`,
    })

    setAmount("")
    setTotal("")
  }

  const handleSell = () => {
    if (!isAuthenticated) {
      toast({
        variant: "destructive",
        title: "Authentication Required",
        description: "Please login or create an account to trade",
      })
      return
    }

    if (!amount || Number.parseFloat(amount) <= 0) {
      toast({
        variant: "destructive",
        title: "Invalid amount",
        description: "Please enter a valid amount",
      })
      return
    }

    toast({
      title: "Order Placed",
      description: `Successfully sold ${amount} ${pair} for $${total}`,
    })

    setAmount("")
    setTotal("")
  }

  return (
    <Tabs defaultValue="buy">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="buy">Buy</TabsTrigger>
        <TabsTrigger value="sell">Sell</TabsTrigger>
      </TabsList>
      <TabsContent value="buy" className="mt-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="buy-amount">Amount ({pair.split("/")[0]})</Label>
          <Input
            id="buy-amount"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={handleAmountChange}
            disabled={!isAuthenticated}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="buy-price">Price ({pair.split("/")[1]})</Label>
          <Input id="buy-price" type="text" value={price} disabled />
        </div>
        <div className="space-y-2">
          <Label htmlFor="buy-total">Total ({pair.split("/")[1]})</Label>
          <Input
            id="buy-total"
            type="number"
            placeholder="0.00"
            value={total}
            onChange={handleTotalChange}
            disabled={!isAuthenticated}
          />
        </div>
        <Button className="w-full" onClick={handleBuy} disabled={!isAuthenticated}>
          {isAuthenticated ? `Buy ${pair.split("/")[0]}` : "Login to Trade"}
        </Button>
        {!isAuthenticated && (
          <p className="text-xs text-center text-muted-foreground">You need to be logged in to trade</p>
        )}
      </TabsContent>
      <TabsContent value="sell" className="mt-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="sell-amount">Amount ({pair.split("/")[0]})</Label>
          <Input
            id="sell-amount"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={handleAmountChange}
            disabled={!isAuthenticated}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sell-price">Price ({pair.split("/")[1]})</Label>
          <Input id="sell-price" type="text" value={price} disabled />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sell-total">Total ({pair.split("/")[1]})</Label>
          <Input
            id="sell-total"
            type="number"
            placeholder="0.00"
            value={total}
            onChange={handleTotalChange}
            disabled={!isAuthenticated}
          />
        </div>
        <Button className="w-full" variant="destructive" onClick={handleSell} disabled={!isAuthenticated}>
          {isAuthenticated ? `Sell ${pair.split("/")[0]}` : "Login to Trade"}
        </Button>
        {!isAuthenticated && (
          <p className="text-xs text-center text-muted-foreground">You need to be logged in to trade</p>
        )}
      </TabsContent>
    </Tabs>
  )
}
