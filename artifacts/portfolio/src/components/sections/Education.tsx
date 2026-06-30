import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 bg-card">
      <div className="container px-6 mx-auto max-w-5xl">
        <SectionHeading 
          title="Education & Certifications" 
          subtitle="Academic foundation and continuous learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Education */}
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
                className="relative"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="text-lg font-bold text-foreground">M.Tech, Computer and Information Security</h4>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-muted px-2 py-1 rounded">2017 – 2019</span>
                </div>
                <div className="text-muted-foreground text-sm mb-3">Dr B R Ambedkar National Institute of Technology, Jalandhar (NIT)</div>
                <div className="inline-flex items-center gap-1.5 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md text-sm font-medium border border-amber-200/50">
                  <Award className="w-4 h-4" /> Gold Medalist
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="text-lg font-bold text-foreground">B.Tech, Computer Science</h4>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-muted px-2 py-1 rounded">2011 – 2015</span>
                </div>
                <div className="text-muted-foreground text-sm">Chandigarh Group of Colleges, Landran, Punjab</div>
              </motion.div>
            </div>
          </div>

          {/* Certs & Pubs */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border/50">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Publications & Certs</h3>
            </div>

            <div className="space-y-4">
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
                  <h4 className="font-semibold text-foreground">dbt Fundamentals (×2)</h4>
                  <p className="text-sm text-muted-foreground mt-1">Certification</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-5 bg-card border border-border/60 rounded-xl hover:border-primary/30 transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                </div>
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
                className="p-5 bg-card border border-border/60 rounded-xl hover:border-primary/30 transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                </div>
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
