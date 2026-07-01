import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, BarChart3, FileText, Users, GraduationCap, Network } from "lucide-react";

const competencies = [
  {
    title: "ERP Implementation",
    description: "End-to-end deployment, custom module architecture, and system configuration tailored to complex business models.",
    icon: Settings
  },
  {
    title: "Process Optimization",
    description: "Deep-dive analysis to identify bottlenecks, mapping current vs future states, and engineering leaner workflows.",
    icon: BarChart3
  },
  {
    title: "Requirements Gathering",
    description: "Translating ambiguous stakeholder needs into precise technical specifications, user stories, and BRD/FRDs.",
    icon: FileText
  },
  {
    title: "Stakeholder Management",
    description: "Bridging the communication gap between C-suite executives, end-users, and software development teams.",
    icon: Users
  },
  {
    title: "Change Management",
    description: "Developing comprehensive training programs and managing organizational transitions to ensure high user adoption.",
    icon: GraduationCap
  },
  {
    title: "System Integration",
    description: "Architecting data flows between legacy systems and modern ERP platforms via REST APIs and specialized middleware.",
    icon: Network
  }
];

export function Competencies() {
  return (
    <section id="expertise" className="py-24 bg-card/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Core Competencies</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">The foundation of successful transformations.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, i) => (
            <Card key={comp.title} className="border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <comp.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">{comp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {comp.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}