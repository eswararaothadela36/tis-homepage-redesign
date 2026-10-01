import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">

        <motion.p
          className="about-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ABOUT TULAS INTERNATIONAL SCHOOL
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Education that goes
          <span> beyond classrooms.</span>
        </motion.h2>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Tulas International School is a leading boarding and day school
          in Dehradun, providing students with an environment where
          academic excellence, creativity, leadership and personal growth
          come together.
        </motion.p>

        <div className="about-stats">

          <div className="about-stat">
            <strong>2012</strong>
            <span>Established</span>
          </div>

          <div className="about-stat">
            <strong>22+</strong>
            <span>Acres Campus</span>
          </div>

          <div className="about-stat">
            <strong>16+</strong>
            <span>Olympic Sports</span>
          </div>

          <div className="about-stat">
            <strong>6:1</strong>
            <span>Student Teacher Ratio</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;