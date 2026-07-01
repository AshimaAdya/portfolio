import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: "Energy Aware Clustering Based Mobility Model for FANETs",
    year: "2020",
    doi: "https://doi.org/10.1007/978-3-030-30577-2_3",
  },
  {
    title: "A Comparative Analysis of Mobility Models for Network of UAVs",
    year: "2019",
    doi: "https://doi.org/10.1007/978-981-15-1384-8_11",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-card">
      <div className="container px-6 mx-auto max-w-5xl">
        <SectionHeading
          title="Education & Credentials"
          subtitle="Academic foundation, research publications, and continuous learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Degrees */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Academic History</h3>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="text-lg font-bold text-foreground">Master of Technology</h4>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-muted px-2 py-1 rounded">
                    2017 – 2019
                  </span>
                </div>
                <div className="text-muted-foreground text-sm mb-3">
                  National Institute of Technology, Jalandhar
                </div>
                <div className="inline-flex items-center gap-1.5 text-amber-600 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400 px-2.5 py-1 rounded-md text-sm font-medium border border-amber-200/50">
                  <Award className="w-4 h-4" /> Gold Medalist
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="text-lg font-bold text-foreground">Bachelor of Technology</h4>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-muted px-2 py-1 rounded">
                    2011 – 2015
                  </span>
                </div>
                <div className="text-muted-foreground text-sm">
                  Chandigarh College of Engineering, Mohali
                </div>
              </motion.div>
            </div>
          </div>

          {/* Publications & Certs */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Publications & Certification</h3>
            </div>

            <div className="space-y-4">
              {/* dbt cert */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-5 bg-card border border-border/60 rounded-xl hover:border-primary/30 transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">dbt Fundamentals</h4>
                  <p className="text-sm text-muted-foreground mt-1">dbt Labs — Certification</p>
                </div>
              </motion.div>

              {/* Publications */}
              {publications.map((pub, i) => (
                <motion.a
                  key={pub.doi}
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
                  className="group p-5 bg-card border border-border/60 rounded-xl hover:border-primary/30 transition-colors flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {pub.title}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <p className="text-sm text-muted-foreground">Research Paper · {pub.year}</p>
                      <ExternalLink className="w-3 h-3 text-muted-foreground/60" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
