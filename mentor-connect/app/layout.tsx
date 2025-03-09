import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mentor Connect - Find Your Perfect Mentor",
  description: "Connect with experienced professionals who can guide you through your career journey.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b">
          <div className="container mx-auto px-4 flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-xl flex items-center">
              <span className="text-purple-600">Mentor</span>Connect
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/find-mentor" className="text-sm font-medium">
                Find a Mentor
              </Link>
              <Link href="/become-mentor" className="text-sm font-medium">
                Become a Mentor
              </Link>
              <Link href="#" className="text-sm font-medium">
                How It Works
              </Link>
              <Link href="#" className="text-sm font-medium">
                Resources
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}



import './globals.css'