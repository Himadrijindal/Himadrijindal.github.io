import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Star, Play, BookOpen, Heart, Share2 } from "lucide-react"

// This would normally come from a database or API
async function getCraft(slug: string) {
  const crafts = {
    origami: {
      id: "origami",
      title: "折り紙",
      titleEn: "Origami",
      description:
        "The ancient art of paper folding that transforms simple paper into intricate sculptures through precise folds and techniques.",
      descriptionJa: "正確な折り方と技術によってシンプルな紙を複雑な彫刻に変える古代の紙折り芸術",
      image: "/images/hero-origami.jpg",
      difficulty: "Beginner",
      duration: "30-60 min",
      students: 450,
      rating: 4.8,
      category: "Paper Arts",
      history:
        "Origami, from 'ori' (folding) and 'kami' (paper), has its roots in 6th century Japan when Buddhist monks brought paper from China. Initially used for ceremonial purposes, it evolved into an art form during the Heian period (794-1185). The practice embodies the Japanese aesthetic principles of simplicity, precision, and finding beauty in constraint.",
      historyJa: "「折り」と「紙」から成る折り紙は、仏教の僧侶が中国から紙を持ち込んだ6世紀の日本にルーツがあります。",
      philosophy:
        "Origami teaches patience, precision, and the transformation of the ordinary into the extraordinary. Each fold represents a moment of mindfulness, connecting the creator with centuries of tradition.",
      materials: ["Origami paper (kami)", "Bone folder (optional)", "Clean, flat surface"],
      techniques: [
        { name: "Valley Fold", description: "Fold towards you, creating a valley", difficulty: "Basic" },
        { name: "Mountain Fold", description: "Fold away from you, creating a peak", difficulty: "Basic" },
        { name: "Inside Reverse Fold", description: "Fold a point inside the model", difficulty: "Intermediate" },
        { name: "Outside Reverse Fold", description: "Fold a point outside the model", difficulty: "Intermediate" },
      ],
      tutorials: [
        { title: "Paper Crane Tutorial", duration: "15 min", level: "Beginner", videoId: "placeholder" },
        { title: "Lotus Flower", duration: "25 min", level: "Intermediate", videoId: "placeholder" },
        { title: "Dragon", duration: "45 min", level: "Advanced", videoId: "placeholder" },
      ],
    },
  }

  return crafts[slug as keyof typeof crafts] || null
}

export default async function CraftDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const craft = await getCraft(slug)

  if (!craft) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-stone-800 mb-4">Craft not found</h1>
          <Button asChild>
            <Link href="/crafts">Back to Crafts</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-stone-100 text-stone-700">{craft.category}</Badge>
                <Badge
                  variant={
                    craft.difficulty === "Beginner"
                      ? "default"
                      : craft.difficulty === "Intermediate"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {craft.difficulty}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">{craft.title}</h1>
              <p className="text-xl text-stone-600 mb-4">{craft.titleEn}</p>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">{craft.description}</p>
              <p className="text-sm text-stone-500 italic mb-8">{craft.descriptionJa}</p>

              <div className="flex items-center gap-6 text-sm text-stone-600 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {craft.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {craft.students} students
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-current text-yellow-500" />
                  {craft.rating}
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-stone-700 hover:bg-stone-800">
                  <Play className="mr-2 h-4 w-4" />
                  Start Learning
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={craft.image || "/placeholder.svg"}
                alt={craft.titleEn}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="techniques">Techniques</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Cultural History
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-stone-700 leading-relaxed">{craft.history}</p>
                  <p className="text-sm text-stone-500 italic">{craft.historyJa}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Philosophy & Meaning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-700 leading-relaxed">{craft.philosophy}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tutorials" className="space-y-6">
              {craft.tutorials.map((tutorial, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-stone-100 rounded-lg flex items-center justify-center">
                          <Play className="h-6 w-6 text-stone-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-stone-800 mb-1">{tutorial.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-stone-500">
                            <span>{tutorial.duration}</span>
                            <Badge variant="outline" size="sm">
                              {tutorial.level}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Button>Watch Tutorial</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="techniques" className="space-y-4">
              {craft.techniques.map((technique, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-stone-800">{technique.name}</h3>
                      <Badge variant="outline">{technique.difficulty}</Badge>
                    </div>
                    <p className="text-stone-600">{technique.description}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="materials">
              <Card>
                <CardHeader>
                  <CardTitle>Required Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {craft.materials.map((material, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                        <span className="text-stone-700">{material}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
