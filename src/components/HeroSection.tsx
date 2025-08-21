import { Button } from "@/components/ui/button";
import { Check, ArrowRight, MessageSquare, Users, Zap, BarChart3, Puzzle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const { isLoggedIn, userType } = useAuth();
  const navigate = useNavigate();
  
  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Reduce support workload with an AI agent that answers instantly from your content"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Capture leads directly from chat and sync them to your CRM"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      text: "Human handover in one click—never leave customers hanging"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      text: "Real-time analytics to see what's working and what's not"
    },
    {
      icon: <Puzzle className="w-5 h-5" />,
      text: "Works out-of-the-box with WordPress, Shopify, and more"
    }
  ];

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-32 right-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            AI Chatbots That Actually{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Understand
            </span>{" "}
            Your Customers
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            For businesses, agencies, and website owners tired of clunky bots. Our SaaS platform + WordPress plugin makes it effortless to launch AI-powered chat, automate conversations, and seamlessly hand over to humans when needed.
          </p>
          
          {/* Benefits list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 text-left">
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {isLoggedIn ? (
              <Button variant="hero" size="xl" className="group" onClick={() => navigate(userType === 'admin' ? '/admin' : '/dashboard')}>
                Go to Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : (
              <Button variant="hero" size="xl" className="group" onClick={() => navigate('/signup')}>
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
            <Button variant="outline" size="xl">
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>5-minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>14-day free trial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;