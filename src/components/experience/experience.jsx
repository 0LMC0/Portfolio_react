import "./experience.css"
// icons
import { BsPatchCheckFill, BsBootstrapFill } from "react-icons/bs"
import { FiCoffee } from "react-icons/fi"
import { AiFillHtml5 } from "react-icons/ai"
import { FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
// tilt.js
import Tilt from "react-parallax-tilt"

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>My experience</h2>

      <div className="container experience_container">
      <Tilt  className="parallax-effect-glare-scale"
              perspective={7000}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
    >
        <div className="experience_frontend">
          <h3> Front-end Development</h3>
              <div className="experience_content inner-element">

                <article className="experience_details">
                  <BsPatchCheckFill className="experience_details-icon"/>
                  <div>
                    <h4>HTML5 <AiFillHtml5/></h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience_details">
                  <BsPatchCheckFill className="experience_details-icon"/>
                  <div>
                    <h4>CSS3 <FaCss3Alt /></h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience_details">
                  <BsPatchCheckFill className="experience_details-icon"/>
                  <div>
                    <h4>React.Js   <FaReact /> </h4>
                    <small className="text-light">Intermediate/ <br />Advanced</small>
                  </div>
                </article>

                <article className="experience_details">
                  <BsPatchCheckFill className="experience_details-icon"/>
                  <div>
                    <h4>Javascript   <SiJavascript/></h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience_details">
                  <BsPatchCheckFill className="experience_details-icon"/>
                  <div>
                    <h4>Node.js   <FaNodeJs/></h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>

                <article className="experience_details">
                  <BsPatchCheckFill className="experience_details-icon"/>
                  <div>
                  <h4>Express.js    <FaNodeJs/></h4>
                  <small className="text-light">Begginer/ <br />Intermediate</small>
                  </div>
                </article>

                <article className="experience_details">
                  <BsPatchCheckFill className="experience_details-icon"/>
                  <div>
                  <h4>Bootstrap    <BsBootstrapFill/></h4>
                  <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience_details">
                  <BsPatchCheckFill className="experience_details-icon"/>
                  <div>
                  <h4>Coffee    <FiCoffee /></h4>
                  <small className="text-light">Experienced [Just kidding]</small>
                  </div>
                </article>
              </div>
        </div>
          </Tilt>
      </div>
    </section>
  )
}

export default Experience
