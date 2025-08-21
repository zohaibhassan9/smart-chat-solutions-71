import { Button } from "@/components/ui/button";
import { Upload, Settings, Rocket, ArrowRight, CheckCircle } from "lucide-react";

const ProductSection = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Create Your Bot",
      description: "Upload docs or connect your site. Our AI learns from your content in minutes, not hours."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Customize & Embed",
      description: "Configure tone, style, and install with one snippet or WP plugin. No coding required."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Engage & Grow",
      description: "Let AI handle support, capture leads, and escalate to humans when needed. Scale effortlessly."
    }
  ];

  return (
    <section id="product" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Product introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ChatBot Pro
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The AI Chatbot SaaS built for real businesses. With our WordPress plugin, n8n workflows, and deep integrations, you can launch a powerful, reliable chatbot in minutes.
            </p>
          </div>

          {/* 3-step process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl text-white mb-6 shadow-button">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connection arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 transform translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Founder message */}
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-card">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JD</span>
              </div>
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                "We built this because we were tired of chatbots that overpromised and underdelivered. Our mission is simple: make AI chatbots that are fast, reliable, and actually useful for your business."
              </blockquote>
              <p className="text-muted-foreground font-medium">
                John Doe, Founder & CEO
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-primary rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Customer Experience?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Start your free trial today and see the difference—no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="secondary" size="xl" className="group bg-white text-primary hover:bg-white/90">
                  Launch My Chatbot
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <CheckCircle className="w-4 h-4" />
                  <span>14-day free trial included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;