import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/components/app/AppLayout";
import Overview from "@/components/app/Overview";
import BotsList from "@/components/bots/BotsList";
import CreateBot from "@/components/bots/CreateBot";
import BotSettings from "@/components/bots/BotSettings";
import BotPlayground from "@/components/bots/BotPlayground";
import Conversations from "@/components/bots/Conversations";
import Issues from "@/components/bots/Issues";
import Analytics from "@/components/bots/Analytics";
import SettingsPage from "@/pages/SettingsPage";
import BillingPage from "@/pages/BillingPage";
import HelpPage from "@/pages/HelpPage";

const BotsModule = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/app/overview" replace />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/bots" element={<BotsList />} />
        <Route path="/bots/create" element={<CreateBot />} />
        <Route path="/bots/:id/settings/*" element={<BotSettings />} />
        <Route path="/bots/:id/playground" element={<BotPlayground />} />
        <Route path="/bots/:id/conversations" element={<Conversations />} />
        <Route path="/bots/:id/issues" element={<Issues />} />
        <Route path="/bots/:id/analytics" element={<Analytics />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </AppLayout>
  );
};

export default BotsModule;