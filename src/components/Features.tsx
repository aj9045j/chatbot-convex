import { Card } from "@/components/ui/card";
import { Clock, Bot, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Always ready to help your customers, no matter the time zone",
  },
  {
    icon: Bot,
    title: "AI-Powered Responses",
    description: "Smart responses that learn and improve over time",
  },
  {
    icon: Zap,
    title: "Instant Resolution",
    description: "Solve customer queries in seconds, not hours",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Communicate with customers in their preferred language",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            Powerful Features for Modern Support
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to deliver exceptional customer service at scale
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};