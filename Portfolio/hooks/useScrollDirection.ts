"use client"

import { useState, useEffect } from 'react'

interface ScrollState {
  scrollY: number
  scrollDirection: 'up' | 'down'
  isScrolling: boolean
}

export function useScrollDirection(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: 'down',
    isScrolling: false
  })

  useEffect(() => {
    let lastScrollY = window.scrollY
    let scrollTimeout: NodeJS.Timeout

    const updateScrollState = () => {
      const currentScrollY = window.scrollY
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up'

      setScrollState({
        scrollY: currentScrollY,
        scrollDirection,
        isScrolling: true
      })

      lastScrollY = currentScrollY

      // Clear existing timeout
      clearTimeout(scrollTimeout)
      
      // Set isScrolling to false after scrolling stops
      scrollTimeout = setTimeout(() => {
        setScrollState(prev => ({ ...prev, isScrolling: false }))
      }, 150)
    }

    window.addEventListener('scroll', updateScrollState, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', updateScrollState)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return scrollState
}
