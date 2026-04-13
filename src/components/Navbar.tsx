import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu as MenuIcon, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Over Ons', href: '#about' },
    { name: 'Gallerij', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-4">
          <div className="logo-container">
            <span className="text-white font-serif">東</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold">Chinees Restaurant</span>
            <span className="text-lg md:text-xl font-serif font-bold text-white leading-tight">Oriental Delight</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest text-zinc-300 hover:text-brand-gold transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+31591642340"
            className="flex items-center space-x-2 bg-brand-red px-5 py-2.5 rounded-full text-white text-sm font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/40"
          >
            <Phone size={16} />
            <span>+31 591 642 340</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-morphism border-t border-zinc-800"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg uppercase tracking-widest text-zinc-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:+31591642340"
                className="flex items-center justify-center space-x-2 bg-brand-red px-5 py-3 rounded-full text-white font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={20} />
                <span>+31 591 642 340</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
