"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/contexts/auth-context"

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [balance, setBalance] = useState("0")
  const { toast } = useToast()
  const { isAuthenticated, user } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      checkIfWalletIsConnected()
    }
  }, [isAuthenticated])

  const checkIfWalletIsConnected = async () => {
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== "undefined") {
        // Get accounts
        const accounts = await window.ethereum.request({ method: "eth_accounts" })

        if (accounts.length > 0) {
          setIsConnected(true)
          setWalletAddress(accounts[0])

          // Get balance
          const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [accounts[0], "latest"],
          })

          // Convert balance from wei to ETH
          const ethBalance = Number.parseInt(balance, 16) / 1e18
          setBalance(ethBalance.toFixed(4))
        }
      }
    } catch (error) {
      console.error("Error checking wallet connection:", error)
    }
  }

  const connectWallet = async () => {
    if (!isAuthenticated) {
      toast({
        variant: "destructive",
        title: "Authentication Required",
        description: "Please login or create an account to connect your wallet",
      })
      return
    }

    try {
      if (typeof window.ethereum !== "undefined") {
        // Request accounts
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })

        setIsConnected(true)
        setWalletAddress(accounts[0])

        // Get balance
        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0], "latest"],
        })

        // Convert balance from wei to ETH
        const ethBalance = Number.parseInt(balance, 16) / 1e18
        setBalance(ethBalance.toFixed(4))

        toast({
          title: "Wallet Connected",
          description: `Connected to ${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`,
        })
      } else {
        toast({
          variant: "destructive",
          title: "MetaMask not installed",
          description: "Please install MetaMask to connect your wallet",
        })
      }
    } catch (error) {
      console.error("Error connecting wallet:", error)
      toast({
        variant: "destructive",
        title: "Connection Failed",
        description: "Failed to connect to wallet",
      })
    }
  }

  return (
    <Card className="w-full bg-gradient-to-br from-primary/10 to-background">
      <CardHeader>
        <CardTitle>Wallet</CardTitle>
        <CardDescription>Connect your wallet to start trading</CardDescription>
      </CardHeader>
      <CardContent>
        {!isAuthenticated ? (
          <div className="text-center p-4">
            <p className="mb-4 text-muted-foreground">Please login or create an account to access wallet features</p>
            <Button className="w-full" disabled>
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </div>
        ) : isConnected ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Address</div>
              <div className="font-medium">
                {walletAddress.substring(0, 6)}...{walletAddress.substring(38)}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Balance</div>
              <div className="font-medium">{balance} ETH</div>
            </div>
            <Button className="w-full" variant="outline">
              View Details
            </Button>
          </div>
        ) : (
          <Button className="w-full" onClick={connectWallet}>
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
