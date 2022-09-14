import "./footer.css"
// react-icons
import { BsFacebook, BsInstagram } from "react-icons/bs"


const Footer = () => {
  return (
    <footer>
      <a href="#" rel="nonferrer" className="footer_logo">LMC</a>

      <ul className="permalinks">
        <li><a href="#"></a></li>
        <li><a href="#about"></a></li>
        <li><a href="#experience"></a></li>
        <li><a href="#services"></a></li>
        <li><a href="#portfolio"></a></li>
        <li><a href="#contact"></a></li>
      </ul>

      <div className="footer_socials">
        <a href="#facebook"><BsFacebook/> </a>
        <a href="#instagram"><BsInstagram/> </a>
      </div>

      <div className="footer_copyright">
        <small>&copyright Lautaro Caceres. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer