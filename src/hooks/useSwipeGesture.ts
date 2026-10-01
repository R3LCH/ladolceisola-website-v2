import { useEffect, useRef } from 'react'
import Hammer from 'hammerjs'

interface UseSwipeGestureProps {
  onSwipeLeft: () => void
  onSwipeRight: () => void
  enabled?: boolean
}

export const useSwipeGesture = ({
  onSwipeLeft,
  onSwipeRight,
  enabled = true,
}: UseSwipeGestureProps) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const hammerRef = useRef<HammerManager | null>(null)

  useEffect(() => {
    if (!elementRef.current || !enabled) {
      return
    }

    // Initialize Hammer.js
    const hammer = new Hammer(elementRef.current)
    hammerRef.current = hammer

    // Configure swipe recognition
    hammer.get('swipe').set({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 50,
      velocity: 0.3,
    })

    // Add event listeners
    hammer.on('swipeleft', onSwipeLeft)
    hammer.on('swiperight', onSwipeRight)

    // Cleanup
    return () => {
      hammer.off('swipeleft', onSwipeLeft)
      hammer.off('swiperight', onSwipeRight)
      hammer.destroy()
      hammerRef.current = null
    }
  }, [onSwipeLeft, onSwipeRight, enabled])

  return elementRef
}
