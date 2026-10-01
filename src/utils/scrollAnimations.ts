import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export interface AnimationOptions {
  duration?: number
  delay?: number
  ease?: string
  stagger?: number
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
}

/**
 * Fade in and slide up animation
 */
export function fadeInUp(
  element: HTMLElement | string,
  options: AnimationOptions = {}
) {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, y: 0 })
    return
  }

  const {
    duration = 1,
    delay = 0,
    ease = 'power3.out',
    start = 'top 80%',
    end = 'top 20%',
  } = options

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        toggleActions: 'play none none none',
      },
    }
  )
}

/**
 * Zoom in animation
 */
export function zoomIn(
  element: HTMLElement | string,
  options: AnimationOptions = {}
) {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, scale: 1 })
    return
  }

  const {
    duration = 0.8,
    delay = 0,
    ease = 'power2.out',
    start = 'top 80%',
    end = 'top 20%',
  } = options

  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.95,
    },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        toggleActions: 'play none none none',
      },
    }
  )
}

/**
 * Slide from right animation
 */
export function slideFromRight(
  element: HTMLElement | string,
  options: AnimationOptions = {}
) {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, x: 0 })
    return
  }

  const {
    duration = 0.8,
    delay = 0,
    ease = 'power3.out',
    start = 'top 80%',
    end = 'top 20%',
  } = options

  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: 50,
    },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        toggleActions: 'play none none none',
      },
    }
  )
}

/**
 * Stagger reveal for multiple elements
 */
export function staggerReveal(
  elements: HTMLElement[] | NodeListOf<Element> | string,
  options: AnimationOptions = {}
) {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 })
    return
  }

  const {
    duration = 0.6,
    delay = 0,
    stagger = 0.1,
    ease = 'power3.out',
    start = 'top 80%',
    end = 'top 20%',
  } = options

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: {
        trigger: typeof elements === 'string' ? elements : elements[0],
        start,
        end,
        toggleActions: 'play none none none',
      },
    }
  )
}

/**
 * Parallax effect - element moves slower than scroll
 */
export function parallax(
  element: HTMLElement | string,
  speed: number = 0.5,
  options: AnimationOptions = {}
) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const { start = 'top bottom', end = 'bottom top', scrub = true } = options

  gsap.to(element, {
    y: () => {
      return -ScrollTrigger.maxScroll(window) * speed * 0.2
    },
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub,
      invalidateOnRefresh: true,
    },
  })
}

/**
 * Scale animation for hero title
 */
export function scaleIn(
  element: HTMLElement | string,
  options: AnimationOptions = {}
) {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, scale: 1 })
    return
  }

  const { duration = 1, delay = 0, ease = 'power3.out' } = options

  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.9,
    },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease,
    }
  )
}

/**
 * Cleanup all ScrollTrigger instances
 */
export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}
