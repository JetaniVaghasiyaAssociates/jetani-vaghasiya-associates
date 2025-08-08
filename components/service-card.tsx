import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  href?: string
  delay?: number
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href = "/services",
  delay = 0,
}: ServiceCardProps) {
  return (
    <Card
      className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit group-hover:bg-blue-100 transition-colors duration-300">
          <Icon className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <CardDescription className="text-gray-600 leading-relaxed">{description}</CardDescription>

        {features && (
          <ul className="text-sm text-gray-500 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center justify-center space-x-2">
                <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <Link href={href}>
          <Button
            variant="outline"
            className="mt-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 bg-transparent"
          >
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
