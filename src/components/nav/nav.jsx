// basic imports
import "./nav.css"
import { useState } from "react";
// react-icons
import { BiCodeAlt } from "react-icons/bi"
import { ImHome } from "react-icons/im"
import { MdOutlineWork, MdMiscellaneousServices } from "react-icons/md"
import { AiFillMessage } from "react-icons/ai"



const Nav = () => {

  const [ActiveNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={ActiveNav === '#' ? 'active' : '' }>< ImHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={ActiveNav === '#about' ? 'active' : '' }>< BiCodeAlt /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={ActiveNav === '#experience' ? 'active' : '' }>< MdOutlineWork /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={ActiveNav === '#services' ? 'active' : '' }>< MdMiscellaneousServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={ActiveNav === '#contact' ? 'active' : '' }>< AiFillMessage /></a>
    </nav>
  )
}

export default Nav