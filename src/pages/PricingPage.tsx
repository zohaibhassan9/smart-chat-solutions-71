import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for trying out our service",
      features: [
        "1 AI chatbot",
        "100 conversations/month",
        "Basic customization",
        "Community support",
        "7-day response time"
      ],
      cta: "Get Started Free",
      popular: false,
      highlight: false
    },
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "1 AI chatbot",
        "1,000 conversations/month",
        "Basic customization", 
        "Email support",
        "WordPress plugin",
        "24-hour response time"
      ],
      cta: "Start Free Trial",
      popular: false,
      highlight: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Best for growing businesses",
      features: [
        "5 AI chatbots",
        "10,000 conversations/month",
        "Advanced customization",
        "Priority support",
        "All integrations",
        "Analytics dashboard",
        "Human handover",
        "1-hour response time"
      ],
      cta: "Start Free Trial",
      popular: true,
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited chatbots",
        "Unlimited conversations",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "Advanced analytics",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false,
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Page header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary mr-2" />
                <span className="text-primary font-medium">Pricing Plans</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Simple, Transparent{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Choose the plan that fits your needs. All paid plans include a 14-day free trial.
              </p>
            </div>

            {/* Pricing cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-card border rounded-2xl p-8 shadow-card transition-all duration-300 hover:shadow-primary/20 flex flex-col ${
                    plan.popular
                      ? "border-primary shadow-primary/10"
                      : "border-border hover:border-primary/50"
                  } ${plan.highlight ? "ring-2 ring-primary/20" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-button whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center mb-6">
                      <span className="text-5xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-2 text-lg">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className={`w-full group mt-auto ${plan.popular ? "bg-gradient-primary hover:opacity-90" : ""}`}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Features comparison */}
            <div className="bg-card rounded-2xl p-8 shadow-card mb-12">
              <h3 className="text-2xl font-bold text-center mb-8">
                All plans include our core features
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">AI-Powered</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced AI technology for natural conversations
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">Easy Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Simple setup with popular platforms and websites
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">24/7 Available</h4>
                  <p className="text-sm text-muted-foreground">
                    Your chatbot works around the clock for your customers
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ and contact */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold">
                Questions about pricing?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                We're here to help you choose the right plan for your business.
              </p>
              <div className="flex justify-center">
                <Button size="lg" onClick={() => window.location.href = '/contact'}>
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;