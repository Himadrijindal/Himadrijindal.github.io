import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-medium text-white mb-4 font-japanese">
              物の手 <span className="text-base font-sans">Mono no Te</span>
            </h3>
            <p className="text-stone-400 mb-4 max-w-md">
              Preserving and sharing the timeless beauty of traditional Japanese crafts for future generations to
              discover and cherish.
            </p>
            <p className="text-xs text-stone-500 italic font-japanese">
              伝統的な日本の工芸品の永遠の美しさを保存し、共有する
            </p>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/crafts" className="hover:text-japanese-coral transition-colors">
                  All Crafts
                </Link>
              </li>
              <li>
                <Link href="/crafts/origami" className="hover:text-japanese-coral transition-colors">
                  Origami
                </Link>
              </li>
              <li>
                <Link href="/crafts/kintsugi" className="hover:text-japanese-coral transition-colors">
                  Kintsugi
                </Link>
              </li>
              <li>
                <Link href="/crafts/ikebana" className="hover:text-japanese-coral transition-colors">
                  Ikebana
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-japanese-coral transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-japanese-coral transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-japanese-coral transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-stone-500">
            © 2025 Mono no Te. Made with <Heart className="inline h-4 w-4 text-japanese-coral" /> for craft
            preservation.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link href="/privacy" className="hover:text-japanese-coral transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-japanese-coral transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
