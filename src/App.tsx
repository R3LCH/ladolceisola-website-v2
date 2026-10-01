import './index.css'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
function App() {
  return (
    <div className="min-h-screen bg-neutral-cream">
      <Header />
      <Hero />
      <About />
    </div>
  )
}

export default App
