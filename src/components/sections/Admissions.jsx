import { motion } from "framer-motion";

function Admissions() {
  return (
    <section className="admissions" id="admissions">
      <div className="admissions-content">

        <motion.p
          className="admissions-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ADMISSIONS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Begin your child's
          <span> journey.</span>
        </motion.h2>

        <motion.p
          className="admissions-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Take the first step towards a future filled with
          learning, growth, confidence and opportunity.
        </motion.p>

        <motion.a
          href="https://admission.tis.edu.in/"
          target="_blank"
          rel="noreferrer"
          className="admissions-button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Apply to TIS
          <span>↗</span>
        </motion.a>

        <motion.p
          className="admissions-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Boarding & Day School · Dehradun, India
        </motion.p>

      </div>
    </section>
  );
}

export default Admissions;