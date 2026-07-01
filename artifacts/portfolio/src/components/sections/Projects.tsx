import { motion } from 'framer-motion';
import { Github, ExternalLink, FileText } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

type Project = {
  name: string;
  description: string;
  language: string;
  tags: string[];
  githubUrl: string;
  articleUrl?: string;
};

const langColor: Record<string, string> = {
  Python: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  Java: 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  Notebook: 'bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
};

const projects: Project[] = [
  {
    name: 'Nexus Reach',
    description:
      'AI-powered cold email generator with a built-in evaluation loop, retry mechanism, and quality gates. Matches candidate portfolios to job openings and drafts personalised outreach emails. Score below 0.7 → auto-retry, the user never sees a bad draft.',
    language: 'Python',
    tags: ['LLM', 'AI Agents', 'Eval Loop'],
    githubUrl: 'https://github.com/AshimaAdya/ColdEmailGenration',
    articleUrl:
      'https://www.linkedin.com/posts/ashima-adya_dataengineering-softwareengineering-aiengineering-activity-7466641722350112768-OIpx',
  },
  {
    name: 'Kimball Retail Data Warehouse',
    description:
      "Full implementation of Kimball's dimensional modeling from The Data Warehouse Toolkit, built on Databricks. Bronze → Silver → Gold Medallion Architecture with fact tables, slowly-changing dimensions, and conformed dims.",
    language: 'Notebook',
    tags: ['Databricks', 'Dimensional Modeling', 'Medallion Architecture'],
    githubUrl: 'https://github.com/AshimaAdya/RetailAnalysis',
    articleUrl:
      'https://medium.com/@ashima.adya/from-book-to-build-a-data-engineering-guide-to-kimballs-retail-sales-model-with-databricks-8002f8229438',
  },
  {
    name: 'Azure End-to-End Data Pipeline',
    description:
      'Production-style Azure data engineering pipeline using ADF for orchestration, Databricks for transformation, Synapse Analytics for serving, and Power BI for visualisation. Structured with Medallion Architecture.',
    language: 'Notebook',
    tags: ['Azure', 'ADF', 'Databricks', 'Synapse'],
    githubUrl: 'https://github.com/AshimaAdya/AdventureWorkDEP1',
    articleUrl:
      'https://medium.com/@ashima.adya/build-a-complete-azure-data-pipeline-using-adf-databricks-synapse-power-bi-step-by-step-guide-43c745511682',
  },
  {
    name: 'Flink Real-Time Stream Processing',
    description:
      'Real-time stream processing pipelines with Apache Flink. Handles high-throughput event streams with low-latency processing and stateful computation guarantees.',
    language: 'Java',
    tags: ['Apache Flink', 'Streaming', 'Real-Time'],
    githubUrl: 'https://github.com/AshimaAdya/flink_real_time_eng',
  },
  {
    name: 'Flink Browser Session Analysis',
    description:
      'Real-time browser session analytics using Apache Flink. Processes clickstream data to compute session metrics, user behaviour patterns, and funnel analysis in real time.',
    language: 'Java',
    tags: ['Apache Flink', 'Clickstream', 'Analytics'],
    githubUrl: 'https://github.com/AshimaAdya/flink_browser_session_analysis',
  },
  {
    name: 'Flink Batch Processing',
    description:
      'Batch data processing with Apache Flink demonstrating efficient bulk transformations, aggregations, and joins over large datasets with configurable parallelism.',
    language: 'Java',
    tags: ['Apache Flink', 'Batch', 'Java'],
    githubUrl: 'https://github.com/AshimaAdya/flink_batch',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            title="Projects"
            subtitle="Selected work from data engineering, distributed systems, and AI applications."
          />
          <a
            href="https://github.com/AshimaAdya"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0 mb-1"
          >
            <Github className="w-4 h-4" />
            All repos
          </a>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={item}
              className="group flex flex-col bg-card border border-border rounded-2xl p-6 hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              {/* Language badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${langColor[project.language] ?? langColor.Python}`}>
                  {project.language}
                </span>
                <div className="flex items-center gap-2">
                  {project.articleUrl && (
                    <a
                      href={project.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Read article"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1 line-clamp-4">
                {project.description}
              </p>

              {/* Tags + link */}
              <div className="flex items-end justify-between gap-3 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Open project"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
