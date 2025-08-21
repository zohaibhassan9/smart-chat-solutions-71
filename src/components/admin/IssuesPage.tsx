import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Search, AlertTriangle, CheckCircle, Clock, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const IssuesPage = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [selectedIssue, setSelectedIssue] = useState<any>(null);
  const [resolution, setResolution] = useState("");

  const issues = [
    {
      id: "ISS-001",
      title: "API Timeout in EU Region",
      description: "Multiple users reporting slow response times in European servers",
      category: "Infrastructure",
      severity: "High",
      status: "Open",
      assignee: "John Smith",
      reporter: "sarah@company.com",
      createdDate: "2024-01-20 09:30",
      updatedDate: "2024-01-20 14:15",
      affectedUsers: 45
    },
    {
      id: "ISS-002", 
      title: "Bot Training Data Corruption",
      description: "Customer Support AI returning incorrect responses after recent update",
      category: "Bot Management",
      severity: "Critical",
      status: "In Progress",
      assignee: "Emily Chen",
      reporter: "mike@startup.io",
      createdDate: "2024-01-19 16:45",
      updatedDate: "2024-01-20 10:20",
      affectedUsers: 12
    },
    {
      id: "ISS-003",
      title: "Billing Sync Error",
      description: "Stripe webhook failures causing subscription status mismatch",
      category: "Billing",
      severity: "Medium", 
      status: "Resolved",
      assignee: "Alex Johnson",
      reporter: "billing@techcorp.com",
      createdDate: "2024-01-18 11:20",
      updatedDate: "2024-01-19 15:30",
      affectedUsers: 8
    },
    {
      id: "ISS-004",
      title: "User Dashboard Load Errors",
      description: "Dashboard failing to load for users with large bot collections",
      category: "UI/UX",
      severity: "Low",
      status: "Open",
      assignee: "Sarah Wilson",
      reporter: "user@agency.com",
      createdDate: "2024-01-17 14:10",
      updatedDate: "2024-01-18 09:45",
      affectedUsers: 3
    }
  ];

  const getSeverityBadge = (severity: string) => {
    const styles = {
      Low: "bg-blue-100 text-blue-800",
      Medium: "bg-yellow-100 text-yellow-800",
      High: "bg-orange-100 text-orange-800",
      Critical: "bg-red-100 text-red-800"
    };
    return styles[severity as keyof typeof styles] || "bg-gray-100 text-gray-800";
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      Open: "bg-red-100 text-red-800",
      "In Progress": "bg-yellow-100 text-yellow-800",
      Resolved: "bg-green-100 text-green-800"
    };
    return styles[status as keyof typeof styles] || "bg-gray-100 text-gray-800";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <AlertTriangle className="h-4 w-4" />;
      case "In Progress": 
        return <Clock className="h-4 w-4" />;
      case "Resolved":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || issue.status.toLowerCase().replace(" ", "") === statusFilter;
    const matchesSeverity = severityFilter === "all" || issue.severity.toLowerCase() === severityFilter;
    
    return matchesSearch && matchesStatus && matchesSeverity;
  });

  const handleResolveIssue = () => {
    toast({
      title: "Issue Resolved",
      description: `Issue ${selectedIssue?.id} has been marked as resolved.`,
    });
    setSelectedIssue(null);
    setResolution("");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Issues Management</h1>
          <p className="text-muted-foreground">
            Track and resolve platform issues and support tickets
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium">Open Issues</span>
            </div>
            <p className="text-2xl font-bold">2</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-medium">In Progress</span>
            </div>
            <p className="text-2xl font-bold">1</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Resolved Today</span>
            </div>
            <p className="text-2xl font-bold">1</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Affected Users</span>
            </div>
            <p className="text-2xl font-bold">68</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filter Issues</CardTitle>
          <CardDescription>
            Find specific issues by title, description, or ID
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search issues..."
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
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="inprogress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Issues Table */}
      <Card>
        <CardHeader>
          <CardTitle>Issues ({filteredIssues.length})</CardTitle>
          <CardDescription>
            {filteredIssues.length === 0 ? 
              "No issues found matching your filters." : 
              "Complete list of platform issues and support tickets"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredIssues.length === 0 ? (
            <div className="text-center py-8">
              <CheckCircle className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <p className="text-muted-foreground">
                No issues found! Your platform is running smoothly.
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Issue</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead>Affected Users</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredIssues.map((issue) => (
                  <TableRow key={issue.id}>
                    <TableCell>
                      <div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(issue.status)}
                          <span className="font-medium">{issue.id}</span>
                        </div>
                        <div className="font-medium">{issue.title}</div>
                        <div className="text-sm text-muted-foreground truncate max-w-md">
                          {issue.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{issue.category}</TableCell>
                    <TableCell>
                      <Badge className={getSeverityBadge(issue.severity)}>
                        {issue.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadge(issue.status)}>
                        {issue.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{issue.assignee}</TableCell>
                    <TableCell>{issue.affectedUsers}</TableCell>
                    <TableCell>{issue.createdDate}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedIssue(issue)}
                            >
                              <MessageSquare className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Issue Details - {selectedIssue?.id}</DialogTitle>
                              <DialogDescription>
                                Review issue details and update status
                              </DialogDescription>
                            </DialogHeader>
                            {selectedIssue && (
                              <div className="space-y-4">
                                <div>
                                  <Label>Title</Label>
                                  <p className="font-medium">{selectedIssue.title}</p>
                                </div>
                                <div>
                                  <Label>Description</Label>
                                  <p className="text-muted-foreground">{selectedIssue.description}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label>Category</Label>
                                    <p>{selectedIssue.category}</p>
                                  </div>
                                  <div>
                                    <Label>Severity</Label>
                                    <Badge className={getSeverityBadge(selectedIssue.severity)}>
                                      {selectedIssue.severity}
                                    </Badge>
                                  </div>
                                  <div>
                                    <Label>Assignee</Label>
                                    <p>{selectedIssue.assignee}</p>
                                  </div>
                                  <div>
                                    <Label>Affected Users</Label>
                                    <p>{selectedIssue.affectedUsers}</p>
                                  </div>
                                </div>
                                {selectedIssue.status !== "Resolved" && (
                                  <div>
                                    <Label htmlFor="resolution">Resolution Notes</Label>
                                    <Textarea
                                      id="resolution"
                                      placeholder="Describe how this issue was resolved..."
                                      value={resolution}
                                      onChange={(e) => setResolution(e.target.value)}
                                    />
                                  </div>
                                )}
                              </div>
                            )}
                            <DialogFooter>
                              {selectedIssue?.status !== "Resolved" && (
                                <Button onClick={handleResolveIssue}>
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Mark as Resolved
                                </Button>
                              )}
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
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

export default IssuesPage;