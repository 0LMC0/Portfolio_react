import "./portfolio.css"
// img import
import PROJECT1 from "../../assets/practiendaProject.png"
import PROJECT2 from "../../assets/agataProject.png"
import PROJECT3 from "../../assets/to_do_list.png"
import PROJECT4 from "../../assets/gatsbyProject.jpg"
import PROJECT5 from "../../assets/mercadolibreProject.png"
import PROJECT6 from "../../assets/framerMotionProject.png"

// icons import
import { BsPatchCheckFill, BsGithub } from "react-icons/bs"






const Portfolio = () => {

  const data = [
    {
      id: 1,
      img: PROJECT1,
      title:"Practienda.com (My Start-Up)",
      iconStyle: <BsPatchCheckFill />,
      technologies: "HTML5 - CSS3 - Bootstrap - Javascript",
      demo: "https://practienda.com"
    },
    {
      id: 2,
      img: PROJECT5,
      title:"MercadoLibre API test with Searchbar",
      IconStyle: "",
      technologies: "React.Js - Node.js - Express.js - Moduled SASS",
      demo: "https://github.com/0LMC0/MercadoLibre_test_challenge"
    },
    {
      id: 3,
      img: PROJECT2,
      title:"Agataccesories.com",
      IconStyle: "",
      technologies: "HTML5 - CSS3 - Bootstrap - Javascript",
      demo: "https://agataccesories.com.ar/"
    },
    {
      id: 4,
      img: PROJECT3,
      title:"To do list",
      IconStyle: "",
      technologies: "HTML5 - CSS3 - Bootstrap - Javascript",
      demo: "https://0lmc0.github.io/To-do-list/"
    },
    {
      id: 5,
      img: PROJECT4,
      title:"Gatsby + Graph.QL site [developing]",
      IconStyle: "",
      technologies: "React.Js - Gatsby.Js - GraphQL",
      demo: "https://github.com/0LMC0/Gatsby-project-site"
    },
    {
      id: 6,
      img: PROJECT6,
      title:"Framer-Motion Test library Project",
      IconStyle: "",
      technologies: "React.Js - Framer-motion (Animation library for React.Js)",
      demo: "https://0lmc0.github.io/Framer-motion_practice/"
    }

  ]

  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, img, title, technologies, demo, github, iconStyle}) =>{
            return(
              <article key={ id } className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={ img } alt={ title } />
              </div>
              <small>{ technologies }</small>
              <h3>{ title } {iconStyle}</h3>
              <div className="portfolio_item-cta">
              <a href={ demo } className="btn btn-primary" target="_blank" rel="noreferrer">Live demo and code <BsGithub /></a>
              </div>
            </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio