"use client"

import { motion } from 'framer-motion'
import { Code, Database, Brain, Sparkles, Briefcase, Award, Target, Zap } from 'lucide-react'

// 3D Cube Loader Animation Component
export const CubeLoader = () => {
  return (
    <div className="cube-loader">
      <div className="cube">
        <div className="face front">
          <Code className="w-8 h-8 text-white" />
        </div>
        <div className="face back">
          <Database className="w-8 h-8 text-white" />
        </div>
        <div className="face right">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <div className="face left">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <div className="face top">
          <Briefcase className="w-8 h-8 text-white" />
        </div>
        <div className="face bottom">
          <Award className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  )
}

// Loading Text with Wave Animation
export const LoadingText = ({ text }: { text: string }) => {
  return (
    <div className="loading-text">
      {text.split('').map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {char}
        </span>
      ))}
    </div>
  )
}

// Enhanced Floating Particles Background
export const FloatingParticles = () => {
  const particles = [...Array(20)].map((_, i) => {
    const seed = i * 37
    const left = ((seed * 13) % 90) + 5
    const top = ((seed * 17) % 90) + 5
    const duration = 15 + (seed % 10)
    const delay = (seed % 5)
    
    return {
      id: i,
      left: `${left}%`,
      top: `${top}%`,
      duration,
      delay,
      size: 2 + (seed % 4)
    }
  })

  return (
    <div className="particles">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            x: [0, 100, -100, 50, 0],
            y: [0, -100, -200, -150, 0],
            opacity: [0.3, 0.6, 0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

// Animated Progress Bar
export const AnimatedProgressBar = ({ progress, label }: { progress: number; label: string }) => {
  return (
    <div className="progress-bar">
      <motion.div
        className="progress"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  )
}

// Enhanced Animated Card
export const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
    >
      {children}
    </motion.div>
  )
}

// Glitch Text Effect
export const GlitchText = ({ text }: { text: string }) => {
  return (
    <motion.div
      className="glitch-text"
      whileHover={{
        textShadow: [
          "2px 2px 0px #ff00ff, -2px -2px 0px #00ffff",
          "-2px 2px 0px #ff00ff, 2px -2px 0px #00ffff",
          "2px -2px 0px #ff00ff, -2px 2px 0px #00ffff"
        ],
      }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.div>
  )
}

// Magnetic Button Effect
export const MagneticButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <motion.button
      className="magnetic-button"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

// Pulse Animation
export const PulseAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Animated Skill Bar
export const AnimatedSkillBar = ({ skill, level }: { skill: string; level: number }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${level}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="skill-bar"
    >
      <div className="skill-content">
        <span className="skill-name">{skill}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <motion.div
        className="skill-progress"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5, delay: 0.4 }}
      />
    </motion.div>
  )
}

// Staggered List Animation
export const StaggeredList = ({ items }: { items: React.ReactNode[] }) => {
  return (
    <div className="staggered-list">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            type: "spring"
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  )
}

// Floating Action Button
export const FloatingActionButton = ({ icon, onClick }: { icon: React.ReactNode; onClick?: () => void }) => {
  return (
    <motion.button
      className="fab"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ 
        scale: 1.1,
        rotate: 15,
        boxShadow: "0 15px 40px rgba(99, 102, 241, 0.4)"
      }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {icon}
    </motion.button>
  )
}

// Text Reveal Animation
export const TextReveal = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      className="text-reveal"
    >
      {text}
    </motion.div>
  )
}

// Parallax Container
export const ParallaxContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="parallax-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

// Morphing Shape
export const MorphingShape = () => {
  return (
    <motion.div
      className="morphing-shape"
      animate={{
        borderRadius: [
          "20% 50% 30% 70%",
          "50% 20% 70% 30%",
          "30% 70% 20% 50%",
          "70% 30% 50% 20%"
        ],
        rotate: [0, 90, 180, 270, 360],
        scale: [1, 1.2, 1, 1.1, 1]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

// Wave Divider
export const WaveDivider = () => {
  return (
    <div className="wave-divider">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <motion.path
          d="M0,60 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z"
          fill="currentColor"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  )
}

// Enhanced Navigation Link with Hover Effect
export const AnimatedNavLink = ({ 
  children, 
  href, 
  isActive 
}: { 
  children: React.ReactNode
  href: string
  isActive?: boolean 
}) => {
  return (
    <motion.a
      href={href}
      className={`nav-link ${isActive ? 'active' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.div
        className="nav-link-underline"
        initial={{ width: isActive ? '100%' : '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  )
}

// Theme Toggle with Enhanced Animation
export const EnhancedThemeToggle = ({ isDark, toggle }: { isDark: boolean; toggle: () => void }) => {
  return (
    <motion.button
      className="theme-toggle"
      onClick={toggle}
      whileHover={{ 
        scale: 1.1,
        rotate: 180,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ 
          rotate: isDark ? 180 : 0,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 0.5 },
          scale: { duration: 2, repeat: Infinity }
        }}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  )
}

// Hero Section with Enhanced Animations
export const AnimatedHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.section>
  )
}

  
  
  
