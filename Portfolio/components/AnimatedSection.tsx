"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useInView } from '@/hooks/useInView'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
  duration?: number
}

export default function AnimatedSection({ 
  children, 
  className = "", 
  id,
  delay = 0,
  duration = 0.8 
}: AnimatedSectionProps) {
  const { scrollDirection, isScrolling } = useScrollDirection()
  const { isInView, hasBeenInView, entryDirection, ref } = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  // Animation variants based on scroll direction
  const variants = {
    // Entering from left when scrolling down
    enterFromLeft: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        x: { type: "spring", stiffness: 120, damping: 18, velocity: 0 },
        opacity: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
        y: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }
      }
    },
    // Hidden to the left (initial state or when scrolling up)
    hiddenLeft: {
      x: -150,
      opacity: 0,
      y: 30,
      transition: {
        x: { type: "spring", stiffness: 150, damping: 20, velocity: 0 },
        opacity: { duration: 0.3, ease: [0.4, 0, 1, 1] },
        y: { duration: 0.3, ease: [0.4, 0, 1, 1] }
      }
    },
    // Exiting to right when scrolling down
    exitToRight: {
      x: 150,
      opacity: 0,
      y: -30,
      transition: {
        x: { type: "spring", stiffness: 150, damping: 20, velocity: 0 },
        opacity: { duration: 0.3, ease: [0.4, 0, 1, 1] },
        y: { duration: 0.3, ease: [0.4, 0, 1, 1] }
      }
    },
    // Entering from right when scrolling up
    enterFromRight: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        x: { type: "spring", stiffness: 120, damping: 18, velocity: 0 },
        opacity: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
        y: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }
      }
    },
    // Exiting to left when scrolling up
    exitToLeft: {
      x: -150,
      opacity: 0,
      y: 30,
      transition: {
        x: { type: "spring", stiffness: 150, damping: 20, velocity: 0 },
        opacity: { duration: 0.3, ease: [0.4, 0, 1, 1] },
        y: { duration: 0.3, ease: [0.4, 0, 1, 1] }
      }
    }
  }

  // Determine animation state based on scroll position and direction
  const getAnimationState = () => {
    if (!isScrolling) {
      // Not scrolling - show content if in view
      return isInView ? "enterFromLeft" : "hiddenLeft"
    }

    if (scrollDirection === 'down') {
      // Scrolling down
      if (isInView) {
        return "enterFromLeft"
      } else if (hasBeenInView) {
        return "exitToRight"
      } else {
        return "hiddenLeft"
      }
    } else {
      // Scrolling up
      if (isInView) {
        return "enterFromRight"
      } else if (hasBeenInView) {
        return "exitToLeft"
      } else {
        return "hiddenLeft"
      }
    }
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      variants={variants}
      animate={getAnimationState()}
      initial="hiddenLeft"
      style={{
        // Performance optimizations
        willChange: isScrolling ? 'transform, opacity' : 'auto',
        // Mobile responsiveness
        transform: 'translateZ(0)', // Hardware acceleration
        backfaceVisibility: 'hidden' as const
      }}
    >
      {children}
    </motion.section>
  )
}
