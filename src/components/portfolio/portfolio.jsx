import "./portfolio.css"
// import PROJECT1 from "../../assets/practiendaProject.png"
// import PROJECT2 from "../../assets/agataProject.png"


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">Github repo</a>
          <a href="https://github.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live demo...</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio