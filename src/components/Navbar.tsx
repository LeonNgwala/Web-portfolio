
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md',
        scrolled 
          ? 'bg-background/80 border-b shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <NavLink 
          to="/" 
          className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-500 transition-all" 
          onClick={() => setIsOpen(false)}
        >
          Lutho Ngwala
        </NavLink>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.href}
              className={({ isActive }) => cn(
                "text-sm font-medium transition-all hover:text-blue-500 relative",
                isActive 
                  ? "text-blue-500" 
                  : scrolled 
                    ? "text-foreground/70" 
                    : "text-white/90 hover:text-white"
              )}
            >
              {item.title}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm animate-fade-in">
            <nav className="container flex flex-col items-center justify-center gap-8 p-8 h-full">
              {navItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.href}
                  className={({ isActive }) => cn(
                    "text-2xl font-medium transition-colors hover:text-blue-500 animate-slide-down",
                    isActive ? "text-blue-500" : "text-foreground/70"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </NavLink>
              ))}
              <div className="mt-6">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
