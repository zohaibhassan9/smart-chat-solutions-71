import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ArrowLeft, 
  Send, 
  Bot, 
  User,
  Settings,
  Trash2,
  RotateCcw,
  Copy,
  Download,
  Zap,
  Brain,
  Clock
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const BotPlaygroundEnhanced = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [sessionMemory, setSessionMemory] = useState(true);
  const [streaming, setStreaming] = useState(true);
  const [showThinking, setShowThinking] = useState(false);

  const [conversation, setConversation] = useState([
    {
      id: 1,
      type: "bot",
      message: "Hello! I'm your customer support bot. How can I help you today?",
      timestamp: new Date(Date.now() - 300000),
      thinking: "User just connected. Showing friendly greeting and offering help."
    },
    {
      id: 2,
      type: "user", 
      message: "I'm having trouble with my recent order",
      timestamp: new Date(Date.now() - 200000)
    },
    {
      id: 3,
      type: "bot",
      message: "I'd be happy to help you with your order! To better assist you, could you please provide your order number or the email address associated with your account?",
      timestamp: new Date(Date.now() - 100000),
      thinking: "User mentioned order issue. Need to gather order details to provide specific help. Asking for order number or email to identify the order."
    }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    
    const userMessage = {
      id: conversation.length + 1,
      type: "user" as const,
      message: message.trim(),
      timestamp: new Date()
    };
    
    setConversation(prev => [...prev, userMessage]);
    setMessage("");
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: conversation.length + 2,
        type: "bot" as const,
        message: "I understand your concern. Let me help you with that right away. Based on your query, here's what I can suggest...",
        timestamp: new Date(),
        thinking: "User provided additional context. Analyzing the query and providing relevant solution."
      };
      setConversation(prev => [...prev, botMessage]);
    }, streaming ? 1500 : 500);
  };

  const clearConversation = () => {
    setConversation([{
      id: 1,
      type: "bot",
      message: "Hello! I'm your customer support bot. How can I help you today?",
      timestamp: new Date(),
      thinking: "Conversation reset. Showing fresh greeting."
    }]);
  };

  const copyConversation = () => {
    const text = conversation.map(msg => 
      `${msg.type.toUpperCase()}: ${msg.message}`
    ).join('\n\n');
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={() => navigate("/app/bots")}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Bot Playground</h1>
          <p className="text-muted-foreground">Test and configure your bot in real-time</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
        {/* Chat Interface */}
        <div className="lg:col-span-2 flex flex-col">
          <Card className="flex-1 flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Customer Support Bot</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Online
                      </Badge>
                      <span className="text-sm text-muted-foreground">Response time: ~2s</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={copyConversation}>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm" onClick={clearConversation}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4">
                  {conversation.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] space-y-2`}>
                        <div className={`flex items-center gap-2 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            msg.type === 'user' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-gradient-primary text-white'
                          }`}>
                            {msg.type === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {msg.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                        
                        <div className={`p-3 rounded-lg ${
                          msg.type === 'user'
                            ? 'bg-primary text-primary-foreground ml-8'
                            : 'bg-muted mr-8'
                        }`}>
                          {msg.message}
                        </div>
                        
                        {msg.type === 'bot' && showThinking && msg.thinking && (
                          <div className="mr-8 p-2 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
                            <div className="flex items-center gap-1 text-yellow-700 font-medium mb-1">
                              <Brain className="w-3 h-3" />
                              Bot Thinking:
                            </div>
                            <p className="text-yellow-600 text-xs">{msg.thinking}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="p-6 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage} className="bg-gradient-primary">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Configuration Panel */}
        <div className="flex flex-col">
          <Tabs defaultValue="settings" className="flex-1 flex flex-col">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="debug">Debug</TabsTrigger>
            </TabsList>
            
            <TabsContent value="settings" className="flex-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Live Configuration
                  </CardTitle>
                  <CardDescription>
                    Changes apply instantly to test conversations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Session Memory</Label>
                        <p className="text-xs text-muted-foreground">
                          Remember conversation context
                        </p>
                      </div>
                      <Switch checked={sessionMemory} onCheckedChange={setSessionMemory} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Streaming Responses</Label>
                        <p className="text-xs text-muted-foreground">
                          Show typing indicator and gradual responses
                        </p>
                      </div>
                      <Switch checked={streaming} onCheckedChange={setStreaming} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Show Bot Thinking</Label>
                        <p className="text-xs text-muted-foreground">
                          Display reasoning behind responses
                        </p>
                      </div>
                      <Switch checked={showThinking} onCheckedChange={setShowThinking} />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Quick Actions</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        <Zap className="w-4 h-4 mr-2" />
                        Test Intent
                      </Button>
                      <Button variant="outline" size="sm">
                        <Clock className="w-4 h-4 mr-2" />
                        Load Scenario
                      </Button>
                      <Button variant="outline" size="sm">
                        <User className="w-4 h-4 mr-2" />
                        Simulate User
                      </Button>
                      <Button variant="outline" size="sm">
                        <Brain className="w-4 h-4 mr-2" />
                        Knowledge Test
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Test Scenarios</h4>
                    <div className="space-y-2">
                      <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                        💳 "I need to update my payment method"
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                        📦 "Where is my order #12345?"
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                        🔄 "I want to return an item"
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                        ❓ "What are your business hours?"
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="debug" className="flex-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    Debug Information
                  </CardTitle>
                  <CardDescription>
                    Real-time insights into bot behavior
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg space-y-2">
                      <h5 className="font-medium text-sm">Last Response Metrics</h5>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Response Time: <span className="font-mono">1.2s</span></div>
                        <div>Confidence: <span className="font-mono">94%</span></div>
                        <div>Intent: <span className="font-mono">order_inquiry</span></div>
                        <div>Tokens Used: <span className="font-mono">156</span></div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-muted rounded-lg space-y-2">
                      <h5 className="font-medium text-sm">Knowledge Base Hits</h5>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span>orders_faq.pdf</span>
                          <Badge variant="outline" className="text-xs">87%</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>support_articles.txt</span>
                          <Badge variant="outline" className="text-xs">72%</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-muted rounded-lg space-y-2">
                      <h5 className="font-medium text-sm">Session Context</h5>
                      <div className="text-xs font-mono bg-background p-2 rounded">
                        {`{
  "user_id": "anon_123",
  "session_length": "5m 23s",
  "messages_count": 6,
  "detected_intent": "support_inquiry",
  "sentiment": "neutral"
}`}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default BotPlaygroundEnhanced;