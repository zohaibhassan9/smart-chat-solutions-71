import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Route, Settings, Key, Zap } from "lucide-react";

const ModelsRoutingPage = () => {
  const modelRouting = [
    { plan: "Free", model: "GPT-3.5 Turbo", rateLimit: "100/hour", enabled: true },
    { plan: "Pro", model: "GPT-4", rateLimit: "1000/hour", enabled: true },
    { plan: "Enterprise", model: "GPT-4 Turbo", rateLimit: "Unlimited", enabled: true },
    { plan: "Team", model: "GPT-4", rateLimit: "500/hour", enabled: true }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Models & Routing</h1>
        <p className="text-muted-foreground">
          Configure AI model routing and API management
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Model Routing by Plan</CardTitle>
            <CardDescription>Configure which AI models are used for each plan</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Plan</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Rate Limit</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {modelRouting.map((route, index) => (
                  <TableRow key={index}>
                    <TableCell><Badge>{route.plan}</Badge></TableCell>
                    <TableCell>{route.model}</TableCell>
                    <TableCell>{route.rateLimit}</TableCell>
                    <TableCell><Switch checked={route.enabled} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Key Management</CardTitle>
            <CardDescription>Manage external API keys and settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>OpenAI API Key</Label>
              <Input type="password" value="sk-***************************" />
            </div>
            <div>
              <Label>Anthropic API Key</Label>
              <Input type="password" value="sk-***************************" />
            </div>
            <Button>Update API Keys</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ModelsRoutingPage;