import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface MenuPageProps {
  pageNumber: number
  isActive: boolean
  isFlipping: boolean
  flipDirection?: 'next' | 'prev'
}

export const MenuPage = ({
  pageNumber,
  isActive,
  isFlipping,
  flipDirection,
}: MenuPageProps) => {
  const pageRef = useRef<HTMLDivElement>(null)
  const imageSrc = `/images/menu/menu${pageNumber}.jpeg`

  useEffect(() => {
    if (!pageRef.current || !isFlipping) return

    const element = pageRef.current

    // Determine rotation direction
    const targetRotation = flipDirection === 'next' ? -180 : 180

    // Animate the flip
    gsap.to(element, {
      rotateY: targetRotation,
      duration: 0.7,
      ease: 'power2.inOut',
      transformOrigin: flipDirection === 'next' ? 'right center' : 'left center',
      onComplete: () => {
        // Reset rotation after flip completes
        gsap.set(element, { rotateY: 0 })
      },
    })
  }, [isFlipping, flipDirection])

  return (
    <div
      ref={pageRef}
      className={`
        menu-page
        absolute inset-0
        transform-gpu
        ${isActive ? 'z-10' : 'z-0'}
      `}
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      <img
        src={imageSrc}
        alt={`Menu page ${pageNumber}`}
        className="w-full h-full object-contain"
        loading={isActive ? 'eager' : 'lazy'}
      />
    </div>
  )
}
