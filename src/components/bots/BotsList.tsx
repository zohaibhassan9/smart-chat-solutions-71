import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal,
  Bot,
  Activity,
  Users,
  MessageSquare,
  Settings,
  PlayCircle,
  Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data
const mockBots = [
  {
    id: "1",
    name: "Customer Support Bot",
    status: "active",
    conversations: 1247,
    lastActive: "2 minutes ago",
    knowledgeBase: 23,
    avatar: "🤖",
    domain: "yoursite.com"
  },
  {
    id: "2", 
    name: "Sales Assistant",
    status: "paused",
    conversations: 892,
    lastActive: "1 hour ago",
    knowledgeBase: 15,
    avatar: "💼",
    domain: "shop.yoursite.com"
  },
  {
    id: "3",
    name: "FAQ Helper",
    status: "active",
    conversations: 534,
    lastActive: "5 minutes ago", 
    knowledgeBase: 8,
    avatar: "❓",
    domain: "help.yoursite.com"
  }
];

const BotsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  const filteredBots = mockBots.filter(bot =>
    bot.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 border-green-200";
      case "paused": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "inactive": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Bots</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage your AI-powered chatbots
          </p>
        </div>
        <Link to="/app/bots/create">
          <Button variant="default" className="bg-gradient-primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Bot
          </Button>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search bots..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <div className="flex border border-border rounded-lg">
            <Button
              variant={viewMode === "cards" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("cards")}
              className="rounded-r-none"
            >
              Cards
            </Button>
            <Button
              variant={viewMode === "table" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("table")}
              className="rounded-l-none border-l"
            >
              Table
            </Button>
          </div>
        </div>
      </div>

      {/* BAB Section */}
      {filteredBots.length <= 2 && (
        <Card className="shadow-card border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle>Transform Your Customer Experience</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-destructive">Before</h3>
              <p className="text-sm text-muted-foreground">
                Building a bot usually requires developers, complex setup, and weeks of work—if it works at all.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">After</h3>
              <p className="text-sm text-muted-foreground">
                In 3 steps, you'll have a fully working bot connected to your site, handling customers 24/7.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Bridge</h3>
              <p className="text-sm text-muted-foreground">
                Guided forms and previews mean zero guesswork. Launch bots in minutes, not months.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {filteredBots.length === 0 && searchTerm === "" && (
        <Card className="text-center py-16 shadow-card">
          <CardContent>
            <Bot className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <CardTitle className="mb-4 text-2xl">Ready to Get Started?</CardTitle>
            <CardDescription className="mb-6 max-w-md mx-auto text-base">
              <strong>Before:</strong> No way to help customers 24/7.<br/>
              <strong>After:</strong> AI-powered support that never sleeps.<br/>
              <strong>Bridge:</strong> Create your first bot in under 5 minutes.
            </CardDescription>
            <Link to="/app/bots/create">
              <Button size="lg" className="bg-gradient-primary">
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Bot
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Cards View */}
      {viewMode === "cards" && filteredBots.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBots.map((bot) => (
            <Card key={bot.id} className="hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-lg flex-shrink-0">
                      {bot.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-lg truncate">{bot.name}</CardTitle>
                      <p className="text-sm text-muted-foreground truncate">{bot.domain}</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link to={`/app/bots/${bot.id}/playground`}>
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Test Bot
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to={`/app/bots/${bot.id}/settings`}>
                          <Settings className="w-4 h-4 mr-2" />
                          Settings
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Bot
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <Badge className={getStatusColor(bot.status)}>{bot.status}</Badge>
                  <span className="text-sm text-muted-foreground">{bot.lastActive}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 min-w-0">
                    <MessageSquare className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="truncate">{bot.conversations} chats</span>
                  </div>
                  <div className="flex items-center space-x-2 min-w-0">
                    <Activity className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="truncate">{bot.knowledgeBase} docs</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2 mt-auto">
                  <Link to={`/app/bots/${bot.id}/playground`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      Test
                    </Button>
                  </Link>
                  <Link to={`/app/bots/${bot.id}/settings`} className="flex-1">
                    <Button variant="default" size="sm" className="w-full">
                      <Settings className="w-4 h-4 mr-2" />
                      Manage
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === "table" && filteredBots.length > 0 && (
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bot</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Conversations</TableHead>
                <TableHead>Knowledge Base</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBots.map((bot) => (
                <TableRow key={bot.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                        {bot.avatar}
                      </div>
                      <div>
                        <div className="font-medium">{bot.name}</div>
                        <div className="text-sm text-muted-foreground">{bot.domain}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(bot.status)}>{bot.status}</Badge>
                  </TableCell>
                  <TableCell>{bot.conversations}</TableCell>
                  <TableCell>{bot.knowledgeBase} docs</TableCell>
                  <TableCell>{bot.lastActive}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link to={`/app/bots/${bot.id}/playground`}>
                            <PlayCircle className="w-4 h-4 mr-2" />
                            Test Bot
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to={`/app/bots/${bot.id}/settings`}>
                            <Settings className="w-4 h-4 mr-2" />
                            Settings
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete Bot
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </div>
  );
};

export default BotsList;