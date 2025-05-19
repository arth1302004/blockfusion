"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export function WelcomeBanner() {
  const [dismissed, setDismissed] = useState(false)
  const { isAuthenticated, user } = useAuth()

  if (dismissed) {
    return null
  }

  return (
    <Card className="bg-gradient-to-r from-primary/20 via-primary/10 to-background border-none shadow-lg overflow-hidden relative">
      <div className="absolute top-0 right-0 p-2">
        <Button variant="ghost" size="icon" onClick={() => setDismissed(true)}>
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-float">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-primary"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">
              {isAuthenticated ? `Welcome back, ${user?.name}!` : "Welcome to BlockFusion Trading Platform"}
            </h2>
            <p className="text-muted-foreground mt-1">
              {isAuthenticated
                ? "Continue trading tokenized assets across global markets."
                : "Create an account to start trading tokenized assets across global markets."}
            </p>
          </div>
          {!isAuthenticated && <Button className="shrink-0">Get Started</Button>}
        </div>
      </CardContent>
    </Card>
  )
}
