// styles import
import "./header.css"
// Call to action buttons (cv and contact)
import CallToAction from "./CallToAction"
// socials
import HeaderSocials from "./HeaderSocials"
// me IMG
import ME from "../../assets/me.png"

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div>
        <h5>Hello I'm.</h5>
        <h1>Lautaro Caceres</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CallToAction />
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