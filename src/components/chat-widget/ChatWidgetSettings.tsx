import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Settings, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ChatWidgetSettings = () => {
  const [apiKey, setApiKey] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("Hi there! 👋 How can I help you today?");
  const [botName, setBotName] = useState("AI Assistant");
  const [primaryColor, setPrimaryColor] = useState("#6366f1");
  const [position, setPosition] = useState("bottom-right");
  const [enableHandover, setEnableHandover] = useState(true);
  const [enableIssueReport, setEnableIssueReport] = useState(true);
  const [enableCSAT, setEnableCSAT] = useState(true);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const embedCode = `<!-- Chatbot Widget -->
<script>
  window.chatbotConfig = {
    apiKey: "${apiKey || 'your-api-key'}",
    botName: "${botName}",
    welcomeMessage: "${welcomeMessage}",
    primaryColor: "${primaryColor}",
    position: "${position}",
    features: {
      handover: ${enableHandover},
      issueReport: ${enableIssueReport},
      csat: ${enableCSAT}
    }
  };
</script>
<script src="https://widget.yourapp.com/embed.js"></script>`;

  const copyEmbedCode = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Embed code copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your widget configuration has been updated.",
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Chat Widget Settings
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Configure your embedded chat widget to match your brand and workflow
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Settings Panel */}
        <div className="space-y-6">
          <Tabs defaultValue="appearance" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="appearance">
                <Palette className="h-4 w-4 mr-2" />
                Appearance
              </TabsTrigger>
              <TabsTrigger value="behavior">
                <Settings className="h-4 w-4 mr-2" />
                Behavior
              </TabsTrigger>
              <TabsTrigger value="integration">
                <Code className="h-4 w-4 mr-2" />
                Integration
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appearance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Visual Customization</CardTitle>
                  <CardDescription>Make the widget match your brand</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="bot-name">Bot Name</Label>
                      <Input
                        id="bot-name"
                        value={botName}
                        onChange={(e) => setBotName(e.target.value)}
                        placeholder="AI Assistant"
                      />
                    </div>
                    <div>
                      <Label htmlFor="primary-color">Primary Color</Label>
                      <div className="flex space-x-2">
                        <Input
                          id="primary-color"
                          type="color"
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="w-16 h-9 p-1"
                        />
                        <Input
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="flex-1"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="position">Widget Position</Label>
                    <Select value={position} onValueChange={setPosition}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bottom-right">Bottom Right</SelectItem>
                        <SelectItem value="bottom-left">Bottom Left</SelectItem>
                        <SelectItem value="top-right">Top Right</SelectItem>
                        <SelectItem value="top-left">Top Left</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="welcome-message">Welcome Message</Label>
                    <Textarea
                      id="welcome-message"
                      value={welcomeMessage}
                      onChange={(e) => setWelcomeMessage(e.target.value)}
                      placeholder="Enter your welcome message..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="behavior" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Feature Controls</CardTitle>
                  <CardDescription>Enable or disable widget features</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Human Handover</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow users to request human agents
                      </p>
                    </div>
                    <Switch
                      checked={enableHandover}
                      onCheckedChange={setEnableHandover}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Issue Reporting</Label>
                      <p className="text-sm text-muted-foreground">
                        Let users report bugs and problems
                      </p>
                    </div>
                    <Switch
                      checked={enableIssueReport}
                      onCheckedChange={setEnableIssueReport}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">CSAT Ratings</Label>
                      <p className="text-sm text-muted-foreground">
                        Collect satisfaction ratings after chats
                      </p>
                    </div>
                    <Switch
                      checked={enableCSAT}
                      onCheckedChange={setEnableCSAT}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integration" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>API Configuration</CardTitle>
                  <CardDescription>Connect your widget to our API</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="api-key">API Key</Label>
                    <Input
                      id="api-key"
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Enter your API key..."
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Get your API key from the dashboard
                    </p>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <Label>Embed Code</Label>
                      <Badge variant={apiKey ? "default" : "secondary"}>
                        {apiKey ? "Ready" : "Configure API Key"}
                      </Badge>
                    </div>
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                        <code>{embedCode}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2"
                        onClick={copyEmbedCode}
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Button onClick={handleSave} className="w-full" variant="cta" size="lg">
            Save Configuration
          </Button>
        </div>

        {/* Live Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
            <CardDescription>See how your widget will look</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-subtle rounded-lg p-6 h-96 relative border">
              <div className="text-center text-muted-foreground">
                <p className="mb-4">Your website content...</p>
                <div className="w-32 h-4 bg-muted rounded mx-auto mb-2"></div>
                <div className="w-48 h-4 bg-muted rounded mx-auto mb-2"></div>
                <div className="w-40 h-4 bg-muted rounded mx-auto"></div>
              </div>

              {/* Preview Launcher */}
              <div 
                className={`absolute ${
                  position === 'bottom-right' ? 'bottom-4 right-4' :
                  position === 'bottom-left' ? 'bottom-4 left-4' :
                  position === 'top-right' ? 'top-4 right-4' :
                  'top-4 left-4'
                }`}
              >
                <div 
                  className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: primaryColor }}
                >
                  💬
                </div>
              </div>

              {/* Preview Panel */}
              <div className="absolute bottom-20 right-4 w-64 h-72 bg-white rounded-lg shadow-xl border">
                <div 
                  className="p-3 rounded-t-lg text-white text-sm font-medium"
                  style={{ backgroundColor: primaryColor }}
                >
                  {botName} • Online
                </div>
                <div className="p-3 space-y-2">
                  <div className="bg-muted rounded p-2 text-sm">
                    {welcomeMessage}
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    Features: {[
                      enableHandover && 'Human Handover',
                      enableIssueReport && 'Issue Report', 
                      enableCSAT && 'CSAT'
                    ].filter(Boolean).join(', ') || 'None'}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatWidgetSettings;