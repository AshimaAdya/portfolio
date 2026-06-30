import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Building2, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "Zafin",
    role: "Senior Software Engineer",
    period: "March 2023 – Present",
    location: "Vancouver, BC, Canada",
    type: "FinTech SaaS Platform",
    highlights: [
      "Designed and built distributed microservices using Java, Spring Boot, Apache Flink, and NiFi to power tier determination, loyalty rewards, and fee rebates for North American banks — achieving 3× throughput improvement by decomposing the system into decoupled, asynchronous processing stages.",
      "Implemented end-to-end integration strategies: Kafka real-time streaming, RESTful APIs, SFTP file exchange, and large-scale batch ETL workflows with NiFi and Flink across PostgreSQL and Cosmos DB.",
      "Managed Azure AKS clusters end-to-end — deployments, autoscaling, ingress/egress, local testing with kind — with Prometheus/Grafana dashboards, SLO monitoring, and ArgoCD-based CI/CD pipelines. Reduced incident response time by 30%.",
      "Led a team of 5 engineers through epic planning, hotfixes, and production support. Mentored junior engineers, authored E2E system architecture docs, and conducted 40+ engineering interviews."
    ]
  },
  {
    company: "Gainsight",
    role: "Senior Software Engineer",
    period: "July 2019 – June 2022",
    location: "Bengaluru, India",
    type: "Customer Success Analytics Platform",
    highlights: [
      "Transformed the data ingestion pipeline from monolith to microservices using Java, AWS, MongoDB, RabbitMQ, and PostgreSQL — improving system reliability by 20% and driving a 40% increase in customer adoption.",
      "Designed and built data ingestion APIs including connectors and webhooks, enabling seamless data imports from third-party systems. Led the iPaaS integration framework end-to-end as a cross-functional effort with PM and engineering, enabling a 10× expansion of service offerings.",
      "Optimized pipeline throughput and reduced API response latency through out-of-the-box job configurations, priority mechanisms, and rate limiting — resulting in 20% improvement in system performance.",
      "Designed a metadata auto-correction system reducing syncing errors by 40%. Built Kafka-based real-time sync between Salesforce and Gainsight, enriching customer insights for data-driven retention."
    ]
  },
  {
    company: "ITC Infotech",
    role: "Associate IT Consultant",
    period: "August 2015 – August 2017",
    location: "Bengaluru, India",
    type: "Enterprise IT Services",
    highlights: [
      "Delivered APIs using Java and Spring Boot with TDD (JUnit, Mockito).",
      "Built a multi-currency financial conversion service streamlining reporting across distributed business systems.",
      "Refactored legacy code improving Sonar quality scores and test coverage.",
      "Collaborated with cross-functional teams on Agile deliveries."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container px-6 mx-auto max-w-4xl">
        <SectionHeading 
          title="Experience" 
          subtitle="A track record of building and scaling distributed systems."
        />

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-4 before:h-full before:w-px before:bg-border md:before:ml-[8.5rem]">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col md:flex-row md:gap-8 items-start pl-10 md:pl-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-[8.5rem] -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-background border-2 border-primary z-10" />

              {/* Period - Left side on desktop */}
              <div className="md:w-32 shrink-0 md:text-right pt-0.5 mb-2 md:mb-0">
                <span className="text-sm font-medium text-muted-foreground">
                  {exp.period.split("–")[0].trim()} – <br className="hidden md:block" /> {exp.period.split("–")[1]?.trim()}
                </span>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:shadow-sm transition-shadow">
                
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <div className="text-base font-medium text-primary mt-1">
                      {exp.role}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-md">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.type}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-md">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                      <span className="text-primary mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-primary/40" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
