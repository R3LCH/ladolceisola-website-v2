import { useState } from 'react'
import './index.css'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { MenuBook } from './components/menu/MenuBook'
function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-cream">
      <Header />
      <Hero onMenuClick={() => setMenuOpen(true)} />
      <About />
      <MenuBook isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  )
}

export default App
