const Footer = () => {
  const quickLinks = [
    { label: "Documentation", href: "#docs" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Contact Support", href: "#contact" },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="ml-2 text-xl font-bold text-foreground">
                  ChatBot Pro
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                The AI Chatbot SaaS built for real businesses. Launch powerful, 
                reliable chatbots in minutes with our WordPress plugin and deep integrations.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>hello@chatbotpro.com</p>
                <p>1-800-CHATBOT</p>
                <p>24/7 Support Available</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 ChatBot Pro. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a
                href="#privacy"
                className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
              >
                Terms
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;