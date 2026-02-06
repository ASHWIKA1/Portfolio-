"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useInView } from '@/hooks/useInView'

interface ScrollWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
  isLogo?: boolean
}

export default function ScrollWrapper({ 
  children, 
  className = "", 
  id,
  delay = 0,
  isLogo = false
}: ScrollWrapperProps) {
  const { scrollDirection, scrollY, isScrolling } = useScrollDirection()
  const { isInView, hasBeenInView, ref } = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  // Animation variants for left-to-right (scroll down) and right-to-left (scroll up)
  const variants = {
    // Hidden to the left (initial state)
    hiddenLeft: {
      x: -200,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 100, damping: 20 },
        opacity: { duration: 0.3 }
      }
    },
    // Visible in center
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 80, damping: 18, delay },
        opacity: { duration: 0.5, delay }
      }
    },
    // Hidden to the right (when scrolling down)
    hiddenRight: {
      x: 200,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 100, damping: 20 },
        opacity: { duration: 0.3 }
      }
    }
  }

  // Determine animation state based on scroll position and direction
  const getAnimationState = () => {
    if (!isScrolling) {
      // Not scrolling - show content if in view
      return isInView ? "visible" : "hiddenLeft"
    }

    if (scrollDirection === 'down') {
      // Scrolling down: left to right
      if (isInView) {
        return "visible"
      } else if (hasBeenInView) {
        return "hiddenRight"
      } else {
        return "hiddenLeft"
      }
    } else {
      // Scrolling up: right to left
      if (isInView) {
        return "visible"
      } else if (hasBeenInView) {
        return "hiddenLeft"
      } else {
        return "hiddenLeft"
      }
    }
  }

  // Special handling for logo
  const getLogoAnimationState = () => {
    if (!isScrolling) {
      return "visible"
    }

    if (scrollDirection === 'down' && scrollY > 100) {
      return "hiddenRight"
    } else if (scrollDirection === 'up' && scrollY < 200) {
      return "visible"
    } else {
      return "visible"
    }
  }

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      variants={variants}
      animate={isLogo ? getLogoAnimationState() : getAnimationState()}
      initial="hiddenLeft"
      style={{
        willChange: isScrolling ? 'transform, opacity' : 'auto',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden' as const
      }}
    >
      {children}
    </motion.div>
  )
}
