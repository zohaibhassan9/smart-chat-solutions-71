import { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Clock, 
  Globe,
  Download,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

// Mock analytics data
const conversationData = [
  { date: "Jan 01", conversations: 45, messages: 234 },
  { date: "Jan 02", conversations: 52, messages: 287 },
  { date: "Jan 03", conversations: 48, messages: 251 },
  { date: "Jan 04", conversations: 61, messages: 334 },
  { date: "Jan 05", conversations: 55, messages: 298 },
  { date: "Jan 06", conversations: 67, messages: 378 },
  { date: "Jan 07", conversations: 59, messages: 321 },
];

const satisfactionData = [
  { rating: "5 Stars", count: 45, percentage: 35 },
  { rating: "4 Stars", count: 38, percentage: 30 },
  { rating: "3 Stars", count: 25, percentage: 20 },
  { rating: "2 Stars", count: 13, percentage: 10 },
  { rating: "1 Star", count: 6, percentage: 5 },
];

const languageData = [
  { name: "English", value: 68, color: "#6366f1" },
  { name: "Spanish", value: 18, color: "#8b5cf6" },
  { name: "French", value: 8, color: "#06b6d4" },
  { name: "German", value: 4, color: "#10b981" },
  { name: "Other", value: 2, color: "#f59e0b" },
];

const topQuestions = [
  { question: "What are your business hours?", count: 145 },
  { question: "How do I return a product?", count: 132 },
  { question: "What payment methods do you accept?", count: 98 },
  { question: "How can I track my order?", count: 87 },
  { question: "Do you offer international shipping?", count: 76 },
];

const Analytics = () => {
  const { id } = useParams();
  const [timeRange, setTimeRange] = useState("7d");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track your bot's performance and insights</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-muted-foreground">Total Conversations</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-500">+15.3%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">934</p>
                <p className="text-sm text-muted-foreground">Unique Visitors</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-500">+8.7%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">2.3s</p>
                <p className="text-sm text-muted-foreground">Avg Response Time</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 text-red-500 mr-1 rotate-180" />
                  <span className="text-xs text-red-500">+0.2s</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400 text-lg">★</span>
              <div>
                <p className="text-2xl font-bold">4.6</p>
                <p className="text-sm text-muted-foreground">Satisfaction Score</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                  <span className="text-xs text-green-500">+0.3</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversations Over Time */}
        <Card>
          <CardHeader>
            <CardTitle>Conversations Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={conversationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="conversations" 
                  stroke="#6366f1" 
                  strokeWidth={2}
                  name="Conversations"
                />
                <Line 
                  type="monotone" 
                  dataKey="messages" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  name="Messages"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Satisfaction Ratings */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={satisfactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rating" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Language Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Language Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <ResponsiveContainer width="60%" height={250}>
                <PieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {languageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2">
                {languageData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}</span>
                    <span className="text-sm text-muted-foreground">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Questions */}
        <Card>
          <CardHeader>
            <CardTitle>Most Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topQuestions.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="w-6 h-6 p-0 text-xs">
                      {index + 1}
                    </Badge>
                    <span className="text-sm">{item.question}</span>
                  </div>
                  <span className="text-sm font-medium">{item.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <span>Real-time Activity</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">12</p>
              <p className="text-sm text-muted-foreground">Active Conversations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">47</p>
              <p className="text-sm text-muted-foreground">Visitors Online</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">1.8s</p>
              <p className="text-sm text-muted-foreground">Current Response Time</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;