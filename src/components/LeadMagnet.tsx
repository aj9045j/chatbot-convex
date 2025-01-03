import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Download, BookOpen, Calendar, CheckSquare } from "lucide-react";

const LEAD_MAGNETS = [
  {
    id: "ebook",
    title: "Top 10 Chatbot Strategies for 2025",
    icon: BookOpen,
    description: "Get our comprehensive guide to revolutionize your customer service",
  },
  {
    id: "consultation",
    title: "Free 30-Min Strategy Session",
    icon: Calendar,
    description: "Book a personalized consultation with our chatbot experts",
  },
  {
    id: "checklist",
    title: "Chatbot Readiness Checklist",
    icon: CheckSquare,
    description: "Evaluate if your business is ready for AI automation",
  },
];

export const LeadMagnet = () => {
  const [selectedMagnet, setSelectedMagnet] = useState(LEAD_MAGNETS[0].id);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log({ email, name, businessType, selectedMagnet });
    toast({
      title: "Thank you for your interest!",
      description: "We'll send your resource to your email shortly.",
    });
    setEmail("");
    setName("");
    setBusinessType("");
  };

  const selectedMagnetData = LEAD_MAGNETS.find((m) => m.id === selectedMagnet);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get Your Free Resource</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose one of our valuable resources and take your customer service to
            the next level with AI-powered solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {LEAD_MAGNETS.map((magnet) => {
              const Icon = magnet.icon;
              return (
                <div
                  key={magnet.id}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedMagnet === magnet.id
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedMagnet(magnet.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{magnet.title}</h3>
                      <p className="text-sm text-gray-600">
                        {magnet.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type</Label>
              <Select
                value={businessType}
                onValueChange={setBusinessType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full">
              <Download className="mr-2" />
              Get {selectedMagnetData?.title}
            </Button>

            <p className="text-xs text-center text-gray-500 mt-4">
              By submitting this form, you agree to receive marketing communications from us.
              You can unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};