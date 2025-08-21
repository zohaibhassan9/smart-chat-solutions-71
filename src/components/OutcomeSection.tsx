import { Clock, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OutcomeSection = () => {
  const outcomes = [
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Faster Support",
      description: "Customers get accurate answers instantly, in their own language. No more waiting for hours or dealing with unhelpful responses.",
      metric: "90% faster response time"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "More Conversions",
      description: "Smart lead capture means more qualified prospects in your funnel. Turn every conversation into a potential sale.",
      metric: "3x more qualified leads"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Peace of Mind",
      description: "AI handles the busy work, while your team only steps in when needed. Focus on what matters most to your business.",
      metric: "70% reduction in support load"
    }
  ];

  return (
    <section id="outcomes" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Imagine Every Visitor Getting{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Instant, Human-Like Help
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-primary/20 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-background rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {outcome.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {outcome.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {outcome.description}
                </p>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {outcome.metric}
                </div>
              </div>
            ))}
          </div>
          
          {/* New paradigm */}
          <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-xl">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              The New Way Forward
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We combine AI + automation + human handover into one simple platform—so you never have to compromise between customer experience and efficiency.
            </p>
            <Button variant="cta" size="lg" className="group">
              See How It Works
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;