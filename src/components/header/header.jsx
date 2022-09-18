// styles import
import "./header.css"
// Call to action buttons (cv and contact)
import CallToAction from "./CallToAction"
// socials
import HeaderSocials from "./HeaderSocials"
// me IMG
import ME from "../../assets/me.png"
// typewritter
import Typewriter from "typewriter-effect"

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div>
        <h5>Hello I'm.</h5>
        <h1>
          <Typewriter 
            onInit={(typewriter) => {
              typewriter
              .typeString("Lautaro Caceres")
              .start()
            }}
          />      
        </h1>
        <h5>
        <Typewriter
            options={{
              strings: ['Front-end developer </>', 'Entrepreneur 💸', "Coffee Addict ☕", "Self thaught 🧠", "Cook 🔪" ],
              autoStart: true,
              loop: true,
            }}
          />
          </h5>
        <CallToAction />
        <p className="easterEggs">Find the animated easter eggs! <br /> (Click on me!)</p>
        <HeaderSocials />
        </div>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll_down">Scroll down</a>
      </div>
    </header>
  )
}

export default Header