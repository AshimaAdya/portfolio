import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
}

export function SectionHeading({ title, subtitle, align = 'left', children }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-20 flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        {align === 'left' && <div className="h-px w-12 bg-primary/50" />}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {align === 'center' && <div className="h-px w-12 bg-primary/50 hidden md:block" />}
      </motion.div>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-muted-foreground font-mono text-sm md:text-base max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      
      {children}
    </div>
  );
}
