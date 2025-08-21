import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Bot, 
  CreditCard, 
  FileText, 
  AlertTriangle, 
  Route,
  Settings,
  Shield
} from "lucide-react";

const AdminSidebar = () => {
  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, to: "/admin/dashboard" },
    { label: "Users", icon: Users, to: "/admin/users" },
    { label: "Bots", icon: Bot, to: "/admin/bots" },
    { label: "Billing", icon: CreditCard, to: "/admin/billing" },
    { label: "Logs", icon: FileText, to: "/admin/logs" },
    { label: "Issues", icon: AlertTriangle, to: "/admin/issues" },
    { label: "Models & Routing", icon: Route, to: "/admin/models-routing" },
    { label: "Settings", icon: Settings, to: "/admin/settings" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-sidebar-background border-r border-sidebar-border">
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="ml-2 text-lg font-bold text-sidebar-foreground">
            Synofex Admin
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => (
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

        {/* Admin Badge */}
        <div className="mt-8 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
          <div className="flex items-center">
            <Shield className="w-4 h-4 text-destructive mr-2" />
            <span className="text-xs font-medium text-destructive">
              Admin Access
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Full system control
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;