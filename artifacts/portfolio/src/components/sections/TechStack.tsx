import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { 
  SiPython, SiSpringboot, SiApachekafka, 
  SiPostgresql, SiMongodb,
  SiDocker, SiKubernetes, SiPrometheus, 
  SiGrafana, SiDbt, SiRabbitmq
} from 'react-icons/si';

const techCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: null },
      { name: "Python", icon: SiPython }
    ]
  },
  {
    title: "Frameworks & Streaming",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Apache Kafka", icon: SiApachekafka },
      { name: "Apache Flink", icon: null },
      { name: "Apache NiFi", icon: null }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Cosmos DB", icon: null }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "Azure AKS", icon: null },
      { name: "AWS (SQS, S3)", icon: null },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "ArgoCD", icon: null }
    ]
  },
  {
    title: "Observability",
    skills: [
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
      { name: "SLO Monitoring", icon: null }
    ]
  },
  {
    title: "Data Engineering",
    skills: [
      { name: "DBT", icon: SiDbt },
      { name: "Batch ETL", icon: null },
      { name: "Real-time streaming", icon: null }
    ]
  },
  {
    title: "Architecture & Integration",
    skills: [
      { name: "REST APIs", icon: null },
      { name: "RabbitMQ", icon: SiRabbitmq },
      { name: "SFTP", icon: null },
      { name: "iPaaS", icon: null }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export function TechStack() {
  return (
    <section id="tech" className="py-24 bg-card/30">
      <div className="container px-6 mx-auto">
        <SectionHeading 
          title="Technology Stack" 
          subtitle="The tools and frameworks I use to engineer robust, scalable solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border/50 rounded-lg p-6"
            >
              <h3 className="text-lg font-mono font-bold text-foreground mb-4 border-b border-border/50 pb-2">
                // {category.title}
              </h3>
              
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.li 
                      key={sIdx}
                      variants={itemVariants}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {Icon ? (
                        <Icon className="w-4 h-4 shrink-0" />
                      ) : (
                        <div className="w-4 h-4 border border-current opacity-50 shrink-0 flex items-center justify-center text-[8px] font-bold font-mono">
                          {skill.name.charAt(0)}
                        </div>
                      )}
                      <span>{skill.name}</span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
