import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Competencies } from "@/components/sections/competencies";
import { OdooExpertise } from "@/components/sections/odoo-expertise";
import { Experience } from "@/components/sections/experience";
import { Industries } from "@/components/sections/industries";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background selection:bg-primary/20">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Competencies />
        <OdooExpertise />
        <Experience />
        <Industries />
        <Resume />
        <Contact />
      </main>
      <footer className="py-12 bg-card border-t border-border text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
