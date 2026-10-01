import { useState } from 'react'
import './index.css'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { Location } from './components/sections/Location'
import { Contact } from './components/sections/Contact'
import { MenuBook } from './components/menu/MenuBook'
function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-cream">
      <Header />
      <Hero onMenuClick={() => setMenuOpen(true)} />
      <Location />
      <Contact />
      <MenuBook isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  )
}

export default App
