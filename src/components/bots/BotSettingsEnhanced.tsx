import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  ArrowLeft, 
  Upload, 
  FileText, 
  Trash2,
  Key,
  Globe,
  Palette,
  MessageSquare,
  Shield,
  Users,
  Save,
  Copy,
  Eye,
  Download,
  Plus,
  Settings,
  Bot,
  Zap
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const BotSettingsEnhanced = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [csatEnabled, setCsatEnabled] = useState(true);
  const [handoverEnabled, setHandoverEnabled] = useState(false);
  const [autoResume, setAutoResume] = useState(true);

  const knowledgeFiles = [
    { id: 1, name: "product_catalog.pdf", size: "2.3 MB", uploaded: "2024-01-15", status: "processed" },
    { id: 2, name: "faq_support.docx", size: "856 KB", uploaded: "2024-01-14", status: "processing" },
    { id: 3, name: "company_policies.txt", size: "124 KB", uploaded: "2024-01-10", status: "processed" },
    { id: 4, name: "pricing_info.csv", size: "45 KB", uploaded: "2024-01-08", status: "processed" }
  ];

  const domainBindings = [
    { domain: "yoursite.com", status: "verified", added: "2024-01-15" },
    { domain: "blog.yoursite.com", status: "pending", added: "2024-01-16" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={() => navigate("/app/bots")}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Bot Settings</h1>
          <p className="text-muted-foreground">Configure and customize your bot</p>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge</TabsTrigger>
          <TabsTrigger value="widget">Widget</TabsTrigger>
          <TabsTrigger value="handover">Handover</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  Basic Information
                </CardTitle>
                <CardDescription>
                  Configure your bot's basic settings and persona
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bot-name">Bot Name</Label>
                  <Input id="bot-name" defaultValue="Customer Support Bot" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bot-avatar">Avatar</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-xl">
                      🤖
                    </div>
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Change Avatar
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tone">Tone</Label>
                  <Select defaultValue="professional">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="formal">Formal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Conversation Settings
                </CardTitle>
                <CardDescription>
                  Configure how your bot handles conversations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="greeting">Welcome Message</Label>
                  <Textarea 
                    id="greeting" 
                    defaultValue="Hello! I'm here to help you with any questions you might have. How can I assist you today?"
                    rows={3}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="fallback">Fallback Response</Label>
                  <Textarea 
                    id="fallback"
                    defaultValue="I'm sorry, I didn't quite understand that. Could you please rephrase your question or try asking something else?"
                    rows={3}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="max-messages">Max Messages per Session</Label>
                  <Input id="max-messages" type="number" defaultValue="50" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="knowledge" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Knowledge Base Files
                    </span>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Upload Files
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    Manage documents that your bot uses to answer questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>File</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Uploaded</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {knowledgeFiles.map((file) => (
                        <TableRow key={file.id}>
                          <TableCell className="font-medium">{file.name}</TableCell>
                          <TableCell>{file.size}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={file.status === 'processed' ? 'secondary' : 'outline'}
                              className={file.status === 'processed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                            >
                              {file.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{file.uploaded}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Download className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    URL Sources
                  </CardTitle>
                  <CardDescription>
                    Add websites for your bot to crawl and learn from
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input placeholder="https://example.com/help" className="flex-1" />
                    <Button>Add URL</Button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">https://yoursite.com/faq</p>
                        <p className="text-sm text-muted-foreground">Last crawled: 2 days ago</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Storage Usage</CardTitle>
                <CardDescription>
                  Monitor your knowledge base storage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Used</span>
                    <span>3.4 GB / 10 GB</span>
                  </div>
                  <Progress value={34} className="h-2" />
                </div>
                
                <Separator />
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Documents</span>
                    <span>2.8 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>URLs</span>
                    <span>0.6 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Queue</span>
                    <span>1 file</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  View Detailed Usage
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="widget" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Widget Appearance
                  </CardTitle>
                  <CardDescription>
                    Customize how your bot widget looks on your website
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Primary Color</Label>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-primary rounded border"></div>
                      <Input defaultValue="#6366f1" className="flex-1" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Widget Position</Label>
                    <Select defaultValue="bottom-right">
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
                  
                  <div className="space-y-2">
                    <Label htmlFor="welcome-text">Welcome Text</Label>
                    <Input id="welcome-text" defaultValue="Hi! How can I help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="launcher-text">Launcher Text</Label>
                    <Input id="launcher-text" defaultValue="Chat with us" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Widget Features</CardTitle>
                  <CardDescription>
                    Configure additional widget functionality
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>CSAT Survey</Label>
                      <p className="text-sm text-muted-foreground">
                        Show satisfaction survey after conversations
                      </p>
                    </div>
                    <Switch checked={csatEnabled} onCheckedChange={setCsatEnabled} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Show Agent Pictures</Label>
                      <p className="text-sm text-muted-foreground">
                        Display profile pictures in chat
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Sound Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Play sound for new messages
                      </p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Widget Preview</CardTitle>
                <CardDescription>
                  See how your widget will appear on your website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg p-6 h-64 relative">
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white rounded-lg shadow-lg p-4 w-64">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                          <Bot className="w-4 h-4" />
                        </div>
                        <span className="font-medium">Customer Support</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Hi! How can I help you?</p>
                      <Button size="sm" className="w-full bg-gradient-primary">
                        Start Conversation
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Full Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="handover" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Human Handover
                </CardTitle>
                <CardDescription>
                  Configure when and how to transfer conversations to human agents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Enable Handover</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow transfer to human agents
                    </p>
                  </div>
                  <Switch checked={handoverEnabled} onCheckedChange={setHandoverEnabled} />
                </div>
                
                {handoverEnabled && (
                  <>
                    <div className="space-y-2">
                      <Label>Trigger Conditions</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="low-confidence" defaultChecked />
                          <Label htmlFor="low-confidence" className="text-sm">Low confidence responses (&lt; 70%)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="user-request" defaultChecked />
                          <Label htmlFor="user-request" className="text-sm">User explicitly requests human agent</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="escalation-keywords" />
                          <Label htmlFor="escalation-keywords" className="text-sm">Escalation keywords detected</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="handover-message">Handover Message</Label>
                      <Textarea 
                        id="handover-message"
                        defaultValue="I'm connecting you with a human agent who can better assist you. Please wait a moment..."
                        rows={3}
                      />
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Auto-Resume Settings
                </CardTitle>
                <CardDescription>
                  Configure when the bot should automatically resume after handover
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Auto-Resume</Label>
                    <p className="text-sm text-muted-foreground">
                      Bot takes over when agent is unavailable
                    </p>
                  </div>
                  <Switch checked={autoResume} onCheckedChange={setAutoResume} />
                </div>
                
                {autoResume && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="resume-delay">Resume After (minutes)</Label>
                      <Input id="resume-delay" type="number" defaultValue="10" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="resume-message">Resume Message</Label>
                      <Textarea 
                        id="resume-message"
                        defaultValue="I'm back to help you! Our agent is currently busy, but I can continue assisting you."
                        rows={3}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Resume Conditions</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="agent-timeout" defaultChecked />
                          <Label htmlFor="agent-timeout" className="text-sm">Agent response timeout</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="outside-hours" defaultChecked />
                          <Label htmlFor="outside-hours" className="text-sm">Outside business hours</Label>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  API Access
                </CardTitle>
                <CardDescription>
                  Manage API keys and webhook endpoints
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Bot API Key</Label>
                  <div className="flex gap-2">
                    <Input value="sk_live_***************************" readOnly className="flex-1" />
                    <Button variant="outline" size="sm">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="webhook-url">Webhook URL</Label>
                  <Input id="webhook-url" placeholder="https://your-site.com/webhook" />
                </div>
                
                <Button variant="outline">
                  Regenerate API Key
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Domain Security
                </CardTitle>
                <CardDescription>
                  Control which domains can use your bot
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="yourwebsite.com" className="flex-1" />
                  <Button>Add Domain</Button>
                </div>
                
                <div className="space-y-2">
                  {domainBindings.map((domain, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{domain.domain}</p>
                        <p className="text-sm text-muted-foreground">Added {domain.added}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={domain.status === 'verified' ? 'secondary' : 'outline'}
                          className={domain.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                        >
                          {domain.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rate Limiting</CardTitle>
                <CardDescription>
                  Current usage and limits for your bot
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Requests per hour</span>
                      <span>1,247 / 10,000</span>
                    </div>
                    <Progress value={12.47} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Monthly conversations</span>
                      <span>8,432 / 50,000</span>
                    </div>
                    <Progress value={16.86} className="h-2" />
                  </div>
                </div>
                
                <Separator />
                
                <div className="text-sm space-y-1">
                  <p><strong>Current Plan:</strong> Pro</p>
                  <p><strong>Rate Limit:</strong> 10,000 req/hour</p>
                  <p><strong>Burst Limit:</strong> 100 req/minute</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data & Privacy</CardTitle>
                <CardDescription>
                  Configure data retention and privacy settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Conversation Retention</Label>
                  <Select defaultValue="90-days">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30-days">30 days</SelectItem>
                      <SelectItem value="90-days">90 days</SelectItem>
                      <SelectItem value="1-year">1 year</SelectItem>
                      <SelectItem value="forever">Forever</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Collect User Data</Label>
                    <p className="text-sm text-muted-foreground">
                      Store email addresses and user information
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Analytics Tracking</Label>
                    <p className="text-sm text-muted-foreground">
                      Track conversation metrics and performance
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4 pt-6 border-t">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-gradient-primary">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default BotSettingsEnhanced;