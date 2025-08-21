import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Bot, Activity, AlertTriangle, DollarSign, MessageSquare } from "lucide-react";

const AdminDashboard = () => {
  const metrics = [
    { 
      title: "Active Users", 
      value: "2,847", 
      change: "+12.5%", 
      icon: Users, 
      color: "text-blue-600" 
    },
    { 
      title: "Active Bots", 
      value: "1,234", 
      change: "+8.2%", 
      icon: Bot, 
      color: "text-green-600" 
    },
    { 
      title: "Messages Today", 
      value: "45,632", 
      change: "+23.1%", 
      icon: MessageSquare, 
      color: "text-purple-600" 
    },
    { 
      title: "Revenue (MTD)", 
      value: "$12,456", 
      change: "+15.3%", 
      icon: DollarSign, 
      color: "text-emerald-600" 
    },
    { 
      title: "System Health", 
      value: "99.8%", 
      change: "Stable", 
      icon: Activity, 
      color: "text-green-600" 
    },
    { 
      title: "Active Issues", 
      value: "3", 
      change: "-2 from yesterday", 
      icon: AlertTriangle, 
      color: "text-orange-600" 
    },
  ];

  const recentActivity = [
    { time: "2 min ago", event: "User john@example.com upgraded to Pro", type: "billing" },
    { time: "5 min ago", event: "Bot 'Customer Support AI' suspended for policy violation", type: "moderation" },
    { time: "8 min ago", event: "New issue reported: API timeout in EU region", type: "issue" },
    { time: "12 min ago", event: "User sarah@company.com created 3 new bots", type: "activity" },
    { time: "15 min ago", event: "System backup completed successfully", type: "system" },
  ];

  const getEventBadge = (type: string) => {
    const styles = {
      billing: "bg-green-100 text-green-800",
      moderation: "bg-red-100 text-red-800", 
      issue: "bg-orange-100 text-orange-800",
      activity: "bg-blue-100 text-blue-800",
      system: "bg-purple-100 text-purple-800"
    };
    return styles[type as keyof typeof styles] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your SaaS platform health, users, and system performance
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                {metric.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest system events and user actions across your platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex-1">
                  <p className="text-sm">{activity.event}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge className={getEventBadge(activity.type)}>
                  {activity.type}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-semibold">Manage Users</h3>
            <p className="text-xs text-muted-foreground">View, edit, and moderate users</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <Bot className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <h3 className="font-semibold">Bot Management</h3>
            <p className="text-xs text-muted-foreground">Monitor and control bots</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-orange-600" />
            <h3 className="font-semibold">Review Issues</h3>
            <p className="text-xs text-muted-foreground">Handle support tickets</p>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <DollarSign className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
            <h3 className="font-semibold">Billing Overview</h3>
            <p className="text-xs text-muted-foreground">Revenue and subscriptions</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;