"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { portfolioPerformance } from "@/lib/market-data"
import Chart from "chart.js/auto"

export function PortfolioPerformance() {
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
          labels: portfolioPerformance.labels,
          datasets: [
            {
              label: "Portfolio Value",
              data: portfolioPerformance.data,
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
        <CardTitle>Performance</CardTitle>
        <CardDescription>Your portfolio performance over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <canvas ref={chartRef}></canvas>
        </div>
      </CardContent>
    </Card>
  )
}
