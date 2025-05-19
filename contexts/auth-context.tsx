"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

interface User {
  id: string
  name: string
  email: string
  walletAddress?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("blockfusion_user")
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
        setIsAuthenticated(true)
      } catch (error) {
        console.error("Failed to parse stored user:", error)
        localStorage.removeItem("blockfusion_user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, we'll create a mock user
      const mockUser = {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        name: email.split("@")[0],
        email,
      }

      setUser(mockUser)
      setIsAuthenticated(true)
      localStorage.setItem("blockfusion_user", JSON.stringify(mockUser))

      toast({
        title: "Login successful",
        description: `Welcome back, ${mockUser.name}!`,
      })

      // Redirect to dashboard
      router.push("/dashboard")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Invalid email or password",
      })
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, we'll create a mock user
      const mockUser = {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        name,
        email,
      }

      setUser(mockUser)
      setIsAuthenticated(true)
      localStorage.setItem("blockfusion_user", JSON.stringify(mockUser))

      toast({
        title: "Account created",
        description: `Welcome to BlockFusion, ${name}!`,
      })

      // Redirect to dashboard
      router.push("/dashboard")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Signup failed",
        description: "Failed to create account",
      })
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("blockfusion_user")
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    })
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
