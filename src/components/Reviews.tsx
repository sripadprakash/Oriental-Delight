import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const reviews = [
  {
    name: 'John W.',
    text: 'Al jaren ons favoriete restaurant in Emmen. De Babi Pangang is nergens anders zo lekker als hier. Altijd vriendelijke bediening!',
    rating: 5
  },
  {
    name: 'Lindsey B.',
    text: 'Heerlijk gegeten met het hele gezin. De rijsttafel is een absolute aanrader, zoveel verschillende smaken en alles was perfect bereid.',
    rating: 5
  },
  {
    name: 'Myles B.',
    text: 'Modern en sfeervol interieur. De koks weten echt wat ze doen. De specialiteiten van de chef zijn elke keer weer een verrassing.',
    rating: 5
  },
  {
    name: 'Joe K.',
    text: 'Goede prijs-kwaliteitverhouding. Ruime porties en de bediening is vlot. Zowel afhaal als dineren in het restaurant zijn top.',
    rating: 4
  },
  {
    name: 'Rakel C.',
    text: 'Fantastische ervaring! De sfeer is erg prettig en het eten is authentiek en vers. Mijn favoriet zijn de vegetarische gerechten.',
    rating: 5
  }
]

export default function Reviews() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % reviews.length)
  const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="reviews" className="section-padding bg-zinc-950/40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <Quote className="text-brand-gold/20 mx-auto mb-6" size={64} />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Wat gasten zeggen</h2>
        </div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < reviews[index].rating ? "fill-brand-gold text-brand-gold" : "text-zinc-700"} 
                  />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-zinc-300 italic font-light leading-relaxed mb-8">
                "{reviews[index].text}"
              </p>
              <h4 className="text-brand-gold font-serif font-bold text-xl">{reviews[index].name}</h4>
              <p className="text-zinc-500 uppercase tracking-widest text-xs mt-1">Tevreden Gast</p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button 
              onClick={prev}
              className="p-2 rounded-full border border-zinc-800 text-zinc-500 hover:text-brand-gold hover:border-brand-gold transition-all pointer-events-auto"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-2 rounded-full border border-zinc-800 text-zinc-500 hover:text-brand-gold hover:border-brand-gold transition-all pointer-events-auto"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        {/* Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-brand-gold' : 'bg-zinc-800 hover:bg-zinc-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
