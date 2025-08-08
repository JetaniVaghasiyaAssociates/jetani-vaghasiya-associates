import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Shield, Users, Award, Home, FileText, Briefcase, Gavel, Building } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Scale,
      title: "Corporate Law",
      description:
        "Comprehensive business legal services including formation, contracts, mergers & acquisitions, and corporate governance.",
      features: ["Business Formation", "Contract Negotiation", "M&A Advisory", "Corporate Governance", "Compliance"],
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description:
        "Aggressive defense for criminal charges, DUI, white-collar crimes, and appeals with proven track record.",
      features: ["DUI Defense", "White Collar Crimes", "Appeals", "Drug Charges", "Assault Cases"],
    },
    {
      icon: Users,
      title: "Family Law",
      description:
        "Compassionate representation for divorce, child custody, adoption, prenuptial agreements, and family mediation.",
      features: ["Divorce Proceedings", "Child Custody", "Adoption Services", "Prenuptial Agreements", "Mediation"],
    },
    {
      icon: Award,
      title: "Personal Injury",
      description:
        "Fighting for maximum compensation in auto accidents, medical malpractice, workplace injuries, and wrongful death cases.",
      features: ["Auto Accidents", "Medical Malpractice", "Workplace Injuries", "Wrongful Death", "Slip & Fall"],
    },
    {
      icon: Home,
      title: "Real Estate Law",
      description:
        "Complete real estate legal services including property transactions, title disputes, zoning issues, and litigation.",
      features: [
        "Property Transactions",
        "Title Disputes",
        "Zoning Issues",
        "Real Estate Litigation",
        "Commercial Leases",
      ],
    },
    {
      icon: FileText,
      title: "Estate Planning",
      description:
        "Comprehensive estate planning services including wills, trusts, probate administration, and estate tax planning.",
      features: [
        "Wills & Trusts",
        "Probate Administration",
        "Estate Tax Planning",
        "Power of Attorney",
        "Healthcare Directives",
      ],
    },
    {
      icon: Briefcase,
      title: "Employment Law",
      description:
        "Protecting employee rights and helping employers navigate complex employment regulations and disputes.",
      features: [
        "Wrongful Termination",
        "Discrimination Claims",
        "Wage & Hour Disputes",
        "Employment Contracts",
        "Harassment Cases",
      ],
    },
    {
      icon: Building,
      title: "Immigration Law",
      description:
        "Comprehensive immigration services including visas, green cards, citizenship applications, and deportation defense.",
      features: ["Visa Applications", "Green Card Process", "Citizenship", "Deportation Defense", "Family Immigration"],
    },
    {
      icon: Gavel,
      title: "Civil Litigation",
      description:
        "Experienced trial attorneys handling complex civil disputes, contract disputes, and business litigation.",
      features: ["Contract Disputes", "Business Litigation", "Property Disputes", "Tort Claims", "Appeals"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Comprehensive Legal Services"
        subtitle="Our Practice Areas"
        description="We provide expert legal representation across multiple practice areas, ensuring comprehensive solutions for all your legal needs."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="Contact Us"
        showStats={false}
        backgroundImage="/placeholder.svg?height=600&width=500&text=Legal+Services"
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Legal Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced attorneys specialize in various areas of law to provide you with the best possible
              representation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Legal Process</h2>
            <p className="text-xl text-gray-600">How we work with you to achieve the best outcomes</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description:
                  "We listen to your concerns and assess your legal situation during a comprehensive consultation.",
              },
              {
                step: "02",
                title: "Case Analysis",
                description:
                  "Our team conducts thorough research and analysis to develop the strongest possible strategy.",
              },
              {
                step: "03",
                title: "Legal Action",
                description:
                  "We execute our strategy with precision, keeping you informed throughout the entire process.",
              },
              {
                step: "04",
                title: "Resolution",
                description: "We work tirelessly to achieve the best possible outcome for your case and your future.",
              },
            ].map((process, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{process.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Need Legal Assistance?</h2>
            <p className="text-xl text-blue-100">
              Don't wait - contact us today for a free consultation and let our experienced attorneys help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
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
