import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageSquare, Users, Zap, Clock, Shield, Star, ArrowRight, Code, Palette, BarChart3 } from "lucide-react";
import ChatLauncher from "./ChatLauncher";
import ChatPanel from "./ChatPanel";

const ChatWidgetDemo = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [launcherColor, setLauncherColor] = useState("#6366f1");

  return (
    <div className="container mx-auto px-12 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <Badge variant="outline" className="px-4 py-2 text-sm">
            ✨ Next-Generation Chat Experience
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Embedded Chat Widget
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform visitor frustration into satisfaction with our AI-powered chat experience that bridges the gap between automation and human touch
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button 
              onClick={() => setIsChatOpen(true)}
              variant="cta"
              size="lg"
              className="px-8"
            >
              Try Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              View Pricing
            </Button>
          </div>
        </div>

        {/* Before-After-Bridge Section */}
        <Card className="shadow-card">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Before → After → Bridge
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              See the transformation in user experience
            </p>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border border-destructive/20 bg-destructive/5">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <span className="text-destructive font-bold text-lg">😤</span>
              </div>
              <h3 className="text-xl font-semibold text-destructive">Before</h3>
              <p className="text-muted-foreground leading-relaxed">
                Most chat widgets are clunky, robotic, and frustrating. Visitors get stuck with unhelpful bots and no way to reach humans.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border border-primary/20 bg-primary/5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">😊</span>
              </div>
              <h3 className="text-xl font-semibold text-primary">After</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visitors get instant, natural answers with the option to reach a human anytime. Smooth handovers and issue reporting.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border border-accent/20 bg-accent/5">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-accent-foreground">Bridge</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our widget merges AI + human support into a smooth, modern experience that visitors actually enjoy using.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-primary/20 bg-primary/5 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Instant Deployment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                One line of code. Zero configuration. Your chat widget is live in under 60 seconds with smart defaults that work everywhere.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-accent/5 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-xl">Seamless Handover</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AI handles routine queries while complex issues seamlessly transfer to human agents with full conversation context preserved.
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 bg-secondary/5 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-secondary-foreground" />
              </div>
              <CardTitle className="text-xl">Smart Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Track satisfaction scores, conversation patterns, and handover rates to continuously improve your customer experience.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <Card className="shadow-card">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              How It Works
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Three simple steps to transform your customer support
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold">Embed Widget</h3>
                <p className="text-muted-foreground">
                  Copy our lightweight script tag and paste it into your website. Works with any platform.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold">Configure AI</h3>
                <p className="text-muted-foreground">
                  Train your AI with your business knowledge through our intuitive dashboard. No coding required.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center mx-auto text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold">Go Live</h3>
                <p className="text-muted-foreground">
                  Your intelligent chat widget is ready to handle customer inquiries 24/7 with human backup.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo Controls */}
        <Card className="max-w-2xl mx-auto shadow-card">
          <CardHeader>
            <CardTitle>Interactive Demo</CardTitle>
            <CardDescription>
              Experience the chat widget in action. Customize the appearance and test all features.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Launcher Color</span>
              <input
                type="color"
                value={launcherColor}
                onChange={(e) => setLauncherColor(e.target.value)}
                className="w-12 h-8 rounded border"
              />
            </div>
            <Button 
              onClick={() => setIsChatOpen(true)}
              className="w-full"
              variant="cta"
              size="lg"
            >
              Launch Chat Widget Demo
            </Button>
          </CardContent>
        </Card>

        {/* Advanced Features Grid */}
        <div>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Advanced Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for exceptional customer support
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">AI Conversations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Streaming responses with typing indicators for natural conversational flow
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-accent-foreground mx-auto mb-2" />
                <CardTitle className="text-lg">Human Handover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  One-click escalation to human agents when AI reaches its limits
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-secondary-foreground mx-auto mb-2" />
                <CardTitle className="text-lg">Issue Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built-in bug reporting with context preservation and priority routing
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">CSAT & Transcripts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  End chats with satisfaction ratings and optional email transcripts
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Palette className="h-8 w-8 text-accent-foreground mx-auto mb-2" />
                <CardTitle className="text-lg">Brand Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Match your brand colors, fonts, and messaging perfectly
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-8 w-8 text-secondary-foreground mx-auto mb-2" />
                <CardTitle className="text-lg">24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Always-on AI support with intelligent routing to human agents
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Easy Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Works with any website, CMS, or platform. No backend required
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-accent-foreground mx-auto mb-2" />
                <CardTitle className="text-lg">Detailed Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track performance, satisfaction, and identify improvement areas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Proof */}
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Trusted by Growing Businesses</CardTitle>
            <p className="text-muted-foreground">Join thousands of companies delivering exceptional customer experiences</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-primary">95%</div>
                <p className="text-sm text-muted-foreground">Customer satisfaction rate</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-accent-foreground">60%</div>
                <p className="text-sm text-muted-foreground">Reduction in support tickets</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-secondary-foreground">24/7</div>
                <p className="text-sm text-muted-foreground">Instant response availability</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-primary text-white shadow-card">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-white">
              Ready to Transform Your Customer Support?
            </CardTitle>
            <p className="text-white/80 mt-2 text-lg">
              Start your free trial today and see the difference in 60 seconds
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex justify-center gap-4">
              <Button 
                onClick={() => setIsChatOpen(true)}
                variant="secondary"
                size="lg"
                className="px-8"
              >
                Try Demo Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Get Started Free
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Chat Widget */}
      <ChatLauncher 
        color={launcherColor}
        onClick={() => setIsChatOpen(true)} 
      />
      
      {isChatOpen && (
        <ChatPanel 
          onClose={() => setIsChatOpen(false)}
          launcherColor={launcherColor}
        />
        )}
      </div>
    </div>
  );
};

export default ChatWidgetDemo;