import { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Search, 
  Filter, 
  Download, 
  MessageSquare, 
  User, 
  Bot,
  Calendar,
  Clock,
  MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock conversation data
const mockConversations = [
  {
    id: "1",
    visitor: "Anonymous User #1234",
    startTime: "2024-01-15 10:30:00",
    duration: "5m 30s",
    messages: 12,
    status: "completed",
    satisfaction: 4,
    location: "United States",
    messages_detail: [
      { role: "user", content: "Hi, I need help with my order", timestamp: "10:30:00" },
      { role: "bot", content: "I'd be happy to help you with your order! Could you please provide your order number?", timestamp: "10:30:05" },
      { role: "user", content: "It's #12345", timestamp: "10:30:30" },
      { role: "bot", content: "Thank you! I found your order. It was shipped yesterday and should arrive tomorrow.", timestamp: "10:30:35" },
    ]
  },
  {
    id: "2", 
    visitor: "john@example.com",
    startTime: "2024-01-15 09:15:00",
    duration: "8m 45s",
    messages: 18,
    status: "escalated",
    satisfaction: null,
    location: "Canada",
    messages_detail: [
      { role: "user", content: "I want to return a product", timestamp: "09:15:00" },
      { role: "bot", content: "I can help you with returns. What product would you like to return?", timestamp: "09:15:05" },
      { role: "user", content: "The blue sweater I ordered last week", timestamp: "09:15:20" },
      { role: "bot", content: "I found your order. You can return it within 30 days. Would you like me to generate a return label?", timestamp: "09:15:25" },
    ]
  },
  {
    id: "3",
    visitor: "Anonymous User #5678", 
    startTime: "2024-01-15 08:45:00",
    duration: "2m 15s",
    messages: 6,
    status: "abandoned",
    satisfaction: null,
    location: "United Kingdom",
    messages_detail: [
      { role: "user", content: "Hello", timestamp: "08:45:00" },
      { role: "bot", content: "Hi! How can I help you today?", timestamp: "08:45:02" },
      { role: "user", content: "What are your hours?", timestamp: "08:45:30" },
      { role: "bot", content: "We're open Monday-Friday 9AM-5PM EST. Is there anything else I can help you with?", timestamp: "08:45:32" },
    ]
  }
];

const Conversations = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedConversation, setSelectedConversation] = useState<any>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 border-green-200";
      case "escalated": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "abandoned": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const renderSatisfactionStars = (rating: number | null) => {
    if (rating === null) return <span className="text-muted-foreground">No rating</span>;
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={star <= rating ? "text-yellow-400" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Conversations</h1>
          <p className="text-muted-foreground">Review and analyze chat history</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">127</p>
                <p className="text-sm text-muted-foreground">Total Conversations</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold">4.2m</p>
                <p className="text-sm text-muted-foreground">Avg Duration</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">89%</p>
                <p className="text-sm text-muted-foreground">Resolution Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">★</span>
              <div>
                <p className="text-2xl font-bold">4.6</p>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Conversations Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Conversations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Visitor</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Messages</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Satisfaction</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockConversations.map((conversation) => (
                <TableRow key={conversation.id}>
                  <TableCell className="font-medium">{conversation.visitor}</TableCell>
                  <TableCell>{conversation.startTime}</TableCell>
                  <TableCell>{conversation.duration}</TableCell>
                  <TableCell>{conversation.messages}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(conversation.status)}>
                      {conversation.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{renderSatisfactionStars(conversation.satisfaction)}</TableCell>
                  <TableCell>{conversation.location}</TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setSelectedConversation(conversation)}
                        >
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Conversation Details</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Visitor:</span> {conversation.visitor}
                            </div>
                            <div>
                              <span className="font-medium">Duration:</span> {conversation.duration}
                            </div>
                            <div>
                              <span className="font-medium">Status:</span> 
                              <Badge className={getStatusColor(conversation.status) + " ml-2"}>
                                {conversation.status}
                              </Badge>
                            </div>
                            <div>
                              <span className="font-medium">Location:</span> {conversation.location}
                            </div>
                          </div>
                          
                          <div className="border rounded-lg p-4 space-y-3 max-h-96 overflow-y-auto">
                            {conversation.messages_detail.map((message, index) => (
                              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'} flex`}>
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                    message.role === 'user' 
                                      ? 'bg-muted text-muted-foreground ml-2' 
                                      : 'bg-primary text-primary-foreground mr-2'
                                  }`}>
                                    {message.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                  </div>
                                  <div>
                                    <div className={`p-3 rounded-lg ${
                                      message.role === 'user'
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-muted'
                                    }`}>
                                      {message.content}
                                    </div>
                                    <div className={`text-xs text-muted-foreground mt-1 ${
                                      message.role === 'user' ? 'text-right' : 'text-left'
                                    }`}>
                                      {message.timestamp}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Conversations;