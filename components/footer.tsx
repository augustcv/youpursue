import Link from "next/link"
import { Mail, Phone, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="space-y-4">
            <h2 className="font-bold text-black">YouPursue</h2>
            <p className="text-sm text-gray-600">
              Connecting students worldwide for transformative exchange experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-black">Programs</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/programs#high-school" className="text-gray-600 hover:text-black transition-colors">
                    High School
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-black">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/safety" className="text-gray-600 hover:text-black transition-colors">
                    Safety
                  </Link>
                </li>
                <li>
                  <Link href="/impressum" className="text-gray-600 hover:text-black transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-black transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-black">Contact and Feedback</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>youpursuecare@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>+49 170 7451220</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <MessageCircle className="h-4 w-4" />
                  <a
                    href="https://wa.me/491707451220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-600"
                  >
                    Message us on WhatsApp!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} YouPursue International Exchange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
