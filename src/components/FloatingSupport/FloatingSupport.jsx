"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingSupport() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      sender: "support",
      text: "Hello! I am your AI assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const [isPageLoaded, setIsPageLoaded] = React.useState(false);

  React.useEffect(() => {
    const handleLoaded = () => setIsPageLoaded(true);
    window.addEventListener("page-loaded", handleLoaded);
    const timeout = setTimeout(() => setIsPageLoaded(true), 1500);

    return () => {
      window.removeEventListener("page-loaded", handleLoaded);
      clearTimeout(timeout);
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "support",
          text: "Thank you for reaching out! One of our experts will be with you shortly.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 1000);
  };

  if (!isPageLoaded) return null;

  return (
    <div className="fixed bottom-0 right-0 z-[10000] flex items-end justify-end p-0 pointer-events-none">
      {/* Chat Window Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "pointer-events-auto flex flex-col overflow-hidden transition-shadow duration-300 transform-gpu will-change-transform",
              // MOBILE: Floating Card Style (as requested)
              "mr-4 mb-20 w-[92vw] h-[550px] max-h-[80vh] rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white z-[10001]",
              // DESKTOP: Legacy Side-Stick Style (as requested)
              "md:mr-0 md:mb-24 md:w-[380px] md:h-[500px] md:rounded-l-3xl md:rounded-r-none md:border-r-0 md:shadow-2xl md:bg-white",
            )}
          >
            {/* Header: Adaptive Design */}
            <div
              className={cn(
                "relative px-6 py-4 flex items-center justify-between overflow-hidden shrink-0",
                "bg-[#0b2677] text-white", // Base color
                "md:p-4 md:bg-[#0b2677]", // Desktop standard
              )}
            >
              {/* Reduced mobile blurs for performance */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 blur-xl md:hidden" />

              <div className="relative flex items-center gap-3">
                {/* Mobile version has the modern bot icon and pulse */}
                <div className="relative md:hidden">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-green-500 border-2 border-[#0b2677] rounded-full" />
                </div>

                {/* Desktop version has the legacy icon container */}
                <div className="hidden md:flex w-10 h-10 rounded-full bg-white/20 items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="font-bold text-sm">
                    <span className="md:hidden">AI Assistant</span>
                    <span className="hidden md:inline">Support Team</span>
                  </h3>
                  <p className="text-[10px] md:text-xs text-white/70">
                    <span className="md:hidden flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Online & Responsive
                    </span>
                    <span className="hidden md:inline">
                      We typically reply in minutes
                    </span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="relative z-10 size-10 md:size-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors active:scale-90 cursor-pointer"
              >
                <X className="size-6 md:size-5" />
              </button>
            </div>

            {/* Messages Area: Adaptive Flow */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex flex-col gap-1",
                    msg.sender === "user" ? "items-end" : "items-start",
                  )}
                >
                  {/* Desktop Legacy: Still uses horizontal flex with icons */}
                  <div
                    className={cn(
                      "flex gap-2 w-full",
                      msg.sender === "user" ? "justify-end" : "justify-start",
                    )}
                  >
                    {msg.sender === "support" && (
                      <div className="hidden md:flex w-8 h-8 rounded-full bg-[#0b2677] items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "rounded-2xl px-4 py-2 text-sm shadow-sm",
                        // Mobile "tail-less" and modern colors
                        msg.sender === "user"
                          ? "bg-[#9a01cd] text-white max-w-[85%] md:max-w-[70%]"
                          : "bg-white border border-gray-100 text-[#0b2677] max-w-[85%] md:max-w-[70%]",
                      )}
                    >
                      <p className="leading-relaxed">{msg.text}</p>
                      <p
                        className={cn(
                          "text-[10px] mt-1",
                          msg.sender === "user"
                            ? "text-white/60"
                            : "text-gray-400 font-medium uppercase tracking-tighter",
                        )}
                      >
                        {msg.time}
                      </p>
                    </div>
                    {msg.sender === "user" && (
                      <div className="hidden md:flex w-8 h-8 rounded-full bg-[#9a01cd] items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 bg-white border-t border-gray-100 shrink-0"
            >
              <div className="flex gap-2 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask anything..."
                  className="flex-1 px-4 py-2 md:h-10 h-12 border border-gray-200 rounded-2xl md:rounded-full text-sm focus:outline-none focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/10 transition-all outline-none"
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="w-10 h-10 md:w-10 md:h-10 bg-[#9a01cd] text-white rounded-xl md:rounded-full flex items-center justify-center hover:bg-[#9a01cd]/95 transition-all shadow-lg shadow-[#9a01cd]/20 active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 md:w-4 md:h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Adaptive Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="support-tag"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "pointer-events-auto z-[9999] flex items-center justify-center bg-[#9a01cd] transition-all duration-300 shadow-2xl group",
              // MOBILE: Floating Square Bubble
              "mb-6 mr-4 p-4 rounded-2xl",
              // DESKTOP: Side Tag
              "md:mb-10 md:mr-0 md:p-4 md:pr-5 md:rounded-l-2xl md:rounded-r-none",
            )}
          >
            <div className="relative">
              {/* Icon also adapts */}
              <Bot className="w-6 h-6 text-white" />

              {/* Pulse Indicator only on Mobile */}
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 border-2 border-[#9a01cd] rounded-full animate-pulse md:hidden" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
