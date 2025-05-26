
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User } from "lucide-react";

const Index = () => {
  const featuredPost = {
    title: "The Future of Web Development: AI-Powered Coding",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build web applications, from automated code generation to intelligent debugging.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Technology"
  };

  const blogPosts = [
    {
      id: 1,
      title: "Modern React Patterns and Best Practices",
      excerpt: "Dive deep into the latest React patterns that will make your code more maintainable and performant.",
      author: "Alex Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Development"
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Learn how to architect robust backend systems that can handle millions of requests.",
      author: "Maria Garcia",
      date: "2024-01-10",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Backend"
    },
    {
      id: 3,
      title: "The Art of UI/UX Design in 2024",
      excerpt: "Discover the latest design trends and principles that create exceptional user experiences.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Design"
    },
    {
      id: 4,
      title: "Machine Learning for Web Developers",
      excerpt: "A beginner's guide to integrating ML models into web applications without a PhD.",
      author: "Emma Thompson",
      date: "2024-01-05",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      category: "AI/ML"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechBlog
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Categories</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Post */}
        <section className="mb-16">
          <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-white/20 text-white border-white/30">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-blue-100">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarDays size={16} />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </Card>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Latest Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-700 border-0">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Load More Articles
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">TechBlog</h4>
              <p className="text-slate-400">
                Your source for the latest in technology, development, and innovation.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Categories</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI/ML</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Company</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 TechBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
