
import { ArrowRight, Play, Download, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Lutho.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 z-20"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Lutho Ngwala</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 mb-8 font-light">
              Creative Developer & Digital Experience Designer
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              I craft beautiful digital experiences that bridge creativity and technology, 
              bringing ideas to life through innovative design and cutting-edge development.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-6 justify-center mb-8">
              <a 
                href="https://github.com/LeonNgwala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://za.linkedin.com/in/lutho-ngwala-537157312" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none text-lg px-8 py-3">
                <Link to="/projects" className="flex items-center gap-2">
                  <Play size={20} />
                  View My Work
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-3">
                <Link to="/contact" className="flex items-center gap-2">
                  Download CV
                  <Download size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With a passion for creating exceptional digital experiences, I combine technical expertise 
                with creative vision to deliver solutions that not only look stunning but perform flawlessly.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I specialize in modern web development, user experience design, and bringing innovative 
                ideas to life through code and creativity.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About Me
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8">
                <img 
                  src="Lutho2.jpg" 
                  alt="Lutho Ngwala - Professional"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/20 via-background to-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise in technology and development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 hover:border-blue-500/30">
              <CardContent className="p-6 text-center">
                <div className="mb-6 p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-bold text-xl mb-3">AWS Certified Developer</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Associate level certification demonstrating expertise in developing applications on AWS platform.
                </p>
                <div className="text-xs text-blue-500 font-medium">2024</div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-500/10 to-blue-500/10 border-2 hover:border-green-500/30">
              <CardContent className="p-6 text-center">
                <div className="mb-6 p-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="font-bold text-xl mb-3">React Professional</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Advanced certification in React development, including hooks, context, and modern patterns.
                </p>
                <div className="text-xs text-green-500 font-medium">2024</div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 hover:border-purple-500/30">
              <CardContent className="p-6 text-center">
                <div className="mb-6 p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Google UX Design</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Professional certificate in user experience design and research methodologies.
                </p>
                <div className="text-xs text-purple-500 font-medium">2023</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Featured Sections */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Explore My Work
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Discover my projects, thoughts, and ways to connect. Each section showcases a different aspect of my journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 hover:border-blue-500/30">
              <CardContent className="p-6 text-center">
                <div className="mb-6 p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <span className="text-2xl">👋</span>
                </div>
                <h3 className="font-bold text-xl mb-3">About Me</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Discover my background, skills, experience, and the journey that shaped my career in tech.
                </p>
                <Link 
                  to="/about" 
                  className="text-blue-500 hover:text-purple-500 flex items-center justify-center gap-2 font-medium group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-500/10 to-blue-500/10 border-2 hover:border-green-500/30">
              <CardContent className="p-6 text-center">
                <div className="mb-6 p-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Projects</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Explore my portfolio of innovative projects, from web applications to creative digital solutions.
                </p>
                <Link 
                  to="/projects" 
                  className="text-green-500 hover:text-blue-500 flex items-center justify-center gap-2 font-medium group-hover:gap-3 transition-all"
                >
                  View Portfolio <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 hover:border-purple-500/30">
              <CardContent className="p-6 text-center">
                <div className="mb-6 p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Blog</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Read my insights on technology, design trends, development tips, and creative inspiration.
                </p>
                <Link 
                  to="/blog" 
                  className="text-purple-500 hover:text-pink-500 flex items-center justify-center gap-2 font-medium group-hover:gap-3 transition-all"
                >
                  Read Articles <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 hover:border-orange-500/30">
              <CardContent className="p-6 text-center">
                <div className="mb-6 p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <span className="text-2xl">📩</span>
                </div>
                <h3 className="font-bold text-xl mb-3">Contact</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Let's connect! Reach out for collaborations, opportunities, or just to say hello.
                </p>
                <Link 
                  to="/contact" 
                  className="text-orange-500 hover:text-red-500 flex items-center justify-center gap-2 font-medium group-hover:gap-3 transition-all"
                >
                  Get In Touch <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/30 via-background to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            What I Do Best
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { skill: 'React', level: '95%' },
              { skill: 'TypeScript', level: '90%' },
              { skill: 'Design', level: '85%' },
              { skill: 'Node.js', level: '80%' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {item.level}
                </div>
                <h3 className="font-semibold text-lg">{item.skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
