import { motion } from 'framer-motion';
import { Code2, GitMerge, GraduationCap, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const BOOKING = 'https://calendar.app.google/4nrNJt6VdKYzTaie7';

const services = [
  {
    icon: Code2,
    title: 'Freelance Engineering',
    badge: 'For hire',
    badgeColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
    description:
      'Need a senior backend or data engineer without a full-time hire? I take on focused projects — pipelines, APIs, cloud migrations, system design, and AI integrations.',
    bullets: [
      'Data pipelines, warehousing & dbt',
      'Backend APIs & microservices',
      'Azure · Databricks · Kafka',
      'LLM & AI agent integrations',
    ],
    cta: 'Discuss a Project',
  },
  {
    icon: GitMerge,
    title: 'Technical Collaboration',
    badge: 'Open to ideas',
    badgeColor: 'bg-primary/10 text-primary',
    description:
      'Building something and need an experienced engineering partner? I collaborate with founders and small teams on backend architecture, data strategy, and technical decisions.',
    bullets: [
      'Architecture review & design',
      'Co-build on early-stage products',
      'Data strategy for startups',
      'Technical co-founder conversations',
    ],
    cta: 'Explore Collaboration',
  },
  {
    icon: GraduationCap,
    title: 'Career Mentoring',
    badge: 'For students & grads',
    badgeColor: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
    description:
      'Graduating or transitioning into data or backend engineering? I help you understand real-world engineering, review your work, and navigate those first few years.',
    bullets: [
      'Resume & portfolio review',
      'Mock technical interviews',
      'Project guidance & code review',
      'Career path advice',
    ],
    cta: 'Book a Session',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30 border-y border-border/50">
      <div className="container px-6 mx-auto max-w-6xl">
        <SectionHeading
          title="How I can help"
          subtitle="Whether you need delivery, a thinking partner, or a guide — here's what working with me looks like."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3 mt-12"
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                variants={item}
                className="group flex flex-col bg-card border border-border rounded-2xl p-7 hover:shadow-md hover:border-primary/30 transition-all duration-200"
              >
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${svc.badgeColor}`}>
                    {svc.badge}
                  </span>
                </div>

                {/* Title + description */}
                <h3 className="text-lg font-semibold text-foreground mb-2">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{svc.description}</p>

                {/* Bullets */}
                <ul className="space-y-1.5 mb-6 flex-1">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={BOOKING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  {svc.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
