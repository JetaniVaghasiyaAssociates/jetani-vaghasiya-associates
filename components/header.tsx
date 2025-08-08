import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Scale, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
