import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Input placeholder="First Name" required />
            </div>
            <div>
              <Input placeholder="Last Name" required />
            </div>
          </div>
          <div>
            <Input type="email" placeholder="Email" required />
          </div>
          <div>
            <Input placeholder="Company" required />
          </div>
          <div>
            <Textarea
              placeholder="How can we help you?"
              className="min-h-[120px]"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-primary-800 hover:bg-primary-900">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};