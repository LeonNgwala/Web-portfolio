
import { useState } from 'react';
import { ChevronRight, Calendar, User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to simplify your components and reduce boilerplate code in your React applications.",
    date: "April 10, 2025",
    author: "Jane Doe",
    category: "Development",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
  },
  {
    id: 2,
    title: "The Future of UI Design in 2025",
    excerpt: "Explore emerging trends in user interface design and how they're shaping the digital landscape in the coming year.",
    date: "April 8, 2025",
    author: "John Smith",
    category: "Design",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
  },
  {
    id: 3,
    title: "Building Accessible Web Applications",
    excerpt: "Discover best practices for creating web applications that are accessible to users with various disabilities and needs.",
    date: "April 5, 2025",
    author: "Alex Johnson",
    category: "Accessibility",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
  },
  {
    id: 4,
    title: "Optimizing React Performance",
    excerpt: "Learn advanced techniques for improving the performance of your React applications for better user experience.",
    date: "April 1, 2025",
    author: "Sarah Williams",
    category: "Development",
    image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
  },
];

const categories = ["All", "Development", "Design", "Accessibility"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="page-container">
      <h1 className="section-title">Blog</h1>
      <p className="section-description">
        Thoughts, ideas, and insights about design, development, and technology.
      </p>
      
      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              selectedCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <article key={post.id} className="border rounded-lg overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> 
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {post.author}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>
              <a 
                href="#"
                className="inline-flex items-center text-primary hover:underline mt-auto"
              >
                Read More <ChevronRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
