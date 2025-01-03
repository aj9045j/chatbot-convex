import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    features: ["1,000 messages/month", "Basic AI responses", "Email support", "1 team member"],
  },
  {
    name: "Professional",
    price: "99",
    features: [
      "10,000 messages/month",
      "Advanced AI responses",
      "Priority support",
      "5 team members",
      "Custom branding",
    ],
  },
  {
    name: "Enterprise",
    price: "249",
    features: [
      "Unlimited messages",
      "Custom AI training",
      "24/7 phone support",
      "Unlimited team members",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 ${
                index === 1 ? "border-primary-600 border-2" : ""
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  index === 1
                    ? "bg-primary-600 hover:bg-primary-700"
                    : "bg-primary-800 hover:bg-primary-900"
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};