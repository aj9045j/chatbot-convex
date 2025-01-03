import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-100 to-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-6xl">
              Transform Customer Service with AI Chat
            </h1>
            <p className="text-lg text-gray-600">
              Automate support, boost satisfaction, and reduce costs with our intelligent chatbot solution. Available 24/7 to help your customers.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary-800 hover:bg-primary-900">
                Get Started
                <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Demo
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