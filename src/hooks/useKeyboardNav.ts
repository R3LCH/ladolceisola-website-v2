import { useEffect } from 'react'

interface UseKeyboardNavProps {
  onArrowLeft: () => void
  onArrowRight: () => void
  onEscape: () => void
  enabled?: boolean
}

export const useKeyboardNav = ({
  onArrowLeft,
  onArrowRight,
  onEscape,
  enabled = true,
}: UseKeyboardNavProps) => {
  useEffect(() => {
    if (!enabled) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          onArrowLeft()
          break
        case 'ArrowRight':
          event.preventDefault()
          onArrowRight()
          break
        case 'Escape':
          event.preventDefault()
          onEscape()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onArrowLeft, onArrowRight, onEscape, enabled])
}
