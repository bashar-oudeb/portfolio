import About from "./components/About/About"
import Contact from "./components/contact/Contact"
import FooterSection from "./components/footer"
import Hero from "./components/hero/Hero"
import LogoCloud from "./components/logo-cloud"
import Projects from "./components/Projects/Projects"


function App() {

  return (
    <>
      <Hero />
      <About />
    
      <Projects/>
      <Contact />
      <FooterSection />
    </>
  )
}

export default App
