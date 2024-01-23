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
          <button className="btn btn-github">
          <a
    href="https://www.github.com/"
    className="navbar-content"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="src/assets/icons8-github.svg"
      alt="Facebook Icon"
      width="32"
      height="32"
    />
  </a>
            Visit my GitHub</button>
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
              <p className="text-md">{item.description}</p>
              {/* <p className="text-sm portfolio-link">{item.link}</p> */}
              <button className="btn btn-primary">Live Website
              <a
    href="https://www.github.com/"
    className="navbar-content"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="src/assets/icons8-arrow-upper-right-24.png"
      alt="Arrow Icon"
      width="32"
      height="32"
    />
  </a>
              </button>
              <button className="btn-git">
  View on Github
  <a
    href="https://www.github.com/"
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
