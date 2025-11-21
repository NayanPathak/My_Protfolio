import { motion } from "framer-motion";
import StarBorder from "../components/StarBorder";

const skills = [
  "Anchor CLI",
  "Blockchain",
  "C / C++",
  "CSS3",
  "Express.js",
  "Git / GitHub",
  "HTML5",
  "JavaScript (ES6+)",
  "Linux",
  "MongoDB (Mongoose ORM)",
  "Node.js",
  "Postman",
  "Python",
  "React Native",
  "React.js",
  "Redux & Redux Toolkit",
  "RESTful APIs",
  "Solana CLI",
  "Tailwind CSS",
];

const Skills = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        🚀 My Skills
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <StarBorder
              as="div"
              color="#00ffff"
              speed="4s"
              className="rounded-xl px-4 py-2"
            >
              <span className="text-sm sm:text-base font-medium tracking-wide">
                {skill}
              </span>
            </StarBorder>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
