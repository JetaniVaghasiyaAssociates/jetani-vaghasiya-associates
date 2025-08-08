import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Rights in Criminal Defense Cases",
      excerpt: "Learn about your constitutional rights and how to protect yourself during criminal proceedings.",
      author: "Michael Chen",
      date: "2024-01-15",
      category: "Criminal Defense",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=400&text=Criminal+Defense",
    },
    {
      id: 2,
      title: "The Complete Guide to Estate Planning in 2024",
      excerpt: "Everything you need to know about wills, trusts, and protecting your family's future.",
      author: "James Wilson",
      date: "2024-01-12",
      category: "Estate Planning",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=400&text=Estate+Planning",
    },
    {
      id: 3,
      title: "Corporate Mergers: Legal Considerations for Business Owners",
      excerpt: "Navigate the complex legal landscape of mergers and acquisitions with expert guidance.",
      author: "Sarah Johnson",
      date: "2024-01-10",
      category: "Corporate Law",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400&text=Corporate+Law",
    },
    {
      id: 4,
      title: "Family Law: Protecting Children During Divorce Proceedings",
      excerpt: "How to prioritize your children's wellbeing during difficult family transitions.",
      author: "Emily Rodriguez",
      date: "2024-01-08",
      category: "Family Law",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=400&text=Family+Law",
    },
    {
      id: 5,
      title: "Personal Injury Claims: What You Need to Know",
      excerpt: "Understanding the personal injury claim process and maximizing your compensation.",
      author: "David Park",
      date: "2024-01-05",
      category: "Personal Injury",
      readTime: "4 min read",
      image: "/placeholder.svg?height=300&width=400&text=Personal+Injury",
    },
    {
      id: 6,
      title: "Real Estate Transactions: Common Legal Pitfalls to Avoid",
      excerpt: "Protect your investment by understanding the legal aspects of property transactions.",
      author: "Lisa Thompson",
      date: "2024-01-03",
      category: "Real Estate",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400&text=Real+Estate",
    },
  ]

  const categories = [
    "All",
    "Corporate Law",
    "Criminal Defense",
    "Family Law",
    "Personal Injury",
    "Real Estate",
    "Estate Planning",
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Legal Insights & News"
        subtitle="Our Blog"
        description="Stay informed with the latest legal insights, case studies, and expert analysis from our experienced attorneys."
        primaryButtonText="Subscribe to Newsletter"
        secondaryButtonText="Contact Us"
        showStats={false}
        backgroundImage="/placeholder.svg?height=600&width=500&text=Legal+Blog"
      />

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in-up">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`transition-all duration-300 hover:scale-105 ${
                  index === 0 ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16 animate-fade-in-up animation-delay-200">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Featured</Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit mb-3">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <Button className="w-fit bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post, index) => (
              <Card
                key={post.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-blue-600 hover:text-white transition-all duration-300 bg-transparent"
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              variant="outline"
              className="transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Stay Updated</h2>
            <p className="text-xl text-blue-100">
              Subscribe to our newsletter and never miss important legal updates and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
