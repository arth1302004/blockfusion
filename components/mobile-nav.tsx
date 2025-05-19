"use client"

import { BarChart3, Briefcase, Coins, CreditCard, Globe, Home, LineChart, Settings, Users, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="p-0">
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Block</span>
            <span>Fusion</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <nav className="flex flex-col gap-1 p-4">
            <Link
              href="/dashboard"
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === "/dashboard" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
              onClick={onClose}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/markets"
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === "/dashboard/markets" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
              onClick={onClose}
            >
              <BarChart3 className="h-4 w-4" />
              Markets
            </Link>
            <div className="py-2">
              <div className="px-3 text-xs font-medium text-muted-foreground">Markets</div>
              <div className="mt-2 space-y-1">
                <Link
                  href="/dashboard/markets/forex"
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/markets/forex"
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                  )}
                  onClick={onClose}
                >
                  <Globe className="h-4 w-4" />
                  Forex
                </Link>
                <Link
                  href="/dashboard/markets/crypto"
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/markets/crypto"
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                  )}
                  onClick={onClose}
                >
                  <Coins className="h-4 w-4" />
                  Cryptocurrency
                </Link>
              </div>
            </div>
            <Link
              href="/dashboard/portfolio"
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === "/dashboard/portfolio" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
              onClick={onClose}
            >
              <Briefcase className="h-4 w-4" />
              Portfolio
            </Link>
            <Link
              href="/dashboard/transactions"
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === "/dashboard/transactions" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
              onClick={onClose}
            >
              <CreditCard className="h-4 w-4" />
              Transactions
            </Link>
            <Link
              href="/dashboard/analytics"
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === "/dashboard/analytics" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
              onClick={onClose}
            >
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
            <div className="py-2">
              <div className="px-3 text-xs font-medium text-muted-foreground">Account</div>
              <div className="mt-2 space-y-1">
                <Link
                  href="/dashboard/settings"
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/settings" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                  )}
                  onClick={onClose}
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
                <Link
                  href="/dashboard/referrals"
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === "/dashboard/referrals" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                  )}
                  onClick={onClose}
                >
                  <Users className="h-4 w-4" />
                  Referrals
                </Link>
              </div>
            </div>
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
