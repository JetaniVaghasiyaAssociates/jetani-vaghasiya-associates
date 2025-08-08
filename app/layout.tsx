'use client'
import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "../styles/globals.css"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const metadata: Metadata = {
  title: "Jetanivaghasiya Associates",
  description:
    "Professional legal services you can trust. Serving clients with integrity and excellence since 1998. Expert attorneys specializing in corporate law, criminal defense, family law, and more.",
  keywords:
    "legal services, law firm, attorney, lawyer, legal consultation, corporate law, criminal defense, family law",
  authors: [{ name: "LegalPro Law Firm" }],
  openGraph: {
    title: "Jetanivaghasiya Associates",
    description: "Professional legal services you can trust. Expert attorneys with 25+ years of experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jetanivaghasiya Associates",
    description: "Professional legal services you can trust. Expert attorneys with 25+ years of experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Case Results", href: "/case-results" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 group">
          <Scale className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            LegalPro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative group ${
                pathname === item.href ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Button className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
            Free Consultation
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white border-t`}
      >
        <div className="px-4 py-4 space-y-4">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block text-lg font-medium transition-all duration-300 hover:text-blue-600 hover:translate-x-2 ${
                pathname === item.href ? "text-blue-600" : "text-gray-700"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 mt-4">
            Free Consultation
          </Button>
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 animate-fade-in-up">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">LegalPro</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional legal services you can trust. Serving clients with integrity and excellence since 1998.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h3 className="font-semibold mb-4 text-lg">Practice Areas</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                "Corporate Law",
                "Criminal Defense",
                "Family Law",
                "Personal Injury",
                "Real Estate Law",
                "Estate Planning",
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/team" },
                { name: "Case Results", href: "/case-results" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <h3 className="font-semibold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>
                  123 Legal Plaza, Suite 500
                  <br />
                  Downtown City, ST 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>info@legalpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <p>
            &copy; {new Date().getFullYear()} LegalPro Law Firm. All rights reserved. |
            <Link href="#" className="hover:text-white transition-colors duration-300 ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className="hover:text-white transition-colors duration-300 ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
