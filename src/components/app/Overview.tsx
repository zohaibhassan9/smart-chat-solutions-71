import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bot, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Plus,
  BarChart3,
  Clock,
  CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Active Bots",
      value: "12",
      change: "+2 this month",
      icon: Bot,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Conversations Today",
      value: "1,247",
      change: "+12% from yesterday",
      icon: MessageSquare,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Active Users",
      value: "8,429",
      change: "+5% this week",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Avg Response Time",
      value: "1.2s",
      change: "-0.3s improvement",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const recentBots = [
    { name: "Support Assistant", status: "Active", conversations: 342, lastUsed: "2 min ago" },
    { name: "Sales Bot", status: "Active", conversations: 189, lastUsed: "1 hour ago" },
    { name: "FAQ Helper", status: "Draft", conversations: 0, lastUsed: "Never" },
    { name: "Product Guide", status: "Active", conversations: 87, lastUsed: "5 min ago" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Draft":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your bots today.
          </p>
        </div>
        <div className="flex space-x-3">
          <Button 
            variant="outline"
            onClick={() => navigate("/app/analytics")}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            View Analytics
          </Button>
          <Button 
            onClick={() => navigate("/app/bots/create")}
            className="bg-gradient-primary hover:opacity-90"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Bot
          </Button>
        </div>
      </div>

      {/* Before-After-Bridge Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Transform Your Customer Support</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-destructive">Before</h3>
            <p className="text-sm text-muted-foreground">
              Managing bots feels overwhelming—you don't know where to start, and customers wait too long for responses.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-primary">After</h3>
            <p className="text-sm text-muted-foreground">
              See all your bots, usage, and quick actions in one place. Instant responses, happy customers.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Bridge</h3>
            <p className="text-sm text-muted-foreground">
              Our overview gives you clarity and control from day one. Everything you need is right here.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Usage Meter */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Usage This Month</CardTitle>
            <CardDescription>
              Conversations used in your current plan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>8,429 of 10,000 conversations</span>
                <span>84%</span>
              </div>
              <Progress value={84} className="h-2" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                1,571 remaining
              </span>
              <Button variant="outline" size="sm">
                Upgrade Plan
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Get started with common tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => navigate("/app/bots/create")}
            >
              <Plus className="h-4 w-4 mr-2" />
              Create New Bot
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => navigate("/app/bots")}
            >
              <Bot className="h-4 w-4 mr-2" />
              Manage Bots
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => navigate("/app/analytics")}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Bots</CardTitle>
            <CardDescription>
              Your most recently updated bots
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentBots.map((bot, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">{bot.name}</p>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(bot.status)} variant="secondary">
                      {bot.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {bot.conversations} chats
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{bot.lastUsed}</p>
                </div>
              </div>
            ))}
            <Button 
              variant="link" 
              className="w-full p-0 h-auto"
              onClick={() => navigate("/app/bots")}
            >
              View all bots →
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;