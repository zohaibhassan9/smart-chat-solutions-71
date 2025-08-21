import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatLauncherProps {
  color?: string;
  onClick: () => void;
}

const ChatLauncher = ({ color = "#6366f1", onClick }: ChatLauncherProps) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-primary hover:scale-110 transition-all duration-300 z-50"
      style={{ backgroundColor: color }}
      size="icon"
    >
      <MessageCircle className="h-6 w-6 text-white" />
      <span className="sr-only">Chat with us</span>
    </Button>
  );
};

export default ChatLauncher;