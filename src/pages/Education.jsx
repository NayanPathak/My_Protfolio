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
      details: "Percentage: 74.8%",
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
    <section className="min-h-screen bg-[#0a0a0a] text-white pt-0 pb-4 px-6">
      {" "}
      <h1 className="text-5xl font-bold text-center mb-10">
        🎓 Education
      </h1>{" "}
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {" "}
        {education.map((edu, index) => (
          <div
            key={index}
            className="relative bg-[#111] border border-cyan-500/30 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            {" "}
            <h2 className="text-2xl font-semibold text-cyan-400">
              {" "}
              {edu.institution}{" "}
            </h2>{" "}
            <p className="text-lg text-gray-300 mt-2">{edu.degree}</p>{" "}
            <p className="text-sm text-gray-400 mt-1">{edu.details}</p>{" "}
            <span className="absolute top-6 right-6 text-cyan-300 text-sm font-medium">
              {" "}
              {edu.duration}{" "}
            </span>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
};
export default Education;
