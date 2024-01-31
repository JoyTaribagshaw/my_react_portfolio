import React from "react";
import { Link } from "react-scroll";

export default function HeroSection() {
  return(
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
<p className="section-title">Hello, I'm Joy! 👋</p>
<h1 className="hero-section-title">
<span className="hero-section-title-color">Full-Stack</span>{" "}
<br />
Developer
</h1>
<p className="hero-section-description">
I'm a dynamic Full-stack developer ready to bring your ideas to life! Let's collaborate on something incredible.<br />
Whether you have a project in mind or just want to chat possibilities, I'm here for it. Let's connect and start building amazing things together!</p>
        </div>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="btn btn-primary">Get In Touch</button>
        </Link>      </div>
<div className="hero-section-img">
<img src="./src/assets/-bsb65x.jpg" alt="Hero Section Image" />
</div>
    </section>
  )
}