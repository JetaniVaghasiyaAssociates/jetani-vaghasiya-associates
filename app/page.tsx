"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "@/components/HeroSection"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Shield, Users, CheckCircle, Star, ArrowRight, Award, TrendingUp, Clock, Quote } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Scale,
      title: "Corporate Law",
      description: "Comprehensive business legal services including formation, contracts, and M&A.",
      features: ["Business Formation", "Contract Negotiation", "M&A Advisory"],
      color: "from-legal-500 to-legal-600",
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Aggressive defense for criminal charges with proven track record.",
      features: ["DUI Defense", "White Collar Crimes", "Appeals"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Compassionate representation for divorce, custody, and family matters.",
      features: ["Divorce Proceedings", "Child Custody", "Adoption Services"],
      color: "from-green-500 to-green-600",
    },
  ]

  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Senior Partner",
      specialty: "Corporate Law & Litigation",
      experience: "15+ years",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Michael Chen",
      title: "Partner",
      specialty: "Criminal Defense & Appeals",
      experience: "12+ years",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ]

  const testimonials = [
    {
      name: "David Thompson",
      role: "Business Owner",
      content:
        "Exceptional service and expertise. They handled my corporate merger flawlessly and kept me informed every step of the way.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Lisa Martinez",
      role: "Individual Client",
      content: "Professional, compassionate, and results-driven. I couldn't have asked for better representation.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Robert Kim",
      role: "Real Estate Developer",
      content: "Their expertise saved me from a costly mistake. Highly recommend their services.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Professional Legal Services You Can Trust"
        subtitle="Trusted Legal Experts"
        description="With over 25 years of combined experience, our dedicated team of attorneys provides comprehensive legal solutions tailored to your unique needs."
        primaryButtonText="Schedule Consultation"
        secondaryButtonText="Watch Our Story"
        showStats={true}
        showVideo={true}
      />

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-b from-white to-legal-50/30">
        <div className="container-custom">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text font-playfair">Our Legal Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive legal services across multiple practice areas, ensuring expert representation for
              all your legal needs.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-500">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className={`mx-auto mb-6 p-4 rounded-2xl bg-gradient-to-r ${service.color} w-fit`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-2xl group-hover:text-legal-700 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <CardDescription className="text-gray-600 leading-relaxed text-base">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="group-hover:bg-legal-600 group-hover:text-white group-hover:border-legal-600 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/services">
              <Button size="lg" className="group">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text font-playfair">Why Choose Our Firm?</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our commitment to excellence and client satisfaction has made us one of the most trusted legal firms
                  in the region.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Experienced attorneys with proven track records",
                  "Personalized attention to every case",
                  "Transparent communication throughout the process",
                  "Competitive rates and flexible payment options",
                  "24/7 availability for urgent matters",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-legal-50 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="p-2 rounded-full bg-green-100">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/about">
                <Button size="lg">Learn More About Us</Button>
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-legal-600/20 to-gold-600/20 rounded-3xl blur-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, -1, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern law office"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl relative z-10 w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="section-padding bg-gradient-to-b from-legal-50/30 to-white">
        <div className="container-custom">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text font-playfair">Meet Our Legal Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced attorneys are dedicated to providing exceptional legal representation.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group text-center h-full">
                  <CardHeader className="pb-4">
                    <motion.div
                      className="relative mx-auto mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-legal-600/20 to-gold-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="relative z-10 w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-xl"
                      />
                    </motion.div>
                    <CardTitle className="text-2xl group-hover:text-legal-700 transition-colors duration-300">
                      {member.name}
                    </CardTitle>
                    <p className="text-legal-600 font-semibold">{member.title}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-legal-100 text-legal-700 font-medium text-sm">
                      {member.specialty}
                    </div>
                    <p className="text-gray-600">{member.experience}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/team">
              <Button variant="outline" size="lg" className="group bg-transparent">
                Meet Our Full Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-legal-900 via-legal-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white font-playfair">What Our Clients Say</h2>
            <p className="text-xl text-legal-200 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white h-full">
                  <CardContent className="p-8">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-gold-400 mb-4" />
                    <p className="text-legal-100 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-legal-300">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Award, number: "500+", label: "Cases Won", color: "from-legal-500 to-legal-600" },
              { icon: Users, number: "1000+", label: "Happy Clients", color: "from-green-500 to-green-600" },
              { icon: TrendingUp, number: "98%", label: "Success Rate", color: "from-gold-500 to-gold-600" },
              { icon: Clock, number: "25+", label: "Years Experience", color: "from-purple-500 to-purple-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-r ${stat.color} w-fit group-hover:shadow-lg transition-all duration-300`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-legal-700 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-legal-600 via-legal-700 to-legal-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair">Ready to Get Started?</h2>
            <p className="text-xl text-legal-100 leading-relaxed">
              Contact us today for a free consultation and let us help you with your legal needs. Our experienced
              attorneys are ready to fight for your rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-white hover:bg-legal-50 shadow-xl">
                  Schedule Free Consultation
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-legal-700 bg-transparent"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
