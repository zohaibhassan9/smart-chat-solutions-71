import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Edit, Save, UserX, UserCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [quotas, setQuotas] = useState({
    messages: "10000",
    storage: "5000",
    bots: "10"
  });

  // Mock user data
  const user = {
    id: id,
    name: "John Smith",
    email: "john@company.com", 
    plan: "Pro",
    status: "Active",
    joinedDate: "2024-01-15",
    lastActive: "2 hours ago",
    organization: "Tech Company Inc.",
    messagesUsed: 1234,
    storageUsed: 2500,
    botsCount: 5
  };

  const activityLogs = [
    { date: "2024-01-20 14:30", action: "Created bot 'Customer Support AI'", type: "bot_created" },
    { date: "2024-01-20 10:15", action: "Upgraded to Pro plan", type: "plan_change" },
    { date: "2024-01-19 16:45", action: "Sent 150 messages", type: "usage" },
    { date: "2024-01-19 09:00", action: "Login from IP 192.168.1.100", type: "login" },
    { date: "2024-01-18 11:30", action: "Created bot 'Sales Assistant'", type: "bot_created" }
  ];

  const moderationHistory = [
    { date: "2024-01-15", action: "Account created", moderator: "System", note: "Initial account setup" },
    { date: "2024-01-20", action: "Plan upgraded", moderator: "System", note: "Automatic billing upgrade" }
  ];

  const handleSaveQuotas = () => {
    setIsEditing(false);
    toast({
      title: "Quotas Updated",
      description: "User quotas have been successfully updated.",
    });
  };

  const getActivityBadge = (type: string) => {
    const styles = {
      bot_created: "bg-blue-100 text-blue-800",
      plan_change: "bg-green-100 text-green-800",
      usage: "bg-purple-100 text-purple-800",
      login: "bg-gray-100 text-gray-800"
    };
    return styles[type as keyof typeof styles] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/admin/users")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Users
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{user.name}</h1>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
            {user.status}
          </Badge>
          <Badge className="bg-blue-100 text-blue-800">
            {user.plan}
          </Badge>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <Button variant="outline">
          <UserX className="h-4 w-4 mr-2" />
          Suspend User
        </Button>
        <Button variant="outline">
          <Edit className="h-4 w-4 mr-2" />
          Send Message
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile & Quotas</TabsTrigger>
          <TabsTrigger value="activity">Activity Logs</TabsTrigger>
          <TabsTrigger value="moderation">Moderation History</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Basic user account details</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Full Name</Label>
                <Input value={user.name} disabled />
              </div>
              <div>
                <Label>Email Address</Label>
                <Input value={user.email} disabled />
              </div>
              <div>
                <Label>Organization</Label>
                <Input value={user.organization} disabled />
              </div>
              <div>
                <Label>Join Date</Label>
                <Input value={user.joinedDate} disabled />
              </div>
              <div>
                <Label>Current Plan</Label>
                <Input value={user.plan} disabled />
              </div>
              <div>
                <Label>Last Active</Label>
                <Input value={user.lastActive} disabled />
              </div>
            </CardContent>
          </Card>

          {/* Usage & Quotas */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Usage & Quotas</CardTitle>
                <CardDescription>Current usage and quota limits (editable by admins)</CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => isEditing ? handleSaveQuotas() : setIsEditing(true)}
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Quotas
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Messages Quota</Label>
                  <Input
                    value={quotas.messages}
                    onChange={(e) => setQuotas({...quotas, messages: e.target.value})}
                    disabled={!isEditing}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Used: {user.messagesUsed.toLocaleString()}
                  </p>
                </div>
                <div>
                  <Label>Storage Quota (MB)</Label>
                  <Input
                    value={quotas.storage}
                    onChange={(e) => setQuotas({...quotas, storage: e.target.value})}
                    disabled={!isEditing}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Used: {user.storageUsed.toLocaleString()} MB
                  </p>
                </div>
                <div>
                  <Label>Bot Limit</Label>
                  <Input
                    value={quotas.bots}
                    onChange={(e) => setQuotas({...quotas, bots: e.target.value})}
                    disabled={!isEditing}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Used: {user.botsCount}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Activity Logs</CardTitle>
              <CardDescription>Recent user actions and system events</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activityLogs.map((log, index) => (
                    <TableRow key={index}>
                      <TableCell>{log.date}</TableCell>
                      <TableCell>{log.action}</TableCell>
                      <TableCell>
                        <Badge className={getActivityBadge(log.type)}>
                          {log.type.replace("_", " ")}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="moderation">
          <Card>
            <CardHeader>
              <CardTitle>Moderation History</CardTitle>
              <CardDescription>Admin actions and account modifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Moderator</TableHead>
                    <TableHead>Note</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {moderationHistory.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell>{entry.date}</TableCell>
                      <TableCell>{entry.action}</TableCell>
                      <TableCell>{entry.moderator}</TableCell>
                      <TableCell>{entry.note}</TableCell>
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

export default UserDetail;