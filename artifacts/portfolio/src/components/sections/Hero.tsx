import { motion } from 'framer-motion';
import { Terminal, Database, Server } from 'lucide-react';

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-12"
    >
      {/* Background Tech Grid effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-primary tracking-wider text-sm md:text-base">
              System.out.println("Hello, World!");
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-4"
          >
            Ashima Adya.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-semibold text-muted-foreground mb-8"
          >
            I build the backend systems and data platforms that make products work at <span className="text-foreground">scale</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mb-12 font-mono leading-relaxed"
          >
            Senior Software Engineer based in Vancouver, specializing in Backend Engineering, Data Engineering, and Distributed Systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a 
              href="#experience"
              className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-medium hover:bg-primary/90 transition-colors"
            >
              <Database className="w-4 h-4" />
              <span>Explore Systems</span>
            </a>
            
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-foreground px-6 py-3 rounded font-medium border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
            >
              <Server className="w-4 h-4 text-primary" />
              <span>Initiate Contact</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="font-mono text-xs tracking-widest text-primary">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
