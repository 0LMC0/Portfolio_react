import "./services.css"
// icons
import { ImCheckmark } from "react-icons/im"

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">

            <li>
              <ImCheckmark className="service_listIcon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <ImCheckmark className="service_listIcon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <ImCheckmark className="service_listIcon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <ImCheckmark className="service_listIcon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <ImCheckmark className="service_listIcon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>

        </article>

        <article className="service">
          <div className="service_head">
            <h3>Soft Skills</h3>
          </div>
          <ul className="service_list">

            <li>
              <ImCheckmark className="service_listIcon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <ImCheckmark className="service_listIcon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <ImCheckmark className="service_listIcon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <ImCheckmark className="service_listIcon"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>

        </article>

      </div>
    </section>
  )
}

export default Services