import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle, XCircle, RefreshCw, HelpCircle, Zap, Globe, Database, Wifi } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DiagnosticCheck {
  id: string;
  name: string;
  description: string;
  status: "checking" | "success" | "error" | "warning";
  message: string;
  action?: string;
}

const TroubleshootingTab = () => {
  const [isRunningDiagnostics, setIsRunningDiagnostics] = useState(false);
  const [diagnosticProgress, setDiagnosticProgress] = useState(0);
  const { toast } = useToast();

  const [diagnostics, setDiagnostics] = useState<DiagnosticCheck[]>([
    {
      id: "token",
      name: "API Token Validation",
      description: "Verify authentication token is valid and active",
      status: "success",
      message: "Token is valid and properly configured"
    },
    {
      id: "domain",
      name: "Domain Binding Check", 
      description: "Ensure domain is properly bound to your account",
      status: "success",
      message: "Domain binding is correctly configured"
    },
    {
      id: "connectivity",
      name: "API Connectivity",
      description: "Test connection to ChatBot API servers",
      status: "success", 
      message: "Connection established successfully"
    },
    {
      id: "permissions",
      name: "WordPress Permissions",
      description: "Check if plugin has necessary WordPress permissions",
      status: "warning",
      message: "Some permissions are restricted",
      action: "Update plugin permissions in WordPress settings"
    },
    {
      id: "quota",
      name: "Usage Quota Check",
      description: "Verify API usage limits and remaining quota",
      status: "error",
      message: "Approaching monthly usage limit (92% used)",
      action: "Consider upgrading your plan or optimizing usage"
    },
    {
      id: "cache",
      name: "Cache Performance",
      description: "Check if caching is working optimally",
      status: "success",
      message: "Cache hit rate: 87% - performing well"
    }
  ]);

  const runDiagnostics = async () => {
    setIsRunningDiagnostics(true);
    setDiagnosticProgress(0);

    // Simulate running diagnostics
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setDiagnosticProgress(i);
    }

    setIsRunningDiagnostics(false);
    toast({
      title: "Diagnostics Complete",
      description: "System check completed successfully.",
    });
  };

  const getStatusIcon = (status: DiagnosticCheck["status"]) => {
    switch (status) {
      case "checking":
        return <RefreshCw className="h-5 w-5 text-blue-600 animate-spin" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "error":
        return <XCircle className="h-5 w-5 text-red-600" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      default:
        return <HelpCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusVariant = (status: DiagnosticCheck["status"]) => {
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

  const getStatusColor = (status: DiagnosticCheck["status"]) => {
    switch (status) {
      case "success":
        return "text-green-600";
      case "error":
        return "text-red-600";
      case "warning":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  const successCount = diagnostics.filter(d => d.status === "success").length;
  const errorCount = diagnostics.filter(d => d.status === "error").length;
  const warningCount = diagnostics.filter(d => d.status === "warning").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">System Diagnostics</h3>
          <p className="text-sm text-muted-foreground">
            Identify and resolve ChatBot integration issues quickly
          </p>
        </div>
        <Button 
          onClick={runDiagnostics}
          disabled={isRunningDiagnostics}
          variant="cta"
        >
          {isRunningDiagnostics ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Running Checks...
            </>
          ) : (
            <>
              <Zap className="h-4 w-4 mr-2" />
              Recheck Connection
            </>
          )}
        </Button>
      </div>

      {/* Before-After Context */}
      <Card className="bg-gradient-subtle">
        <CardHeader>
          <CardTitle className="text-base">Troubleshooting Made Simple</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-destructive mb-2">Before: Hours of Frustration</h4>
            <p className="text-muted-foreground">
              Something's broken but you don't know what. Dig through logs, 
              contact support, wait for responses. Users get angry while you hunt for clues.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">After: Instant Diagnosis</h4>
            <p className="text-muted-foreground">
              One click reveals exactly what's wrong and how to fix it. 
              Clear status checks and actionable solutions get you back up in minutes.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Progress Bar */}
      {isRunningDiagnostics && (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Running system diagnostics...</span>
                <span>{diagnosticProgress}%</span>
              </div>
              <Progress value={diagnosticProgress} className="w-full" />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-green-600">{successCount}</p>
                <p className="text-sm text-muted-foreground">Checks Passed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-8 w-8 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold text-yellow-600">{warningCount}</p>
                <p className="text-sm text-muted-foreground">Warnings</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <XCircle className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-2xl font-bold text-red-600">{errorCount}</p>
                <p className="text-sm text-muted-foreground">Issues Found</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Diagnostic Results */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">System Status</CardTitle>
          <CardDescription>
            Detailed check results for your ChatBot WordPress integration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {diagnostics.map((check) => (
            <div key={check.id} className="flex items-start space-x-4 p-4 border rounded-lg">
              <div className="flex-shrink-0 mt-0.5">
                {getStatusIcon(check.status)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-1">
                  <h4 className="font-medium">{check.name}</h4>
                  <Badge variant={getStatusVariant(check.status)} className="text-xs">
                    {check.status}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">
                  {check.description}
                </p>
                
                <p className={`text-sm font-medium ${getStatusColor(check.status)}`}>
                  {check.message}
                </p>
                
                {check.action && (
                  <div className="mt-3 p-3 bg-muted rounded-md">
                    <p className="text-sm">
                      <strong>Recommended Action:</strong> {check.action}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Fixes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Common Solutions</CardTitle>
          <CardDescription>
            Quick fixes for the most frequent ChatBot integration issues
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium flex items-center space-x-2">
                <Globe className="h-4 w-4 text-primary" />
                <span>Connection Issues</span>
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Check your API token is correct</li>
                <li>• Verify domain binding in settings</li>
                <li>• Ensure your firewall allows API calls</li>
                <li>• Try clearing WordPress cache</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium flex items-center space-x-2">
                <Database className="h-4 w-4 text-primary" />
                <span>Performance Issues</span>
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Enable local response caching</li>
                <li>• Check your hosting provider limits</li>
                <li>• Monitor API usage quotas</li>
                <li>• Update to latest plugin version</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TroubleshootingTab;