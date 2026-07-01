import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.12),transparent_35%),radial-gradient(circle_at_bottom_right,hsl(var(--secondary)/0.12),transparent_35%)]">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>
      
      <div className="container relative z-10 px-6 md:px-12 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/10 text-secondary hover:bg-secondary/20">
            Available for consulting
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] tracking-tight">
            Bridging Business Strategy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Enterprise Tech.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Senior Business Analyst & Odoo ERP Specialist with 9+ years of experience engineering complex digital transformations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full gap-2" asChild>
              <a href="#contact">
                Discuss a Project <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base rounded-full" asChild>
              <a href="#experience">
                View Experience
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#expertise" className="text-muted-foreground hover:text-foreground transition-colors p-2 flex items-center justify-center rounded-full">
          <ChevronDown className="w-6 h-6" />
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
}