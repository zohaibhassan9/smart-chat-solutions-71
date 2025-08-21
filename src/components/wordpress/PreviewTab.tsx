import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ExternalLink, RefreshCw, Monitor, Smartphone, Tablet } from "lucide-react";
import ChatLauncher from "../chat-widget/ChatLauncher";
import ChatPanel from "../chat-widget/ChatPanel";

const PreviewTab = () => {
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const deviceStyles = {
    desktop: "w-full h-96",
    tablet: "w-80 h-96 mx-auto",
    mobile: "w-64 h-96 mx-auto"
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Widget Preview</h3>
          <p className="text-sm text-muted-foreground">
            See exactly how your chatbot will appear on your WordPress site
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="default">Live Preview</Badge>
          <Button onClick={handleRefresh} variant="outline" size="sm" disabled={isRefreshing}>
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </div>

      {/* Device Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Preview Device</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Button
              variant={previewDevice === "desktop" ? "default" : "outline"}
              size="sm"
              onClick={() => setPreviewDevice("desktop")}
            >
              <Monitor className="h-4 w-4 mr-2" />
              Desktop
            </Button>
            <Button
              variant={previewDevice === "tablet" ? "default" : "outline"}
              size="sm"
              onClick={() => setPreviewDevice("tablet")}
            >
              <Tablet className="h-4 w-4 mr-2" />
              Tablet
            </Button>
            <Button
              variant={previewDevice === "mobile" ? "default" : "outline"}
              size="sm"
              onClick={() => setPreviewDevice("mobile")}
            >
              <Smartphone className="h-4 w-4 mr-2" />
              Mobile
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Before-After Context */}
      <Card className="bg-gradient-subtle">
        <CardHeader>
          <CardTitle className="text-base">Why Preview Matters</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-destructive mb-2">Before: Blind Installation</h4>
            <p className="text-muted-foreground">
              Install code, hope it works, discover issues after visitors complain. 
              No way to test without going live.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-primary mb-2">After: Confident Deployment</h4>
            <p className="text-muted-foreground">
              Test everything in advance. See exactly how it looks and works across 
              all devices before your visitors do.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Preview Frame */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="h-5 w-5 text-primary" />
            <span>Live Widget Preview</span>
          </CardTitle>
          <CardDescription>
            This is how your chatbot will appear to visitors on your WordPress site
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-lg p-6 min-h-[24rem] flex justify-center">
            <div className={deviceStyles[previewDevice]} >
              <div className="bg-white rounded-lg shadow-sm h-full relative overflow-hidden border">
                {/* Fake WordPress content */}
                <div className="p-6 space-y-4">
                  <div className="h-8 bg-blue-600 rounded flex items-center px-4">
                    <div className="w-6 h-6 bg-white rounded-sm mr-3"></div>
                    <span className="text-white text-sm font-medium">Your WordPress Site</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-100 rounded w-4/5"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-20 bg-gray-100 rounded"></div>
                    <div className="h-20 bg-gray-100 rounded"></div>
                  </div>

                  <div className="text-center text-gray-500 text-sm pt-4">
                    Your website content appears here...
                  </div>
                </div>

                {/* Chat Widget */}
                <ChatLauncher 
                  color="#6366f1"
                  onClick={() => setIsChatOpen(true)} 
                />
                
                {isChatOpen && (
                  <ChatPanel 
                    onClose={() => setIsChatOpen(false)}
                    launcherColor="#6366f1"
                  />
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Test Instructions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Test Your Setup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">✅ Things to Test</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Click the chat launcher</li>
                <li>• Send a test message</li>
                <li>• Try "Request Human" button</li>
                <li>• Test "Report Issue" feature</li>
                <li>• Check mobile responsiveness</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">🎯 What to Look For</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Widget position and appearance</li>
                <li>• Chat panel opens smoothly</li>
                <li>• Messages display correctly</li>
                <li>• All buttons work properly</li>
                <li>• Fits well on all screen sizes</li>
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t">
            <Button variant="outline" className="w-full" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Open in Full Page Preview
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreviewTab;