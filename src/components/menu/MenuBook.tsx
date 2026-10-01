import { useState, useEffect } from 'react'
import { MenuPage } from './MenuPage'
import { CategorySidebar } from './CategorySidebar'
import { usePageFlip } from '../../hooks/usePageFlip'
import { useSwipeGesture } from '../../hooks/useSwipeGesture'
import { useKeyboardNav } from '../../hooks/useKeyboardNav'
import menuStructure from '../../data/menu-structure.json'

interface MenuBookProps {
  isOpen: boolean
  onClose: () => void
}

export const MenuBook = ({ isOpen, onClose }: MenuBookProps) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next')

  const { currentPage, isFlipping, nextPage, prevPage, goToPage, canGoNext, canGoPrev } =
    usePageFlip({
      totalPages: menuStructure.totalPages,
      initialPage: 1,
      onPageChange: () => {
        // Collapse sidebar on page interaction
        setSidebarExpanded(false)
      },
    })

  // Handle swipe gestures
  const swipeRef = useSwipeGesture({
    onSwipeLeft: () => {
      if (canGoNext) {
        setFlipDirection('next')
        nextPage()
      }
    },
    onSwipeRight: () => {
      if (canGoPrev) {
        setFlipDirection('prev')
        prevPage()
      }
    },
    enabled: isOpen && !isFlipping,
  })

  // Handle keyboard navigation
  useKeyboardNav({
    onArrowLeft: () => {
      if (canGoPrev) {
        setFlipDirection('prev')
        prevPage()
      }
    },
    onArrowRight: () => {
      if (canGoNext) {
        setFlipDirection('next')
        nextPage()
      }
    },
    onEscape: onClose,
    enabled: isOpen && !isFlipping,
  })

  // Handle click on page edges
  const handlePageEdgeClick = (side: 'left' | 'right') => {
    if (isFlipping) return

    if (side === 'left' && canGoPrev) {
      setFlipDirection('prev')
      prevPage()
    } else if (side === 'right' && canGoNext) {
      setFlipDirection('next')
      nextPage()
    }
  }

  // Category navigation
  const handleCategoryClick = (page: number) => {
    setFlipDirection(page > currentPage ? 'next' : 'prev')
    goToPage(page)
  }

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      {/* Category Sidebar */}
      <CategorySidebar
        categories={menuStructure.categories}
        currentPage={currentPage}
        isExpanded={sidebarExpanded}
        onCategoryClick={handleCategoryClick}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-30 w-12 h-12 flex items-center justify-center
                   rounded-full bg-neutral-cream/10 hover:bg-neutral-cream/20
                   transition-all duration-200 group"
        aria-label="Close menu"
      >
        <svg
          className="w-6 h-6 text-neutral-cream group-hover:rotate-90 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Main Book Container */}
      <div
        ref={swipeRef}
        className="relative w-full max-w-4xl h-[80vh] mx-auto"
        style={{ perspective: '2000px' }}
      >
        {/* Click zones for page navigation */}
        <button
          onClick={() => handlePageEdgeClick('left')}
          className={`absolute left-0 top-0 w-1/4 h-full z-20 cursor-w-resize
                     ${!canGoPrev ? 'opacity-0 pointer-events-none' : ''}`}
          aria-label="Previous page"
          disabled={!canGoPrev}
        />
        <button
          onClick={() => handlePageEdgeClick('right')}
          className={`absolute right-0 top-0 w-1/4 h-full z-20 cursor-e-resize
                     ${!canGoNext ? 'opacity-0 pointer-events-none' : ''}`}
          aria-label="Next page"
          disabled={!canGoNext}
        />

        {/* Pages */}
        <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden">
          {Array.from({ length: menuStructure.totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <MenuPage
                key={pageNum}
                pageNumber={pageNum}
                isActive={pageNum === currentPage}
                isFlipping={pageNum === currentPage && isFlipping}
                flipDirection={flipDirection}
              />
            )
          )}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            setFlipDirection('prev')
            prevPage()
          }}
          disabled={!canGoPrev}
          className={`
            absolute left-4 top-1/2 -translate-y-1/2 z-30
            w-12 h-12 flex items-center justify-center
            rounded-full bg-neutral-cream/90 hover:bg-neutral-cream
            transition-all duration-200 shadow-lg
            ${!canGoPrev ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          `}
          aria-label="Previous page"
        >
          <svg
            className="w-6 h-6 text-neutral-charcoal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => {
            setFlipDirection('next')
            nextPage()
          }}
          disabled={!canGoNext}
          className={`
            absolute right-4 top-1/2 -translate-y-1/2 z-30
            w-12 h-12 flex items-center justify-center
            rounded-full bg-neutral-cream/90 hover:bg-neutral-cream
            transition-all duration-200 shadow-lg
            ${!canGoNext ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          `}
          aria-label="Next page"
        >
          <svg
            className="w-6 h-6 text-neutral-charcoal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Page Counter */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30
                     px-4 py-2 rounded-full bg-neutral-charcoal/80 backdrop-blur-sm
                     text-neutral-cream text-sm font-medium"
        >
          Page {currentPage} of {menuStructure.totalPages}
        </div>
      </div>
    </div>
  )
}
