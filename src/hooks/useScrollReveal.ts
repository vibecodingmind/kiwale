'use client'

import { useEffect, useRef, useState } from 'react'

type AnimationStyle = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'flip-up'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  animation?: AnimationStyle
  duration?: number
  delay?: number
  once?: boolean
}

const animationMap: Record<AnimationStyle, { from: string; to: string }> = {
  'fade-up': {
    from: 'opacity:0; transform:translateY(50px)',
    to: 'opacity:1; transform:translateY(0)',
  },
  'fade-down': {
    from: 'opacity:0; transform:translateY(-50px)',
    to: 'opacity:1; transform:translateY(0)',
  },
  'fade-left': {
    from: 'opacity:0; transform:translateX(-50px)',
    to: 'opacity:1; transform:translateX(0)',
  },
  'fade-right': {
    from: 'opacity:0; transform:translateX(50px)',
    to: 'opacity:1; transform:translateX(0)',
  },
  'zoom-in': {
    from: 'opacity:0; transform:scale(0.85)',
    to: 'opacity:1; transform:scale(1)',
  },
  'zoom-out': {
    from: 'opacity:0; transform:scale(1.15)',
    to: 'opacity:1; transform:scale(1)',
  },
  'flip-up': {
    from: 'opacity:0; transform:perspective(600px) rotateX(15deg)',
    to: 'opacity:1; transform:perspective(600px) rotateX(0)',
  },
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    animation = 'fade-up',
    duration = 700,
    delay = 0,
    once = true,
  } = options

  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const anim = animationMap[animation]
    el.style.cssText = `${anim.from}; transition: opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms;`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          requestAnimationFrame(() => {
            el.style.cssText = `${anim.to}; transition: opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms;`
          })
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
          el.style.cssText = `${anim.from}; transition: opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms;`
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animation, duration, delay, once, threshold, rootMargin])

  return { ref, isVisible }
}

/**
 * Staggered reveal for child elements within a container.
 * Returns ref to attach to container. Each child gets incremental delay.
 */
export function useStaggerReveal(childCount: number, options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -40px 0px',
    animation = 'fade-up',
    duration = 600,
    delay = 0,
    staggerMs = 120,
    once = true,
  } = options

  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const anim = animationMap[animation]
    const children = el.children

    Array.from(children).forEach((child, i) => {
      const d = delay + i * staggerMs
      ;(child as HTMLElement).style.cssText = `${anim.from}; transition: opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${d}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${d}ms;`
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          Array.from(children).forEach((child, i) => {
            const d = delay + i * staggerMs
            requestAnimationFrame(() => {
              ;(child as HTMLElement).style.cssText = `${anim.to}; transition: opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${d}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${d}ms;`
            })
          })
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
          Array.from(children).forEach((child, i) => {
            const d = delay + i * staggerMs
            ;(child as HTMLElement).style.cssText = `${anim.from}; transition: opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${d}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${d}ms;`
          })
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animation, duration, delay, staggerMs, once, threshold, rootMargin, childCount])

  return { ref, isVisible }
}
