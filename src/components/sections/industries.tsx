import { Factory, ShoppingBag, Truck, Briefcase, HeartPulse, BookOpen } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Discrete and process manufacturing — MRP, production orders, quality control, and shop floor operations.",
    projects: "8 implementations",
  },
  {
    icon: ShoppingBag,
    name: "Retail & Distribution",
    description: "Multi-channel retail chains, POS integrations, inventory management, and eCommerce platform connections.",
    projects: "6 implementations",
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    description: "Fleet management, freight billing, 3PL integrations, and real-time inventory tracking across warehouses.",
    projects: "4 implementations",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Project billing, resource allocation, timesheets, and CRM-to-delivery pipeline automation.",
    projects: "5 implementations",
  },
  {
    icon: HeartPulse,
    name: "Healthcare Administration",
    description: "Appointment scheduling, patient records management, regulatory compliance, and billing workflows.",
    projects: "2 implementations",
  },
  {
    icon: BookOpen,
    name: "Education & Training",
    description: "LMS integrations, student enrollment workflows, and financial aid process automation.",
    projects: "2 implementations",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-card/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Sector Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Industry depth, not just software depth.</h3>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Effective ERP implementation demands understanding the operational heartbeat of each industry. I've worked across 6 sectors, adapting Odoo to fit unique domain requirements rather than forcing businesses to adapt to the tool.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group relative bg-background border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <ind.icon className="w-6 h-6 text-primary" />
                </div>

                <h4 className="font-serif text-xl font-bold text-foreground mb-2">{ind.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ind.description}</p>

                <div className="inline-flex items-center text-xs font-semibold text-secondary uppercase tracking-wider">
                  {ind.projects}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
