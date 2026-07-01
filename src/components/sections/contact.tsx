import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, ArrowRight } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "hello@yourname.com",
    href: "mailto:hello@yourname.com",
    icon: Mail,
    description: "Best for project inquiries and detailed discussions.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourname",
    href: "https://linkedin.com/in/yourname",
    icon: Linkedin,
    description: "Connect professionally and see my full work history.",
  },
  {
    label: "GitHub",
    value: "github.com/yourname",
    href: "https://github.com/yourname",
    icon: Github,
    description: "Browse Odoo customizations and technical specifications.",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/8 to-secondary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-secondary/8 to-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Ready to transform your operations?
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Whether you're evaluating Odoo, mid-implementation, or looking to optimize an existing deployment — let's talk about your specific challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 block"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{link.label}</h4>
                <p className="text-sm text-primary font-medium mb-2">{link.value}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{link.description}</p>
              </a>
            ))}
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Based in</p>
                <p className="text-muted-foreground text-sm mt-0.5">Available worldwide — remote & on-site</p>
              </div>
            </div>

            <div className="h-px w-full md:h-10 md:w-px bg-border flex-shrink-0" />

            <div>
              <p className="font-semibold text-foreground">Availability</p>
              <p className="text-secondary text-sm font-medium mt-0.5">Open to new engagements</p>
            </div>

            <div className="h-px w-full md:h-10 md:w-px bg-border flex-shrink-0" />

            <Button size="lg" className="rounded-full h-12 px-8 gap-2 flex-shrink-0" asChild>
              <a href="mailto:hello@yourname.com">
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
