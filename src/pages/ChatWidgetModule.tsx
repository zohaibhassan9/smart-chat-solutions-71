import { Routes, Route } from "react-router-dom";
import ChatWidgetDemo from "@/components/chat-widget/ChatWidgetDemo";
import ChatWidgetSettings from "@/components/chat-widget/ChatWidgetSettings";
import Navigation from "@/components/Navigation";

const ChatWidgetModule = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <main className="container mx-auto px-12 lg:px-16 py-8 pt-24"> {/* Add top padding to prevent navbar overlap */}
        <Routes>
          <Route path="/" element={<ChatWidgetDemo />} />
          <Route path="/settings" element={<ChatWidgetSettings />} />
        </Routes>
      </main>
    </div>
  );
};

export default ChatWidgetModule;