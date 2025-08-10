'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Truck, Shield, Zap, ArrowRight, Menu, User, Search, Leaf } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function HomePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">tdx</span>
                </div>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/marketplace" className="text-gray-700 hover:text-green-600">
                Marketplace
              </Link>
              <Link href="/custom-order" className="text-gray-700 hover:text-green-600">
                Custom Order
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600">
                About us
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 hidden sm:inline">English</span>
              <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Welcome to TDX</DialogTitle>
                  </DialogHeader>
                  <Tabs defaultValue="signin" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="signin">Sign In</TabsTrigger>
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin" className="space-y-4">
                      <form onSubmit={(e) => {
                        e.preventDefault()
                        setIsLoginModalOpen(false)
                        window.location.href = '/account'
                      }}>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="signin-email">Email</Label>
                            <Input id="signin-email" type="email" placeholder="Enter your email" required />
                          </div>
                          <div>
                            <Label htmlFor="signin-password">Password</Label>
                            <Input id="signin-password" type="password" placeholder="Enter your password" required />
                          </div>
                          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                            Sign In
                          </Button>
                        </div>
                      </form>
                      <div className="text-center">
                        <a href="#" className="text-sm text-green-600 hover:underline">
                          Forgot your password?
                        </a>
                      </div>
                    </TabsContent>
                    <TabsContent value="signup" className="space-y-4">
                      <form onSubmit={(e) => {
                        e.preventDefault()
                        setIsLoginModalOpen(false)
                        window.location.href = '/account'
                      }}>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="signup-name">Full Name</Label>
                            <Input id="signup-name" type="text" placeholder="Enter your full name" required />
                          </div>
                          <div>
                            <Label htmlFor="signup-email">Email</Label>
                            <Input id="signup-email" type="email" placeholder="Enter your email" required />
                          </div>
                          <div>
                            <Label htmlFor="signup-password">Password</Label>
                            <Input id="signup-password" type="password" placeholder="Create a password" required />
                          </div>
                          <div>
                            <Label htmlFor="signup-confirm">Confirm Password</Label>
                            <Input id="signup-confirm" type="password" placeholder="Confirm your password" required />
                          </div>
                          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                            Sign Up
                          </Button>
                        </div>
                      </form>
                      <div className="text-center text-sm text-gray-600">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                      </div>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
              <Button className="md:hidden" variant="ghost" size="sm">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-green-600 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          {/* Floating agricultural images */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-lg overflow-hidden opacity-80">
            <Image src="/field-of-ripe-corn.png" alt="Corn" width={80} height={80} className="object-cover" />
          </div>
          <div className="absolute top-16 right-20 w-24 h-24 rounded-lg overflow-hidden opacity-80">
            <Image src="/ripe-tomatoes.png" alt="Tomatoes" width={96} height={96} className="object-cover" />
          </div>
          <div className="absolute top-32 right-10 w-16 h-16 rounded-lg overflow-hidden opacity-80">
            <Image src="/lush-green-leaves.png" alt="Leaves" width={64} height={64} className="object-cover" />
          </div>
          <div className="absolute bottom-20 left-16 w-18 h-18 rounded-lg overflow-hidden opacity-80">
            <Image src="/pile-of-coffee-beans.png" alt="Coffee" width={72} height={72} className="object-cover" />
          </div>
          <div className="absolute bottom-32 right-16 w-20 h-20 rounded-lg overflow-hidden opacity-80">
            <Image src="/fresh-cassava-roots.png" alt="Cassava" width={80} height={80} className="object-cover" />
          </div>
          <div className="absolute top-1/2 left-8 w-16 h-16 rounded-lg overflow-hidden opacity-80">
            <Image src="/assorted-grains.png" alt="Grains" width={64} height={64} className="object-cover" />
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Connecting <span className="underline decoration-white/30">buyers</span> to<br />
            quality agricultural <span className="underline decoration-white/30">products</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            TDX Agri Marketplace provides direct access to high-quality 
            crop aggregations with flexible fulfillment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Browse Marketplace
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Join TDX
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Commodities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured commodities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image 
                  src="/corn-kernels.png" 
                  alt="Maize" 
                  width={300} 
                  height={200} 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Maize</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Available in 5 locations<br />
                  500+ MT available<br />
                  Starting from ₦180/kg
                </p>
                <Button variant="outline" className="w-full">
                  View details
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image 
                  src="/placeholder-y17cz.png" 
                  alt="Cashew" 
                  width={300} 
                  height={200} 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cashew</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Available in 3 locations<br />
                  100+ MT available<br />
                  Starting from ₦800/kg
                </p>
                <Button variant="outline" className="w-full">
                  View details
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image 
                  src="/placeholder-nll04.png" 
                  alt="Cassava" 
                  width={300} 
                  height={200} 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cassava</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Available in 4 locations<br />
                  200+ MT available<br />
                  Starting from ₦120/kg
                </p>
                <Button variant="outline" className="w-full">
                  View details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Source with us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Source with us</h2>
              <p className="text-gray-600 mb-6">
                You can view our large database sourced from verified aggregators. You can also let us know your products and we will aggregate the right commodities for you. You can also choose to aggregate yourself with our tools.
              </p>
              <Link href="#" className="text-green-600 hover:underline">
                Contact here
              </Link>
            </div>

            <Card className="bg-green-100 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Self-aggregate</h3>
                <p className="text-green-700 text-sm mb-4">
                  Use our tools to aggregate suppliers
                </p>
                <ul className="space-y-2 text-sm text-green-700 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    See available quantities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Personalized pricing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Largest selections of commodities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Filter by product quality
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Start browsing
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">TDX aggregates</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Let us aggregate the products for you
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Tell us your criteria
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Get quotes within 24 hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Largest selections of commodities
                  </li>
                </ul>
                <p className="text-xs text-gray-600 mb-4">More custom rates</p>
                <Button variant="outline" className="w-full">
                  Get quotes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose TDX */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose TDX Agri Marketplace
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Direct connections</h3>
              <p className="text-gray-600 text-sm">
                Connect directly with verified large-scale crop aggregators without intermediaries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible fulfillment</h3>
              <p className="text-gray-600 text-sm">
                Choose between arranging your own pickup or let TDX handle aggregation and delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality assurance</h3>
              <p className="text-gray-600 text-sm">
                All aggregators are verified and products meet strict quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible fulfillment</h3>
              <p className="text-gray-600 text-sm">
                Choose between arranging your own pickup or let TDX handle aggregation and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How it works</h2>
              <p className="text-gray-600 mb-8">
                Our simple process makes buying agricultural products efficient and transparent.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Browse & Select</h3>
                    <p className="text-gray-600 text-sm">
                      Browse our marketplace and select the products you need from verified aggregators.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Request Aggregation</h3>
                    <p className="text-gray-600 text-sm">
                      Submit your requirements and let our aggregators source the quality products you need.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Get Delivered</h3>
                    <p className="text-gray-600 text-sm">
                      Receive quotes to compare and select the best option for your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Receive Products</h3>
                    <p className="text-gray-600 text-sm">
                      Get your products delivered or arrange pickup based on your preference.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-4">
                <Image 
                  src="/marketplace-dashboard-interface.png" 
                  alt="Marketplace Interface" 
                  width={600} 
                  height={400} 
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-400 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Leaf className="w-16 h-16 text-white mx-auto mb-4" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to transform your agricultural supply chain?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join TDX Agri Marketplace today and experience a more efficient way to buy and sell agricultural products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Learn more about TDX
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">tdx</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Address</h3>
              <p className="text-sm text-white/80">
                123 Agriculture Street<br />
                Lagos, Nigeria<br />
                +234 123 456 789
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Opening hours</h3>
              <p className="text-sm text-white/80">
                Mon - Fri: 8am - 6pm<br />
                Sat: 9am - 4pm<br />
                Sun: Closed
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-white/80">
                Email: info@tdx.com<br />
                Phone: +234 123 456 789<br />
                WhatsApp: +234 987 654 321
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm text-white/60">
              © 2024 TDX Agri Marketplace. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
