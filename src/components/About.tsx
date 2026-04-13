import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-serif italic text-lg md:text-xl mb-2 md:mb-4 block">Traditie en Smaak</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
              Onze Passie voor de <br />
              <span className="text-brand-red">Kantonese Keuken</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
              <p>
                Al jarenlang is Chinees Restaurant Oriental Delight een begrip in Emmen. Gelegen aan de Boslaan 138, 
                bieden wij een onvergetelijke culinaire ervaring waarbij we de rijke tradities van de 
                Chinese keuken combineren met een eigentijdse touch.
              </p>
              <p>
                Onze koks bereiden elk gerecht met zorg, waarbij ze gebruik maken van de meest verse ingrediënten 
                om de authentieke smaken te garanderen die u van ons gewend bent. Van heerlijke Dim Sum tot onze 
                beroemde Rijsttafels, er is voor elk wat wils.
              </p>
              <p>
                Of u nu komt voor een gezellig diner met familie of een snelle afhaalmaaltijd, bij Oriental Delight 
                staat gastvrijheid en kwaliteit altijd centraal.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-brand-gold/20 shadow-2xl relative z-10 bg-zinc-900">
              <img 
                src="/Oriental Delight.jpeg" 
                alt="Oriental Delight Restaurant Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-brand-gold/30 rounded-2xl -z-10 hidden md:block"></div>
            <div className="absolute -bottom-8 -left-8 bg-brand-red p-8 rounded-lg shadow-2xl hidden md:block">
              <p className="text-white font-serif italic text-xl">"Sinds 1980 het vertrouwde adres in Emmen"</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
