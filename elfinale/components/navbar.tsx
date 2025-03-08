"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 px-2 py-1 rounded hover:bg-gray-800 group">
          <span className="font-bold text-foreground group-hover:text-white">YouPursue</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden ml-auto p-2 hover:bg-gray-800 rounded transition-colors duration-300 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
          ) : (
            <Menu className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="/programs"
            className="text-muted-foreground hover:text-white hover:bg-gray-800 transition-colors px-2 py-1 rounded"
          >
            Programs
          </Link>
          <Link
            href="/how-it-works"
            className="text-muted-foreground hover:text-white hover:bg-gray-800 transition-colors px-2 py-1 rounded"
          >
            How It Works
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-white hover:bg-gray-800 transition-colors px-2 py-1 rounded"
          >
            About Us
          </Link>
          <Link
            href="/safety"
            className="text-muted-foreground hover:text-white hover:bg-gray-800 transition-colors px-2 py-1 rounded"
          >
            Safety
          </Link>
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:bg-black hover:text-white transition-colors header-footer-button"
          >
            <Link href="/login" className="w-full h-full flex items-center justify-center">
              Login
            </Link>
          </Button>
          <Button
            size="sm"
            className="bg-emerald-600 hover:bg-black hover:text-white transition-colors header-footer-button"
          >
            <Link href="/apply" className="w-full h-full flex items-center justify-center">
              Apply Now
            </Link>
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-[3.5rem] left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4">
              <Link
                href="/programs"
                className="px-4 py-2 hover:bg-gray-800 rounded text-muted-foreground hover:text-white"
              >
                Programs
              </Link>
              <Link
                href="/how-it-works"
                className="px-4 py-2 hover:bg-gray-800 rounded text-muted-foreground hover:text-white"
              >
                How It Works
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 hover:bg-gray-800 rounded text-muted-foreground hover:text-white"
              >
                About Us
              </Link>
              <Link
                href="/safety"
                className="px-4 py-2 hover:bg-gray-800 rounded text-muted-foreground hover:text-white"
              >
                Safety
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="ghost" className="w-full justify-start header-footer-button">
                  <Link href="/login">Login</Link>
                </Button>
                <Button className="w-full justify-start bg-emerald-600 hover:bg-black hover:text-white header-footer-button">
                  <Link href="/apply">Apply Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

