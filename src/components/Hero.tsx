import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, Leaf } from "lucide-react";
import { ChatDemo } from "@/components/ChatDemo";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-100 to-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8 animate-fade-in">
            <div className="flex items-center gap-2 text-green-600">
              <Leaf className="h-6 w-6" />
              <span className="font-semibold">Smartbotics</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              AI-Powered Chatbot for Landscaping Services
            </h1>
            <p className="text-lg text-gray-600">
              Automate scheduling, handle customer queries, and boost efficiency with our intelligent chatbot solution designed specifically for landscaping businesses.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Started
                <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                View Demo
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <ChatDemo />
          </div>
        </div>
      </div>
    </div>
  );
};