import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";

const resumeData = {
  name: "John Doe",
  title: "Senior Business Analyst | Odoo ERP Specialist",
  contact: {
    email: "hello@yourname.com",
    linkedin: "linkedin.com/in/yourname",
    github: "github.com/yourname",
    location: "Available Worldwide",
  },
  summary:
    "Senior Business Analyst with 9+ years of experience leading end-to-end ERP implementations and digital transformations across manufacturing, retail, logistics, and professional services. Deep expertise in Odoo versions 12–17 (Community & Enterprise), business process re-engineering, stakeholder management, and cross-functional team leadership. Certified in both business analysis (IIBA CBAP) and Odoo functional domains.",
  experience: [
    {
      title: "Lead Business Analyst / Odoo Architect",
      company: "Meridian Operations Group",
      period: "2021 – Present",
      bullets: [
        "Architected full Odoo 16 Enterprise rollout (Manufacturing, Inventory, Purchase, Accounting) across 3 plants, 200+ users",
        "Reduced order fulfillment cycle time by 34% through MRP configuration and business process re-engineering",
        "Led discovery workshops with C-suite and operations leads; authored 120-page BRD",
        "Designed custom Python modules for production scheduling and quality control workflows",
      ],
    },
    {
      title: "Senior Business Analyst",
      company: "Nexvance Retail Solutions",
      period: "2018 – 2021",
      bullets: [
        "Delivered Odoo 13 → 15 migration for a 40-location retail chain, harmonizing POS, Inventory, and CRM",
        "Integrated Odoo with 3PL via REST API, eliminating 12 hours/week of manual data entry",
        "Facilitated UAT sessions and trained 150+ end-users across regional teams",
        "Authored functional specifications for 8 custom eCommerce modules",
      ],
    },
    {
      title: "Business Analyst",
      company: "TransRoute Logistics SA",
      period: "2016 – 2018",
      bullets: [
        "Implemented Odoo 10 Community for fleet management and freight billing operations",
        "Mapped AS-IS / TO-BE processes for 15 core operational workflows using BPMN notation",
        "Coordinated between development team and stakeholders across 5 countries",
      ],
    },
    {
      title: "Junior Business Analyst",
      company: "Altura Professional Services",
      period: "2015 – 2016",
      bullets: [
        "Supported requirements gathering for Odoo 9 implementation across HR and Project modules",
        "Conducted gap analysis between client workflows and standard Odoo functionality",
      ],
    },
  ],
  skills: {
    "Business Analysis": ["BABOK", "Use Cases", "User Stories", "BRD/FRD", "Gap Analysis", "Process Mapping"],
    "ERP & Technical": ["Odoo 12–17", "Python", "PostgreSQL", "REST APIs", "QWeb Reports", "XML Views"],
    "Project Management": ["Agile/Scrum", "Waterfall", "Jira", "Confluence", "MS Visio"],
    Industries: ["Manufacturing", "Retail & Distribution", "Logistics", "Professional Services", "Healthcare Admin"],
  },
  certifications: [
    { name: "Odoo Functional Certification", issuer: "Odoo S.A.", year: "2022" },
    { name: "Certified Business Analysis Professional (CBAP)", issuer: "IIBA", year: "2020" },
    { name: "B.S. Information Systems", issuer: "State University of Technology", year: "2014" },
  ],
};

