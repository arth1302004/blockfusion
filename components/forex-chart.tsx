"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Chart from "chart.js/auto"

interface ForexChartProps {
  pair: string
}

export function ForexChart({ pair }: ForexChartProps) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      // Generate random data for demo
      const labels = []
      const data = []
      const now = new Date()
      for (let i = 30; i >= 0; i--) {
        const date = new Date(now)
        date.setDate(now.getDate() - i)
        labels.push(date.toLocaleDateString())

        // Generate random price data
        if (i === 30) {
          data.push(Number.parseFloat(pair === "EUR/USD" ? "1.08" : "1.25"))
        } else {
          const prevValue = data[data.length - 1]
          const change = (Math.random() - 0.5) * 0.01
          data.push(Number.parseFloat((prevValue + change).toFixed(4)))
        }
      }

      const ctx = chartRef.current.getContext("2d")

      // Create new chart
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: pair,
              data: data,
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
  }, [pair])

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Button variant="outline" size="sm">
          1H
        </Button>
        <Button variant="outline" size="sm">
          4H
        </Button>
        <Button variant="outline" size="sm">
          1D
        </Button>
        <Button variant="outline" size="sm">
          1W
        </Button>
        <Button variant="outline" size="sm">
          1M
        </Button>
      </div>
      <div className="h-[400px]">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  )
}
