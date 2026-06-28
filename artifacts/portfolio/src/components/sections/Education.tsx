import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container px-6 mx-auto max-w-5xl">
        <SectionHeading 
          title="Education & Certifications" 
          subtitle="Academic foundation and continuous learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Academic History</h3>
            </div>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-6 border-l border-primary/30"
              >
                <div className="absolute w-3 h-3 bg-background border-2 border-primary rounded-full -left-[7px] top-1.5" />
                <h4 className="text-lg font-bold text-foreground">M.Tech, Computer and Information Security</h4>
                <div className="text-primary font-mono text-sm mt-1 mb-2">Dr B R Ambedkar National Institute of Technology, Jalandhar (NIT)</div>
                <div className="text-muted-foreground text-sm flex items-center gap-2">
                  <span>2017 – 2019</span>
                  <span className="opacity-30">•</span>
                  <span className="flex items-center gap-1 text-yellow-500 font-medium">
                    <Award className="w-4 h-4" /> Gold Medalist
                  </span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative pl-6 border-l border-primary/30"
              >
                <div className="absolute w-3 h-3 bg-background border-2 border-primary rounded-full -left-[7px] top-1.5" />
                <h4 className="text-lg font-bold text-foreground">B.Tech, Computer Science</h4>
                <div className="text-primary font-mono text-sm mt-1 mb-2">Chandigarh Group of Colleges, Landran, Punjab</div>
                <div className="text-muted-foreground text-sm flex items-center gap-2">
                  <span>2011 – 2015</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Certs & Pubs */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Publications & Certs</h3>
            </div>

            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-5 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-colors flex items-start gap-4"
              >
                <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">dbt Fundamentals (×2)</h4>
                  <p className="text-sm text-muted-foreground mt-1">Certification</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-5 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-colors flex items-start gap-4"
              >
                <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">A Comparative Analysis of Mobility Models for Network of UAVs</h4>
                  <p className="text-sm text-muted-foreground mt-1">Publication</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-5 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-colors flex items-start gap-4"
              >
                <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Energy Aware Clustering Based Mobility Model for FANETs</h4>
                  <p className="text-sm text-muted-foreground mt-1">Publication</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
