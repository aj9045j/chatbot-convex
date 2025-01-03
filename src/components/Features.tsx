import { Card } from "@/components/ui/card";
import { Calendar, MessageSquare, Clock, Sprout, Users, ChartBar } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automatically handle appointment bookings and manage your service calendar efficiently",
  },
  {
    icon: MessageSquare,
    title: "24/7 Customer Support",
    description: "Answer common questions instantly, any time of day",
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Keep track of client preferences and service history automatically",
  },
  {
    icon: Sprout,
    title: "Service Quotes",
    description: "Provide instant quotes based on property size and service type",
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "Reduce phone calls and emails by automating routine inquiries",
  },
  {
    icon: ChartBar,
    title: "Business Growth",
    description: "Increase bookings and customer satisfaction with faster response times",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transform Your Landscaping Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI chatbot streamlines your operations and enhances customer service, letting you focus on what matters most - creating beautiful outdoor spaces.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-green-100">
              <feature.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
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