import { useState, useEffect } from 'react'
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import Intro from "./components/Intro/intro"
import Navbar from "./components/NavBar/navbar"
import Skills from "./components/Skills/skills"
import Works from "./components/Works/works"
import Preloader from "./components/Preloader/Preloader"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, []) // ✅ This is correctly closed now

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