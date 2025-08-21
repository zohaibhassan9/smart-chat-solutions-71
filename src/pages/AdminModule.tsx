import { Routes, Route } from "react-router-dom";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminDashboard from "@/components/admin/AdminDashboard";
import UsersPage from "@/components/admin/UsersPage";
import UserDetail from "@/components/admin/UserDetail";
import BotsPage from "@/components/admin/BotsPage";
import BotDetail from "@/components/admin/BotDetail";
import BillingPage from "@/components/admin/BillingPage";
import LogsPage from "@/components/admin/LogsPage";
import IssuesPage from "@/components/admin/IssuesPage";
import ModelsRoutingPage from "@/components/admin/ModelsRoutingPage";
import SettingsPage from "@/components/admin/SettingsPage";

const AdminModule = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 ml-64">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/bots" element={<BotsPage />} />
            <Route path="/bots/:id" element={<BotDetail />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/issues" element={<IssuesPage />} />
            <Route path="/models-routing" element={<ModelsRoutingPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminModule;