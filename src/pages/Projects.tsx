
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
    title: "Gym website",
    description: "A responsive gym website built with HTML, Tailwind CSS, and JavaScript. It features a modern design, user-friendly navigation, and integrates Stripe for payment processing.",
    tags: ["HTML", "Tailwind CSS", "Javascript", "Stripe"],
    image: "https://fitliffe.netlify.app/images/gym.jpg",
    liveUrl: "https://fitliffe.netlify.app/",
    repoUrl: "https://github.com/LeonNgwala",
  },
  {
    id: 2,
    title: "Fitness tracker",
    description: "A productivity app that helps users organize tasks with features like drag-and-drop lists, reminders, and progress tracking.",
      tags: ["Python"],
    image: "https://cdn.syncfusion.com/content/images/products/ShowcaseSamples/react-samples/fitness-tracker-banner.webp?v=02052025051740",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/LeonNgwala/Titans-Fitness-Tracker.git",
  },
  {
    id: 3,
    title: "Recipe Manager",
    description: "A web application for managing and sharing recipes. Users can create, edit, and delete recipes, as well as search and filter by ingredients or cuisine type.",
    tags: ["Python"],
    image: "https://images.pexels.com/photos/17627339/pexels-photo-17627339/free-photo-of-woman-hands-holding-cellphone-with-recipe-on-screen.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/LeonNgwala/Recipe-Manager.git",
  },
  {
    id: 3,
    title: "Library Management System",
    description: " A comprehensive library management system that allows users to search for books, manage their accounts, and track borrowed items. It includes features like book reservations, user authentication, and admin controls.",
    tags: ["Java"],
    image: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2tzdG9yZXxlbnwwfHwwfHx8MA%3D%3D",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/LeonNgwala/Library-Management-System.git",
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
