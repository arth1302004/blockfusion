"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { useAuth } from "@/contexts/auth-context"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { isAuthenticated } = useAuth()

  return (
    <div className="flex min-h-screen bg-background">
      {isAuthenticated && <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
      <div className="flex flex-col flex-1">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        {isAuthenticated && <MobileNav open={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
        <main className="flex-1 p-4 md:p-6">{children}</main>
        <footer className="border-t py-4 px-6">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} BlockFusion. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}
