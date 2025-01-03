import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

const messages = [
  { type: "bot", text: "Hello! Welcome to Smartbotics Landscaping Assistant. How can I help you today?" },
  { type: "user", text: "I need a quote for lawn maintenance" },
  { type: "bot", text: "I'd be happy to help! Could you please provide your property size (approximate square footage)?" },
  { type: "user", text: "About 5000 square feet" },
  { type: "bot", text: "Great! For a 5000 sq ft property, our basic lawn maintenance package starts at $120/visit. This includes mowing, edging, and cleanup. Would you like to schedule a service or learn more about our packages?" },
];

export const ChatDemo = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev < messages.length) return prev + 1;
        return 0;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="p-6 shadow-lg bg-white/90 backdrop-blur">
      <div className="flex flex-col space-y-4">
        {messages.slice(0, visibleMessages).map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              message.type === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <Avatar className={message.type === "bot" ? "bg-green-200" : "bg-green-600"}>
              {message.type === "bot" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
            </Avatar>
            <div
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                message.type === "bot"
                  ? "bg-gray-100 text-gray-900"
                  : "bg-green-600 text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};