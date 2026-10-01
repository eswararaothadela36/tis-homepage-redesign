import { motion } from "framer-motion";

function Academics() {
  const programs = [
    {
      number: "01",
      title: "CBSE Curriculum",
      text: "A strong academic foundation designed to develop knowledge, curiosity and independent thinking.",
    },
    {
      number: "02",
      title: "Holistic Learning",
      text: "Students learn beyond textbooks through activities, projects, sports and creative experiences.",
    },
    {
      number: "03",
      title: "Future Ready",
      text: "We encourage leadership, innovation, communication and skills needed for a changing world.",
    },
  ];

  return (
    <section className="academics" id="academics">
      <div className="academics-header">

        <motion.p
          className="academics-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ACADEMICS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Learning with
          <span> purpose.</span>
        </motion.h2>

        <motion.p
          className="academics-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Our academic approach combines strong fundamentals with
          creativity, collaboration and real-world learning.
        </motion.p>

      </div>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <motion.div
            className="program-card"
            key={program.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <span className="program-number">
              {program.number}
            </span>

            <h3>{program.title}</h3>

            <p>{program.text}</p>

            <span className="program-arrow">↗</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Academics;