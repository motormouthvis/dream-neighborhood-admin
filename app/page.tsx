"use client";

import { useState } from "react";
import { 
  Home, 
  Building2, 
  BarChart3, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  Plus,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const navigation = [
  { name: "Dashboard", href: "#", icon: Home, current: true },
  { name: "Listings", href: "#", icon: Building2, current: false },
  { name: "Neighborhoods", href: "#", icon: MapPin, current: false },
  { name: "Analytics", href: "#", icon: BarChart3, current: false },
  { name: "Customers", href: "#", icon: Users, current: false },
  { name: "Settings", href: "#", icon: Settings, current: false },
];

const stats = [
  { name: "Active Listings", value: "247", change: "+12%", trend: "up" },
  { name: "Neighborhoods", value: "18", change: "+3", trend: "up" },
  { name: "Monthly Views", value: "48.2k", change: "+18%", trend: "up" },
  { name: "Conversion Rate", value: "3.8%", change: "-0.4%", trend: "down" },
];

const recentListings = [
  { id: "1", address: "6165 Isla St, Melbourne, FL", status: "Live", price: "$589,000", views: "1,284" },
  { id: "2", address: "3309 N Indian River Dr, St. Lucie Village", status: "Live", price: "$1,250,000", views: "942" },
  { id: "3", address: "5 Harbour Isle Dr E, Fort Pierce", status: "Pending", price: "$725,000", views: "673" },
];

const performanceData = [
  { month: "Jan", views: 12400, leads: 87 },
  { month: "Feb", views: 15800, leads: 124 },
  { month: "Mar", views: 19200, leads: 156 },
  { month: "Apr", views: 23100, leads: 203 },
  { month: "May", views: 27400, leads: 241 },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 bg-zinc-900 border-r border-zinc-800">
        <div className="flex h-16 items-center gap-3 border-b border-zinc-800 px-8">
          <img src="/logo.png" alt="Dream Neighborhood" className="h-9 w-auto" />
          <div>
            <div className="font-semibold tracking-tight">Dream Neighborhood</div>
            <div className="text-[10px] text-emerald-400 -mt-1">ADMIN PANEL</div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-6">
          <nav className="space-y-1 px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`group flex items-center gap-x-3 rounded-xl px-4 py-3 text-sm font-medium transition-all hover:bg-zinc-800 ${
                  item.current 
                    ? "bg-zinc-800 text-white" 
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </a>
            ))}
          </nav>

          <div className="mt-10 px-6">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">Quick Actions</div>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Listing
            </Button>
          </div>
        </div>

        <div className="border-t border-zinc-800 p-4">
          <div className="flex items-center gap-3 px-4 py-3 bg-zinc-800 rounded-2xl">
            <Avatar>
              <AvatarFallback className="bg-emerald-600 text-white">WM</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm">William Miller</div>
              <div className="text-emerald-400 text-xs">Realtor • Admin</div>
            </div>
            <Button variant="ghost" size="icon" className="text-zinc-400">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-72 flex flex-col h-screen">
        {/* Top Navigation */}
        <header className="h-16 border-b border-zinc-800 bg-zinc-900 flex items-center px-8 justify-between">
          <div className="flex items-center gap-4 lg:hidden">
            <img src="/logo.png" alt="Dream Neighborhood" className="h-8 w-auto" />
            <div className="font-semibold">Dream Neighborhood Admin</div>
          </div>

          <div className="flex-1 max-w-md mx-8 relative hidden md:block">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
              <Search className="h-4 w-4" />
            </div>
            <Input 
              type="text" 
              placeholder="Search listings, neighborhoods..." 
              className="pl-11 bg-zinc-800 border-zinc-700 focus:border-emerald-500 placeholder:text-zinc-500"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-zinc-400 hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-rose-500 rounded-full flex items-center justify-center text-[10px] font-medium">3</div>
            </button>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-medium">William Miller</div>
                <div className="text-emerald-400 text-xs">Online</div>
              </div>
              <Avatar className="h-9 w-9 border border-emerald-500/30">
                <AvatarFallback className="bg-emerald-600">WM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-8 bg-zinc-950">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h1 className="text-4xl font-semibold tracking-tighter">Dashboard</h1>
                <p className="text-zinc-400 mt-2">Welcome back, William. Here's what's happening with your neighborhoods today.</p>
              </div>
              <div className="text-sm text-zinc-500 font-mono">MAY 4, 2026 • Q2 OVERVIEW</div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {stats.map((stat) => (
                <Card key={stat.name} className="bg-zinc-900 border-zinc-800">
                  <CardHeader className="pb-3">
                    <CardDescription>{stat.name}</CardDescription>
                    <CardTitle className="text-4xl font-semibold tabular-nums tracking-tighter">{stat.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`inline-flex items-center text-xs font-medium ${stat.trend === "up" ? "text-emerald-400" : "text-rose-400"}`}>
                      {stat.change} from last month
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-7 gap-6">
              {/* Performance Chart */}
              <Card className="xl:col-span-4 bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>Platform Performance</CardTitle>
                  <CardDescription>Views and qualified leads over the last 5 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                        <XAxis dataKey="month" stroke="#3f3f46" />
                        <YAxis yAxisId="left" stroke="#3f3f46" />
                        <YAxis yAxisId="right" orientation="right" stroke="#3f3f46" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: "#18181b", 
                            border: "1px solid #3f3f46",
                            borderRadius: "8px"
                          }} 
                        />
                        <Line 
                          yAxisId="left"
                          type="monotone" 
                          dataKey="views" 
                          stroke="#10b981" 
                          strokeWidth={3}
                          dot={{ fill: "#10b981", r: 4 }}
                          name="Property Views"
                        />
                        <Line 
                          yAxisId="right"
                          type="monotone" 
                          dataKey="leads" 
                          stroke="#a5f3fc" 
                          strokeWidth={3}
                          dot={{ fill: "#67e8f9", r: 4 }}
                          name="Qualified Leads"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Listings */}
              <Card className="xl:col-span-3 bg-zinc-900 border-zinc-800">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Recent Listings</CardTitle>
                    <CardDescription>Updated in real-time</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-emerald-950 text-emerald-400 border-emerald-900">LIVE</Badge>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-zinc-800 hover:bg-transparent">
                        <TableHead className="text-zinc-400">Address</TableHead>
                        <TableHead className="text-zinc-400">Status</TableHead>
                        <TableHead className="text-zinc-400 text-right">Price</TableHead>
                        <TableHead className="text-zinc-400 text-right">Views</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentListings.map((listing) => (
                        <TableRow key={listing.id} className="border-zinc-800 hover:bg-zinc-800/50">
                          <TableCell className="font-medium">{listing.address}</TableCell>
                          <TableCell>
                            <Badge variant={listing.status === "Live" ? "default" : "secondary"} className={listing.status === "Live" ? "bg-emerald-500" : ""}>
                              {listing.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-mono">{listing.price}</TableCell>
                          <TableCell className="text-right text-emerald-400 font-mono">{listing.views}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Neighborhood Insights */}
            <Card className="mt-8 bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  Top Performing Neighborhoods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: "South Hutchinson Island", performance: "Excellent", views: "12.4k", color: "emerald" },
                    { name: "St. Lucie Village", performance: "Very Strong", views: "8.9k", color: "cyan" },
                    { name: "Melbourne Core", performance: "Growing Fast", views: "15.2k", color: "violet" },
                  ].map((nb) => (
                    <div key={nb.name} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 hover:border-emerald-500/50 transition-colors group">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold text-lg group-hover:text-emerald-400 transition-colors">{nb.name}</div>
                          <div className={`text-${nb.color}-400 text-sm mt-1`}>{nb.performance}</div>
                        </div>
                        <Badge variant="outline">{nb.views} views</Badge>
                      </div>
                      <div className="mt-8 h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div className={`h-full w-[${nb.name.includes("Melbourne") ? "92" : nb.name.includes("Hutchinson") ? "78" : "65"}%] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full`} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
