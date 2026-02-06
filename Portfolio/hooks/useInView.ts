"use client"

import { useState, useEffect, useRef } from 'react'

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

interface InViewState {
  isInView: boolean
  hasBeenInView: boolean
  entryDirection?: 'top' | 'bottom'
}

export function useInView(options: UseInViewOptions = {}): InViewState & { ref: React.RefObject<HTMLDivElement> } {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options
  const [state, setState] = useState<InViewState>({
    isInView: false,
    hasBeenInView: false,
    entryDirection: undefined
  })
  const ref = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let lastWasInView = false

    const updateInView = () => {
      if (!element) return

      const rect = element.getBoundingClientRect()
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Calculate if element is in view
      const elementTop = rect.top
      const elementBottom = rect.bottom
      const elementHeight = rect.height
      
      // Element is in view if any part of it crosses the threshold
      const isVisible = (
        (elementTop < windowHeight - (windowHeight * threshold)) && 
        (elementBottom > windowHeight * threshold)
      )

      // Determine entry direction
      let entryDirection: 'top' | 'bottom' | undefined = undefined
      if (isVisible && !lastWasInView) {
        entryDirection = currentScrollY > lastScrollY.current ? 'top' : 'bottom'
      }

      setState(prev => ({
        isInView: isVisible,
        hasBeenInView: triggerOnce ? (prev.hasBeenInView || isVisible) : prev.hasBeenInView,
        entryDirection: entryDirection || prev.entryDirection
      }))

      lastWasInView = isVisible
      lastScrollY.current = currentScrollY
    }

    // Initial check
    updateInView()

    // Add scroll listener
    window.addEventListener('scroll', updateInView, { passive: true })
    window.addEventListener('resize', updateInView, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateInView)
      window.removeEventListener('resize', updateInView)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ...state, ref }
}
