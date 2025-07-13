import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react"

export default function HomePage() {
  const featuredCrafts = [
    {
      id: "origami",
      title: "折り紙",
      titleEn: "Origami",
      description: "The ancient art of paper folding",
      descriptionJa: "紙を折る古代の芸術",
      image: "/images/origami-bird.png", // Updated image path
      difficulty: "Beginner",
    },
    {
      id: "kintsugi",
      title: "金継ぎ",
      titleEn: "Kintsugi",
      description: "Golden repair - finding beauty in brokenness",
      descriptionJa: "壊れたものの中に美を見つける",
      image: "/images/kintsugi-plate.png", // Updated image path
      difficulty: "Advanced",
    },
    {
      id: "ikebana",
      title: "生け花",
      titleEn: "Ikebana",
      description: "The way of flowers - Japanese floral arrangement",
      descriptionJa: "花の道 - 日本の花の配置",
      image: "/images/ikebana-arrangement-new.png", // Updated image path
      difficulty: "Intermediate",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative gradient-japanese py-20 md:py-32 overflow-hidden">
        {/* Background torii gate image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/images/japan-torii-hero.png"
              alt="Japanese torii gate with cherry blossoms and traditional wave patterns"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light text-japanese-burgundy mb-6 tracking-wide font-japanese drop-shadow-lg">
              物の手
            </h1>
            <p className="text-xl md:text-2xl text-stone-800 mb-4 font-light drop-shadow-md">Mono no Te</p>

            {/* Clean text without any background */}
            <p className="text-lg text-stone-800 mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
              Discover the timeless beauty of traditional Japanese crafts. Learn ancient techniques passed down through
              generations.
            </p>
            <p className="text-sm text-stone-700 italic font-japanese drop-shadow-sm mb-12">
              伝統的な日本の工芸品の永遠の美しさを発見してください
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-japanese-burgundy hover:bg-japanese-burgundy/90 text-white shadow-lg"
              >
                <Link href="/crafts">
                  Explore Crafts <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-japanese-coral text-japanese-coral hover:bg-japanese-coral hover:text-white bg-transparent"
              >
                <Link href="/community">Join Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Crafts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">Featured Crafts</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Explore our most popular traditional Japanese crafts, each with rich cultural heritage and timeless
              beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredCrafts.map((craft) => (
              <Card
                key={craft.id}
                className="group hover:shadow-xl transition-all duration-300 border-stone-200 overflow-hidden bg-white hover:border-japanese-coral/30"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={craft.image || "/placeholder.svg"}
                    alt={craft.titleEn}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-medium text-stone-800 font-japanese">{craft.title}</h3>
                    <span className="text-sm text-stone-500">({craft.titleEn})</span>
                  </div>
                  <p className="text-stone-600 mb-3">{craft.description}</p>
                  <p className="text-xs text-stone-500 italic mb-4 font-japanese">{craft.descriptionJa}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-stone-100 text-stone-700 px-2 py-1 rounded-full">
                      {craft.difficulty}
                    </span>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-japanese-burgundy hover:text-japanese-coral"
                    >
                      <Link href={`/crafts/${craft.id}`}>
                        Learn More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/cherry-blossom-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-stone-50 opacity-90 z-0"></div> {/* Overlay for text readability */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-8">The Way of Crafts</h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              In Japanese culture, craftsmanship is not merely about creating objects—it's about cultivating the spirit,
              finding harmony between mind and hand, and honoring the materials we work with. Each fold, each repair,
              each arrangement carries the essence of centuries-old wisdom.
            </p>
            <p className="text-sm text-stone-500 italic font-japanese">
              日本の文化では、職人技は単に物を作ることではありません
            </p>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-japanese-coral/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-japanese-coral" />
              </div>
              <h3 className="text-2xl font-light text-stone-800 mb-2">1,200+</h3>
              <p className="text-stone-600">Craft Enthusiasts</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-japanese-burgundy/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-japanese-burgundy" />
              </div>
              <h3 className="text-2xl font-light text-stone-800 mb-2">50+</h3>
              <p className="text-stone-600">Detailed Tutorials</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-stone-600" />
              </div>
              <h3 className="text-2xl font-light text-stone-800 mb-2">25+</h3>
              <p className="text-stone-600">Master Artisans</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/newsletter-cta-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-japanese-burgundy opacity-90 z-0"></div>{" "}
        {/* Overlay for text readability */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">Stay Connected</h2>
          <p className="text-stone-100 mb-8 max-w-2xl mx-auto">
            Join our community to receive weekly insights, new tutorials, and stories from master craftspeople.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-japanese-burgundy bg-transparent"
          >
            <Link href="/contact">Subscribe to Newsletter</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