export function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);

  async function handleDownload() {
    if (!resumeRef.current || exporting) return;
    setExporting(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const ratio = canvas.height / canvas.width;
      const imgH = pageW * ratio;

      let yOffset = 0;
      let remainingH = imgH;

      while (remainingH > 0) {
        if (yOffset > 0) pdf.addPage();
        const srcY = (yOffset / imgH) * canvas.height;
        const sliceH = Math.min(pageH, remainingH);
        const srcH = (sliceH / imgH) * canvas.height;

        const sliceCanvas = document.createElement("canvas");
        sliceCanvas.width = canvas.width;
        sliceCanvas.height = srcH;
        const ctx = sliceCanvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(canvas, 0, srcY, canvas.width, srcH, 0, 0, canvas.width, srcH);
          pdf.addImage(sliceCanvas.toDataURL("image/png"), "PNG", 0, 0, pageW, sliceH);
        }

        yOffset += pageH;
        remainingH -= pageH;
      }

      pdf.save("John_Doe_BA_Resume.pdf");
    } catch (err) {
      console.error("PDF export failed", err);
    } finally {
      setExporting(false);
    }
  }

  return (
    <section id="resume" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Resume</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              The full picture, one page.
            </h3>
          </div>
          <Button
            size="lg"
            onClick={handleDownload}
            disabled={exporting}
            className="rounded-full h-12 px-8 gap-2 flex-shrink-0"
          >
            {exporting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Generating PDF…
              </>
            ) : (
              <>
                <Download className="w-4 h-4" /> Download PDF
              </>
            )}
          </Button>
        </div>

        {/* Printable resume card */}
        <div
          ref={resumeRef}
          className="bg-white text-gray-900 rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {/* Header */}
          <div style={{ background: "hsl(255 35% 35%)", padding: "40px 48px" }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.2 }}>
              {resumeData.name}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", marginTop: "6px", marginBottom: "20px" }}>
              {resumeData.title}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {Object.entries(resumeData.contact).map(([key, val]) => (
                <span key={key} style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" }}>
                  {val}
                </span>
              ))}
            </div>
          </div>

          <div style={{ padding: "40px 48px", display: "grid", gridTemplateColumns: "1fr 260px", gap: "40px" }}>
            {/* Left column */}
            <div>
              {/* Summary */}
              <section style={{ marginBottom: "32px" }}>
                <h2 style={sectionHeadingStyle}>Professional Summary</h2>
                <div style={dividerStyle} />
                <p style={{ fontSize: "0.88rem", color: "#374151", lineHeight: 1.7 }}>{resumeData.summary}</p>
              </section>

              {/* Experience */}
              <section>
                <h2 style={sectionHeadingStyle}>Work Experience</h2>
                <div style={dividerStyle} />
                {resumeData.experience.map((exp, i) => (
                  <div key={i} style={{ marginBottom: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <p style={{ fontWeight: 700, fontSize: "0.92rem", color: "#111827", margin: 0 }}>{exp.title}</p>
                        <p style={{ color: "hsl(255 35% 40%)", fontSize: "0.82rem", marginTop: "2px" }}>{exp.company}</p>
                      </div>
                      <span style={{ fontSize: "0.78rem", color: "#6b7280", flexShrink: 0, marginLeft: "12px" }}>{exp.period}</span>
                    </div>
                    <ul style={{ margin: "8px 0 0 0", paddingLeft: "16px" }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ fontSize: "0.82rem", color: "#374151", lineHeight: 1.6, marginBottom: "3px" }}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            </div>

            {/* Right column */}
            <div>
              {/* Skills */}
              <section style={{ marginBottom: "28px" }}>
                <h2 style={sectionHeadingStyle}>Skills & Tools</h2>
                <div style={dividerStyle} />
                {Object.entries(resumeData.skills).map(([cat, items]) => (
                  <div key={cat} style={{ marginBottom: "14px" }}>
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px 0" }}>{cat}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                      {items.map(item => (
                        <span key={item} style={{ fontSize: "0.72rem", background: "hsl(255 35% 35% / 0.08)", color: "hsl(255 35% 35%)", borderRadius: "4px", padding: "2px 7px" }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              {/* Certifications */}
              <section>
                <h2 style={sectionHeadingStyle}>Certifications & Education</h2>
                <div style={dividerStyle} />
                {resumeData.certifications.map((cert, i) => (
                  <div key={i} style={{ marginBottom: "14px" }}>
                    <p style={{ fontWeight: 700, fontSize: "0.82rem", color: "#111827", margin: 0 }}>{cert.name}</p>
                    <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "2px" }}>{cert.issuer} · {cert.year}</p>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: "'Playfair Display', serif",
  fontSize: "0.95rem",
  fontWeight: 700,
  color: "#111827",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  margin: "0 0 8px 0",
};

const dividerStyle: React.CSSProperties = {
  height: "2px",
  background: "hsl(255 35% 35%)",
  marginBottom: "14px",
  borderRadius: "1px",
};
