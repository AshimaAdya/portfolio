import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Mail, Linkedin, MapPin, CalendarDays, ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30 border-t border-border/50">
      <div className="container px-6 mx-auto max-w-4xl text-center">
        <SectionHeading 
          title="Let's build something." 
          subtitle="Currently exploring Senior/Staff Backend Engineering and Data Engineering roles."
          align="center"
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border/60 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden mt-12"
        >
          <div className="max-w-2xl mx-auto space-y-10">
            
            {/* The CTA */}
            <div className="flex flex-col items-center justify-center">
              <a 
                href="https://calendar.app.google/4nrNJt6VdKYzTaie7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center w-full max-w-md bg-primary hover:bg-primary/95 text-primary-foreground p-8 rounded-2xl transition-all shadow-sm"
              >
                <CalendarDays className="w-8 h-8 mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  Schedule a Meeting
                  <ArrowUpRight className="w-5 h-5 opacity-70" />
                </h3>
                <p className="text-primary-foreground/80 text-sm font-medium">
                  30-min intro call • Free • Flexible scheduling
                </p>
              </a>
            </div>

            <div className="w-full h-px bg-border/60" />

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:ashima.adya@gmail.com" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  ashima.adya@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3 text-muted-foreground">
                  <Linkedin className="w-5 h-5" />
                </div>
                <a href="https://www.linkedin.com/in/ashima-adya" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  linkedin.com/in/ashima-adya
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Vancouver, Canada<br/>Open to Remote
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
      
      <footer className="mt-24 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Ashima Adya. Built with precision.</p>
      </footer>
    </section>
  );
}
