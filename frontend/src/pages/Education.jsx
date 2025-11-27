import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      institution: "KIET Group of Institutions (AKTU, Lucknow)",
      degree: "Bachelor of Technology — Major in Computer Science",
      details: "Cumulative GPA: 7.5 / 10",
      duration: "2021 – 2025",
    },
    {
      institution: "St. Mary’s Inter College (CBSE Board)",
      degree: "Senior Secondary (12th)",
      details: "Percentage: 81%",
      duration: "2018 – 2019",
    },
    {
      institution: "St. Mary’s Inter College (CBSE Board)",
      degree: "Higher Secondary (10th)",
      details: "CGPA: 9.2 / 10",
      duration: "2016 – 2017",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        🎓 Education
      </motion.h1>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-[#111] border border-cyan-500/30 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
              <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 pr-8">
                {edu.institution}
              </h2>
              <span className="text-cyan-300 text-sm font-mono bg-cyan-900/20 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                {edu.duration}
              </span>
            </div>

            <p className="text-base md:text-lg text-gray-200 mt-2">
              {edu.degree}
            </p>
            <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-400 transition-colors">
              {edu.details}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Education;
