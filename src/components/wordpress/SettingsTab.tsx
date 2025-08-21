import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Key, Globe, Database, Wifi } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SettingsTab = () => {
  const [authToken, setAuthToken] = useState("");
  const [domain, setDomain] = useState("");
  const [localCache, setLocalCache] = useState(true);
  const [offlineFallback, setOfflineFallback] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [tokenStatus, setTokenStatus] = useState<"idle" | "valid" | "invalid">("idle");
  const { toast } = useToast();

  const handleValidate = async () => {
    if (!authToken) {
      toast({
        title: "Missing Token",
        description: "Please enter your authentication token first.",
        variant: "destructive",
      });
      return;
    }

    setIsValidating(true);
    
    // Simulate API validation
    setTimeout(() => {
      const isValid = authToken.length > 10; // Simple validation
      setTokenStatus(isValid ? "valid" : "invalid");
      setIsValidating(false);
      
      toast({
        title: isValid ? "Token Valid!" : "Token Invalid",
        description: isValid 
          ? "Your authentication token is working correctly." 
          : "Please check your token and try again.",
        variant: isValid ? "default" : "destructive",
      });
    }, 1500);
  };

  const handleSave = () => {
    if (tokenStatus !== "valid") {
      toast({
        title: "Validate First",
        description: "Please validate your token before saving.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Settings Saved",
      description: "Your chatbot configuration has been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Authentication */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Key className="h-5 w-5 text-primary" />
            <span>Authentication</span>
          </CardTitle>
          <CardDescription>
            Connect your WordPress site to the ChatBot API. Get your token from the main dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="auth-token">API Authentication Token</Label>
            <div className="flex space-x-2 mt-1">
              <Input
                id="auth-token"
                type="password"
                value={authToken}
                onChange={(e) => {
                  setAuthToken(e.target.value);
                  setTokenStatus("idle");
                }}
                placeholder="cb_live_xxxxxxxxxxxxxxxxxxxx"
                className="flex-1"
              />
              <Button 
                onClick={handleValidate}
                disabled={!authToken || isValidating}
                variant="outline"
              >
                {isValidating ? "Validating..." : "Validate"}
              </Button>
            </div>
            {tokenStatus !== "idle" && (
              <div className="flex items-center space-x-2 mt-2">
                {tokenStatus === "valid" ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-600" />
                )}
                <Badge variant={tokenStatus === "valid" ? "default" : "destructive"}>
                  {tokenStatus === "valid" ? "Token Valid" : "Token Invalid"}
                </Badge>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Domain Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary" />
            <span>Domain Binding</span>
          </CardTitle>
          <CardDescription>
            Specify your WordPress domain for security and analytics tracking.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="domain">WordPress Site Domain</Label>
            <Input
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="https://yoursite.com"
              className="mt-1"
            />
            <p className="text-sm text-muted-foreground mt-1">
              Include https:// and exclude trailing slash
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Performance Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5 text-primary" />
            <span>Performance & Caching</span>
          </CardTitle>
          <CardDescription>
            Optimize chatbot performance for your WordPress site.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Local Response Cache</Label>
              <p className="text-sm text-muted-foreground">
                Cache frequent responses to reduce API calls and improve speed
              </p>
            </div>
            <Switch
              checked={localCache}
              onCheckedChange={setLocalCache}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base flex items-center space-x-2">
                <Wifi className="h-4 w-4" />
                <span>Offline Fallback</span>
              </Label>
              <p className="text-sm text-muted-foreground">
                Show helpful message when ChatBot API is unavailable
              </p>
            </div>
            <Switch
              checked={offlineFallback}
              onCheckedChange={setOfflineFallback}
            />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button 
          onClick={handleSave}
          variant="cta" 
          size="lg"
          disabled={tokenStatus !== "valid"}
        >
          Save & Validate
        </Button>
      </div>
    </div>
  );
};

export default SettingsTab;