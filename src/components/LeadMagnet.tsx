import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Book, Calendar, CheckSquare } from "lucide-react";
import { useState } from "react";

const leadMagnets = [
  {
    icon: Book,
    title: "Free Guide",
    description: "Download our 'Ultimate Guide to Modernizing Your Landscaping Business'",
  },
  {
    icon: Calendar,
    title: "Free Demo",
    description: "Schedule a personalized demo of our landscaping chatbot",
  },
  {
    icon: CheckSquare,
    title: "ROI Calculator",
    description: "Calculate your potential savings with our chatbot solution",
  },
];

export const LeadMagnet = () => {
  const { toast } = useToast();
  const [selectedMagnet, setSelectedMagnet] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll send your selected resource to your email shortly.",
    });
  };

  return (
    <section className="py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Grow Your Landscaping Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {leadMagnets.map((magnet, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg cursor-pointer transition-all ${
                  selectedMagnet === index
                    ? "bg-green-600 text-white"
                    : "bg-white hover:bg-green-100"
                }`}
                onClick={() => setSelectedMagnet(index)}
              >
                <magnet.icon className={`h-8 w-8 mb-4 ${
                  selectedMagnet === index ? "text-white" : "text-green-600"
                }`} />
                <h3 className="font-semibold mb-2">{magnet.title}</h3>
                <p className={`text-sm ${
                  selectedMagnet === index ? "text-green-100" : "text-gray-600"
                }`}>
                  {magnet.description}
                </p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <Input placeholder="Full Name" required />
            <Input type="email" placeholder="Business Email" required />
            <Input placeholder="Company Name" required />
            <select className="w-full p-2 border rounded-md" required>
              <option value="">Select Business Size</option>
              <option value="small">1-5 employees</option>
              <option value="medium">6-20 employees</option>
              <option value="large">21+ employees</option>
            </select>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Get Your Free Resource
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};