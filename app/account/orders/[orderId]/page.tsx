'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ShoppingCart, User, Menu, MapPin, Truck, Clock, Phone, Mail } from "lucide-react"
import { orderData } from '@/lib/mockData'
// import { ArrowLeft, ShoppingCart, User, Menu, MapPin, Truck, Package, CheckCircle, Clock, Phone, Mail } from 'lucide-react'

export default function OrderDetailsPage({ params }: { params: { orderId: string } }) {
  const [activeTab, setActiveTab] = useState('details')
  const order = orderData[params.orderId as keyof typeof orderData]

  if (!order) {
    return <div>Order not found</div>
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-yellow-100 text-yellow-800'
      case 'in-transit': return 'bg-blue-100 text-blue-800'
      case 'delivered': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

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
              <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-transparent">
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
        {/* Breadcrumb */}
        <div className="flex items-center mb-6">
          <Link href="/account" className="flex items-center text-green-600 hover:text-green-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Account
          </Link>
        </div>

        {/* Order Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order #{order.id}</h1>
            <p className="text-gray-600">Placed on {new Date(order.orderDate).toLocaleDateString()}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Badge className={`${getStatusColor(order.status)} hover:${getStatusColor(order.status)}`}>
              ● {order.statusText}
            </Badge>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('details')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'details'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Order Details
            </button>
            <button
              onClick={() => setActiveTab('tracking')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'tracking'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Tracking
            </button>
            <button
              onClick={() => setActiveTab("weighbill")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "weighbill"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Weigh Bill
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'details' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Order Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {order.products.map((product, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <p className="text-gray-600">Quantity: {product.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Supplier Information */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Supplier Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">{order.supplier.name}</h3>
                      <p className="text-gray-600">{order.supplier.location}</p>
                    </div>
                    <Separator />
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{order.supplier.contact}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>{order.supplier.email}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Weight:</span>
                      <span className="font-semibold">{order.totalWeight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Amount:</span>
                      <span className="font-semibold">{order.totalAmount}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-gray-600">Order Date:</span>
                      <span>{new Date(order.orderDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Delivery:</span>
                      <span>{new Date(order.estimatedDelivery).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <Badge className={`${getStatusColor(order.status)} hover:${getStatusColor(order.status)}`}>
                        {order.statusText}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card className="mt-6">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <Button className="w-full bg-transparent" variant="outline">
                      Download Invoice
                    </Button>
                    <Button className="w-full bg-transparent" variant="outline">
                      Contact Supplier
                    </Button>
                    {order.status === "confirmed" && (
                      <Button className="w-full" variant="destructive">
                        Cancel Order
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'tracking' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Live Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-slate-100 rounded-lg h-96 overflow-hidden">
                    {/* Map representation */}
                   
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tracking Details */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Tracking Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Current Status */}
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Truck className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">In Transit</h3>
                        <p className="text-sm text-gray-600">Currently at {order.tracking.currentLocation.name}</p>
                        <p className="text-xs text-gray-500">Updated 2 hours ago</p>
                      </div>
                    </div>

                    {/* Estimated Arrival */}
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Estimated Arrival</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(order.tracking.estimatedArrival).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Delivery Address */}
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Delivery Address</h3>
                        <p className="text-sm text-gray-600">No. 20 Nkrui St, Accra, Ghana</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Delivery Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">Order Confirmed</p>
                        <p className="text-sm text-gray-600">{new Date(order.orderDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">Picked up from supplier</p>
                        <p className="text-sm text-gray-600">Jan 16, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
                      <div>
                        <p className="font-medium text-gray-900">In Transit</p>
                        <p className="text-sm text-gray-600">Currently at {order.tracking.currentLocation.name}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-400">Out for delivery</p>
                        <p className="text-sm text-gray-400">Pending</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-400">Delivered</p>
                        <p className="text-sm text-gray-400">Pending</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

{activeTab === "weighbill" && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Weigh Bill Document */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Official Weigh Bill</span>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Certified
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6 space-y-6">
                    {/* Header */}
                    <div className="text-center border-b pb-4">
                      <h2 className="text-2xl font-bold text-gray-900">OFFICIAL WEIGH BILL</h2>
                      <p className="text-gray-600">Republic of Ghana - Ministry of Trade</p>
                    </div>

                    {/* Bill Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Bill Information</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Bill Number:</span>
                            <span className="font-medium">{order.weighBill.billNumber}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Issue Date:</span>
                            <span className="font-medium">
                              {new Date(order.weighBill.issueDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Time:</span>
                            <span className="font-medium">{order.weighBill.timestamp.split(" ")[1]}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Weighing Station</h3>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-gray-600">Station:</span>
                            <p className="font-medium">{order.weighBill.weighingStation}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Address:</span>
                            <p className="font-medium">{order.weighBill.stationAddress}</p>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">License:</span>
                            <span className="font-medium">{order.weighBill.stationLicense}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vehicle Details */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Vehicle & Driver Information</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Vehicle Plate:</span>
                          <span className="font-medium">{order.weighBill.vehicleDetails.plateNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Vehicle Type:</span>
                          <span className="font-medium">{order.weighBill.vehicleDetails.vehicleType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Driver Name:</span>
                          <span className="font-medium">{order.weighBill.vehicleDetails.driverName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Driver License:</span>
                          <span className="font-medium">{order.weighBill.vehicleDetails.driverLicense}</span>
                        </div>
                      </div>
                    </div>

                    {/* Weight Measurements */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Weight Measurements</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-2 font-medium text-gray-600">Product</th>
                              <th className="text-right py-2 font-medium text-gray-600">Gross Weight</th>
                              <th className="text-right py-2 font-medium text-gray-600">Tare Weight</th>
                              <th className="text-right py-2 font-medium text-gray-600">Net Weight</th>
                              <th className="text-right py-2 font-medium text-gray-600">Moisture</th>
                              <th className="text-right py-2 font-medium text-gray-600">Quality</th>
                            </tr>
                          </thead>
                          <tbody>
                            {order.weighBill.measurements.map((measurement, index) => (
                              <tr key={index} className="border-b border-gray-100">
                                <td className="py-2 font-medium">{measurement.product}</td>
                                <td className="py-2 text-right">{measurement.grossWeight}</td>
                                <td className="py-2 text-right">{measurement.tareWeight}</td>
                                <td className="py-2 text-right font-semibold">{measurement.netWeight}</td>
                                <td className="py-2 text-right">{measurement.moisture}</td>
                                <td className="py-2 text-right">
                                  <Badge variant="secondary" className="text-xs">
                                    {measurement.quality}
                                  </Badge>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr className="border-t-2 border-gray-300">
                              <td className="py-2 font-bold">Total Net Weight:</td>
                              <td colSpan={2}></td>
                              <td className="py-2 text-right font-bold text-lg">{order.weighBill.totalNetWeight}</td>
                              <td colSpan={2}></td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>

                    {/* Certification */}
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Certified By</h3>
                          <p className="font-medium">{order.weighBill.certifiedBy}</p>
                          <p className="text-sm text-gray-600">License: {order.weighBill.certifierLicense}</p>
                        </div>
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gray-100 border-2 border-dashed border-gray-300 rounded flex items-center justify-center mb-2">
                            <span className="text-xs text-gray-500">QR Code</span>
                          </div>
                          <p className="text-xs text-gray-600">{order.weighBill.qrCode}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weigh Bill Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Bill Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bill Number:</span>
                      <span className="font-semibold">{order.weighBill.billNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Net Weight:</span>
                      <span className="font-semibold text-lg text-green-600">{order.weighBill.totalNetWeight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vehicle Tare:</span>
                      <span className="font-semibold">{order.weighBill.vehicleDetails.tareWeight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Products Count:</span>
                      <span className="font-semibold">{order.weighBill.measurements.length} items</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-gray-600">Issue Date:</span>
                      <span>{new Date(order.weighBill.issueDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weighing Station:</span>
                      <span className="text-right text-sm">{order.weighBill.weighingStation}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quality Analysis */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Quality Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {order.weighBill.measurements.map((measurement, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-gray-900">{measurement.product}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {measurement.quality}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-600">Weight:</span>
                            <p className="font-medium">{measurement.netWeight}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Moisture:</span>
                            <p className="font-medium">{measurement.moisture}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card className="mt-6">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <Button className="w-full bg-transparent" variant="outline">
                      Download Weigh Bill
                    </Button>
                    <Button className="w-full bg-transparent" variant="outline">
                      Verify Certificate
                    </Button>
                    <Button className="w-full bg-transparent" variant="outline">
                      Print Document
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

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
