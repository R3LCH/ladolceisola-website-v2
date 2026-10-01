import { useState, useCallback } from 'react'

interface UsePageFlipProps {
  totalPages: number
  initialPage?: number
  onPageChange?: (page: number) => void
}

export const usePageFlip = ({
  totalPages,
  initialPage = 1,
  onPageChange,
}: UsePageFlipProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [isFlipping, setIsFlipping] = useState(false)

  const goToPage = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages || isFlipping || page === currentPage) {
        return
      }
      setIsFlipping(true)
      setCurrentPage(page)
      onPageChange?.(page)

      // Reset flipping state after animation completes
      setTimeout(() => {
        setIsFlipping(false)
      }, 700)
    },
    [totalPages, isFlipping, currentPage, onPageChange]
  )

  const nextPage = useCallback(() => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }, [currentPage, totalPages, goToPage])

  const prevPage = useCallback(() => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
  }, [currentPage, goToPage])

  const canGoNext = currentPage < totalPages
  const canGoPrev = currentPage > 1

  return {
    currentPage,
    isFlipping,
    nextPage,
    prevPage,
    goToPage,
    canGoNext,
    canGoPrev,
  }
}
