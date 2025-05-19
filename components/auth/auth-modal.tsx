"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { LoginForm } from "@/components/auth/login-form"
import { SignupForm } from "@/components/auth/signup-form"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultView?: "login" | "signup"
}

export function AuthModal({ isOpen, onClose, defaultView = "login" }: AuthModalProps) {
  const [view, setView] = useState<"login" | "signup">(defaultView)

  const toggleView = () => {
    setView(view === "login" ? "signup" : "login")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {view === "login" ? <LoginForm onToggleForm={toggleView} /> : <SignupForm onToggleForm={toggleView} />}
      </DialogContent>
    </Dialog>
  )
}
