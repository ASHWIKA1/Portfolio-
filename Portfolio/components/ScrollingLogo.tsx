"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollDirection } from '@/hooks/useScrollDirection'

interface ScrollingLogoProps {
  sectionId: string
  delay?: number
}

export default function ScrollingLogo({ sectionId, delay = 0 }: ScrollingLogoProps) {
  const { scrollDirection, scrollY, isScrolling } = useScrollDirection()

  // Animation variants for logo movement across the page
  const variants = {
    // Hidden to the right (initial state)
    hiddenRight: {
      x: "100vw",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 100, damping: 20 },
        opacity: { duration: 0.3 }
      }
    },
    // Visible at upper side of section
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 80, damping: 18, delay },
        opacity: { duration: 0.5, delay }
      }
    },
    // Hidden to the left (when scrolling down)
    hiddenLeft: {
      x: "-100vw",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 100, damping: 20 },
        opacity: { duration: 0.3 }
      }
    }
  }

  // Get section position to determine when to show logo
  const getSectionPosition = () => {
    if (typeof window === 'undefined') return { top: 0, bottom: 0 }
    
    const element = document.getElementById(sectionId)
    if (!element) return { top: 0, bottom: 0 }
    
    const rect = element.getBoundingClientRect()
    return {
      top: rect.top + window.scrollY,
      bottom: rect.bottom + window.scrollY
    }
  }

  const sectionPos = getSectionPosition()

  // Determine animation state based on scroll position and direction
  const getAnimationState = () => {
    if (!isScrolling) {
      // Not scrolling - show logo if section is in view
      return (scrollY >= sectionPos.top - 200 && scrollY <= sectionPos.bottom) ? "visible" : "hiddenRight"
    }

    if (scrollDirection === 'down') {
      // Scrolling down: right to left
      if (scrollY >= sectionPos.top - 200 && scrollY <= sectionPos.top + 100) {
        return "visible"
      } else if (scrollY > sectionPos.top + 100) {
        return "hiddenLeft"
      } else {
        return "hiddenRight"
      }
    } else {
      // Scrolling up: left to right
      if (scrollY >= sectionPos.top - 200 && scrollY <= sectionPos.top + 100) {
        return "visible"
      } else if (scrollY < sectionPos.top - 200) {
        return "hiddenRight"
      } else {
        return "hiddenLeft"
      }
    }
  }

  return (
    <motion.div
      className="fixed top-24 z-40 pointer-events-none"
      variants={variants}
      animate={getAnimationState()}
      initial="hiddenRight"
      style={{
        willChange: isScrolling ? 'transform, opacity' : 'auto',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden' as const
      }}
    >
      {/* Your existing animated logo - extra large size */}
      <div className="w-32 h-32 relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-full h-full flex items-center justify-center"
        >
          {/* Extra large hexagonal logo */}
          <div className="w-28 h-28 relative">
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }}
            />
            <div
              className="absolute inset-3 border-2 border-white dark:border-gray-900"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }}
            />
            {/* Center core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-900" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
