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
    <section className="min-h-screen bg-[#0a0a0a] text-white py-16 px-6">
      {" "}
      <h1 className="text-4xl font-bold text-center mb-12">
        ⚡ My Projects
      </h1>{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {" "}
        {projectsitems.map((project, index) => (
          <ElectricBorder
            key={index}
            color="#7df9ff"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            {" "}
            <div className="bg-[#111] hover:bg-[#141414] transition-all duration-300 rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col items-center">
              {" "}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4 border border-[#222]"
              />{" "}
              <h2 className="text-2xl font-semibold mb-2 text-center">
                {" "}
                {project.title}{" "}
              </h2>{" "}
              <p className="text-gray-400 text-center mb-4">
                {" "}
                {project.Description}{" "}
              </p>{" "}
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-[#7df9ff] text-black font-semibold px-5 py-2 rounded-xl hover:bg-[#00e5ff] transition-all duration-300"
              >
                {" "}
                View Project{" "}
              </a>{" "}
            </div>{" "}
          </ElectricBorder>
        ))}{" "}
      </div>{" "}
    </section>
  );
};
export default Projects;
