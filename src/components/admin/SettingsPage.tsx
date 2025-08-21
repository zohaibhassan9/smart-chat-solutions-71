import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Settings, Database } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
        <p className="text-muted-foreground">
          Configure security, system, and operational settings
        </p>
      </div>

      <Tabs defaultValue="security" className="space-y-6">
        <TabsList>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="cache">Cache & Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Configuration</CardTitle>
              <CardDescription>JWT tokens, webhooks, and access control</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>JWT Secret Key</Label>
                <Input type="password" value="***************************" />
              </div>
              <div className="flex items-center justify-between">
                <Label>Require 2FA for Admin Access</Label>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label>IP Whitelisting</Label>
                <Switch />
              </div>
              <Button>Save Security Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>Core system settings and limits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Max Concurrent Users</Label>
                <Input type="number" defaultValue="10000" />
              </div>
              <div>
                <Label>Session Timeout (minutes)</Label>
                <Input type="number" defaultValue="60" />
              </div>
              <div className="flex items-center justify-between">
                <Label>Maintenance Mode</Label>
                <Switch />
              </div>
              <Button>Update System Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cache">
          <Card>
            <CardHeader>
              <CardTitle>Cache & Performance</CardTitle>
              <CardDescription>Redis cache and performance optimization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Cache TTL (seconds)</Label>
                <Input type="number" defaultValue="3600" />
              </div>
              <div className="flex items-center justify-between">
                <Label>Enable Response Caching</Label>
                <Switch defaultChecked />
              </div>
              <Button>Clear All Cache</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;