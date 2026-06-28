import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Calendar, MapPin, Building2, Terminal } from 'lucide-react';

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
    <section id="experience" className="py-24 relative">
      <div className="container px-6 mx-auto max-w-4xl">
        <SectionHeading 
          title="Engineering Timeline" 
          subtitle="A track record of building and scaling distributed systems."
        />

        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary absolute left-0 md:left-1/2 -translate-x-1/2 shrink-0 z-10 shadow-[0_0_15px_rgba(0,210,255,0.4)]">
                <Terminal className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 p-6 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-colors relative">
                
                {/* Arrow */}
                <div className="absolute top-5 -left-3 md:group-odd:-left-3 md:group-even:-right-3 md:group-even:left-auto w-3 h-3 bg-card border-t border-l border-border/50 rotate-45 md:group-even:rotate-[135deg] md:group-even:border-l-0 md:group-even:border-b" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex flex-col gap-1 mb-4 text-sm text-muted-foreground font-mono">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span className="text-foreground font-medium">{exp.company}</span>
                    <span className="opacity-50 mx-1">•</span>
                    <span>{exp.type}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 shrink-0 block w-1 h-1 rounded-full bg-primary" />
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
