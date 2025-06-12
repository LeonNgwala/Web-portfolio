
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-gradient-to-r from-background via-secondary/30 to-background py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-xl mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Lutho Ngwala
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
               © {currentYear} All rights reserved.
            </p>
          </div>
          
          <nav className="flex gap-6">
            <a 
              href="https://github.com/LeonNgwala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-500/10"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://za.linkedin.com/in/lutho-ngwala-537157312" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-blue-600/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:luthongwala100@gmail.com" 
              className="text-muted-foreground hover:text-green-500 transition-colors p-2 rounded-full hover:bg-green-500/10"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
