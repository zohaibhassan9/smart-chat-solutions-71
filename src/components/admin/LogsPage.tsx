import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Download, FileText, AlertTriangle, MessageSquare, Bot } from "lucide-react";

const LogsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("today");
  const [severityFilter, setSeverityFilter] = useState("all");

  const conversationLogs = [
    {
      id: "conv_001",
      bot: "Customer Support AI",
      user: "john@example.com",
      startTime: "2024-01-20 14:30:15",
      endTime: "2024-01-20 14:45:22",
      messages: 12,
      duration: "15m 7s",
      rating: 5,
      resolved: true
    },
    {
      id: "conv_002", 
      bot: "Sales Assistant",
      user: "sarah@company.com",
      startTime: "2024-01-20 13:15:42",
      endTime: "2024-01-20 13:28:18",
      messages: 8,
      duration: "12m 36s", 
      rating: 4,
      resolved: true
    },
    {
      id: "conv_003",
      bot: "FAQ Bot",
      user: "mike@startup.io",
      startTime: "2024-01-20 11:45:33",
      endTime: null,
      messages: 3,
      duration: "Ongoing",
      rating: null,
      resolved: false
    },
    {
      id: "conv_004",
      bot: "Product Recommender", 
      user: "emily@agency.com",
      startTime: "2024-01-20 09:30:11",
      endTime: "2024-01-20 09:42:05",
      messages: 15,
      duration: "11m 54s",
      rating: 3,
      resolved: true
    }
  ];

  const errorLogs = [
    {
      timestamp: "2024-01-20 14:25:33",
      bot: "Customer Support AI", 
      error: "API Timeout",
      message: "OpenAI API request timed out after 30 seconds",
      severity: "Warning",
      user: "john@example.com",
      conversation: "conv_001"
    },
    {
      timestamp: "2024-01-20 13:42:17",
      bot: "Sales Assistant",
      error: "Rate Limit Exceeded",
      message: "API rate limit exceeded, using fallback response", 
      severity: "Info",
      user: "sarah@company.com",
      conversation: "conv_002"
    },
    {
      timestamp: "2024-01-20 11:15:55",
      bot: "FAQ Bot",
      error: "Parse Error",
      message: "Failed to parse user input with special characters: '@#$%'",
      severity: "Error", 
      user: "mike@startup.io",
      conversation: "conv_003"
    },
    {
      timestamp: "2024-01-20 08:30:22",
      bot: "Product Recommender",
      error: "Database Connection",
      message: "Temporary database connection failure, retrying...",
      severity: "Warning",
      user: "emily@agency.com", 
      conversation: null
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

  const getRatingBadge = (rating: number | null) => {
    if (rating === null) return "bg-gray-100 text-gray-800";
    if (rating >= 4) return "bg-green-100 text-green-800";
    if (rating >= 3) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  const filteredConversationLogs = conversationLogs.filter(log => {
    const matchesSearch = log.bot.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const filteredErrorLogs = errorLogs.filter(log => {
    const matchesSearch = log.bot.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.error.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = severityFilter === "all" || log.severity.toLowerCase() === severityFilter;
    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Logs</h1>
          <p className="text-muted-foreground">
            Monitor conversations, errors, and system activity
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Logs
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter Logs</CardTitle>
          <CardDescription>
            Find specific logs by bot, user, or error type
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="conversations" className="space-y-6">
        <TabsList>
          <TabsTrigger value="conversations">
            <MessageSquare className="h-4 w-4 mr-2" />
            Conversation Logs
          </TabsTrigger>
          <TabsTrigger value="errors">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Error Logs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="conversations">
          <Card>
            <CardHeader>
              <CardTitle>Conversation Logs ({filteredConversationLogs.length})</CardTitle>
              <CardDescription>
                Complete conversation history across all bots
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredConversationLogs.length === 0 ? (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    No conversation logs found. Your bots haven't had any conversations yet.
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Conversation ID</TableHead>
                      <TableHead>Bot</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Start Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Messages</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredConversationLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-medium">{log.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Bot className="h-4 w-4 text-muted-foreground" />
                            {log.bot}
                          </div>
                        </TableCell>
                        <TableCell>{log.user}</TableCell>
                        <TableCell>{log.startTime}</TableCell>
                        <TableCell>{log.duration}</TableCell>
                        <TableCell>{log.messages}</TableCell>
                        <TableCell>
                          {log.rating ? (
                            <Badge className={getRatingBadge(log.rating)}>
                              {log.rating}/5
                            </Badge>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge className={log.resolved ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                            {log.resolved ? "Resolved" : "Ongoing"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="errors">
          <Card>
            <CardHeader>
              <CardTitle>Error Logs ({filteredErrorLogs.length})</CardTitle>
              <CardDescription>
                System errors, warnings, and issues across all bots
              </CardDescription>
            </CardHeader>
            <CardContent>
              {filteredErrorLogs.length === 0 ? (
                <div className="text-center py-8">
                  <AlertTriangle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    No error logs found. That's great - your system is running smoothly!
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Bot</TableHead>
                      <TableHead>Error Type</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>User</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredErrorLogs.map((log, index) => (
                      <TableRow key={index}>
                        <TableCell>{log.timestamp}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Bot className="h-4 w-4 text-muted-foreground" />
                            {log.bot}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{log.error}</TableCell>
                        <TableCell className="max-w-md truncate">{log.message}</TableCell>
                        <TableCell>
                          <Badge className={getSeverityBadge(log.severity)}>
                            {log.severity}
                          </Badge>
                        </TableCell>
                        <TableCell>{log.user}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LogsPage;