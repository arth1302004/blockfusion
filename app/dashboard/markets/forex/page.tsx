import { DashboardLayout } from "@/components/dashboard-layout"
import { ForexMarket } from "@/components/forex-market"

export default function ForexPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Forex Market</h1>
        <ForexMarket />
      </div>
    </DashboardLayout>
  )
}
