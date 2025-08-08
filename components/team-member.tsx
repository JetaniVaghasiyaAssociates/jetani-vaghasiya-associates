import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface TeamMemberProps {
  name: string
  title: string
  specialty: string
  experience: string
  bio?: string
  education?: string[]
  achievements?: string[]
  image?: string
  delay?: number
}

export function TeamMember({
  name,
  title,
  specialty,
  experience,
  bio,
  education,
  achievements,
  image,
  delay = 0,
}: TeamMemberProps) {
  return (
    <Card
      className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader>
        <div className="relative mx-auto mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform scale-110"></div>
          <Image
            src={image || `/placeholder.svg?height=200&width=200&text=${name.replace(" ", "+")}`}
            alt={name}
            width={200}
            height={200}
            className="rounded-full mx-auto relative z-10 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">{name}</CardTitle>
        <CardDescription className="text-blue-600 font-medium">{title}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Badge variant="secondary" className="mb-2">
            {specialty}
          </Badge>
          <p className="text-sm text-gray-500">{experience}</p>
        </div>

        {bio && <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>}

        {education && (
          <div className="text-left">
            <h4 className="font-semibold text-sm text-gray-900 mb-2">Education</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {education.map((edu, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {achievements && (
          <div className="text-left">
            <h4 className="font-semibold text-sm text-gray-900 mb-2">Achievements</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
