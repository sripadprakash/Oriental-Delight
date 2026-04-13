import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: './gallery/WhatsApp Image 2026-04-13 at 20.29.20 (1).jpeg', size: 'large' }, // 0
  { src: './gallery/WhatsApp Image 2026-04-13 at 20.29.20.jpeg', size: 'small' },    // 1
  { src: './gallery/WhatsApp Image 2026-04-13 at 20.29.21 (1).jpeg', size: 'small' }, // 2
  { src: './gallery/WhatsApp Image 2026-04-13 at 20.29.21.jpeg', size: 'medium' },   // 3
  { src: './gallery/WhatsApp Image 2026-04-13 at 20.29.22 (1).jpeg', size: 'small' }, // 4
  { src: './gallery/WhatsApp Image 2026-04-13 at 20.29.22 (2).jpeg', size: 'small' }, // 5
  { src: './gallery/WhatsApp Image 2026-04-13 at 20.29.22.jpeg', size: 'wide' },     // 6
  { src: './gallery/WhatsApp Image 2026-04-13 at 20.29.23 (1).jpeg', size: 'small' }, // 7
  { src: './gallery/WhatsApp Image 2026-04-13 at 20.29.23.jpeg', size: 'tall' },     // 8
  { src: './gallery/WhatsApp Image 2026-04-13 at 20.29.24.jpeg', size: 'small' },    // 9
]

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length)
    }
  }

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-zinc-950/40">
      {/* Space-themed Nebula Effects (Consistent with original space theme) */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-2 md:mb-4">
              <Camera className="text-brand-gold w-4 h-4 md:w-5 md:h-5" />
              <span className="text-brand-gold font-serif italic text-base md:text-lg tracking-[0.2em] md:tracking-[0.3em] uppercase">Visuele Beleving</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tighter">Onze Gallerij</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-sm text-xs md:text-base font-light leading-relaxed md:text-right italic"
          >
            Een kijkje achter de schermen bij Oriental Delight, waar passie en traditie samenkomen in elk detail.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[250px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedIndex(index)}
              className={`group relative overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900 shadow-2xl transition-all duration-500 hover:border-brand-gold/30 hover:shadow-brand-gold/5 cursor-pointer ${
                img.size === 'large' ? 'col-span-2 row-span-2' : 
                img.size === 'wide' ? 'col-span-2 row-span-1' :
                img.size === 'tall' ? 'col-span-1 row-span-2' :
                img.size === 'medium' ? 'col-span-2 row-span-1 md:col-span-1 md:row-span-1' :
                'col-span-1 row-span-1'
              }`}
            >
              <img 
                src={img.src} 
                alt={`Oriental Delight Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="p-4 rounded-full bg-white/10 border border-white/20 text-white transform scale-90 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 size={24} className="text-brand-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out backdrop-blur-md"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            >
              <X size={24} />
            </motion.button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors z-[110] hidden md:block"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors z-[110] hidden md:block"
            >
              <ChevronRight size={32} />
            </button>
            
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) handlePrev()
                else if (info.offset.x < -100) handleNext()
              }}
              className="relative max-w-5xl max-h-full overflow-hidden rounded-2xl shadow-2xl border border-white/10 cursor-grab active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[selectedIndex].src} 
                alt="Oriental Delight Gallery Large" 
                className="w-full h-full object-contain pointer-events-none"
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 text-sm font-bold tracking-widest uppercase">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
