import { Badge } from "@/components/ui/badge";

const modules = [
  "Sales", "Purchase", "Inventory", "Manufacturing (MRP)", 
  "Accounting", "CRM", "HR", "Project", "eCommerce", "Website"
];

const technical = [
  "Python Customizations", "XML View Modifications", "PostgreSQL", 
  "QWeb Reports", "REST APIs", "Automated Actions"
];

export function OdooExpertise() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider mb-3">Odoo Specialization</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Mastery across the ecosystem.</h3>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              With deep technical and functional knowledge of Odoo versions 12 through 17 (Community & Enterprise), I don't just configure software—I architect solutions that perfectly map to complex operational realities.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Functional Modules</h4>
                <div className="flex flex-wrap gap-2">
                  {modules.map(mod => (
                    <Badge key={mod} variant="secondary" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-transparent font-normal py-1.5 px-3">
                      {mod}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Technical Capability</h4>
                <div className="flex flex-wrap gap-2">
                  {technical.map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/20 hover:bg-secondary/30 text-primary-foreground border-transparent font-normal py-1.5 px-3">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-tr from-secondary/40 to-primary-foreground/10 blur-3xl absolute inset-0 transform translate-x-10 translate-y-10" />
            <div className="relative bg-background text-foreground rounded-2xl p-8 md:p-10 shadow-2xl border border-border/10">
              <h4 className="font-serif text-2xl font-bold mb-6">Certification & Standards</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-lg">Odoo Functional Certification</strong>
                    <span className="text-muted-foreground text-sm">Verified expertise in core configurations and business flows.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-lg">IIBA CBAP®</strong>
                    <span className="text-muted-foreground text-sm">Certified Business Analysis Professional aligning to BABOK standards.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-lg">B.S. Information Systems</strong>
                    <span className="text-muted-foreground text-sm">Foundation in business strategy and software engineering.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}