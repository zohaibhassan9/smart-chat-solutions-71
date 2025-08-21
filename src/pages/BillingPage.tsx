import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  CreditCard, 
  Download, 
  ExternalLink, 
  Check, 
  Zap,
  Calendar,
  DollarSign,
  TrendingUp,
  FileText
} from "lucide-react";

const BillingPage = () => {
  const currentPlan = {
    name: "Pro",
    price: "$29/month",
    billed: "monthly",
    nextBilling: "March 15, 2024",
    features: [
      "5 active bots",
      "10,000 conversations/month",
      "Advanced analytics",
      "Priority support",
      "Custom branding"
    ]
  };

  const usage = {
    conversations: { used: 7834, total: 10000 },
    bots: { used: 3, total: 5 },
    storage: { used: 2.3, total: 10, unit: "GB" }
  };

  const invoices = [
    {
      id: "INV-2024-003",
      date: "Feb 15, 2024",
      amount: "$29.00",
      status: "Paid",
      period: "Feb 15 - Mar 15, 2024"
    },
    {
      id: "INV-2024-002",
      date: "Jan 15, 2024",
      amount: "$29.00",
      status: "Paid",
      period: "Jan 15 - Feb 15, 2024"
    },
    {
      id: "INV-2024-001",
      date: "Dec 15, 2023",
      amount: "$29.00",
      status: "Paid",
      period: "Dec 15 - Jan 15, 2024"
    }
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "1 bot",
        "100 conversations/month",
        "Basic analytics",
        "Community support"
      ],
      current: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "month",
      features: [
        "5 bots",
        "10,000 conversations/month",
        "Advanced analytics",
        "Priority support",
        "Custom branding"
      ],
      current: true,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      features: [
        "Unlimited bots",
        "100,000 conversations/month",
        "Advanced analytics",
        "Dedicated support",
        "White-label solution",
        "API access"
      ],
      current: false
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">
          Manage your subscription, usage, and billing information
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Current Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Current Plan
                </span>
                <Badge variant="secondary" className="bg-gradient-primary text-white">
                  {currentPlan.name}
                </Badge>
              </CardTitle>
              <CardDescription>
                Your current subscription and next billing date
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">{currentPlan.price}</p>
                  <p className="text-sm text-muted-foreground">
                    Billed {currentPlan.billed} • Next billing: {currentPlan.nextBilling}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="outline">Cancel Subscription</Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Usage Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Conversations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{usage.conversations.used.toLocaleString()} used</span>
                    <span>{usage.conversations.total.toLocaleString()} limit</span>
                  </div>
                  <Progress 
                    value={(usage.conversations.used / usage.conversations.total) * 100} 
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    {Math.round((usage.conversations.used / usage.conversations.total) * 100)}% of monthly limit
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Active Bots
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{usage.bots.used} active</span>
                    <span>{usage.bots.total} limit</span>
                  </div>
                  <Progress 
                    value={(usage.bots.used / usage.bots.total) * 100} 
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    {usage.bots.total - usage.bots.used} more bots available
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{usage.storage.used} {usage.storage.unit} used</span>
                    <span>{usage.storage.total} {usage.storage.unit} limit</span>
                  </div>
                  <Progress 
                    value={(usage.storage.used / usage.storage.total) * 100} 
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    Knowledge base storage
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="plans" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.current ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white">Most Popular</Badge>
                  </div>
                )}
                {plan.current && (
                  <div className="absolute -top-3 right-4">
                    <Badge variant="secondary">Current Plan</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.current ? "secondary" : "default"}
                    disabled={plan.current}
                  >
                    {plan.current ? "Current Plan" : `Upgrade to ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Need a Custom Plan?</CardTitle>
              <CardDescription>
                For large organizations with specific requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enterprise Custom</p>
                  <p className="text-sm text-muted-foreground">
                    Custom pricing, unlimited everything, dedicated support, SLA
                  </p>
                </div>
                <Button variant="outline">Contact Sales</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Billing History
                </span>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export All
                </Button>
              </CardTitle>
              <CardDescription>
                View and download your billing history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>{invoice.period}</TableCell>
                      <TableCell>{invoice.amount}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            PDF
                          </Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Method
              </CardTitle>
              <CardDescription>
                Manage your payment methods and billing information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">VISA</span>
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/2026</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                </div>
              </div>
              
              <Button variant="outline">
                <CreditCard className="h-4 w-4 mr-2" />
                Add Payment Method
              </Button>
              
              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-semibold">Billing Address</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p>123 Business St</p>
                    <p>San Francisco, CA 94105</p>
                    <p>United States</p>
                  </div>
                  <div className="flex items-start">
                    <Button variant="outline" size="sm">Edit Address</Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-semibold">Billing Settings</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Auto-pay enabled</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email receipts</span>
                    <Badge variant="secondary">Enabled</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BillingPage;