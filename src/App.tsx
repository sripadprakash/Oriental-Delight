import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Background3D from './components/Background3D'

function App() {
  return (
    <div className="relative">
      <Background3D />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Gallery />
        <Reviews />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
