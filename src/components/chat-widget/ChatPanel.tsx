import { useState, useEffect, useRef } from "react";
import { X, User, Bot, MessageSquare, AlertCircle, Star, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ChatMessage from "./ChatMessage";
import HandoverModal from "./HandoverModal";
import IssueReportModal from "./IssueReportModal";
import CSATModal from "./CSATModal";

interface ChatPanelProps {
  onClose: () => void;
  launcherColor: string;
}

interface Message {
  id: string;
  type: 'user' | 'bot' | 'system';
  content: string;
  timestamp: Date;
}

const ChatPanel = ({ onClose, launcherColor }: ChatPanelProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi there! 👋 I'm here to help you with any questions. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showHandover, setShowHandover] = useState(false);
  const [showIssueReport, setShowIssueReport] = useState(false);
  const [showCSAT, setShowCSAT] = useState(false);
  const [chatEnded, setChatEnded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getBotResponse(content),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userMessage: string): string => {
    const responses = [
      "That's a great question! Let me help you with that. Based on what you've asked, here are a few things to consider...",
      "I understand what you're looking for. Here's what I can tell you about that topic...",
      "Thanks for reaching out! I'd be happy to help you solve this. Let me walk you through the solution...",
      "That's something I can definitely assist with. Here's the information you need..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleHandover = () => {
    setShowHandover(true);
  };

  const handleIssueReport = () => {
    setShowIssueReport(true);
  };

  const handleEndChat = () => {
    setChatEnded(true);
    setShowCSAT(true);
  };

  const handleSendTranscript = () => {
    toast({
      title: "Transcript Sent",
      description: "Chat transcript has been sent to your email address.",
    });
  };

  return (
    <>
      <Card className="fixed bottom-24 right-6 w-80 h-96 flex flex-col shadow-primary animate-in slide-in-from-bottom-5 z-50 rounded-xl overflow-hidden border-2 border-primary/20">
        {/* Header */}
        <CardHeader className="flex-row items-center space-y-0 pb-3 rounded-t-xl" style={{ backgroundColor: launcherColor }}>
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-white text-primary">
              <Bot className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 ml-3">
            <h3 className="text-sm font-semibold text-white">AI Assistant</h3>
            <Badge variant="secondary" className="text-xs bg-white/20 text-white border-0">
              Online
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-6 w-6 text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        {/* Messages */}
        <CardContent className="flex-1 overflow-y-auto space-y-3 p-3">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isTyping && (
            <div className="flex items-center space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="bg-primary text-white">
                  <Bot className="h-3 w-3" />
                </AvatarFallback>
              </Avatar>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>

        {/* Actions & Input */}
        <div className="p-3 border-t space-y-3">
          {!chatEnded && (
            <>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleHandover}
                  className="text-xs"
                >
                  <User className="h-3 w-3 mr-1" />
                  Request Human
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleIssueReport}
                  className="text-xs"
                >
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Report Issue
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleEndChat}
                  className="text-xs"
                >
                  End Chat
                </Button>
              </div>
              
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputValue)}
                  className="flex-1"
                />
                <Button
                  onClick={() => sendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
          
          {chatEnded && (
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Chat ended</p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSendTranscript}
                className="text-xs"
              >
                <Download className="h-3 w-3 mr-1" />
                Email Transcript
              </Button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-3 py-2 border-t bg-muted/30 text-center">
          <p className="text-xs text-muted-foreground">
            <a href="#" className="hover:underline">Privacy</a> • <a href="#" className="hover:underline">GDPR</a>
          </p>
        </div>
      </Card>

      {/* Modals */}
      <HandoverModal open={showHandover} onClose={() => setShowHandover(false)} />
      <IssueReportModal open={showIssueReport} onClose={() => setShowIssueReport(false)} />
      <CSATModal open={showCSAT} onClose={() => setShowCSAT(false)} />
    </>
  );
};

export default ChatPanel;