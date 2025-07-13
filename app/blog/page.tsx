import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "philosophy-of-wabi-sabi",
      title: "The Philosophy of Wabi-Sabi in Japanese Crafts",
      titleJa: "日本の工芸品における侘寂の哲学",
      excerpt:
        "Exploring how the aesthetic philosophy of wabi-sabi - finding beauty in imperfection and impermanence - influences traditional Japanese crafts.",
      author: "Master Yamamoto",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Philosophy",
      image: "/images/blog-wabi-sabi.jpg",
      featured: true,
    },
    {
      id: "history-of-origami",
      title: "From Sacred Ritual to Art Form: The Evolution of Origami",
      titleJa: "神聖な儀式から芸術形式へ：折り紙の進化",
      excerpt:
        "Tracing the journey of origami from its ceremonial origins in Heian period Japan to its modern artistic expressions.",
      author: "Dr. Sakura Tanaka",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "History",
      image: "/images/blog-origami-history.jpg",
      featured: false,
    },
    {
      id: "kintsugi-modern-world",
      title: "Kintsugi in the Modern World: Lessons in Resilience",
      titleJa: "現代世界における金継ぎ：回復力の教訓",
      excerpt:
        "How the ancient art of kintsugi offers profound lessons for healing and finding strength in our broken places.",
      author: "Kenji Nakamura",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Culture",
      image: "/images/blog-kintsugi-modern.jpg",
      featured: false,
    },
    {
      id: "seasonal-ikebana",
      title: "Seasonal Ikebana: Capturing Nature's Rhythm",
      titleJa: "季節の生け花：自然のリズムを捉える",
      excerpt:
        "Understanding how ikebana masters use seasonal flowers and branches to reflect the ever-changing beauty of nature.",
      author: "Hanako Sato",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Techniques",
      image: "/images/blog-seasonal-ikebana.jpg",
      featured: false,
    },
    {
      id: "mindfulness-in-crafts",
      title: "The Meditative Nature of Traditional Crafts",
      titleJa: "伝統工芸の瞑想的性質",
      excerpt:
        "Exploring how traditional Japanese crafts serve as forms of moving meditation, bringing peace and focus to practitioners.",
      author: "Zen Master Fujiwara",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Mindfulness",
      image: "/images/blog-mindfulness.jpg",
      featured: false,
    },
    {
      id: "preserving-traditions",
      title: "Preserving Ancient Techniques in the Digital Age",
      titleJa: "デジタル時代における古代技術の保存",
      excerpt:
        "How modern technology is helping preserve and share traditional Japanese craft techniques with new generations.",
      author: "Prof. Hiroshi Watanabe",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Technology",
      image: "/images/blog-preserving-traditions.jpg",
      featured: false,
    },
  ]

  const categories = ["All", "Philosophy", "History", "Culture", "Techniques", "Mindfulness", "Technology"]
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section
        className="bg-white py-16 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/blog-header-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-80 z-0"></div> {/* Overlay for text readability */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">Blog</h1>
            <p className="text-xl text-stone-600 mb-2">ブログ</p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Insights, stories, and wisdom from the world of traditional Japanese crafts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white border-t border-stone-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="cursor-pointer hover:bg-stone-100">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-2xl font-light text-stone-800 mb-8 text-center">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-stone-100 text-stone-700">{featuredPost.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h3 className="text-2xl font-medium text-stone-800 mb-2">{featuredPost.title}</h3>
                  <p className="text-sm text-stone-500 italic mb-4">{featuredPost.titleJa}</p>
                  <p className="text-stone-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-stone-500 mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button asChild className="bg-stone-700 hover:bg-stone-800">
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-[5/3] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
                <h3 className="text-lg font-medium text-stone-800 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-xs text-stone-500 italic mb-3">{post.titleJa}</p>
                <p className="text-stone-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-stone-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm" className="w-full text-stone-700 hover:text-stone-900">
                  <Link href={`/blog/${post.id}`}>
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent"
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}
