import Navigation from "@/components/layout/Navigation"
import Footer from "@/components/layout/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User } from "lucide-react"

// Fake blog data - replace with real data source
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI-Powered Email Automation",
    excerpt: "Discover how artificial intelligence is revolutionizing email management and productivity workflows for modern businesses.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Building Smart Email Rules That Actually Work",
    excerpt: "Learn advanced strategies for creating intelligent email filters that adapt to your workflow and reduce inbox clutter.",
    author: "Marcus Rodriguez",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Gmail Integration: Best Practices for Teams",
    excerpt: "Maximize your team's collaboration with proven Gmail integration patterns and workflow optimizations.",
    author: "Emma Thompson",
    date: "2024-01-10",
    readTime: "5 min read",
    category: "Integration",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Security First: Protecting Your Email Automation",
    excerpt: "Essential security considerations when implementing AI-powered email tools in enterprise environments.",
    author: "Daniel Kim",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
  },
  {
    id: 5,
    title: "ROI of Email Automation: Real Business Impact",
    excerpt: "Quantifying the business value of intelligent email management through data-driven case studies and metrics.",
    author: "Lisa Wang",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Custom AI Models for Email Classification",
    excerpt: "Deep dive into training custom machine learning models for enhanced email categorization and routing.",
    author: "Alex Chen",
    date: "2024-01-03",
    readTime: "12 min read",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-gradient-pink-start)] to-[var(--color-gradient-pink-end)]">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-primary-black)] mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-[var(--color-gray-medium)] max-w-3xl mx-auto">
              Stay updated with the latest trends in AI-powered email automation, productivity tips, and industry insights.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-[var(--shadow-card)]">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[var(--color-purple-accent)] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-[var(--color-purple-accent)] font-medium text-sm">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-black)] mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-[var(--color-gray-medium)] text-lg mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-[var(--color-gray-medium)] mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <button className="bg-[var(--color-primary-black)] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all self-start">
                    Read Article
                  </button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-[var(--shadow-card)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[var(--color-purple-accent)] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[var(--color-primary-black)] mb-3 leading-tight group-hover:text-[var(--color-purple-accent)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[var(--color-gray-medium)] mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[var(--color-gray-medium)] mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="text-[var(--color-purple-accent)] font-medium text-sm hover:underline transition-all">
                    Read More →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-white/80 backdrop-blur-sm text-[var(--color-primary-black)] px-8 py-3 rounded-lg font-medium border border-[var(--color-gray-light)] hover:bg-white hover:shadow-md transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}