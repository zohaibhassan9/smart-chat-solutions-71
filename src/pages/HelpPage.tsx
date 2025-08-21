import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Video, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Star,
  Clock,
  HelpCircle,
  Zap,
  Bot,
  Settings,
  CreditCard
} from "lucide-react";

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const popularArticles = [
    {
      title: "Getting Started with Your First Bot",
      description: "Learn how to create and deploy your first chatbot in minutes",
      category: "Getting Started",
      readTime: "5 min read",
      rating: 4.8,
      views: "12.3k"
    },
    {
      title: "Training Your Bot with Knowledge Base", 
      description: "Upload documents and URLs to train your bot effectively",
      category: "Bot Training",
      readTime: "8 min read",
      rating: 4.9,
      views: "8.7k"
    },
    {
      title: "Customizing Widget Appearance",
      description: "Match your bot widget to your brand and website design",
      category: "Customization",
      readTime: "6 min read", 
      rating: 4.7,
      views: "6.2k"
    },
    {
      title: "Understanding Analytics & Metrics",
      description: "Track performance and improve your bot's effectiveness",
      category: "Analytics",
      readTime: "10 min read",
      rating: 4.6,
      views: "5.1k"
    }
  ];

  const categories = [
    {
      icon: Zap,
      title: "Getting Started",
      description: "New to ChatBot Pro? Start here",
      articles: 12,
      color: "text-blue-600"
    },
    {
      icon: Bot,
      title: "Bot Management",
      description: "Create, configure, and manage your bots",
      articles: 18,
      color: "text-green-600"
    },
    {
      icon: Settings,
      title: "Integrations",
      description: "Connect with other tools and platforms",
      articles: 8,
      color: "text-purple-600"
    },
    {
      icon: CreditCard,
      title: "Billing & Plans",
      description: "Subscription, pricing, and payments",
      articles: 6,
      color: "text-orange-600"
    }
  ];

  const faqs = [
    {
      question: "How do I create my first bot?",
      answer: "Creating your first bot is easy! Go to the Bots section, click 'Create Bot', and follow our 3-step wizard. You'll set up general information, upload knowledge base content, and customize the widget appearance. The whole process takes less than 10 minutes."
    },
    {
      question: "What file formats can I upload for training?",
      answer: "You can upload PDF documents, Word files (.docx), plain text files (.txt), and CSV files. You can also provide URLs for web pages to be crawled and included in your bot's knowledge base. Each file should be under 10MB."
    },
    {
      question: "How many conversations are included in each plan?",
      answer: "The Free plan includes 100 conversations per month, Pro plan includes 10,000 conversations, and Enterprise includes 100,000 conversations. A conversation is counted each time a visitor starts a new chat session with your bot."
    },
    {
      question: "Can I customize the bot's appearance?",
      answer: "Yes! You can fully customize your bot widget's colors, position, welcome message, and avatar. Pro and Enterprise plans also allow you to remove the ChatBot Pro branding and add your own logo."
    },
    {
      question: "How do I integrate the bot with my website?",
      answer: "After creating your bot, you'll get a simple JavaScript snippet to add to your website. Just paste it before the closing </body> tag, and your bot will appear. We also provide WordPress plugins and integrations for popular platforms."
    },
    {
      question: "What happens if my bot can't answer a question?",
      answer: "You can configure fallback responses and set up human handover rules. When the bot confidence is low, it can offer to connect the visitor with a human agent, collect contact information, or provide alternative help resources."
    },
    {
      question: "Can I see conversation transcripts?",
      answer: "Yes, all conversations are logged and can be viewed in the Conversations section. You can search, filter, export transcripts, and analyze conversation data to improve your bot's performance."
    },
    {
      question: "Is there an API available?",
      answer: "Enterprise plans include API access for custom integrations. You can use our REST API to create bots programmatically, retrieve conversation data, and integrate with your existing systems."
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Help Center</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers, tutorials, and guides to help you get the most out of ChatBot Pro
        </p>
        
        {/* Search */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search for help articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12"
          />
        </div>
      </div>

      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="space-y-6">
          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center pb-4">
                  <category.icon className={`h-8 w-8 mx-auto ${category.color}`} />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary">{category.articles} articles</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Articles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Popular Articles
              </CardTitle>
              <CardDescription>
                Most viewed and highest rated help articles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{article.title}</h3>
                        <Badge variant="outline" className="text-xs">{article.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{article.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {article.rating}
                        </div>
                        <span>{article.views} views</span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tutorials" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Quick Start Guide",
                description: "Get your first bot up and running in 5 minutes",
                duration: "5:30",
                level: "Beginner",
                thumbnail: "🚀"
              },
              {
                title: "Advanced Bot Training",
                description: "Optimize your bot's responses and accuracy",
                duration: "12:45",
                level: "Intermediate",
                thumbnail: "🎯"
              },
              {
                title: "Custom Integrations",
                description: "Connect your bot with external services",
                duration: "18:20", 
                level: "Advanced",
                thumbnail: "🔧"
              },
              {
                title: "Analytics Deep Dive",
                description: "Understanding and using conversation analytics",
                duration: "9:15",
                level: "Intermediate",
                thumbnail: "📊"
              },
              {
                title: "Handover Best Practices",
                description: "Setting up seamless bot-to-human handovers",
                duration: "7:30",
                level: "Intermediate",
                thumbnail: "🤝"
              },
              {
                title: "Widget Customization",
                description: "Make your bot match your brand perfectly",
                duration: "6:45",
                level: "Beginner",
                thumbnail: "🎨"
              }
            ].map((tutorial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="w-full h-32 bg-gradient-subtle rounded-lg flex items-center justify-center mb-3">
                    <div className="text-4xl">{tutorial.thumbnail}</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Video className="h-8 w-8 text-white/80" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                  <CardDescription>{tutorial.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline">{tutorial.level}</Badge>
                    <span className="text-muted-foreground">{tutorial.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="faq" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>
                Quick answers to common questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Live Chat Support
                </CardTitle>
                <CardDescription>
                  Get instant help from our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm"><strong>Response time:</strong> Typically under 2 minutes</p>
                  <p className="text-sm"><strong>Available:</strong> Monday-Friday, 9 AM - 6 PM EST</p>
                  <p className="text-sm"><strong>Languages:</strong> English, Spanish, French</p>
                </div>
                <Button className="w-full">
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Support
                </CardTitle>
                <CardDescription>
                  Send us a detailed message about your issue
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm"><strong>Response time:</strong> Within 24 hours</p>
                  <p className="text-sm"><strong>Available:</strong> 24/7</p>
                  <p className="text-sm"><strong>Email:</strong> support@chatbotpro.com</p>
                </div>
                <Button variant="outline" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  <h4 className="font-semibold">Developer Docs</h4>
                  <p className="text-sm text-muted-foreground">
                    API documentation and technical guides
                  </p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Docs
                  </Button>
                </div>
                
                <div className="p-4 border rounded-lg space-y-2">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                  <h4 className="font-semibold">Community Forum</h4>
                  <p className="text-sm text-muted-foreground">
                    Connect with other users and share tips
                  </p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Join Forum
                  </Button>
                </div>
                
                <div className="p-4 border rounded-lg space-y-2">
                  <Video className="h-6 w-6 text-purple-600" />
                  <h4 className="font-semibold">Video Library</h4>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step video tutorials
                  </p>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Watch Videos
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HelpPage;