// basic imports
import "./nav.css"
// import { useState } from "react";
// react-icons
import { BiCodeAlt } from "react-icons/bi"
import { ImHome } from "react-icons/im"
import { MdOutlineWork, MdMiscellaneousServices } from "react-icons/md"
import { AiFillMessage } from "react-icons/ai"



const Nav = () => {

  // const [first, setfirst] = useState(second);+

  return (
    <nav>
      <a href="#contact" className="active">< ImHome /></a>
      <a href="#about">< BiCodeAlt /></a>
      <a href="#experience">< MdOutlineWork /></a>
      <a href="#services">< MdMiscellaneousServices /></a>
      <a href="#contact">< AiFillMessage /></a>
    </nav>
  )
}

export default Nav