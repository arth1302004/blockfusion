"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { AuthModal } from "@/components/auth/auth-modal"
import { useAuth } from "@/contexts/auth-context"
import { ArrowRight, BarChart2, Check, Globe, Shield, Sparkles, TrendingUp } from "lucide-react"
import Image from "next/image"

export function LandingPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authModalView, setAuthModalView] = useState<"login" | "signup">("login")
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard")
    }

    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAuthenticated, router])

  const openLoginModal = () => {
    setAuthModalView("login")
    setAuthModalOpen(true)
  }

  const openSignupModal = () => {
    setAuthModalView("signup")
    setAuthModalOpen(true)
  }

  const features = [
    {
      title: "Multi-Market Trading",
      description: "Trade seamlessly across Forex and Cryptocurrency markets with a single account",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Low Brokerage Fees",
      description: "Enjoy industry-leading low brokerage fees starting from just 0.05%",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Advanced Security",
      description: "Your assets are protected with military-grade encryption and blockchain technology",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Real-time Analytics",
      description: "Make informed decisions with our powerful real-time market analytics",
      icon: <BarChart2 className="h-6 w-6" />,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-2xl">
            <span className="text-primary">Block</span>
            <span>Fusion</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" onClick={openLoginModal}>
              Login
            </Button>
            <Button onClick={openSignupModal}>Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                <Sparkles className="mr-1 h-4 w-4" />
                India's Premier Trading Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                India's Very Own <span className="text-primary">Forex & Crypto</span> Trading Platform
              </h1>
              <p className="text-xl text-muted-foreground">
                Experience seamless trading with low brokerage fees, advanced security, and exceptional customer
                service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={openSignupModal} className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">{i}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">10,000+</span> traders trust BlockFusion
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-purple-600 opacity-30 blur-xl"></div>
              <Card className="relative overflow-hidden border-2 border-primary/20">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Trading Dashboard"
                      width={800}
                      height={600}
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose BlockFusion?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with exceptional service to provide the best trading experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-primary/10 border border-primary/20 shadow-lg"
                        : "border border-transparent"
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex gap-4">
                      <div
                        className={`rounded-lg p-2 ${
                          activeFeature === index ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-purple-600 opacity-30 blur-xl"></div>
              <Card className="relative h-[400px] overflow-hidden border-2 border-primary/20">
                <CardContent className="p-6 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-6 mx-auto rounded-full bg-primary/20 p-4 w-16 h-16 flex items-center justify-center">
                      {features[activeFeature].icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{features[activeFeature].title}</h3>
                    <p className="text-muted-foreground">{features[activeFeature].description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Brokerage Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Competitive Brokerage Rates</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trade with confidence knowing you're getting the best rates in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Forex Trading",
                price: "0.05%",
                features: ["No minimum fees", "Tight spreads", "24/7 trading", "Fractional lots"],
              },
              {
                title: "Crypto Trading",
                price: "0.1%",
                features: [
                  "Zero withdrawal fees",
                  "Cold storage security",
                  "Multiple cryptocurrencies",
                  "Instant deposits",
                ],
                popular: true,
              },
              {
                title: "Premium Account",
                price: "Custom",
                features: ["Dedicated account manager", "Advanced API access", "Priority support", "Custom solutions"],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`overflow-hidden ${
                  plan.popular ? "border-primary shadow-lg shadow-primary/20 relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">Popular</div>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> per trade</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? "" : "variant-outline"}`}>Get Started</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Traders Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied traders who have chosen BlockFusion for their trading needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "BlockFusion has transformed my trading experience. The platform is intuitive and the brokerage rates are unbeatable.",
                name: "Rajesh Kumar",
                title: "Professional Forex Trader",
              },
              {
                quote:
                  "As a crypto enthusiast, I've tried many platforms, but BlockFusion stands out with its security features and excellent customer service.",
                name: "Priya Sharma",
                title: "Cryptocurrency Investor",
              },
              {
                quote:
                  "The real-time analytics and low fees make BlockFusion my go-to platform for all my trading activities.",
                name: "Amit Patel",
                title: "Day Trader",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="inline-block">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join India's premier trading platform today and experience the BlockFusion difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={openSignupModal}>
              Create Account
            </Button>
            <Button size="lg" variant="outline" onClick={openLoginModal}>
              Login
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <span className="text-primary">Block</span>
                <span>Fusion</span>
              </div>
              <p className="text-muted-foreground mb-4">
                India's premier blockchain-based trading platform for forex and cryptocurrency markets.
              </p>
              <div className="flex gap-4">
                {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                  <Button key={social} variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                    <span className="sr-only">{social}</span>
                    <div className="h-4 w-4 bg-foreground/80 rounded-full"></div>
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                {["Forex Trading", "Crypto Trading", "API Access", "Mobile App"].map((item) => (
                  <li key={item}>
                    <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {["Documentation", "Guides", "API Reference", "Market News"].map((item) => (
                  <li key={item}>
                    <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {["About Us", "Careers", "Contact", "Legal"].map((item) => (
                  <li key={item}>
                    <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} BlockFusion. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} defaultView={authModalView} />
    </div>
  )
}
