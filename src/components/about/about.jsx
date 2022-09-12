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

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus, hic quibusdam dolorum beatae sint deleniti dignissimos. Officia impedit ipsum sunt nulla ut magni asperiores aut? Incidunt autem magni maiores.</p>

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