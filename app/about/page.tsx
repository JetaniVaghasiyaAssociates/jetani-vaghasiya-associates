"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Users, Award, TrendingUp, Target, Heart, Shield, Clock, Globe, BookOpen } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Scale,
      title: "Justice & Integrity",
      description: "We believe in upholding the highest standards of legal ethics and fighting for what's right.",
      color: "from-legal-500 to-legal-600",
    },
    {
      icon: Heart,
      title: "Client-Centered Approach",
      description: "Every client receives personalized attention and compassionate representation.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Shield,
      title: "Proven Excellence",
      description: "Our track record speaks for itself with hundreds of successful cases.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on achieving the best possible outcomes for our clients.",
      color: "from-gold-500 to-gold-600",
    },
  ]

  const timeline = [
    {
      year: "1998",
      title: "Firm Founded",
      description: "LegalPro was established with a vision to provide exceptional legal services.",
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Opened our second office and expanded our team of attorneys.",
    },
    {
      year: "2012",
      title: "Recognition",
      description: "Received 'Law Firm of the Year' award from the State Bar Association.",
    },
    {
      year: "2018",
      title: "Digital Innovation",
      description: "Launched our digital client portal and virtual consultation services.",
    },
    {
      year: "2023",
      title: "25 Years Strong",
      description: "Celebrating 25 years of serving our community with over 500 cases won.",
    },
  ]

  const stats = [
    { icon: Award, number: "500+", label: "Cases Won", color: "from-legal-500 to-legal-600" },
    { icon: Users, number: "1000+", label: "Happy Clients", color: "from-green-500 to-green-600" },
    { icon: TrendingUp, number: "98%", label: "Success Rate", color: "from-gold-500 to-gold-600" },
    { icon: Clock, number: "25+", label: "Years Experience", color: "from-purple-500 to-purple-600" },
    { icon: Globe, number: "3", label: "Office Locations", color: "from-blue-500 to-blue-600" },
    { icon: BookOpen, number: "50+", label: "Practice Areas", color: "from-indigo-500 to-indigo-600" },
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
      <section className="relative section-padding bg-gradient-to-br from-legal-50 via-white to-legal-100 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-legal-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
          <div
            className="absolute top-40 right-10 w-72 h-72 bg-gold-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <motion.div
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-legal-100 to-gold-100 border border-legal-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-legal-700 font-semibold text-sm">About LegalPro</span>
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-playfair">
                  <span className="gradient-text">25 Years of Legal Excellence</span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Since 1998, LegalPro has been at the forefront of legal innovation, providing exceptional
                  representation and achieving outstanding results for our clients across multiple practice areas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Schedule Consultation</Button>
                <Button variant="outline" size="lg" className="bg-transparent">
                  Our Practice Areas
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-legal-600/20 to-gold-600/20 rounded-3xl blur-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Legal team meeting"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl relative z-10 w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
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
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-legal-700 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-gradient-to-b from-legal-50/30 to-white">
        <div className="container-custom">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Law firm history"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              className="space-y-8 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold gradient-text font-playfair">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 1998 by a group of passionate attorneys, LegalPro began with a simple mission: to provide
                    exceptional legal representation while maintaining the highest standards of integrity and
                    professionalism.
                  </p>
                  <p>
                    Over the past 25 years, we have grown from a small practice to one of the region's most respected
                    law firms, handling complex cases across multiple practice areas and achieving remarkable results
                    for our clients.
                  </p>
                  <p>
                    Our success is built on a foundation of trust, expertise, and an unwavering commitment to our
                    clients' best interests. We believe that every client deserves personalized attention and aggressive
                    representation.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-legal-400 to-legal-600 border-2 border-white flex items-center justify-center text-white font-semibold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">15+ Expert Attorneys</p>
                  <p className="text-sm text-gray-600">Ready to serve you</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text font-playfair">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do and shape how we serve our clients.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full group">
                  <CardHeader className="pb-4">
                    <motion.div
                      className={`mx-auto mb-6 p-4 rounded-2xl bg-gradient-to-r ${value.color} w-fit`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-legal-700 transition-colors duration-300">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-b from-legal-50/30 to-white">
        <div className="container-custom">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text font-playfair">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Key milestones that have shaped our firm over the past 25 years.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-legal-200 to-legal-400 rounded-full" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <Card className="glass-card">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-legal-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <motion.div
                      className="w-6 h-6 bg-gradient-to-r from-legal-500 to-legal-600 rounded-full border-4 border-white shadow-lg"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                  </div>

                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-legal-600 via-legal-700 to-legal-800 text-white relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold font-playfair">Ready to Work with Us?</h2>
            <p className="text-xl text-legal-100 leading-relaxed">
              Experience the difference that 25 years of legal excellence can make. Contact us today for a free
              consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-legal-700 hover:bg-legal-50 shadow-xl">
                Schedule Free Consultation
              </Button>
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
