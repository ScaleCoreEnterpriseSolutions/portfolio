import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Download,
  Mail,
  ExternalLink,
  Minimize2,
  Maximize2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  actions?: Array<{
    label: string;
    action: () => void;
    icon?: React.ReactNode;
  }>;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        text: "Hello! I'm here to help you discover how our enterprise solutions can transform your business. I can assist with service information, project timelines, pricing, and scheduling consultations. How can I help you today?",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "View Services",
            action: () => (window.location.href = "/services"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
          {
            label: "See Client Results",
            action: () => (window.location.href = "/case-studies"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
          {
            label: "Schedule Consultation",
            action: () => (window.location.href = "/get-started"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  const generateResponse = (userMessage: string): Message => {
    const message = userMessage.toLowerCase();

    // Services & capabilities related
    if (
      message.includes("service") ||
      message.includes("solution") ||
      message.includes("capability") ||
      message.includes("what do you do")
    ) {
      return {
        id: Date.now().toString(),
        text: "We provide enterprise-grade solutions including Backend Development, Financial System Integration, Cloud Infrastructure, and Compliance Platforms. Our services have processed $3B+ in transactions with 99.9% uptime for 100+ clients globally.",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "View All Services",
            action: () => (window.location.href = "/services"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
    }

    // Pricing & timeline related
    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("timeline") ||
      message.includes("how long") ||
      message.includes("investment")
    ) {
      return {
        id: Date.now().toString(),
        text: "Our enterprise solutions start from $4,000-$40,000 depending on complexity. Typical projects take 4-16 weeks. We offer free consultations with transparent pricing and detailed proposals. No hidden costs!",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "Get Custom Quote",
            action: () => (window.location.href = "/get-started"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
    }

    // Contact & consultation related
    if (
      message.includes("contact") ||
      message.includes("consultation") ||
      message.includes("meeting") ||
      message.includes("discuss") ||
      message.includes("get started")
    ) {
      return {
        id: Date.now().toString(),
        text: "Ready to start your project? Please use the contact form or email for inquiries. I typically respond within 24-48 hours with detailed information.",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "Message Us",
            action: () => (window.location.href = "#contact-form"),
            icon: <MessageCircle className="w-4 h-4" />,
          },
          {
            label: "Email Me",
            action: () =>
              window.open(
                "mailto:info@scalecore.xyz?subject=Project Inquiry",
              ),
            icon: <Mail className="w-4 h-4" />,
          },
        ],
      };
    }

    // Location/availability
    if (
      message.includes("location") ||
      message.includes("remote") ||
      message.includes("available") ||
      message.includes("hire")
    ) {
      return {
        id: Date.now().toString(),
        text: "Available for remote work, freelance projects, and consulting opportunities with extensive experience working with international teams.",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "Get In Touch",
            action: () => (window.location.href = "/contact"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
    }

    // Education
    if (
      message.includes("education") ||
      message.includes("study") ||
      message.includes("college") ||
      message.includes("degree")
    ) {
      return {
        id: Date.now().toString(),
        text: "Holds a Bachelor's degree in Computer Engineering with strong academic performance.",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "Learn More",
            action: () => (window.location.href = "/about"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
    }

    // Achievements
    if (
      message.includes("achievement") ||
      message.includes("award") ||
      message.includes("recognition")
    ) {
      return {
        id: Date.now().toString(),
        text: "Has been recognized multiple times for outstanding performance and leadership in backend services.",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "View About Page",
            action: () => (window.location.href = "/about"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
    }

    // Projects
    if (
      message.includes("project") ||
      message.includes("portfolio") ||
      message.includes("work")
    ) {
      return {
        id: Date.now().toString(),
        text: "Has worked on various enterprise-level projects including real-time processing systems, e-procurement platforms, and banking integrations.",
        sender: "bot",
        timestamp: new Date(),
        actions: [
          {
            label: "View Projects",
            action: () => (window.location.href = "/projects"),
            icon: <ExternalLink className="w-4 h-4" />,
          },
        ],
      };
    }

    // Default response with helpful suggestions
    return {
      id: Date.now().toString(),
      text: "I'd be happy to help! You can ask about experience, technical skills, education, achievements, or how to get in touch. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
      actions: [
        {
          label: "Tell me about his experience",
          action: () => handleUserMessage("Tell me about his experience"),
        },
        {
          label: "What are his skills?",
          action: () => handleUserMessage("What are his skills?"),
        },
        {
          label: "How can I contact him?",
          action: () => handleUserMessage("How can I contact him?"),
        },
      ],
    };
  };

  const handleUserMessage = (message: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse = generateResponse(message);
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleUserMessage(inputValue.trim());
    }
  };

  const quickActions = [
    {
      label: "Services",
      action: () => handleUserMessage("What services do you offer?"),
    },
    {
      label: "Pricing",
      action: () => handleUserMessage("What are your prices and timelines?"),
    },
    {
      label: "Results",
      action: () => (window.location.href = "/case-studies"),
    },
    {
      label: "Get Started",
      action: () => handleUserMessage("How can I get started?"),
    },
  ];

  return (
    <>
      {/* Chat Window - Mobile-First Web3 Design */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-16 sm:bottom-20 right-2 sm:right-4 w-[calc(100vw-16px)] sm:w-80 md:w-96 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl sm:rounded-3xl shadow-2xl z-50 transition-all duration-500 transform",
            isMinimized ? "h-12 sm:h-14" : "h-[70vh] sm:h-96",
            "max-w-sm sm:max-w-none",
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-primary-600/90 to-accent/90 backdrop-blur-xl text-white rounded-t-2xl sm:rounded-t-3xl border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">ScaleCore Assistant</h3>
                <p className="text-xs opacity-90">
                  Enterprise solutions expert
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4" />
                ) : (
                  <Minimize2 className="w-4 h-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4 overflow-y-auto max-h-[50vh] sm:max-h-60">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-2",
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start",
                    )}
                  >
                    {message.sender === "bot" && (
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="w-3 h-3 text-primary-600" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[70%] rounded-lg p-3 text-sm",
                        message.sender === "user"
                          ? "bg-primary-600 text-white"
                          : "bg-gray-100 text-gray-900",
                      )}
                    >
                      <p>{message.text}</p>
                      {message.actions && (
                        <div className="mt-3 space-y-2">
                          {message.actions.map((action, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={action.action}
                              className="w-full justify-start text-xs h-8"
                            >
                              {action.icon && (
                                <span className="mr-2">{action.icon}</span>
                              )}
                              {action.label}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                    {message.sender === "user" && (
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="w-3 h-3 text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-2 justify-start">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-primary-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              {messages.length <= 1 && (
                <div className="px-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary-100 text-xs"
                        onClick={action.action}
                      >
                        {action.label}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-3 sm:p-4 border-t border-white/20 bg-white/5 backdrop-blur-sm rounded-b-2xl sm:rounded-b-3xl">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about our services..."
                    className="flex-1 px-3 py-2.5 sm:py-2 text-sm bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/30 transition-all duration-200 placeholder:text-gray-600"
                    disabled={isTyping}
                  />
                  <Button
                    type="submit"
                    size="sm"
                    disabled={!inputValue.trim() || isTyping}
                    className="px-3 py-2.5 sm:py-2 bg-gradient-to-r from-primary-600 to-accent hover:from-primary-700 hover:to-accent/90 rounded-xl shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </>
          )}
        </div>
      )}

      {/* Chat Button - Mobile-First Web3 Design */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-4 right-2 sm:right-4 h-12 w-12 sm:h-14 sm:w-14 bg-gradient-to-r from-primary-600 to-accent hover:from-primary-700 hover:to-accent/90 rounded-full shadow-xl shadow-primary-500/25 z-50 transition-all duration-300 transform active:scale-95 touch-improvement backdrop-blur-sm border border-white/20",
          isOpen
            ? "scale-95 rotate-180"
            : "scale-100 hover:scale-110 pulse-glow",
        )}
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto" />
        ) : (
          <div className="relative flex items-center justify-center">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            {/* Notification pulse */}
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent rounded-full animate-pulse border border-white/50"></div>
          </div>
        )}
      </button>
    </>
  );
};

export default Chatbot;
