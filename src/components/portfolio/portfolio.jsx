import "./portfolio.css"
// img import
import PROJECT1 from "../../assets/practiendaProject.png"
import PROJECT2 from "../../assets/agataProject.png"
import PROJECT3 from "../../assets/to_do_list.png"
import PROJECT4 from "../../assets/gatsbyProject.jpg"
// icons import
import { BsPatchCheckFill } from "react-icons/bs"





const Portfolio = () => {

  const data = [
    {
      id: 1,
      img: PROJECT1,
      title:"Practienda.com",
      iconStyle: <BsPatchCheckFill />,
      technologies: "HTML5 - CSS3 - Bootstrap - Javascript",
      demo: "https://practienda.com"
    },
    {
      id: 2,
      img: PROJECT2,
      title:"Agataccesories.com",
      IconStyle: "",
      technologies: "HTML5 - CSS3 - Bootstrap - Javascript",
      demo: "https://agataccesories.com.ar/"
    },
    {
      id: 3,
      img: PROJECT3,
      title:"To do list",
      IconStyle: "",
      technologies: "HTML5 - CSS3 - Bootstrap - Javascript",
      demo: "https://0lmc0.github.io/To-do-list/"
    },
    {
      id: 4,
      img: PROJECT4,
      title:"Gatsby + Graph.QL site [Still developing]",
      IconStyle: "",
      technologies: "React.Js - Gatsby.Js - GraphQL",
      demo: ""
    }
  ]

  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, img, title, technologies, demo, iconStyle}) =>{
            return(
              <article key={ id } className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={ img } alt={ title } />
              </div>
              <small>{ technologies }</small>
              <h3>{ title } {iconStyle}</h3>
              <div className="portfolio_item-cta">
              <a href={ demo } className="btn btn-primary" target="_blank" rel="noreferrer">Live demo...</a>
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