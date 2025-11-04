import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Mail, Phone, Github, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ibrahimkarlie17@gmail.com",
    href: "mailto:ibrahimkarlie17@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "076 779 3311",
    href: "tel:0767793311"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ibie-wp",
    href: "https://github.com/ibie-wp"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cape Town, South Africa",
    href: null
  }
];

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xnnqpvob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing section-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Let's Work Together
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Open to learning from real-world projects and connecting with teams 
              who value clarity, empathy, and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="glass-card p-6 rounded-2xl hover:shadow-glow transition-smooth space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block group"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 rounded-2xl space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="glass border-border/50 bg-background/50"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="glass border-border/50 bg-background/50"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  className="glass border-border/50 bg-background/50 flex min-h-[120px] w-full rounded-md border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
