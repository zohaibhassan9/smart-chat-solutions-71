import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCw, Download, Search, AlertCircle, CheckCircle, Clock, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LogEntry {
  id: string;
  timestamp: string;
  event: string;
  status: "success" | "error" | "warning" | "info";
  message: string;
  details?: string;
}

const LogsTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState("2024-01-15 14:32:18");
  const { toast } = useToast();

  // Mock log data
  const [logs] = useState<LogEntry[]>([
    {
      id: "1",
      timestamp: "2024-01-15 14:32:18",
      event: "Chat Session Started",
      status: "success",
      message: "New visitor started chat session",
      details: "User: Anonymous, IP: 192.168.1.1"
    },
    {
      id: "2", 
      timestamp: "2024-01-15 14:31:45",
      event: "API Response",
      status: "success",
      message: "AI response generated successfully",
      details: "Response time: 1.2s, Tokens: 45"
    },
    {
      id: "3",
      timestamp: "2024-01-15 14:30:12",
      event: "Human Handover",
      status: "warning",
      message: "User requested human agent",
      details: "Reason: Complex billing question"
    },
    {
      id: "4",
      timestamp: "2024-01-15 14:28:33",
      event: "API Error",
      status: "error", 
      message: "Failed to connect to ChatBot API",
      details: "Error: Timeout after 30s, Retry count: 3"
    },
    {
      id: "5",
      timestamp: "2024-01-15 14:25:17",
      event: "Widget Loaded",
      status: "info",
      message: "Chat widget initialized successfully",
      details: "Load time: 0.8s, Cache hit: true"
    },
    {
      id: "6",
      timestamp: "2024-01-15 14:22:44",
      event: "Issue Report",
      status: "info",
      message: "User reported an issue",
      details: "Type: Bug report, Category: UI Problem"
    }
  ]);

  const handleSync = async () => {
    setIsSyncing(true);
    
    // Simulate sync process
    setTimeout(() => {
      setIsSyncing(false);
      setLastSync(new Date().toLocaleString());
      toast({
        title: "Sync Complete",
        description: "Event logs have been synchronized successfully.",
      });
    }, 2000);
  };

  const handleExportLogs = () => {
    toast({
      title: "Export Started",
      description: "Your logs are being prepared for download.",
    });
  };

  const getStatusIcon = (status: LogEntry["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      default:
        return <Clock className="h-4 w-4 text-blue-600" />;
    }
  };

  const getStatusVariant = (status: LogEntry["status"]) => {
    switch (status) {
      case "success":
        return "default";
      case "error":
        return "destructive";
      case "warning":
        return "secondary";
      default:
        return "outline";
    }
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || log.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Event Logs & Sync</h3>
          <p className="text-sm text-muted-foreground">
            Monitor chatbot activity and troubleshoot issues with detailed event logging
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="flex items-center space-x-1">
            <Activity className="h-3 w-3" />
            <span>Live Monitoring</span>
          </Badge>
        </div>
      </div>

      {/* Before-After Context */}
      <Card className="bg-gradient-subtle">
        <CardHeader>
          <CardTitle className="text-base">Why Logging Matters</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-destructive mb-2">Before: Flying Blind</h4>
            <p className="text-muted-foreground">
              Problems happen silently. Users complain but you have no idea what went wrong 
              or when. Debugging becomes guesswork.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">After: Full Visibility</h4>
            <p className="text-muted-foreground">
              Every interaction is logged. See exactly what happened, when it happened, 
              and get the details you need to fix issues fast.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Sync Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <RefreshCw className="h-5 w-5 text-primary" />
            <span>Sync Status</span>
          </CardTitle>
          <CardDescription>
            Keep your WordPress plugin in sync with the ChatBot service
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Last Sync</p>
              <p className="text-sm text-muted-foreground">{lastSync}</p>
            </div>
            <Button 
              onClick={handleSync}
              disabled={isSyncing}
              variant="cta"
            >
              {isSyncing ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Syncing...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Sync Now
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Filter Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search events, messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-48">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="info">Info</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleExportLogs} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Event History</CardTitle>
          <CardDescription>
            Showing {filteredLogs.length} of {logs.length} events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-mono text-sm">
                      {log.timestamp}
                    </TableCell>
                    <TableCell className="font-medium">
                      {log.event}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(log.status)} className="flex items-center space-x-1 w-fit">
                        {getStatusIcon(log.status)}
                        <span className="capitalize">{log.status}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>{log.message}</TableCell>
                    <TableCell className="text-sm text-muted-foreground max-w-xs truncate">
                      {log.details}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredLogs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No events match your filter criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LogsTab;