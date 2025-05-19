"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { MarketOverview } from "@/components/market-overview"
import { RecentTransactions } from "@/components/recent-transactions"
import { TopPerformers } from "@/components/top-performers"
import { WalletConnect } from "@/components/wallet-connect"
import { MarketPulse } from "@/components/market-pulse"
import { WelcomeBanner } from "@/components/welcome-banner"
import { useAuth } from "@/contexts/auth-context"

export function DashboardContent() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <WelcomeBanner />
        <div className="flex flex-col md:flex-row gap-6">
          <WalletConnect />
          <MarketOverview />
        </div>
        <MarketPulse />
        <div className="grid md:grid-cols-2 gap-6">
          <TopPerformers />
          <RecentTransactions />
        </div>
      </div>
    </DashboardLayout>
  )
}
