import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MouseMoveEffect from "@/components/mouse-move-effect"
import { organizationSchema } from "./structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "YouPursue - International High School Exchange Programs",
  description:
    "Transform your educational journey with YouPursue's international high school exchange programs. Offering affordable high school exchanges and cultural immersion experiences in over 50 countries. Join our global community of exchange students, experience authentic cultural connections, and develop valuable global competencies.",
  keywords: [
    "student exchange program",
    "high school exchange",
    "study abroad",
    "exchange year",
    "international education",
    "cultural exchange",
    "host family program",
    "university exchange",
    "international student program",
    "educational exchange",
    "cultural immersion",
    "global education",
    "exchange student opportunities",
    "international school exchange",
    "study overseas",
    "affordable exchange programs",
    "exchange student application",
    "international high school",
    "global learning",
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: [{ url: "/favicon.svg" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#10b981",
      },
    ],
  },
  themeColor: "#10b981",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.youpursue.org",
    title: "YouPursue - International Student Exchange Programs | High School & University Exchanges",
    description:
      "Join YouPursue's global community for life-changing international exchange experiences. Affordable programs, authentic cultural immersion, and comprehensive support for high school and university students.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2002.03.25%20at%2021.37.jpg-R0UNjaLhNXE8Q7QNyWJKuoHh9LPUgy.jpeg",
        width: 1200,
        height: 630,
        alt: "YouPursue International Exchange Programs",
      },
    ],
    siteName: "YouPursue International Exchange",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouPursue - International Student Exchange Programs",
    description:
      "Experience authentic cultural exchange and global education with YouPursue's international student programs. Join students from 50+ countries worldwide.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2002.03.25%20at%2021.37.jpg-R0UNjaLhNXE8Q7QNyWJKuoHh9LPUgy.jpeg",
    ],
    creator: "@YouPursue",
  },
  alternates: {
    canonical: "https://www.youpursue.org",
    languages: {
      "en-US": "https://www.youpursue.org",
    },
  },
  other: {
    "google-site-verification": "your-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="apple-mobile-web-app-title" content="YouPursue" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="google-site-verification" content="your-verification-code" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased overflow-x-hidden w-full`}>
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
          <Navbar />
          <MouseMoveEffect />
          <div className="flex-grow w-full overflow-x-hidden">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
