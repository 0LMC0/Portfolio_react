// css import
import "./about.css"
// react-icons
import { BiCodeBlock } from "react-icons/bi"
import { BsAwardFill, BsFolderPlus } from "react-icons/bs"
import { FaUserCheck } from "react-icons/fa"
// img
import LOGO_PRACTIENDA from "../../assets/logo_practienda .png"

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About Me < BiCodeBlock /></h2>

      <div className="container about_container">
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
                < BsAwardFill classname="about_icon"/>
                <h5>Experience</h5>
                <small>1x year experience</small>
            </article>

            <article className="about_card">
                < FaUserCheck classname="about_icon"/>
                <h5>Clients</h5>
                <small>10+ worldwide</small>
            </article>            
            
            <article className="about_card">
                < BsFolderPlus classname="about_icon"/>
                <h5>Real projects</h5>
                <small>15+</small>
            </article>
          </div>

          <p>I'm Lautaro, a biligüal 22 person originally from Buenos Aires, Argentina.
          Graduated from a complete integrated course from Coderhouse [HTML5, CSS3, Javascript & React.Js], Dedicated worker with the goal of helping achieve goals and take on more responsibilities as quickly as possible. Seeking to take advantage of the knowledge acquired (academic and self-taught) to effectively fill your company vacant position.</p>

          <a href="#contact" className="btn btn-primary">Let's talk!</a>
        </div>

        <div className="about_me">
          <div className="about_me-img">
            <img src={ LOGO_PRACTIENDA } alt="" />
          </div>
        </div>
      </div>


    </section>
  )
}

export default About;