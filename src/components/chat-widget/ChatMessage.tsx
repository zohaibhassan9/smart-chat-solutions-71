import { Bot, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  type: 'user' | 'bot' | 'system';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.type === 'user';
  const isSystem = message.type === 'system';

  if (isSystem) {
    return (
      <div className="text-center">
        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
          {message.content}
        </span>
      </div>
    );
  }

  return (
    <div className={cn("flex space-x-2", isUser && "flex-row-reverse space-x-reverse")}>
      <Avatar className="h-6 w-6 flex-shrink-0">
        <AvatarFallback className={cn(
          "text-white",
          isUser ? "bg-muted-foreground" : "bg-primary"
        )}>
          {isUser ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
        </AvatarFallback>
      </Avatar>
      <div className={cn(
        "max-w-[70%] px-3 py-2 rounded-lg text-sm",
        isUser 
          ? "bg-primary text-white rounded-br-sm" 
          : "bg-muted text-foreground rounded-bl-sm"
      )}>
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;