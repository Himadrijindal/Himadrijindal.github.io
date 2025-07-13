"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">Contact Us</h1>
            <p className="text-xl text-stone-600 mb-2">お問い合わせ</p>
            <p className="text-lg text-stone-600 leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={6} />
              </div>

              <Button className="w-full bg-stone-700 hover:bg-stone-800">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Newsletter & Contact Info */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle>Stay Connected</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-stone-600">
                  Subscribe to our newsletter for weekly craft tutorials, cultural insights, and stories from master
                  artisans.
                </p>
                <p className="text-sm text-stone-500 italic">
                  週刊クラフトチュートリアル、文化的洞察、職人の物語をお届けします
                </p>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="newsletter-email">Email Address</Label>
                    <Input id="newsletter-email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter-consent"
                      checked={isSubscribed}
                      onCheckedChange={(checked) => setIsSubscribed(checked as boolean)}
                    />
                    <Label htmlFor="newsletter-consent" className="text-sm">
                      I agree to receive newsletters and updates about traditional Japanese crafts
                    </Label>
                  </div>

                  <Button className="w-full" disabled={!isSubscribed}>
                    Subscribe to Newsletter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">Email</h3>
                    <p className="text-stone-600">hello@mononote.com</p>
                    <p className="text-sm text-stone-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">Phone</h3>
                    <p className="text-stone-600">+81 3-1234-5678</p>
                    <p className="text-sm text-stone-500">Mon-Fri, 9AM-6PM JST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">Address</h3>
                    <p className="text-stone-600">
                      123 Craft Street
                      <br />
                      Shibuya, Tokyo 150-0001
                      <br />
                      Japan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-stone-800 mb-2">Are the tutorials suitable for beginners?</h4>
                  <p className="text-sm text-stone-600">
                    Yes! We have tutorials for all skill levels, clearly marked with difficulty ratings.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-800 mb-2">Do you ship materials internationally?</h4>
                  <p className="text-sm text-stone-600">
                    We provide guidance on where to source materials locally, as shipping traditional materials can be
                    complex.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-stone-800 mb-2">Can I contribute my own tutorials?</h4>
                  <p className="text-sm text-stone-600">
                    We welcome contributions from experienced practitioners. Contact us to learn more.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
