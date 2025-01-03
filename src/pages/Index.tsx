import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { ContactForm } from "@/components/ContactForm";
import { LeadMagnet } from "@/components/LeadMagnet";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <LeadMagnet />
      <Pricing />
      <ContactForm />
    </div>
  );
};

export default Index;