import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, TrendingUp, DollarSign, Scale, Users, Calendar } from "lucide-react"

export default function CaseResultsPage() {
  const caseResults = [
    {
      id: 1,
      title: "Corporate Merger Settlement",
      category: "Corporate Law",
      result: "$2.5M Settlement",
      description:
        "Successfully negotiated a complex merger agreement for a tech startup, resulting in favorable terms and significant value for shareholders.",
      attorney: "Sarah Johnson",
      year: "2023",
      type: "Settlement",
    },
    {
      id: 2,
      title: "Criminal Defense Victory",
      category: "Criminal Defense",
      result: "All Charges Dismissed",
      description:
        "Achieved complete dismissal of all criminal charges in a high-profile white-collar crime case through strategic defense and evidence analysis.",
      attorney: "Michael Chen",
      year: "2023",
      type: "Dismissal",
    },
    {
      id: 3,
      title: "Personal Injury Verdict",
      category: "Personal Injury",
      result: "$1.8M Jury Verdict",
      description:
        "Secured substantial compensation for client injured in a medical malpractice case, covering medical expenses and future care needs.",
      attorney: "David Park",
      year: "2023",
      type: "Verdict",
    },
    {
      id: 4,
      title: "Family Law Resolution",
      category: "Family Law",
      result: "Favorable Custody Agreement",
      description:
        "Negotiated a comprehensive custody agreement that prioritized the children's best interests while protecting parental rights.",
      attorney: "Emily Rodriguez",
      year: "2023",
      type: "Agreement",
    },
    {
      id: 5,
      title: "Real Estate Litigation",
      category: "Real Estate",
      result: "$950K Settlement",
      description:
        "Resolved complex property dispute involving commercial real estate, securing favorable settlement for property developer client.",
      attorney: "Lisa Thompson",
      year: "2022",
      type: "Settlement",
    },
    {
      id: 6,
      title: "Estate Planning Success",
      category: "Estate Planning",
      result: "Tax Savings of $500K",
      description:
        "Implemented comprehensive estate planning strategy that significantly reduced tax liability for high-net-worth family.",
      attorney: "James Wilson",
      year: "2022",
      type: "Tax Savings",
    },
  ]

  const statistics = [
    {
      icon: Award,
      number: "500+",
      label: "Cases Won",
      description: "Successful case resolutions",
    },
    {
      icon: DollarSign,
      number: "$50M+",
      label: "Recovered",
      description: "Total compensation secured",
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Success Rate",
      description: "Favorable outcomes achieved",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Clients Served",
      description: "Satisfied clients represented",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Proven Track Record of Success"
        subtitle="Case Results"
        description="Our experienced attorneys have achieved outstanding results for clients across all practice areas. Here are some of our recent victories."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="Contact Us"
        showStats={false}
        backgroundImage="/placeholder.svg?height=600&width=500&text=Legal+Success"
      />

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Results Speak for Themselves</h2>
            <p className="text-xl text-blue-100">
              Numbers that demonstrate our commitment to achieving the best outcomes for our clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto mb-4 p-4 bg-blue-500 rounded-full w-fit">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-100 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Results */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Recent Case Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These representative cases demonstrate our ability to achieve favorable outcomes across various practice
              areas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseResults.map((caseResult, index) => (
              <Card
                key={caseResult.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{caseResult.category}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{caseResult.year}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors duration-300">
                    {caseResult.title}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Scale className="h-5 w-5 text-green-600" />
                    <span className="text-lg font-bold text-green-600">{caseResult.result}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {caseResult.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Attorney: {caseResult.attorney}</span>
                    <Badge variant="outline">{caseResult.type}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              variant="outline"
              className="transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              View More Case Results
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-in-up">
            <h3 className="text-lg font-semibold text-gray-900">Important Disclaimer</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The case results shown above are representative of the types of results our attorneys have achieved for
              clients. Every case is unique, and past results do not guarantee future outcomes. The value of any case
              depends on the specific facts and circumstances involved. These results should not be taken as a
              prediction of results in your case.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Achieve Your Best Outcome?</h2>
            <p className="text-xl text-blue-100">
              Let our experienced attorneys fight for the results you deserve. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Schedule Free Consultation
              </Button>
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
