import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card/50 border-t border-border/50">
      <div className="container px-6 mx-auto max-w-4xl text-center">
        <SectionHeading 
          title="System Connection" 
          subtitle="Currently seeking Senior/Staff Backend Engineering and Data Engineering roles."
          align="center"
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-background border border-primary/20 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,210,255,0.05)] relative overflow-hidden"
        >
          {/* Decorative scanner line */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
            style={{ opacity: 0.5 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-mono">Contact Details</h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                Available for opportunities in Vancouver, BC, or remote roles worldwide.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:ashima.adya@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">ashima.adya@gmail.com</span>
                </a>
                
                <a href="https://www.linkedin.com/in/ashima-adya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">linkedin.com/in/ashima-adya</span>
                </a>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded bg-card flex items-center justify-center border border-border">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">+1 604-908-2609</span>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded bg-card flex items-center justify-center border border-border">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">Vancouver, Canada</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border/50 p-6 rounded-lg font-mono text-sm">
              <div className="flex gap-2 mb-4 border-b border-border/50 pb-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-muted-foreground space-y-2">
                <p><span className="text-primary">$</span> whoami</p>
                <p className="text-foreground pl-4">{`{ "name": "Ashima Adya", "role": "Senior SWE" }`}</p>
                
                <p className="pt-2"><span className="text-primary">$</span> cat availability.txt</p>
                <p className="text-foreground pl-4">Open to Senior/Staff Backend & Data Engineering roles. Let's build scalable systems together.</p>
                
                <p className="pt-2"><span className="text-primary">$</span> ping -c 1 ashima</p>
                <p className="text-green-500 pl-4">1 packets transmitted, 1 received, 0% packet loss</p>
                <p className="text-primary animate-pulse mt-4">_</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <footer className="mt-24 pt-8 border-t border-border/50 text-center text-muted-foreground font-mono text-xs">
        <p>© {new Date().getFullYear()} Ashima Adya. Built with precision.</p>
      </footer>
    </section>
  );
}
