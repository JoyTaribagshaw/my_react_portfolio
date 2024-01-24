export default function ContactMe() {
  return (
    <section id="Contact" className="contact-section">
      <div>
        {/* <p className="sub--title">Get In Touch</p> */}
        <h2>Contact Me</h2>
        <p className="text-lg">
        If you have an application you are interested in developing, a feature that you need built or a project that needs coding. <br /> I’d love to help with it!
        </p>
      </div>
      <form className="contact-form-container" method="post" action="https://formspree.io/f/xzbndpzw">
        <div className="container">
          <label htmlFor="first-name" className="contact-label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              placeholder="John"
              className="contact-input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact-label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              placeholder="Doe"
              className="contact-input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact-label">
            <span className="text-md">Email</span>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="contact-input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact-label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              placeholder="+233207658723"
              className="contact-input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact-label">
          <span className="text-md">Message</span>
          <textarea
            className="contact-input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact-form-btn">Get In Touch</button>
        </div>
      </form>
    </section>
  );
}