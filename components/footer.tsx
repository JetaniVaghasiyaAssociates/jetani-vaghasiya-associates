import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

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
