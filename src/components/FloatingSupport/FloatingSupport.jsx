"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
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
    // Check if the event has already happened or if we should wait for it
    const handleLoaded = () => setIsPageLoaded(true);
    window.addEventListener("page-loaded", handleLoaded);

    // Fallback if the event doesn't fire or already fired
    const timeout = setTimeout(() => setIsPageLoaded(true), 5000);

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

    // Simulate support response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "support",
          text: "Thank you for your message. Our team will get back to you shortly!",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 1500);
  };

  if (!isPageLoaded) return null;

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-0 w-[380px] h-[500px] bg-white rounded-l-3xl shadow-2xl border border-gray-200 border-r-0 flex flex-col z-[9998] overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-[#0b2677] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Support Team</h3>
                  <p className="text-xs text-white/70">
                    We typically reply in minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex gap-2",
                    msg.sender === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  {msg.sender === "support" && (
                    <div className="w-8 h-8 rounded-full bg-[#0b2677] flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[70%] rounded-2xl px-4 py-2",
                      msg.sender === "user"
                        ? "bg-[#9a01cd] text-white"
                        : "bg-white border border-gray-200 text-[#0b2677]",
                    )}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p
                      className={cn(
                        "text-xs mt-1",
                        msg.sender === "user"
                          ? "text-white/70"
                          : "text-gray-400",
                      )}
                    >
                      {msg.time}
                    </p>
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-[#9a01cd] flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 bg-white border-t border-gray-200"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 transition-all"
                />
                <button
                  type="submit"
                  className="w-10 h-10 bg-[#9a01cd] text-white rounded-full flex items-center justify-center hover:bg-[#9a01cd]/90 transition-colors shadow-lg"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side Tag Button - Only shown when chat is closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="support-tag"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.98 }}
            className="fixed right-0 bottom-10 z-[9999] flex items-center justify-center p-4 rounded-l-2xl shadow-2xl bg-[#9a01cd] hover:bg-[#9a01cd]/90 transition-all duration-300"
          >
            <Bot className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
