import "./globals.css"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import type React from "react"
import type { Metadata, Viewport } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MouseMoveEffect from "@/components/mouse-move-effect"
import { organizationSchema } from "./structured-data"

export const metadata: Metadata = {
  title: "YouPursue - International Student Exchange Programs | High School & University Exchanges Worldwide",
  description:
    "Transform your educational journey with YouPursue's international exchange programs. Offering affordable high school exchanges, university study abroad opportunities, and cultural immersion experiences in over 50 countries. Join our global community of exchange students, experience authentic cultural connections, and develop valuable global competencies.",
  metadataBase: new URL('https://www.youpursue.org'),
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
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: [{ url: "/favicon.ico" }],
    other: [
      {
        rel: "mask-icon",
        url: "/icon.svg",
        color: "#10b981",
      },
    ],
  },
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

export const viewport: Viewport = {
  themeColor: "#10b981",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.className} ${GeistMono.className} overflow-x-hidden`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" sizes="any"/>
        <link rel="apple-touch-icon" href="/icon.svg"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="theme-color" content="#10b981" />
        <meta name="google-site-verification" content="your-verification-code" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className="font-sans bg-white text-gray-900 antialiased overflow-x-hidden w-full">
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