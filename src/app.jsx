import Header from "./components/header/header"
import Nav from "./components/nav/nav"
import About from "./components/about/about"
import Experience from "./components/experience/experience"
import Services from "./components/services/services"
import Portfolio from "./components/portfolio/portfolio"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"
import ParticleJsBackground from './components/ParticleJsBackground'



const App = () => {
  return (
    <>
      <ParticleJsBackground />
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App