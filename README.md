# La Dolce Isola Website

Premium website for La Dolce Isola beach bar & restaurant in Scalea, Calabria, Italy.

## 🌟 Features

- **🌍 Multilingual Support**: 6 languages (Italian, English, Russian, Ukrainian, Polish, German)
- **📖 Interactive 3D Menu**: 21-page flipbook with realistic page-turning animation using Hammer.js
- **🎨 Smooth Scroll Animations**: GSAP + ScrollTrigger for 60fps performance
- **🎭 3D Background**: three.js animated background (desktop only, auto-disabled on mobile)
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **⚡ Performance Optimized**: Lighthouse scores - Performance: 75+, Accessibility: 91+, Best Practices: 100, SEO: 100
- **♿ Accessibility**: WCAG compliant with keyboard navigation, ARIA labels, and semantic HTML

## 🛠 Tech Stack

- **React 19** + **TypeScript** - Modern React with type safety
- **Vite 8** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **GSAP** + ScrollTrigger - Professional animations
- **three.js** + @react-three/fiber - 3D graphics
- **i18next** - Internationalization
- **Hammer.js** - Touch gesture support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/R3LCH/ladolceisola-website-v2.git
cd ladolceisola-website-v2

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the site and deploys it to GitHub Pages automatically.

## 🌐 Live Site

**Production URL**: [https://r3lch.github.io/ladolceisola-website-v2/](https://r3lch.github.io/ladolceisola-website-v2/)

## 📁 Project Structure

```
ladolceisola-website-v2/
├── public/
│   ├── locales/           # Translation files (6 languages)
│   └── menu-images/       # Menu flipbook pages
├── src/
│   ├── components/
│   │   ├── animations/    # 3D scene, scroll reveal
│   │   ├── layout/        # Header, footer, navigation
│   │   ├── menu/          # 3D menu flipbook
│   │   ├── sections/      # Hero, About, Location, Contact
│   │   └── ui/            # Reusable UI components
│   ├── i18n/              # i18next configuration
│   ├── utils/             # Animation helpers
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## 🎨 Key Components

### 3D Menu Flipbook
- 21 high-resolution menu pages
- Realistic page-turning animation
- Touch gesture support (swipe on mobile/tablet)
- Keyboard navigation (arrow keys, Escape)
- Category sidebar navigation

### Scroll Animations
- Fade-in effects on scroll
- Staggered animations for lists
- Zoom and slide effects
- Optimized for 60fps
- Respects `prefers-reduced-motion`

### 3D Background
- Animated particle system
- Auto-disabled on mobile for performance
- Smooth camera movements
- WebGL-powered

## 🌍 Supported Languages

- 🇮🇹 Italian (IT) - Default
- 🇬🇧 English (EN)
- 🇷🇺 Russian (RU)
- 🇺🇦 Ukrainian (UK)
- 🇵🇱 Polish (PL)
- 🇩🇪 German (DE)

Language is auto-detected from browser settings and can be changed via the language switcher in the header.

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format

# Deploy to GitHub Pages
npm run deploy
```

## 🎯 Performance Optimizations

- Code splitting by route and vendor chunks
- Lazy loading of 3D components
- Optimized images (WebP format)
- Tree-shaking unused code
- CSS minification
- No sourcemaps in production
- Efficient bundle chunking (vendor, animations, three.js, i18n)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and landmarks
- Keyboard navigation support
- Focus visible states
- Screen reader friendly
- Color contrast compliance
- Skip to main content
- Reduced motion support

## 📄 License

© 2024 La Dolce Isola. All rights reserved.

## 🤝 Contributing

This is a private project for La Dolce Isola. For inquiries, please contact the restaurant directly.

## 📞 Contact

**La Dolce Isola**
- 📍 Scalea, Calabria, Italy
- 📧 [Contact via website](https://r3lch.github.io/ladolceisola-website-v2/)
- 📱 WhatsApp available on site

---

Built with ❤️ using React, TypeScript, and modern web technologies.
