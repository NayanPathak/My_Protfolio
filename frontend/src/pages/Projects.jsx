import ChromaGrid from "../components/ChromaGrid/ChromaGrid";
import tripappImg from "../assets/tripapp.jpg";

const accentPalette = [
  { borderColor: "#7df9ff", gradient: "linear-gradient(145deg, #7df9ff, #000)" },
  { borderColor: "#4F46E5", gradient: "linear-gradient(210deg, #4F46E5, #000)" },
  { borderColor: "#10B981", gradient: "linear-gradient(165deg, #10B981, #000)" },
  { borderColor: "#F59E0B", gradient: "linear-gradient(195deg, #F59E0B, #000)" },
  { borderColor: "#EF4444", gradient: "linear-gradient(225deg, #EF4444, #000)" },
  { borderColor: "#8B5CF6", gradient: "linear-gradient(135deg, #8B5CF6, #000)" },
];

const projectsitems = [
  {
    title: "Trip App",
    Description: "Description for project one.",
    imageUrl: tripappImg,
    projectUrl: "https://github.com/NayanPathak/TripApp",
  },
  {
    title: "Project Two",
    Description: "Description for project two.",
    imageUrl: tripappImg,
    projectUrl: "https://github.com",
  },
  {
    title: "Project Three",
    Description: "Description for project three.",
    imageUrl: tripappImg,
    projectUrl: "https://github.com",
  },
  {
    title: "Project Four",
    Description: "Description for project four.",
    imageUrl: tripappImg,
    projectUrl: "https://github.com",
  },
  {
    title: "Project Five",
    Description: "Description for project five.",
    imageUrl: tripappImg,
    projectUrl: "https://github.com",
  },
  {
    title: "Project Six",
    Description: "Description for project six.",
    imageUrl: tripappImg,
    projectUrl: "https://github.com",
  },
];

const chromaItems = projectsitems.map((project, index) => {
  const accent = accentPalette[index % accentPalette.length];

  return {
    image: project.imageUrl,
    title: project.title,
    subtitle: project.Description,
    handle: "GitHub",
    borderColor: accent.borderColor,
    gradient: accent.gradient,
    url: project.projectUrl,
  };
});

const Projects = () => {
  return (
    <section className="w-full bg-[#0a0a0a] text-white py-24 md:py-28 px-4 sm:px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        ⚡ My Projects
      </h1>

      <ChromaGrid items={chromaItems} columns={3} rows={2} radius={280} />
    </section>
  );
};

export default Projects;
