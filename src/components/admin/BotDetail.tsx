import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Bot, Pause, Play, AlertTriangle, TrendingUp, MessageSquare } from "lucide-react";

const BotDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock bot data
  const bot = {
    id: id,
    name: "Customer Support AI",
    owner: "john@company.com",
    plan: "Pro", 
    status: "Active",
    createdDate: "2024-01-15",
    lastUsed: "2 hours ago",
    description: "AI-powered customer support bot that handles common inquiries and escalates complex issues.",
    totalConversations: 1456,
    averageRating: 4.7,
    errorRate: "0.2%",
    responseTime: "1.2s"
  };

  const conversationStats = [
    { period: "Today", conversations: 45, messages: 234, avgRating: 4.8 },
    { period: "Yesterday", conversations: 52, messages: 287, avgRating: 4.6 },
    { period: "This Week", conversations: 321, messages: 1654, avgRating: 4.7 },
    { period: "This Month", conversations: 1456, messages: 7823, avgRating: 4.7 }
  ];

  const recentConversations = [
    { 
      id: "conv_1", 
      user: "alice@example.com", 
      started: "2024-01-20 14:30", 
      messages: 8, 
      rating: 5, 
      resolved: true 
    },
    { 
      id: "conv_2", 
      user: "bob@company.com", 
      started: "2024-01-20 13:15", 
      messages: 12, 
      rating: 4, 
      resolved: true 
    },
    { 
      id: "conv_3", 
      user: "charlie@startup.io", 
      started: "2024-01-20 11:45", 
      messages: 6, 
      rating: 5, 
      resolved: true 
    },
    { 
      id: "conv_4", 
      user: "diana@freelance.com", 
      started: "2024-01-20 09:30", 
      messages: 15, 
      rating: 3, 
      resolved: false 
    }
  ];

  const errorLogs = [
    {
      timestamp: "2024-01-20 14:25",
      error: "API timeout error",
      message: "Request to external API timed out after 30s",
      severity: "Warning"
    },
    {
      timestamp: "2024-01-20 10:15", 
      error: "Rate limit exceeded",
      message: "OpenAI API rate limit exceeded, fallback to secondary model",
      severity: "Info"
    },
    {
      timestamp: "2024-01-19 16:30",
      error: "Parsing error",
      message: "Failed to parse user input with special characters",
      severity: "Error"
    }
  ];

  const getSeverityBadge = (severity: string) => {
    const styles = {
      Info: "bg-blue-100 text-blue-800",
      Warning: "bg-yellow-100 text-yellow-800",
      Error: "bg-red-100 text-red-800"
    };
    return styles[severity as keyof typeof styles] || "bg-gray-100 text-gray-800";
  };

  const getRatingBadge = (rating: number) => {
    if (rating >= 4) return "bg-green-100 text-green-800";
    if (rating >= 3) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/admin/bots")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Bots
          </Button>
          <div className="flex items-center gap-3">
            <Bot className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{bot.name}</h1>
              <p className="text-muted-foreground">Owned by {bot.owner}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={bot.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
            {bot.status}
          </Badge>
          <Badge className="bg-blue-100 text-blue-800">
            {bot.plan}
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Conversations</span>
            </div>
            <p className="text-2xl font-bold">{bot.totalConversations.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Avg Rating</span>
            </div>
            <p className="text-2xl font-bold">{bot.averageRating}/5</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium">Error Rate</span>
            </div>
            <p className="text-2xl font-bold">{bot.errorRate}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium">Response Time</span>
            </div>
            <p className="text-2xl font-bold">{bot.responseTime}</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <Button variant="outline">
          <Pause className="h-4 w-4 mr-2" />
          Suspend Bot
        </Button>
        <Button variant="outline">
          <AlertTriangle className="h-4 w-4 mr-2" />
          Report Issue
        </Button>
      </div>

      <Tabs defaultValue="analytics" className="space-y-6">
        <TabsList>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="conversations">Recent Conversations</TabsTrigger>
          <TabsTrigger value="errors">Error Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Conversation Analytics</CardTitle>
              <CardDescription>Performance metrics and usage statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Period</TableHead>
                    <TableHead>Conversations</TableHead>
                    <TableHead>Messages</TableHead>
                    <TableHead>Avg Rating</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {conversationStats.map((stat, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{stat.period}</TableCell>
                      <TableCell>{stat.conversations.toLocaleString()}</TableCell>
                      <TableCell>{stat.messages.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge className={getRatingBadge(stat.avgRating)}>
                          {stat.avgRating}/5
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversations">
          <Card>
            <CardHeader>
              <CardTitle>Recent Conversations</CardTitle>
              <CardDescription>Latest interactions with users</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Started</TableHead>
                    <TableHead>Messages</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentConversations.map((conv) => (
                    <TableRow key={conv.id}>
                      <TableCell>{conv.user}</TableCell>
                      <TableCell>{conv.started}</TableCell>
                      <TableCell>{conv.messages}</TableCell>
                      <TableCell>
                        <Badge className={getRatingBadge(conv.rating)}>
                          {conv.rating}/5
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={conv.resolved ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                          {conv.resolved ? "Resolved" : "Ongoing"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="errors">
          <Card>
            <CardHeader>
              <CardTitle>Error Logs</CardTitle>
              <CardDescription>System errors and warnings for this bot</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Error Type</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Severity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {errorLogs.map((log, index) => (
                    <TableRow key={index}>
                      <TableCell>{log.timestamp}</TableCell>
                      <TableCell className="font-medium">{log.error}</TableCell>
                      <TableCell>{log.message}</TableCell>
                      <TableCell>
                        <Badge className={getSeverityBadge(log.severity)}>
                          {log.severity}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BotDetail;