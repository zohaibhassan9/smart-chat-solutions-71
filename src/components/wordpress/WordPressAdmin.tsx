import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Eye, FileText, HelpCircle } from "lucide-react";
import SettingsTab from "./SettingsTab";
import PreviewTab from "./PreviewTab";
import LogsTab from "./LogsTab";
import TroubleshootingTab from "./TroubleshootingTab";

const WordPressAdmin = () => {
  const [activeTab, setActiveTab] = useState("settings");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          ChatBot WordPress Plugin
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From complex manual setup to simple one-click installation
        </p>
      </div>

      {/* Before-After-Bridge Section */}
      <Card className="max-w-6xl mx-auto shadow-card">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Transform Your WordPress Experience
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            From complex manual setup to simple one-click installation
          </p>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border border-destructive/20 bg-destructive/5">
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <span className="text-destructive font-bold text-lg">×</span>
            </div>
            <h3 className="text-xl font-semibold text-destructive">Before</h3>
            <p className="text-muted-foreground leading-relaxed">
              Installing chatbots on WordPress means editing code, fixing errors, and hoping it works. Hours of frustration with no guarantee of success.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border border-primary/20 bg-primary/5">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">✓</span>
            </div>
            <h3 className="text-xl font-semibold text-primary">After</h3>
            <p className="text-muted-foreground leading-relaxed">
              With our plugin, paste your token and you're live in minutes—no code needed. Built-in preview and troubleshooting keep you in control.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border border-accent/20 bg-accent/5">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">→</span>
            </div>
            <h3 className="text-xl font-semibold text-accent-foreground">Bridge</h3>
            <p className="text-muted-foreground leading-relaxed">
              Built-in preview, logs, and troubleshooting keep you in control from the WP dashboard. Everything just works.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Main Interface */}
      <Card className="max-w-6xl mx-auto shadow-card">
        <CardHeader className="border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">CB</span>
            </div>
            <div>
              <CardTitle>ChatBot Settings</CardTitle>
              <CardDescription>Configure your AI chatbot for WordPress</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="border-b">
              <TabsList className="w-full justify-start h-auto p-0 bg-transparent">
                <TabsTrigger 
                  value="settings" 
                  className="flex items-center space-x-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border-b-2 border-transparent data-[state=active]:border-primary rounded-none px-6 py-4"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="preview"
                  className="flex items-center space-x-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border-b-2 border-transparent data-[state=active]:border-primary rounded-none px-6 py-4"
                >
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="logs"
                  className="flex items-center space-x-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border-b-2 border-transparent data-[state=active]:border-primary rounded-none px-6 py-4"
                >
                  <FileText className="h-4 w-4" />
                  <span>Logs & Sync</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="troubleshooting"
                  className="flex items-center space-x-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary border-b-2 border-transparent data-[state=active]:border-primary rounded-none px-6 py-4"
                >
                  <HelpCircle className="h-4 w-4" />
                  <span>Troubleshooting</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="p-6">
              <TabsContent value="settings" className="mt-0">
                <SettingsTab />
              </TabsContent>

              <TabsContent value="preview" className="mt-0">
                <PreviewTab />
              </TabsContent>

              <TabsContent value="logs" className="mt-0">
                <LogsTab />
              </TabsContent>

              <TabsContent value="troubleshooting" className="mt-0">
                <TroubleshootingTab />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default WordPressAdmin;