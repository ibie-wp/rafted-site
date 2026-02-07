import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, Github, MapPin, Send, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ibrahimkarlie17@gmail.com",
    href: "mailto:ibrahimkarlie17@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "076 779 3311",
    href: "tel:0767793311",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ibie-wp",
    href: "https://github.com/ibie-wp",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ibrahim-karlie-bb814b367",
    href: "https://www.linkedin.com/in/ibrahim-karlie-bb814b367",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cape Town, South Africa",
    href: null,
  },
];

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xqaygygp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: "New Contact Form Submission",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      reset();
    } catch (error) {
      console.error("Submit error:", error);
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
                  <div className="glass-card p-5 rounded-2xl hover:shadow-glow transition-smooth group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-medium text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a  
                    key={index}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card p-6 md:p-8 rounded-2xl space-y-5"
            >
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name", { required: "Name is required" })}
                  className="h-12 rounded-xl"
                />
                {errors.name && (
                  <p className="text-xs text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="h-12 rounded-xl"
                />
                {errors.email && (
                  <p className="text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="min-h-[120px] rounded-xl resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}