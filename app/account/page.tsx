import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, ShoppingCart, User, Menu } from 'lucide-react'

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link href="/contact" className="text-gray-700 hover:text-green-600">
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                <ShoppingCart className="w-4 h-4 mr-2" />
                View cart
              </Button>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
              <Button className="md:hidden" variant="ghost" size="sm">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Account</h1>
          <Link href="#" className="text-green-600 hover:underline text-sm">
            How does it work?
          </Link>
        </div>

        {/* Personal Information */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">Personal information</CardTitle>
            <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Company</label>
                  <p className="text-gray-900">Mensah Trading Co.</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Name</label>
                  <p className="text-gray-900">John Mensah</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">E-mail address</label>
                  <p className="text-gray-900">john@mensahtrading.com</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Phone number</label>
                  <p className="text-gray-900">+233 557468905</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Address</label>
                  <p className="text-gray-900">No. 20 Nkrui St</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">City</label>
                  <p className="text-gray-900">Accra</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Region</label>
                  <p className="text-gray-900">Greater Accra</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Country</label>
                  <p className="text-gray-900">Ghana</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">Orders</CardTitle>
            <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-medium text-gray-600">Order number</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-600">Products</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-600">Total weight</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-600">Total amount</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-2 font-medium text-gray-600"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-2 text-gray-900">11194001</td>
                    <td className="py-4 px-2">
                      <div className="flex items-center">
                        <span className="text-gray-900">Yellow maize, Cassava/Ground nuts...</span>
                        <Badge variant="secondary" className="ml-2 text-xs">+3</Badge>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-gray-900">500 MT</td>
                    <td className="py-4 px-2 text-gray-900">GH₵ 25,000</td>
                    <td className="py-4 px-2">
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                        ● Confirmed
                      </Badge>
                    </td>
                    <td className="py-4 px-2">
                      <Link href={`/account/orders/11194001`} className="text-green-600 hover:underline text-sm">
                        View details
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-2 text-gray-900">01188144</td>
                    <td className="py-4 px-2">
                      <div className="flex items-center">
                        <span className="text-gray-900">Cassava, White maize, Corn, Sesam...</span>
                        <Badge variant="secondary" className="ml-2 text-xs">+2</Badge>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-gray-900">280 MT</td>
                    <td className="py-4 px-2 text-gray-900">GH₵ 18,000</td>
                    <td className="py-4 px-2">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        ● In transit
                      </Badge>
                    </td>
                    <td className="py-4 px-2">
                      <Link href={`/account/orders/01188144`} className="text-green-600 hover:underline text-sm">
                        View details
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-2 text-gray-900">11194001</td>
                    <td className="py-4 px-2">
                      <div className="flex items-center">
                        <span className="text-gray-900">Yellow maize, Cassava/Ground nuts...</span>
                        <Badge variant="secondary" className="ml-2 text-xs">+3</Badge>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-gray-900">500 MT</td>
                    <td className="py-4 px-2 text-gray-900">GH₵ 25,000</td>
                    <td className="py-4 px-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        ● Delivered
                      </Badge>
                    </td>
                    <td className="py-4 px-2">
                      <Link href={`/account/orders/11194001`} className="text-green-600 hover:underline text-sm">
                        View details
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-12 mt-16">
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
                20 Nkrui Street<br />
                East Legon Accra — Ghana
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Opening hours</h3>
              <p className="text-sm text-white/80">
                Mon-Fri: 8am - 7pm
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-white/80">
                info@tdx.gh.ai<br />
                +233 24 551 6700<br />
                +44 7467568903
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm text-white/60">
              © Copyright 2024 TDX limited
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
