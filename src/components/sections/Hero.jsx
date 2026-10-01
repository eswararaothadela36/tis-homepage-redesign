import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <motion.p
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WELCOME TO TULAS INTERNATIONAL SCHOOL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Shaping <span>Global Leaders</span>
          <br />
          for a Brighter Future.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          A world-class boarding and day school in Dehradun,
          focused on academic excellence, holistic development,
          and lifelong learning.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a href="#admissions" className="hero-btn primary">
            Explore Admissions
          </a>

          <a href="#about" className="hero-btn secondary">
            Discover TIS
          </a>
        </motion.div>

      </div>

      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <strong>22+</strong>
        <span>Acres of<br />Campus</span>
      </motion.div>
    </section>
  );
}

export default Hero;