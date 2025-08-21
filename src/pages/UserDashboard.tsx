import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app/AppSidebar";
import { Bot, MessageSquare, BarChart3, Settings, Plus, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const stats = [
    { 
      title: "Active Bots", 
      value: "3", 
      change: "+1 this month", 
      icon: Bot, 
      color: "text-blue-600" 
    },
    { 
      title: "Total Messages", 
      value: "1,247", 
      change: "+156 today", 
      icon: MessageSquare, 
      color: "text-green-600" 
    },
    { 
      title: "Avg Response Time", 
      value: "0.8s", 
      change: "99.2% uptime", 
      icon: Activity, 
      color: "text-purple-600" 
    },
    { 
      title: "User Satisfaction", 
      value: "4.8/5", 
      change: "Based on 89 ratings", 
      icon: BarChart3, 
      color: "text-emerald-600" 
    },
  ];

  const recentBots = [
    { name: "Customer Support Bot", status: "Active", messages: 432, lastActive: "2 min ago" },
    { name: "Sales Assistant", status: "Active", messages: 298, lastActive: "5 min ago" },
    { name: "FAQ Helper", status: "Paused", messages: 517, lastActive: "1 hour ago" },
  ];

  const getStatusBadge = (status: string) => {
    return status === "Active" 
      ? "bg-green-100 text-green-800" 
      : "bg-gray-100 text-gray-800";
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <AppSidebar />
        
        {/* Main content */}
        <main className="flex-1 p-6 space-y-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here's what's happening with your chatbots today.
            </p>
          </div>
          <Button asChild>
            <Link to="/app">
              <Plus className="h-4 w-4 mr-2" />
              Create New Bot
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Bots */}
        <Card>
          <CardHeader>
            <CardTitle>Your Chatbots</CardTitle>
            <CardDescription>
              Manage and monitor your active chatbot assistants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBots.map((bot, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{bot.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {bot.messages} messages • Last active {bot.lastActive}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={getStatusBadge(bot.status)}>
                      {bot.status}
                    </Badge>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/app">
                        Manage
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/app">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <Bot className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Create New Bot</h3>
                <p className="text-sm text-muted-foreground">
                  Set up a new AI assistant for your website
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/chat-widget">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <h3 className="font-semibold mb-2">Chat Widget</h3>
                <p className="text-sm text-muted-foreground">
                  Customize and embed your chat widget
                </p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/wordpress">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  View detailed performance metrics
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default UserDashboard;