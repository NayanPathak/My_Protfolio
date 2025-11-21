import { motion } from "framer-motion";

export default function FreelanceProjects() {
  const freelanceProjects = [
    {
      title: "Project 1",
      details:
        "Details about project 1 go here. This layout allows for longer descriptions since the card spans the full width of the container.",
    },
    {
      title: "Project 2",
      details:
        "Details about project 2 go here. Perfect for showcasing complex case studies or detailed deliverables.",
    },
  ];

  return (
    <section
      id="freelance"
      className="w-full min-h-screen bg-[#0a0a0a] text-white py-20 px-6"
    >
      {/* Heading matching 'My Projects' style */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        💼 Freelance Projects
      </motion.h1>

      {/* Vertical Stack Layout (One below other) */}
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {freelanceProjects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="
              bg-[#111] 
              border border-gray-800 
              rounded-2xl p-8 md:p-10
              hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] 
              hover:bg-[#141414]
              transition-all duration-300
            "
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">
              {item.title}
            </h3>

            {item.details && (
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {item.details}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
