import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Facebook, Clock, Rocket, Sparkles, Globe, ShieldCheck } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="relative bg-[#0A0A0B] pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden border-t border-zinc-800/50">
      {/* Background Cosmic Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          
          {/* Brand Module */}
          <div className="bg-zinc-900/20 p-6 md:p-8 rounded-3xl border border-zinc-800/50 backdrop-blur-sm flex flex-col justify-between transition-colors duration-500 hover:border-brand-gold/50">
            <div className="space-y-6">
              <motion.a 
                href="#home" 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 group"
              >
                <div className="logo-container !w-10 !h-10 !text-xl shrink-0">
                  <span className="text-white font-serif">東</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-brand-gold font-bold">Chinees Restaurant</span>
                  <span className="text-base font-serif font-bold text-white group-hover:text-brand-gold transition-colors">Oriental Delight</span>
                </div>
              </motion.a>
              
              <p className="text-zinc-500 text-xs leading-relaxed font-light italic">
                Authentieke Kantonese keuken in het hart van Emmen. Sinds 1980 het vertrouwde adres voor kwaliteit en traditie.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/50 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Connect</span>
              <a 
                href="https://www.facebook.com/share/1CmKeAU8GV/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/5 border border-brand-gold/20 text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold/40 transition-all duration-300"
              >
                <Facebook size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Facebook</span>
              </a>
            </div>
          </div>

          {/* Contact Module */}
          <div className="bg-zinc-900/20 p-8 rounded-3xl border border-zinc-800/50 backdrop-blur-sm transition-colors duration-500 hover:border-brand-gold/50">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="text-brand-gold w-5 h-5" />
              <h4 className="text-white font-serif font-bold text-lg tracking-wide">Contact</h4>
            </div>
            <ul className="space-y-6">
              <li className="group">
                <a 
                  href="https://maps.app.goo.gl/65ZpUDdrCrNU28sf7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4"
                >
                  <MapPin className="text-brand-gold mt-1 shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors leading-relaxed">
                    Boslaan 138<br />
                    7811 KJ Emmen, NL
                  </span>
                </a>
              </li>
              <li className="group">
                <a href="tel:+31591642340" className="flex items-center space-x-4">
                  <Phone className="text-brand-gold shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">+31 591 642 340</span>
                </a>
              </li>
              <li className="group">
                <a href="mailto:orientaldelightemmen@gmail.com" className="flex items-center space-x-4">
                  <Mail className="text-brand-gold shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors break-all">orientaldelightemmen@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Timing Module */}
          <div className="bg-zinc-900/20 p-8 rounded-3xl border border-zinc-800/50 backdrop-blur-sm transition-colors duration-500 hover:border-brand-gold/50">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="text-brand-gold w-5 h-5" />
              <h4 className="text-white font-serif font-bold text-lg tracking-wide">Timings</h4>
            </div>
            <ul className="space-y-5">
              {[
                { day: 'Maandag', hours: 'Gesloten', status: 'off' },
                { day: 'Dinsdag - Vrijdag', hours: '16:00 - 21:30', status: 'on' },
                { day: 'Zaterdag - Zondag', hours: '12:00 - 22:00', status: 'on' },
              ].map((item) => (
                <li key={item.day} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-1 h-1 rounded-full ${item.status === 'on' ? 'bg-brand-gold' : 'bg-zinc-700'}`}></div>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{item.day}</span>
                  </div>
                  <span className="text-sm text-zinc-300 font-medium tracking-wide pl-3">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map/Navigation Module */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-brand-gold/10 to-transparent rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-zinc-900/20 rounded-3xl border border-zinc-800/50 overflow-hidden h-full flex flex-col backdrop-blur-sm transition-colors duration-500 group-hover:border-brand-gold/50">
              <a 
                href="https://maps.app.goo.gl/65ZpUDdrCrNU28sf7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-32 overflow-hidden border-b border-zinc-800/50 block group/map"
              >
                <img 
                  src="./Map.jpg" 
                  alt="Oriental Delight Location" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
              </a>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-1">Locatie</h4>
                  <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">Start uw missie naar smaak</p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/65ZpUDdrCrNU28sf7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all duration-500"
                >
                  <span>Route Plannen</span>
                  <Rocket size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 border-t border-zinc-900/50 flex flex-col items-center gap-8">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em]">
              © {currentYear} Oriental Delight Emmen. Alle rechten voorbehouden.
            </p>
          </div>
          
          {/* Taglines */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
              <span className="text-white text-xs md:text-sm font-serif font-bold tracking-[0.1em]">Kantonese Traditie</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
              <span className="text-white text-xs md:text-sm font-serif font-bold tracking-[0.1em]">Modern Design</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
              <span className="text-white text-xs md:text-sm font-serif font-bold tracking-[0.1em]">Culinaire Perfectie</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
