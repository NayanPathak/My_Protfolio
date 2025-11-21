import { motion } from "framer-motion";
import ElectricBorder from "../components/ElectricBorder";

const projectsitems = [
  {
    title: "Project One",
    Description: "Description for project one.",
    imageUrl: "./src/assets/project1.jpg",
    projectUrl: "https://github.com",
  },
  {
    title: "Project Two",
    Description: "Description for project two.",
    imageUrl: "./src/assets/project1.jpg",
    projectUrl: "https://github.com",
  },
  {
    title: "Project Three",
    Description: "Description for project three.",
    imageUrl: "./src/assets/project1.jpg",
    projectUrl: "https://github.com",
  },
  {
    title: "Project Four",
    Description: "Description for project four.",
    imageUrl: "./src/assets/project1.jpg",
    projectUrl: "https://github.com",
  },
  {
    title: "Project Five",
    Description: "Description for project five.",
    imageUrl: "./src/assets/project1.jpg",
    projectUrl: "https://github.com",
  },
  {
    title: "Project Six",
    Description: "Description for project six.",
    imageUrl: "./src/assets/project1.jpg",
    projectUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4 sm:px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        ⚡ My Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-10xl mx-auto">
        {projectsitems.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16, height: "100%" }}
            >
              <div className="bg-[#111] h-full hover:bg-[#141414] transition-all duration-300 rounded-2xl overflow-hidden shadow-lg p-5 flex flex-col items-center">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-5 border border-[#222]"
                />
                <h2 className="text-2xl font-semibold mb-2 text-center">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-center mb-6 text-sm  grow">
                  {project.Description}
                </p>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#7df9ff] text-black font-bold px-5 py-3 rounded-xl hover:bg-[#00e5ff] hover:shadow-[0_0_15px_rgba(125,249,255,0.4)] transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </ElectricBorder>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
