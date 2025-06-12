
import { ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="page-container">
      <h1 className="section-title">About Me</h1>
      <p className="section-description">
        Hello! I'm a passionate creator who loves building elegant solutions to complex problems.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-1 mb-6 md:mb-0">
          <img 
            src="/Lutho2.jpg" 
            alt="Profile" 
            className="rounded-lg object-cover w-full aspect-square"
          />
        </div>
        
        <div className="col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">My Story</h2>
            <p className="text-muted-foreground">
              I've been passionate about technology since my early days. My journey started with simple curiosity that evolved into a career building products that people love to use. I focus on creating intuitive and accessible experiences that solve real problems.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-3">Skills & Expertise</h2>
            <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 rounded-full w-2 h-2"></span>
                UX/UI Design
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 rounded-full w-2 h-2"></span>
                Frontend Development
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 rounded-full w-2 h-2"></span>
                Backend Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 rounded-full w-2 h-2"></span>
                Project Management
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 rounded-full w-2 h-2"></span>
                Data Visualization
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-primary/10 rounded-full w-2 h-2"></span>
                Technical Writing
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-3">Experience</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Junior Software Developer - Kore Business Solutions</h3>
                  <span className="text-sm text-muted-foreground">Feb 2025 - June 2025</span>
                </div>
                <p className="text-muted-foreground text-sm">Contributed to the development of a web-based business reporting platform using React, django, PostgreSQL, and Tailwind CSS</p>
              </div>
              
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Systems Software Development - Learnership</h3>
                  <span className="text-sm text-muted-foreground">2024 - 2025</span>
                </div>
                <p className="text-muted-foreground text-sm"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t pt-8">
        <h2 className="text-2xl font-semibold mb-6">Get My Resume</h2>
        <a 
          href="#" 
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded hover:opacity-90 transition-opacity"
        >
          Download CV <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
