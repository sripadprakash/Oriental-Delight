import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-brand-gold font-serif italic text-2xl md:text-3xl mb-4">
            Welkom bij
          </h2>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight">
            Oriental <span className="text-brand-red italic">Delight</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-xl text-zinc-400 mb-8 md:mb-10 leading-relaxed font-light tracking-wide px-4">
            Beleef de authentieke smaken van de Kantonese keuken in een sfeervolle, moderne setting in hartje Emmen.
          </p>
          
          <div className="flex items-center justify-center">
            <a 
              href="#gallery" 
              className="w-full sm:w-auto px-10 py-4 border border-brand-gold/40 text-brand-gold font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-brand-gold/10 transition-all text-center"
            >
              Ontdek Meer
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about">
          <ChevronDown size={32} />
        </a>
      </motion.div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-transparent to-brand-black pointer-events-none"></div>
    </section>
  )
}
