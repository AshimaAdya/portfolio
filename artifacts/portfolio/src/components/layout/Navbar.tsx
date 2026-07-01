import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { Sun, Moon, PenLine } from 'lucide-react';
import { useTheme } from '@/lib/theme';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'impact', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'tech', label: 'Stack' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const [location] = useLocation();
  const isHome = location === '/' || location === '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      if (!isHome) return;
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-3'
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-4">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-bold text-xl tracking-tight text-foreground shrink-0 hover:opacity-80 transition-opacity"
        >
          Ashima Adya
        </Link>

        {/* Section pill nav — home only */}
        {isHome && (
          <div className="hidden md:flex items-center gap-1 bg-muted/50 backdrop-blur-sm border border-border/40 rounded-full px-1.5 py-1.5">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  activeSection === item.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-card border border-border/40 rounded-full shadow-sm"
                    transition={{ type: 'spring' as const, stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Right side actions */}
        <div className="flex items-center gap-2 shrink-0 ml-auto">
          {/* Writing link */}
          <Link
            href="/writing"
            className={`hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-full transition-all ${
              location === '/writing'
                ? 'text-foreground bg-muted'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
            }`}
          >
            <PenLine className="w-4 h-4" />
            Writing
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          {/* Book a Call */}
          <a
            href="https://calendar.app.google/4nrNJt6VdKYzTaie7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5 rounded-full transition-all shadow-sm hidden sm:block"
          >
            Book a Call
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
