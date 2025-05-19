import { DashboardLayout } from "@/components/dashboard-layout"
import { MarketsList } from "@/components/markets-list"
import { MarketTrends } from "@/components/market-trends"

export default function MarketsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Markets</h1>
        <MarketTrends />
        <MarketsList />
      </div>
    </DashboardLayout>
  )
}
