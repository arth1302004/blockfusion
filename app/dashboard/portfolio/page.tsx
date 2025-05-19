import { DashboardLayout } from "@/components/dashboard-layout"
import { PortfolioOverview } from "@/components/portfolio-overview"
import { PortfolioAssets } from "@/components/portfolio-assets"
import { PortfolioPerformance } from "@/components/portfolio-performance"

export default function PortfolioPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <PortfolioOverview />
        <div className="grid md:grid-cols-2 gap-6">
          <PortfolioAssets />
          <PortfolioPerformance />
        </div>
      </div>
    </DashboardLayout>
  )
}
