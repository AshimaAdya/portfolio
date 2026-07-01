import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 text-sm font-medium text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Vancouver, Canada — Available for projects &amp; mentoring
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
              Ashima Adya.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground/80 mb-6 leading-tight">
              Senior Software Engineer <br className="hidden md:block" />
              <span className="text-muted-foreground font-normal">Backend • Data Engineering • Distributed Systems</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed md:mx-0 mx-auto">
              8+ years building backend systems and data platforms at scale. Now taking on freelance projects,
              collaborations, and mentoring — bringing that same engineering rigour to your work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-3.5 rounded-full font-medium hover:bg-foreground/90 transition-colors shadow-sm"
            >
              <span>See How I Can Help</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://calendar.app.google/4nrNJt6VdKYzTaie7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-card text-foreground px-8 py-3.5 rounded-full font-medium border border-border hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Book a Call</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 text-sm"
          >
            <a
              href="mailto:ashima.adya@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
            >
              ashima.adya@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
