import { HeroSection } from "@/components/hero-section"
import { TeamMember } from "@/components/team-member"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Senior Partner & Founder",
      specialty: "Corporate Law & Litigation",
      experience: "15+ years",
      bio: "Sarah founded LegalPro in 1998 with a vision to provide accessible, high-quality legal services. She specializes in complex corporate transactions and high-stakes litigation.",
      education: ["Harvard Law School, J.D.", "Yale University, B.A. Economics"],
      achievements: ["Super Lawyers Rising Star", "Best Lawyers in America", "Law Firm Founder of the Year"],
    },
    {
      name: "Michael Chen",
      title: "Partner",
      specialty: "Criminal Defense & Appeals",
      experience: "12+ years",
      bio: "Michael has successfully defended over 200 criminal cases with a 95% success rate. He is known for his aggressive defense strategies and appellate expertise.",
      education: ["Stanford Law School, J.D.", "UC Berkeley, B.A. Political Science"],
      achievements: ["Criminal Defense Attorney of the Year", "Top 40 Under 40", "State Bar Excellence Award"],
    },
    {
      name: "Emily Rodriguez",
      title: "Associate Attorney",
      specialty: "Family Law & Mediation",
      experience: "8+ years",
      bio: "Emily brings compassion and expertise to family law matters, helping clients navigate difficult personal situations with dignity and respect.",
      education: ["UCLA Law School, J.D.", "USC, B.A. Psychology"],
      achievements: ["Family Law Attorney of the Year", "Mediation Excellence Award"],
    },
    {
      name: "David Park",
      title: "Senior Associate",
      specialty: "Personal Injury & Medical Malpractice",
      experience: "10+ years",
      bio: "David has recovered over $50 million in settlements and verdicts for his personal injury clients, specializing in complex medical malpractice cases.",
      education: ["Georgetown Law, J.D.", "Johns Hopkins, B.S. Biology"],
      achievements: ["Million Dollar Advocates Forum", "Trial Lawyer of the Year"],
    },
    {
      name: "Lisa Thompson",
      title: "Associate Attorney",
      specialty: "Real Estate & Business Law",
      experience: "6+ years",
      bio: "Lisa helps clients navigate complex real estate transactions and business formations, providing practical solutions for commercial and residential matters.",
      education: ["NYU Law School, J.D.", "Wharton School, B.S. Business"],
      achievements: ["Rising Star Award", "Real Estate Law Excellence"],
    },
    {
      name: "James Wilson",
      title: "Of Counsel",
      specialty: "Estate Planning & Probate",
      experience: "20+ years",
      bio: "James brings decades of experience in estate planning and probate law, helping families protect their assets and plan for the future.",
      education: ["Columbia Law School, J.D.", "Princeton University, B.A. History"],
      achievements: ["Estate Planning Attorney of the Year", "Lifetime Achievement Award"],
    },
  ]

  const supportStaff = [
    {
      name: "Maria Garcia",
      title: "Legal Assistant",
      department: "Corporate Law",
      experience: "5+ years",
    },
    {
      name: "Robert Kim",
      title: "Paralegal",
      department: "Criminal Defense",
      experience: "7+ years",
    },
    {
      name: "Jennifer Lee",
      title: "Case Manager",
      department: "Personal Injury",
      experience: "4+ years",
    },
    {
      name: "Thomas Brown",
      title: "Legal Secretary",
      department: "Family Law",
      experience: "6+ years",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Meet Our Legal Team"
        subtitle="Our Attorneys"
        description="Our experienced team of attorneys and legal professionals are dedicated to providing exceptional representation and achieving the best possible outcomes for our clients."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="Contact Us"
        showStats={false}
        backgroundImage="/placeholder.svg?height=600&width=500&text=Legal+Team"
      />

      {/* Attorneys Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Attorneys</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced legal professionals who will fight for your rights and interests.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                specialty={member.specialty}
                experience={member.experience}
                bio={member.bio}
                education={member.education}
                achievements={member.achievements}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Support Team</h2>
            <p className="text-xl text-gray-600">
              Behind every great attorney is an exceptional support team dedicated to your success.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportStaff.map((staff, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {staff.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{staff.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{staff.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-2">
                    {staff.department}
                  </Badge>
                  <p className="text-sm text-gray-500">{staff.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Team Section */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Work With Our Team?</h2>
            <p className="text-xl text-blue-100">
              Contact us today to schedule a consultation with one of our experienced attorneys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                >
                  Schedule Consultation
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
