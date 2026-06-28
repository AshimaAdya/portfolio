import { motion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { SectionHeading } from '../ui/SectionHeading';
import { Activity, Zap, Layers, Server, Shield, Network } from 'lucide-react';

const metrics = [
  {
    icon: <Activity className="w-6 h-6" />,
    value: 40,
    suffix: '%',
    label: "Increase in customer adoption",
    description: "Through deep performance optimization and latency reduction."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    value: 40,
    suffix: '%',
    label: "Reduction in syncing errors",
    description: "Via automated metadata-correction systems."
  },
  {
    icon: <Network className="w-6 h-6" />,
    value: 10,
    suffix: '×',
    label: "Expansion in service offerings",
    description: "Powered by a robust iPaaS integration framework."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    value: 3,
    suffix: '×',
    label: "Throughput improvement",
    description: "Through decoupled async pipeline decomposition."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    value: 30,
    suffix: '%',
    label: "Reduced incident response",
    description: "Using Prometheus/Grafana observability."
  },
  {
    icon: <Server className="w-6 h-6" />,
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
    transition: { type: "spring" as const, stiffness: 50, damping: 20 }
  }
};

export function Impact() {
  return (
    <section id="impact" className="py-24 bg-card/30 relative">
      <div className="container px-6 mx-auto">
        <SectionHeading 
          title="System Impact" 
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
              className="bg-card border border-border/50 rounded-lg p-6 relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-primary mb-4 p-3 bg-primary/10 inline-block rounded-md border border-primary/20">
                {metric.icon}
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-mono flex items-baseline">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                <span className="text-primary text-3xl opacity-0 group-hover:opacity-100 transition-opacity -ml-1 inline-block translate-x-2">_</span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {metric.label}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
