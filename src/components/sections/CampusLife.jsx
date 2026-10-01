import { motion } from "framer-motion";

function CampusLife() {
  const campusItems = [
    {
      number: "01",
      title: "Sports",
      text: "Explore a wide range of sports that build teamwork, discipline and confidence.",
    },
    {
      number: "02",
      title: "Boarding Life",
      text: "A safe and supportive residential environment where students grow together.",
    },
    {
      number: "03",
      title: "Beyond Academics",
      text: "Discover creativity, leadership, culture and experiences beyond the classroom.",
    },
  ];

  return (
    <section className="campus" id="campus">
      <div className="campus-header">

        <motion.p
          className="campus-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          CAMPUS LIFE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Life beyond the
          <span> classroom.</span>
        </motion.h2>

        <motion.p
          className="campus-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          At TIS, every day is an opportunity to learn, explore,
          connect and create lasting memories.
        </motion.p>

      </div>

      <div className="campus-grid">
        {campusItems.map((item, index) => (
          <motion.div
            className="campus-card"
            key={item.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <span className="campus-number">
              {item.number}
            </span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

            <span className="campus-arrow">↗</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CampusLife;