import { useTranslation } from 'react-i18next'

interface Category {
  id: string
  name: { it: string; en: string }
  pages: number[]
  icon: string
}

interface CategorySidebarProps {
  categories: Category[]
  currentPage: number
  isExpanded: boolean
  onCategoryClick: (page: number) => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export const CategorySidebar = ({
  categories,
  currentPage,
  isExpanded,
  onCategoryClick,
  onMouseEnter,
  onMouseLeave,
}: CategorySidebarProps) => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language as 'it' | 'en'

  const getActiveCategoryId = () => {
    return categories.find((cat) => cat.pages.includes(currentPage))?.id
  }

  const activeCategoryId = getActiveCategoryId()

  return (
    <div
      className={`
        fixed left-0 top-0 h-full
        bg-neutral-charcoal/95 backdrop-blur-sm
        z-20 transition-all duration-400
        ${isExpanded ? 'w-56' : 'w-10'}
        overflow-hidden
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col h-full py-8">
        {/* Collapsed state - vertical indicators */}
        {!isExpanded && (
          <div className="flex flex-col items-center gap-2 h-full justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.pages[0])}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${
                    activeCategoryId === category.id
                      ? 'bg-accent scale-150'
                      : 'bg-neutral-cream/40 hover:bg-accent/60'
                  }
                `}
                aria-label={category.name[currentLang]}
              />
            ))}
          </div>
        )}

        {/* Expanded state - full category list */}
        {isExpanded && (
          <nav className="flex flex-col gap-1 px-3 overflow-y-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.pages[0])}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg
                  transition-all duration-200 text-left
                  ${
                    activeCategoryId === category.id
                      ? 'bg-accent text-neutral-charcoal font-medium'
                      : 'text-neutral-cream hover:bg-neutral-cream/10'
                  }
                `}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="text-sm whitespace-nowrap">
                  {category.name[currentLang]}
                </span>
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  )
}
