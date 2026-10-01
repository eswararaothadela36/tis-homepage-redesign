function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="footer-logo-mark">T</span>

            <span>
              Tulas
              <small>International School</small>
            </span>
          </a>

          <p>
            Inspiring young minds through academic excellence,
            holistic development and meaningful experiences.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <a href="#about">About TIS</a>
          <a href="#academics">Academics</a>
          <a href="#campus">Campus Life</a>
          <a href="#admissions">Admissions</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Dehradun, Uttarakhand, India</p>
          <p>+91 9837983791</p>
          <p>info@tis.edu.in</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Tulas International School. All rights reserved.</p>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;