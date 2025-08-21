import { AlertTriangle, TrendingDown, DollarSign } from "lucide-react";

const PainSection = () => {
  const painPoints = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Bots that feel robotic",
      description: "Most chatbots fail to understand real questions, frustrating visitors instead of helping them. Your customers end up more confused than when they started."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-orange-500" />,
      title: "Lost opportunities",
      description: "Without proper lead capture and handover, potential customers leave without converting. You're losing money every day from missed connections."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-600" />,
      title: "Complex, expensive tools",
      description: "Competing solutions are bloated, hard to set up, and charge too much for too little. You need an enterprise team just to configure basic features."
    }
  ];

  return (
    <section id="pain" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tired of Bots That{" "}
            <span className="text-red-500">Don't Deliver?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {painPoints.map((pain, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {pain.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {pain.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pain.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Belief deconstruction */}
          <div className="mt-16 p-8 bg-muted/50 rounded-xl border border-border">
            <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
              You don't need an enterprise team or weeks of training to launch a great chatbot.{" "}
              <span className="text-primary font-semibold">
                The problem isn't you—it's the tools.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;