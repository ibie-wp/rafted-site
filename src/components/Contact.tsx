import { Button } from "./ui/button";
import { Mail, Phone, Github, MapPin } from "lucide-react";

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

export function Contact() {
  return (
    <section id="contact" className="section-spacing bg-background">
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

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="p-6 rounded-lg border border-border/50 hover:shadow-card transition-smooth space-y-3 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
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

          {/* CTA */}
          <div className="text-center pt-8">
            <Button size="lg" asChild className="text-base px-8">
              <a href="mailto:ibrahimkarlie17@gmail.com">
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
