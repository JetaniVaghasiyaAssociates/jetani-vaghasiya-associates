import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Award, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryButtonText?: string
  secondaryButtonText?: string
  showStats?: boolean
  backgroundImage?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  showStats = true,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 animate-bounce-in">{subtitle}</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl animate-slide-in-left">
                {title}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl animate-slide-in-left animation-delay-200">{description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left animation-delay-400">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 group"
              >
                {primaryButtonText}
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                {secondaryButtonText}
              </Button>
            </div>

            {showStats && (
              <div className="flex items-center space-x-8 pt-4 animate-fade-in-up animation-delay-600">
                {[
                  { icon: Award, number: "500+", label: "Cases Won" },
                  { icon: Users, number: "25+", label: "Years Experience" },
                  { icon: TrendingUp, number: "98%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="h-6 w-6 text-blue-600 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform rotate-6 scale-105 opacity-20 animate-pulse"></div>
            <Image
              src={backgroundImage || "/placeholder.svg?height=600&width=500&text=Professional+Legal+Team"}
              alt="Professional legal team"
              width={500}
              height={600}
              className="rounded-lg shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
