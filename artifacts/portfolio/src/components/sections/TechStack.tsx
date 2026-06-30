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
      { name: "AWS", icon: null },
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
    title: "Integration",
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
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export function TechStack() {
  return (
    <section id="tech" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <SectionHeading 
          title="Technology Stack" 
          subtitle="The tools and frameworks I use to engineer robust, scalable solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {techCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border/60 rounded-2xl p-6"
            >
              <h3 className="text-base font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div 
                      key={sIdx}
                      variants={itemVariants}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md text-sm font-medium text-foreground hover:bg-muted/80 transition-colors"
                    >
                      {Icon ? (
                        <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded bg-foreground/10 text-[8px] font-bold flex items-center justify-center text-muted-foreground uppercase">
                          {skill.name.charAt(0)}
                        </div>
                      )}
                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
