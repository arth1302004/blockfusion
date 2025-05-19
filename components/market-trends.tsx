"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { marketTrends } from "@/lib/market-data"
import Chart from "chart.js/auto"

export function MarketTrends() {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      // Create new chart
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: marketTrends.labels,
          datasets: [
            {
              label: "Market Trend",
              data: marketTrends.data,
              borderColor: "hsl(var(--primary))",
              backgroundColor: "rgba(var(--primary), 0.1)",
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                color: "hsl(var(--border) / 0.2)",
              },
              ticks: {
                callback: (value) => "$" + value,
              },
            },
          },
        },
      })
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Trends</CardTitle>
        <CardDescription>Market performance over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="1d">
          <TabsList className="grid w-full max-w-[400px] grid-cols-5">
            <TabsTrigger value="1d">1D</TabsTrigger>
            <TabsTrigger value="1w">1W</TabsTrigger>
            <TabsTrigger value="1m">1M</TabsTrigger>
            <TabsTrigger value="3m">3M</TabsTrigger>
            <TabsTrigger value="1y">1Y</TabsTrigger>
          </TabsList>
          <div className="h-[300px] mt-4">
            <canvas ref={chartRef}></canvas>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
