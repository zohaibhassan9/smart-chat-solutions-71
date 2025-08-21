import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, CreditCard, Users, TrendingUp, Download, ExternalLink } from "lucide-react";

const BillingPage = () => {
  const billingMetrics = [
    { 
      title: "Monthly Revenue", 
      value: "$45,678", 
      change: "+15.3%", 
      icon: DollarSign, 
      color: "text-green-600" 
    },
    { 
      title: "Active Subscriptions", 
      value: "2,847", 
      change: "+12.5%", 
      icon: CreditCard, 
      color: "text-blue-600" 
    },
    { 
      title: "Average Revenue Per User", 
      value: "$16.04", 
      change: "+2.1%", 
      icon: Users, 
      color: "text-purple-600" 
    },
    { 
      title: "Churn Rate", 
      value: "2.3%", 
      change: "-0.8%", 
      icon: TrendingUp, 
      color: "text-orange-600" 
    },
  ];

  const planDistribution = [
    { plan: "Free", users: 1456, revenue: "$0", percentage: "51.2%" },
    { plan: "Pro", users: 891, revenue: "$17,820", percentage: "31.3%" },
    { plan: "Enterprise", users: 234, revenue: "$23,400", percentage: "8.2%" },
    { plan: "Team", users: 266, revenue: "$7,980", percentage: "9.3%" }
  ];

  const recentInvoices = [
    { 
      id: "inv_001", 
      customer: "TechCorp Inc.", 
      email: "billing@techcorp.com",
      amount: "$1,200", 
      plan: "Enterprise", 
      status: "Paid", 
      date: "2024-01-20" 
    },
    { 
      id: "inv_002", 
      customer: "StartupXYZ", 
      email: "finance@startupxyz.com",
      amount: "$200", 
      plan: "Pro", 
      status: "Paid", 
      date: "2024-01-19" 
    },
    { 
      id: "inv_003", 
      customer: "FreelancePro", 
      email: "john@freelancepro.com",
      amount: "$20", 
      plan: "Pro", 
      status: "Failed", 
      date: "2024-01-18" 
    },
    { 
      id: "inv_004", 
      customer: "AgencyPlus", 
      email: "accounts@agencyplus.com",
      amount: "$600", 
      plan: "Team", 
      status: "Pending", 
      date: "2024-01-17" 
    }
  ];

  const stripeEvents = [
    { 
      event: "customer.subscription.created", 
      customer: "cus_123456", 
      amount: "$20.00", 
      timestamp: "2024-01-20 14:30" 
    },
    { 
      event: "invoice.payment_succeeded", 
      customer: "cus_789012", 
      amount: "$1,200.00", 
      timestamp: "2024-01-20 13:15" 
    },
    { 
      event: "invoice.payment_failed", 
      customer: "cus_345678", 
      amount: "$20.00", 
      timestamp: "2024-01-20 11:45" 
    },
    { 
      event: "customer.subscription.updated", 
      customer: "cus_901234", 
      amount: "$200.00", 
      timestamp: "2024-01-20 09:30" 
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      Paid: "bg-green-100 text-green-800",
      Pending: "bg-yellow-100 text-yellow-800",
      Failed: "bg-red-100 text-red-800"
    };
    return styles[status as keyof typeof styles] || "bg-gray-100 text-gray-800";
  };

  const getPlanBadge = (plan: string) => {
    const styles = {
      Free: "bg-gray-100 text-gray-800",
      Pro: "bg-blue-100 text-blue-800",
      Team: "bg-green-100 text-green-800",
      Enterprise: "bg-purple-100 text-purple-800"
    };
    return styles[plan as keyof typeof styles] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Billing Overview</h1>
          <p className="text-muted-foreground">
            Revenue metrics, subscriptions, and billing management
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button variant="outline">
            <ExternalLink className="h-4 w-4 mr-2" />
            Stripe Dashboard
          </Button>
        </div>
      </div>

      {/* Billing Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {billingMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Plan Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Plan Distribution</CardTitle>
            <CardDescription>Current subscription breakdown across plans</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Plan</TableHead>
                  <TableHead>Users</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>%</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {planDistribution.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Badge className={getPlanBadge(item.plan)}>
                        {item.plan}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.users.toLocaleString()}</TableCell>
                    <TableCell>{item.revenue}</TableCell>
                    <TableCell>{item.percentage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Stripe Events */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Stripe Events</CardTitle>
            <CardDescription>Latest billing events from Stripe</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stripeEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{event.event}</p>
                    <p className="text-xs text-muted-foreground">
                      {event.customer} • {event.timestamp}
                    </p>
                  </div>
                  <div className="text-sm font-medium">{event.amount}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Invoices */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Invoices</CardTitle>
          <CardDescription>
            Latest billing invoices and payment status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentInvoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{invoice.customer}</div>
                      <div className="text-sm text-muted-foreground">{invoice.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPlanBadge(invoice.plan)}>
                      {invoice.plan}
                    </Badge>
                  </TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge className={getStatusBadge(invoice.status)}>
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingPage;