import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Clock, Users, Star } from "lucide-react"
import { cn } from "@/lib/utils" // Ensure cn is imported

export default function CraftsPage() {
  const crafts = [
    {
      id: "origami",
      title: "折り紙",
      titleEn: "Origami",
      description: "The ancient art of paper folding that transforms simple paper into intricate sculptures",
      descriptionJa: "シンプルな紙を複雑な彫刻に変える古代の紙折り芸術",
      image: "/images/origami-figure.png", // Updated image path
      difficulty: "Beginner",
      duration: "30-60 min",
      students: 450,
      rating: 4.8,
      category: "Paper Arts",
    },
    {
      id: "kintsugi",
      title: "金継ぎ",
      titleEn: "Kintsugi",
      description: "The art of golden repair - finding beauty in brokenness and imperfection",
      descriptionJa: "金の修理の芸術 - 壊れたものや不完全さの中に美を見つける",
      image: "/images/kintsugi-bowl-new.png", // Updated image path
      difficulty: "Advanced",
      duration: "2-3 hours",
      students: 180,
      rating: 4.9,
      category: "Ceramic Arts",
    },
    {
      id: "ikebana",
      title: "生け花",
      titleEn: "Ikebana",
      description: "The way of flowers - Japanese floral arrangement emphasizing harmony and balance",
      descriptionJa: "調和とバランスを重視する日本の花の配置",
      image: "/images/ikebana-arrangement-crafts.png", // Updated image path
      difficulty: "Intermediate",
      duration: "45-90 min",
      students: 320,
      rating: 4.7,
      category: "Floral Arts",
    },
    {
      id: "sumi-e",
      title: "墨絵",
      titleEn: "Sumi-e",
      description: "Traditional ink wash painting capturing the essence of subjects with minimal strokes",
      descriptionJa: "最小限の筆遣いで対象の本質を捉える伝統的な墨絵",
      image: "/images/sumi-e-lanterns.png", // Updated image path
      difficulty: "Intermediate",
      duration: "60-120 min",
      students: 220,
      rating: 4.6,
      category: "Painting",
    },
    {
      id: "furoshiki",
      title: "風呂敷",
      titleEn: "Furoshiki",
      description: "The art of fabric wrapping - sustainable and beautiful gift wrapping technique",
      descriptionJa: "布包みの芸術 - 持続可能で美しい贈り物の包装技術",
      image: "/images/furoshiki-wrapping-new.png", // Updated image path
      difficulty: "Beginner",
      duration: "20-40 min",
      students: 380,
      rating: 4.5,
      category: "Textile Arts",
    },
    {
      id: "temari",
      title: "手毬",
      titleEn: "Temari",
      description: "Traditional thread balls with intricate geometric patterns and vibrant colors",
      descriptionJa: "複雑な幾何学模様と鮮やかな色彩の伝統的な糸毬",
      image: "/images/temari-balls-new.png", // Updated image path
      difficulty: "Advanced",
      duration: "3-5 hours",
      students: 95,
      rating: 4.8,
      category: "Textile Arts",
    },
  ]

  const categories = ["All", "Paper Arts", "Ceramic Arts", "Floral Arts", "Painting", "Textile Arts"]
  const difficulties = ["All Levels", "Beginner", "Intermediate", "Advanced"]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section
        className="bg-white py-16 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/crafts-header-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-80 z-0"></div> {/* Overlay for text readability */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">Traditional Crafts</h1>
            <p className="text-xl text-stone-600 mb-2">伝統工芸</p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Explore our comprehensive collection of traditional Japanese crafts. Each craft comes with detailed
              tutorials, cultural background, and step-by-step guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-t border-stone-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-stone-700 mr-2">Category:</span>
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-stone-100">
                  {category}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-stone-700 mr-2">Level:</span>
              {difficulties.map((difficulty) => (
                <Badge key={difficulty} variant="outline" className="cursor-pointer hover:bg-stone-100">
                  {difficulty}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Crafts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crafts.map((craft) => (
              <Card
                key={craft.id}
                className="group hover:shadow-xl transition-all duration-300 border-stone-200 overflow-hidden bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={craft.image || "/placeholder.svg"}
                    alt={craft.titleEn}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-stone-700 hover:bg-white">{craft.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        craft.difficulty === "Beginner"
                          ? "default"
                          : craft.difficulty === "Intermediate"
                            ? "secondary"
                            : "destructive"
                      }
                      className={cn(
                        "bg-white/90 hover:bg-white",
                        (craft.difficulty === "Beginner" || craft.difficulty === "Advanced") && "text-black",
                      )}
                    >
                      {craft.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-medium text-stone-800">{craft.title}</h3>
                    <span className="text-sm text-stone-500">({craft.titleEn})</span>
                  </div>
                  <p className="text-stone-600 mb-2 line-clamp-2">{craft.description}</p>
                  <p className="text-xs text-stone-500 italic mb-4 line-clamp-1">{craft.descriptionJa}</p>

                  <div className="flex items-center gap-4 text-xs text-stone-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {craft.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {craft.students} students
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current text-yellow-500" />
                      {craft.rating}
                    </div>
                  </div>

                  <Button asChild className="w-full bg-stone-700 hover:bg-stone-800">
                    <Link href={`/crafts/${craft.id}`}>Learn {craft.titleEn}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
