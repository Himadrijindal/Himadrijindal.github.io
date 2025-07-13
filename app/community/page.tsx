"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Upload, Heart, MessageCircle, Share2, Users, Camera } from "lucide-react"

export default function CommunityPage() {
  // Removed selectedFile state as it's no longer needed for a static showpiece
  // const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const communityPosts = [
    {
      id: 1,
      author: "Sakura_Folder",
      authorAvatar: "/images/community-user-new.png", // Updated image path
      craft: "Origami",
      title: "My first 1000 paper cranes!",
      description: "Finally completed my senbazuru project. Each crane represents a wish for peace.",
      image: "/images/community-post1.jpg",
      likes: 234,
      comments: 18,
      timeAgo: "2 hours ago",
      difficulty: "Intermediate",
    },
    {
      id: 2,
      author: "GoldenKintsugi",
      authorAvatar: "/images/community-user-new2.png", // Updated image path
      craft: "Kintsugi",
      title: "Restored my grandmother's tea bowl",
      description: "Used traditional urushi and gold powder to repair this precious family heirloom.",
      image: "/images/community-post2.jpg",
      likes: 189,
      comments: 25,
      timeAgo: "5 hours ago",
      difficulty: "Advanced",
    },
    {
      id: 3,
      author: "FlowerPath",
      authorAvatar: "/images/community-user-new3.png", // Updated image path
      craft: "Ikebana",
      title: "Spring arrangement with cherry blossoms",
      description: "Celebrating the beauty of sakura season with this moribana style arrangement.",
      image: "/images/community-post3.jpg", // Updated image path
      likes: 156,
      comments: 12,
      timeAgo: "1 day ago",
      difficulty: "Beginner",
    },
  ]

  // Removed handleFileChange as file upload is no longer active
  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0]
  //   if (file) {
  //     setSelectedFile(file)
  //   }
  // }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section
        className="bg-white py-16 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/community-header-bg-new.png")', // Updated image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-80 z-0"></div> {/* Overlay for text readability */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">Community</h1>
            <p className="text-xl text-stone-600 mb-2">コミュニティ</p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Share your craft journey, learn from others, and celebrate the beauty of traditional Japanese arts
              together.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Share Your Creation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Give your creation a title..." />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your creation, techniques used, or inspiration..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="image">Upload Image</Label>
                  <div className="border-2 border-dashed border-stone-300 rounded-lg p-6 text-center hover:border-stone-400 transition-colors">
                    {/* Input is now disabled and onChange removed */}
                    <input type="file" id="image" accept="image/*" disabled className="hidden" />
                    <label htmlFor="image" className="cursor-not-allowed">
                      {" "}
                      {/* Changed cursor to indicate disabled */}
                      <Upload className="h-8 w-8 text-stone-400 mx-auto mb-2" />
                      <p className="text-sm text-stone-600">This is a showpiece. Uploads are disabled.</p>
                      <p className="text-xs text-stone-500 mt-1">PNG, JPG up to 10MB</p>
                    </label>
                  </div>
                </div>

                <Button className="w-full bg-stone-700 hover:bg-stone-800">Share Creation</Button>
              </CardContent>
            </Card>
          </div>

          {/* Community Feed */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-light text-stone-800">Recent Creations</h2>
              <div className="flex items-center gap-2 text-sm text-stone-600">
                <Users className="h-4 w-4" />
                1,200+ members
              </div>
            </div>

            {communityPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="p-6 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={post.authorAvatar || "/placeholder.svg"}
                        alt={post.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-stone-800">{post.author}</h3>
                          <Badge variant="outline" size="sm">
                            {post.craft}
                          </Badge>
                        </div>
                        <p className="text-sm text-stone-500">{post.timeAgo}</p>
                      </div>
                      <Badge
                        variant={
                          post.difficulty === "Beginner"
                            ? "default"
                            : post.difficulty === "Intermediate"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {post.difficulty}
                      </Badge>
                    </div>

                    <h4 className="text-lg font-medium text-stone-800 mb-2">{post.title}</h4>
                    <p className="text-stone-600 mb-4">{post.description}</p>
                  </div>

                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-stone-600 hover:text-red-500 transition-colors">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-stone-600 hover:text-stone-800 transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                      </div>
                      <button className="flex items-center gap-2 text-stone-600 hover:text-stone-800 transition-colors">
                        <Share2 className="h-4 w-4" />
                        <span className="text-sm">Share</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
