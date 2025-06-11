
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js. Features include user authentication, product filtering, cart functionality, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app that helps users organize tasks with features like drag-and-drop lists, reminders, and progress tracking.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "An interactive weather application that provides real-time forecasts, historical data analysis, and location-based weather alerts.",
    tags: ["JavaScript", "REST APIs", "Chart.js", "Geolocation"],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="page-container">
      <h1 className="section-title">My Projects</h1>
      <p className="section-description">
        A selection of projects I've built throughout my career. Each represents a unique problem-solving approach and technical implementation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden border flex flex-col h-full transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-sm">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex gap-4">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 hover:text-primary"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              )}
              {project.repoUrl && (
                <a 
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 hover:text-primary"
                >
                  Code <Github size={14} />
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
