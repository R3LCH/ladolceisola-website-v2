import { useEffect, useRef, type ReactNode } from 'react'
import {
  fadeInUp,
  zoomIn,
  staggerReveal,
  type AnimationOptions,
} from '../../utils/scrollAnimations'

export interface ScrollRevealProps {
  children: ReactNode
  animation?: 'fadeIn' | 'slideUp' | 'zoomIn' | 'slideRight'
  duration?: number
  delay?: number
  stagger?: number
  className?: string
}

/**
 * ScrollReveal component - wraps content and reveals on scroll
 * Uses GSAP + ScrollTrigger for smooth 60fps animations
 * Respects prefers-reduced-motion
 */
export function ScrollReveal({
  children,
  animation = 'fadeIn',
  duration = 0.8,
  delay = 0,
  stagger,
  className,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const options: AnimationOptions = {
      duration,
      delay,
      stagger,
    }

    // Apply animation based on type
    switch (animation) {
      case 'slideUp':
        fadeInUp(elementRef.current, options)
        break
      case 'zoomIn':
        zoomIn(elementRef.current, options)
        break
      case 'fadeIn':
      default:
        // If stagger is provided, select children for stagger animation
        if (stagger !== undefined) {
          const children = Array.from(elementRef.current.children) as HTMLElement[]
          if (children.length > 0) {
            staggerReveal(children, options)
          } else {
            fadeInUp(elementRef.current, options)
          }
        } else {
          fadeInUp(elementRef.current, options)
        }
        break
    }

    // Cleanup is handled by GSAP automatically
  }, [animation, duration, delay, stagger])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
