import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio-section" id="MyPortfolio">
      <div className="portfolio-container-box">
        <div className="portfolio-container">
          <p className="sub-title">Recent Projects</p>
          <h2 className="section-heading">My Portfolio</h2>
        </div>
        <div>
          
          <a 
    href="https://github.com/JoyTaribagshaw/"
    className="navbar-content"
    target="_blank"
    rel="noreferrer"
  >
    <button className="btn btn-github">
    <img
      src="src/assets/icons8-github.svg"
      alt="Facebook Icon"
      width="32"
      height="32"
    />
    Visit my GitHub</button>
  </a>
        </div>
      </div>
      <div className="portfolio-section-container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="skills-section-card">
            <div className="portfolio-section-card">
              <img src={item.src} alt="Placeholder" className="project-img" />
            </div>
            <div>
              <h3 className="portfolio-section-title">{item.title}</h3>
              <h4>{item.date}</h4>
              <p className="text-md">{item.description}</p>
              <p className="skills-section-description skills">
  <span className="language skill">{item.language1}</span>
  <span className="language skill">{item.language2}</span>
  <span className="language skill">{item.language3}</span>
</p>
{/* <p className="text-sm portfolio-link">{item.link}</p> */}
              
              <a
              
    href="https://github.com/JoyTaribagshaw"
    className="navbar-content"
    target="_blank"
    rel="noreferrer"
  >
    <button className="button-git">{item.link}
    <img
      src="src/assets/icons8-arrow-upper-right-24.png"
      alt="Arrow Icon"
      width="32"
      height="32"
    />
    </button>
  </a>
              
              <button className="button-demo">
              {item.demo}
  <a
    href="https://joytaribagshaw.github.io/module-1-capstone-project/"
    className="navbar-content"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="src/assets/icons8-github.svg"
      alt="GitHub Icon"
      width="32"
      height="32"
    />
  </a>
</button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
