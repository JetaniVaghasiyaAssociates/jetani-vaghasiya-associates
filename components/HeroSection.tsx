"use client"

import { motion } from "framer-motion"
import { ChevronRight, Award, Users, TrendingUp, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryButtonText?: string
  secondaryButtonText?: string
  showStats?: boolean
  backgroundImage?: string
  showVideo?: boolean
}

const HeroSection = ({
  title,
  subtitle,
  description,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  showStats = true,
  backgroundImage,
  showVideo = false,
}: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const stats = [
    { icon: Award, number: "500+", label: "Cases Won" },
    { icon: Users, number: "25+", label: "Years Experience" },
    { icon: TrendingUp, number: "98%", label: "Success Rate" },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-legal-50 via-white to-legal-100">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-legal-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-gold-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-20 left-1/2 w-72 h-72 bg-legal-300/20 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230ea5e9' fillOpacity='0.1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h-2zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      <div className="relative z-10 container-custom section-padding">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-legal-100 to-gold-100 border border-legal-200"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-legal-700 font-semibold text-sm">{subtitle}</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-playfair">
                <span className="gradient-text">{title}</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">{description}</p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button size="lg" className="group">
                {primaryButtonText}
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button variant="outline" size="lg" className="group bg-transparent">
                {showVideo && <Play className="mr-2 h-5 w-5" />}
                {secondaryButtonText}
              </Button>
            </motion.div>

            {showStats && (
              <motion.div className="flex flex-wrap gap-8 pt-8" variants={itemVariants}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="p-3 rounded-xl bg-legal-100 group-hover:bg-legal-200 transition-colors duration-300">
                      <stat.icon className="h-6 w-6 text-legal-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 group-hover:text-legal-700 transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative Elements */}
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

              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={
                    backgroundImage ||
                    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="Professional legal team"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-legal-900/20 to-transparent" />

                {/* Floating Card */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-legal-700 font-semibold">Trusted by 1000+ Clients</p>
                      <p className="text-gray-600 text-sm">Excellence in Legal Services</p>
                    </div>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-r from-legal-400 to-legal-600 border-2 border-white flex items-center justify-center text-white font-semibold text-sm"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
