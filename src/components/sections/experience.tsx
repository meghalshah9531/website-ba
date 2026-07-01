import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Lead Business Analyst / Odoo Architect",
    company: "Meridian Operations Group",
    industry: "Manufacturing & Distribution",
    period: "2021 – Present",
    duration: "3+ years",
    highlights: [
      "Architected a full Odoo 16 Enterprise rollout covering Manufacturing, Inventory, Purchase, and Accounting across 3 plants with 200+ users.",
      "Reduced order fulfillment cycle time by 34% through business process re-engineering and MRP configuration.",
      "Led discovery workshops with C-suite and operations leads, producing a 120-page BRD that served as the single source of truth.",
      "Designed custom Python modules for production scheduling and quality control workflows.",
    ],
    tags: ["Odoo 16", "MRP", "BRD/FRD", "Python", "Change Management"],
  },
  {
    title: "Senior Business Analyst",
    company: "Nexvance Retail Solutions",
    industry: "Retail & eCommerce",
    period: "2018 – 2021",
    duration: "3 years",
    highlights: [
      "Delivered Odoo 13 → 15 migration for a 40-location retail chain, harmonizing POS, Inventory, and CRM workflows.",
      "Integrated Odoo with third-party logistics via REST API, eliminating 12 hours/week of manual data entry.",
      "Facilitated UAT sessions and trained 150+ end-users across regional teams.",
      "Authored functional specification documents for 8 custom eCommerce modules.",
    ],
    tags: ["Odoo 13–15", "POS", "API Integration", "UAT", "User Training"],
  },
  {
    title: "Business Analyst",
    company: "TransRoute Logistics SA",
    industry: "Logistics & Supply Chain",
    period: "2016 – 2018",
    duration: "2 years",
    highlights: [
      "Implemented Odoo 10 Community for fleet management and freight billing operations.",
      "Mapped AS-IS / TO-BE processes for 15 core operational workflows using BPMN notation.",
      "Coordinated between dev team and operations stakeholders across 5 countries.",
      "Produced user stories, acceptance criteria, and test cases using Jira and Confluence.",
    ],
    tags: ["Odoo 10", "BPMN", "Jira", "Confluence", "Agile/Scrum"],
  },
  {
    title: "Junior Business Analyst",
    company: "Altura Professional Services",
    industry: "Professional Services",
    period: "2015 – 2016",
    duration: "1 year",
    highlights: [
      "Supported requirements gathering and documentation for an Odoo 9 implementation across HR and Project modules.",
      "Assisted in gap analysis between client workflows and standard Odoo functionality.",
      "Produced weekly status reports and maintained project logs for a 14-month engagement.",
    ],
    tags: ["Odoo 9", "HR", "Project Management", "Gap Analysis"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Work History</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">9+ years of enterprise transformations.</h3>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-24 group">
                <div className="absolute left-0 md:left-8 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />

                <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/40 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h4 className="font-serif text-xl md:text-2xl font-bold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-semibold mt-0.5">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{exp.industry}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
                      <span className="text-sm font-medium text-foreground">{exp.period}</span>
                      <span className="text-xs text-muted-foreground">{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="font-normal text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
