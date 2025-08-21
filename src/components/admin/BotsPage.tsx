import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Search, Bot, Eye, Pause, Play, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BotsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [planFilter, setPlanFilter] = useState("all");

  const bots = [
    {
      id: "1",
      name: "Customer Support AI",
      owner: "john@company.com",
      plan: "Pro",
      status: "Active",
      conversations: 1456,
      lastUsed: "2 hours ago",
      createdDate: "2024-01-15",
      errorRate: "0.2%"
    },
    {
      id: "2",
      name: "Sales Assistant",
      owner: "sarah@startup.io", 
      plan: "Enterprise",
      status: "Active",
      conversations: 3241,
      lastUsed: "30 min ago",
      createdDate: "2023-12-20",
      errorRate: "0.1%"
    },
    {
      id: "3",
      name: "FAQ Bot",
      owner: "mike@freelance.com",
      plan: "Free", 
      status: "Suspended",
      conversations: 234,
      lastUsed: "5 days ago",
      createdDate: "2024-02-01",
      errorRate: "2.1%"
    },
    {
      id: "4",
      name: "Product Recommender",
      owner: "emily@agency.com",
      plan: "Pro",
      status: "Active", 
      conversations: 892,
      lastUsed: "1 hour ago",
      createdDate: "2024-01-10",
      errorRate: "0.3%"
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      Active: "bg-green-100 text-green-800",
      Suspended: "bg-red-100 text-red-800",
      Inactive: "bg-gray-100 text-gray-800"
    };
    return styles[status as keyof typeof styles] || "bg-gray-100 text-gray-800";
  };

  const getPlanBadge = (plan: string) => {
    const styles = {
      Free: "bg-gray-100 text-gray-800",
      Pro: "bg-blue-100 text-blue-800",
      Enterprise: "bg-purple-100 text-purple-800"
    };
    return styles[plan as keyof typeof styles] || "bg-gray-100 text-gray-800";
  };

  const getErrorRateBadge = (errorRate: string) => {
    const rate = parseFloat(errorRate.replace('%', ''));
    if (rate < 1) return "bg-green-100 text-green-800";
    if (rate < 5) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  const filteredBots = bots.filter(bot => {
    const matchesSearch = bot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bot.owner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || bot.status.toLowerCase() === statusFilter;
    const matchesPlan = planFilter === "all" || bot.plan.toLowerCase() === planFilter;
    
    return matchesSearch && matchesStatus && matchesPlan;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bot Management</h1>
          <p className="text-muted-foreground">
            Monitor and control all bots across the platform
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter Bots</CardTitle>
          <CardDescription>
            Find specific bots or filter by status and plan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by bot name or owner..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Select value={planFilter} onValueChange={setPlanFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Bots Table */}
      <Card>
        <CardHeader>
          <CardTitle>Bots ({filteredBots.length})</CardTitle>
          <CardDescription>
            {filteredBots.length === 0 ? 
              "No bots found matching your filters." : 
              "Complete list of platform bots with management actions"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredBots.length === 0 ? (
            <div className="text-center py-8">
              <Bot className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                No bots match your current filters. Try adjusting your search criteria.
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bot Name</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Conversations</TableHead>
                  <TableHead>Error Rate</TableHead>
                  <TableHead>Last Used</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBots.map((bot) => (
                  <TableRow key={bot.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-medium">{bot.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Created {bot.createdDate}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{bot.owner}</TableCell>
                    <TableCell>
                      <Badge className={getPlanBadge(bot.plan)}>
                        {bot.plan}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(bot.status)}>
                        {bot.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{bot.conversations.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge className={getErrorRateBadge(bot.errorRate)}>
                        {bot.errorRate}
                      </Badge>
                    </TableCell>
                    <TableCell>{bot.lastUsed}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/admin/bots/${bot.id}`)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        
                        {bot.status === "Active" ? (
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Pause className="h-4 w-4 mr-1" />
                                Suspend
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Suspend Bot</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to suspend "{bot.name}"? This will immediately stop all conversations.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Suspend Bot</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        ) : (
                          <Button variant="outline" size="sm">
                            <Play className="h-4 w-4 mr-1" />
                            Activate
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BotsPage;