"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, MapPin, Code, Database, Brain, Sparkles, Download, Eye } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FloatingParticles, GlitchText, PulseAnimation } from './enhanced-animations'
import { useScrollDirection } from '@/hooks/useScrollDirection'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const { scrollDirection, scrollY, isScrolling } = useScrollDirection()

  useEffect(() => {
    setMounted(true)
    
    // Rotate through roles
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const roles = [
    "Data & Software Enthusiast",
    "ML & SDE Aspirant", 
    "Problem Solver",
    "Tech Innovator"
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/ASHWIKA1", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ashwikak/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ashwika1137@gmail.com", label: "Email" },
  ]

  // Generate deterministic background elements
  const backgroundElements = mounted ? [...Array(8)].map((_, i) => {
    const seed = i * 137 // Prime number for good distribution
    const width = ((seed * 9) % 400) + 200
    const height = ((seed * 7) % 400) + 200
    const left = ((seed * 13) % 80) + 10
    const top = ((seed * 17) % 80) + 10
    const duration = ((seed * 11) % 15) + 10
    
    return {
      width,
      height,
      left: `${left}%`,
      top: `${top}%`,
      duration,
      animateX: ((seed * 19) % 150) - 75,
      animateY: ((seed * 23) % 150) - 75,
    }
  }) : []

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        {/* Floating Particles */}
        <FloatingParticles />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          {backgroundElements.map((element, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
              style={{
                width: element.width,
                height: element.height,
                left: element.left,
                top: element.top,
              }}
              animate={{
                x: [0, element.animateX],
                y: [0, element.animateY],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        {[...Array(6)].map((_, i) => {
          const seed = i * 47 // Prime number for deterministic distribution
          const left = ((seed * 13) % 80) + 10
          const top = ((seed * 17) % 80) + 10
          const duration = 20 + i * 5
          
          return (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className={`w-8 h-8 ${
              i % 3 === 0 ? 'border-l-2 border-t-2' : 
              i % 3 === 1 ? 'border-r-2 border-b-2' : 
              'border-2'
            } border-blue-400/30 rotate-45`} />
          </motion.div>
          )
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-16"
        >
          {/* Professional Hexagonal Logo with Left-Right Scroll Animation */}
          <motion.div
            className="w-56 h-56 mx-auto mb-8 relative"
            variants={{
              // Initial state: off-screen to the left
              hiddenLeft: {
                x: -300,
                opacity: 0,
                transition: {
                  x: { type: "spring", stiffness: 100, damping: 20 },
                  opacity: { duration: 0.3 }
                }
              },
              // Center position: logo is visible
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  x: { type: "spring", stiffness: 80, damping: 18, delay: 0.2 },
                  opacity: { duration: 0.8, delay: 0.2 }
                }
              },
              // Exit to right when scrolling down
              hiddenRight: {
                x: 300,
                opacity: 0,
                transition: {
                  x: { type: "spring", stiffness: 100, damping: 20 },
                  opacity: { duration: 0.3 }
                }
              }
            }}
            initial="hiddenLeft"
            animate={
              !isScrolling ? "visible" :
              scrollDirection === 'down' && scrollY > 100 ? "hiddenRight" :
              scrollDirection === 'up' && scrollY < 200 ? "visible" :
              "visible"
            }
            style={{
              willChange: isScrolling ? 'transform, opacity' : 'auto',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden' as const
            }}
          >
            {/* Hexagonal Frame */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-44 h-44 relative">
                {/* Hexagon Shape */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                />
                
                {/* Inner Border */}
                <div
                  className="absolute inset-2 border-2 border-white dark:border-gray-900"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                />
              </div>
            </motion.div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-32 h-32">
                {/* Letter A */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  {/* A Structure */}
                  <div className="absolute inset-0">
                    {/* Left Leg */}
                    <div className="absolute left-11 top-0 bottom-6 w-2.5 bg-white dark:bg-gray-900 rounded-t-full" />
                    {/* Right Leg */}
                    <div className="absolute right-11 top-0 bottom-6 w-2.5 bg-white dark:bg-gray-900 rounded-t-full" />
                    {/* Cross Bar */}
                    <div className="absolute left-11 right-11 top-16 h-2.5 bg-white dark:bg-gray-900 rounded-full" />
                  </div>
                  
                  {/* Tech Icons - Static */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-5 h-5">
                    <div className="w-full h-full rounded bg-blue-500 flex items-center justify-center">
                      <Code className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-5 h-5">
                    <div className="w-full h-full rounded bg-purple-500 flex items-center justify-center">
                      <Database className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-5">
                    <div className="w-full h-full rounded bg-pink-500 flex items-center justify-center">
                      <Brain className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-5 h-5">
                    <div className="w-full h-full rounded bg-yellow-500 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  {/* Center Core */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-900" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Name with Glitch Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-3"
          >
            <GlitchText text="Ashwika Kuppusamy" />
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="h-8 mb-4"
          >
            <motion.p
              key={roles[currentRoleIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            >
              {roles[currentRoleIndex]}
            </motion.p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            <motion.span
              animate={{
                background: [
                  "linear-gradient(45deg, #3b82f6, #9333ea)",
                  "linear-gradient(90deg, #9333ea, #3b82f6)",
                  "linear-gradient(135deg, #3b82f6, #9333ea)"
                ],
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "Turning Data into Insights & Code into Solutions"
            </motion.span>
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin size={16} />
            </motion.div>
            <span>India</span>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.02,
                y: -1,
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all"
            >
              View Projects
              <ArrowRight size={16} />
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.02,
                y: -1,
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border-2 border-secondary-500 text-secondary-600 dark:text-secondary-400 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-secondary-50 dark:hover:bg-secondary-900/20 transition-all"
            >
              Contact Me
              <ArrowRight size={16} />
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              download="Ashwika_Kuppusamy_Resume.pdf"
              whileHover={{ 
                scale: 1.02,
                y: -1,
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all"
            >
              Download Resume
              <Download size={16} />
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <link.icon size={20} className="text-gray-600 dark:text-gray-400" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <motion.div
            whileHover={{ 
              scale: 1.01,
              y: -2,
            }}
            className="glass dark:glass-dark rounded-2xl p-6 text-left"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Pre-final year Computer Science student passionate about data analytics, machine learning, and software development. 
              Skilled in building ML models, dashboards, and scalable applications. Interested in solving real-world problems 
              using technology, especially in agriculture and logistics domains.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
