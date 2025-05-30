import { useState, useEffect } from 'react'
import Navbar from './components/NavBar/navbar'
import Intro from './components/Intro/intro'
import Skills from './components/Skills/skills'
import Works from './components/Works/works'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Preloader from './components/Preloader/Preloader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Intro />
          <Skills />
          <Works />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
