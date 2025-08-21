import { NavLink, useParams } from "react-router-dom";
import { 
  Bot, 
  FileText, 
  Settings, 
  MessageSquare, 
  AlertTriangle, 
  BarChart3,
  PlayCircle,
  Home,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const BotsSidebar = () => {
  const { id } = useParams();

  const mainNavItems = [
    { label: "All Bots", icon: Home, to: "/app/bots" },
    { label: "Create Bot", icon: Plus, to: "/app/bots/create" },
  ];

  const botNavItems = id ? [
    { label: "Playground", icon: PlayCircle, to: `/app/bots/${id}/playground` },
    { label: "Settings", icon: Settings, to: `/app/bots/${id}/settings` },
    { label: "Conversations", icon: MessageSquare, to: `/app/bots/${id}/conversations` },
    { label: "Issues", icon: AlertTriangle, to: `/app/bots/${id}/issues` },
    { label: "Analytics", icon: BarChart3, to: `/app/bots/${id}/analytics` },
  ] : [];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-sidebar-background border-r border-sidebar-border">
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <span className="ml-2 text-lg font-bold text-sidebar-foreground">
            ChatBot Pro
          </span>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-2">
          {mainNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`
              }
            >
              <item.icon className="w-4 h-4 mr-3" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bot-specific Navigation */}
        {botNavItems.length > 0 && (
          <>
            <Separator className="my-6" />
            <div className="mb-3">
              <h3 className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wide">
                Current Bot
              </h3>
            </div>
            <nav className="space-y-2">
              {botNavItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                    }`
                  }
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </>
        )}
      </div>
    </div>
  );
};

export default BotsSidebar;