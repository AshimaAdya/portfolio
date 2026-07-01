import { motion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { SectionHeading } from '../ui/SectionHeading';
import { Activity, Server, Shield, Network } from 'lucide-react';

const metrics = [
  {
    icon: <Activity className="w-5 h-5" />,
    value: 40,
    suffix: '%',
    label: "Increase in customer adoption",
    description: "Through deep performance optimization and latency reduction."
  },
  {
    icon: <Shield className="w-5 h-5" />,
    value: 40,
    suffix: '%',
    label: "Reduction in syncing errors",
    description: "Via automated metadata-correction systems."
  },
  {
    icon: <Network className="w-5 h-5" />,
    value: 10,
    suffix: '×',
    label: "Expansion in service offerings",
    description: "Powered by a robust iPaaS integration framework."
  },
  {
    icon: <Activity className="w-5 h-5" />,
    value: 30,
    suffix: '%',
    label: "Reduced incident response",
    description: "Using Prometheus/Grafana observability."
  },
  {
    icon: <Server className="w-5 h-5" />,
    value: 20,
    suffix: '%',
    label: "System reliability boost",
    description: "From monolith to microservices migration."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 60, damping: 20 }
  }
};

export function Impact() {
  return (
    <section id="impact" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <SectionHeading 
          title="Impact by the Numbers" 
          subtitle="Metrics that define the success of scalable architectures and data pipelines."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-card border border-border/60 rounded-2xl p-8 hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                
                <div className="text-4xl font-bold text-foreground tracking-tight flex items-baseline">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">
                    {metric.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
