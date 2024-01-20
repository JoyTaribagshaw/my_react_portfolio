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
          <button className="btn btn-github">Visit my GitHub</button>
        </div>
      </div>
      <div className="portfolio-section-container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="skills-section-card">
            <div className="portfolio-section-card">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div>
              <h3 className="portfolio-section-title">{item.title}</h3>
              <p className="text-md">{item.description}</p>
              <p className="text-sm portfolio-link">{item.link}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
