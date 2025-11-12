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
    <section className="min-h-screen bg-[#0a0a0a] text-white pt-4 pb-4 px-6">
      {" "}
      <h1 className="text-4xl font-bold text-center mb-12">
        🚀 My Skills
      </h1>{" "}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {" "}
        {skills.map((skill, index) => (
          <StarBorder
            key={index}
            as="div"
            color="#00ffff"
            speed="4s"
            className="rounded-xl"
          >
            {" "}
            {skill}{" "}
          </StarBorder>
        ))}{" "}
      </div>{" "}
    </section>
  );
};
export default Skills;
