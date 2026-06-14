// import { motion } from "framer-motion";

// export default function FreelanceProjects() {
//   // 1. STRICT DATA SCHEMA: Every object must follow this structure.
//   const freelanceProjects = [
//     {
//       title: "ShapePrep",
//       description: "ShapePrep is a full-stack EdTech platform designed to help students prepare for banking and government exams through structured courses, test series, and performance tracking.",
//       role: "Full Stack Developer",
//       technologies: "React, Node.js, MongoDB, Express",
//       features: "Course creation, Test series, Performance tracking, User management",
//       linkUrl: "https://shapeprep.com",
//       linkText: "ShapePrep",
//     },
//     {
//       title: "Project 2",
//       description: "Details about project 2 go here. Perfect for showcasing complex case studies or detailed deliverables.",
//       role: "Frontend Developer",
//       technologies: "Next.js, Tailwind CSS",
//       features: "Responsive UI, API integration",
//       // If you don't have a link yet, keep this empty so it doesn't render a broken href.
//       linkUrl: "",
//       linkText: "",
//     },
//     // To add Project 3, just copy the object structure above.
//   ];

//   return (
//     <section id="freelance" className="w-full min-h-screen bg-[#0a0a0a] text-white py-20 px-6">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl md:text-5xl font-bold text-center mb-16"
//       >
//         💼 Freelance Projects
//       </motion.h1>

//       <div className="flex flex-col gap-8 max-w-4xl mx-auto">
//         {freelanceProjects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-[#111] border border-gray-800 rounded-2xl p-8 md:p-10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:bg-[#141414] transition-all duration-300"
//           >
//             <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">
//               {project.title}
//             </h3>

//             <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
//               {/* Renders the main description */}
//               <p>{project.description}</p>

//               {/* 2. CONDITIONAL RENDERING: Only draws the blue labels if the data actually exists in the array */}
//               <div className="space-y-2 mt-4">
//                 {project.role && (
//                   <p><span className="text-blue-400">Role:</span> {project.role}</p>
//                 )}
                
//                 {project.technologies && (
//                   <p><span className="text-blue-400">Technologies:</span> {project.technologies}</p>
//                 )}
                
//                 {project.features && (
//                   <p><span className="text-blue-400">Features:</span> {project.features}</p>
//                 )}
                
//                 {project.linkUrl && (
//                   <p>
//                     <span className="text-blue-400">Link:</span>{" "}
//                     <a
//                       href={project.linkUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-300 hover:text-blue-200 underline underline-offset-4"
//                     >
//                       {project.linkText || "View Project"}
//                     </a>
//                   </p>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";

export default function FreelanceProjects() {
  // 1. STRICT DATA SCHEMA: Every object must follow this structure.
  const freelanceProjects = [
    {
      title: "ShapePrep",
      description: "ShapePrep is a full-stack EdTech platform designed to help students prepare for banking and government exams through structured courses, test series, and performance tracking.",
      role: "Full Stack Developer",
      technologies: "React, Node.js, MongoDB, Express",
      features: "Course creation, Test series, Performance tracking, User management",
      linkUrl: "https://shapeprep.com",
      linkText: "ShapePrep",
    },
    {
      title: "Project 2",
      description: "Details about project 2 go here. Perfect for showcasing complex case studies or detailed deliverables.",
      // YOU MUST FILL THESE IN FOR PROJECT 2 TO LOOK LIKE PROJECT 1
      role: "Frontend Developer", 
      technologies: "Next.js, Tailwind CSS", 
      features: "Responsive UI, API Integration", 
      linkUrl: "", // Leave blank if no link
      linkText: "",
    },
    // To add Project 3, just copy the object structure above.
  ];

  return (
    <section id="freelance" className="w-full bg-[#0a0a0a] text-white py-24 md:py-28 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        💼 Freelance Projects
      </motion.h1>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {freelanceProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#111] border border-gray-800 rounded-2xl p-8 md:p-10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:bg-[#141414] transition-all duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">
              {project.title}
            </h3>

            <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
              {/* Renders the main description */}
              <p>{project.description}</p>

              {/* 2. CONDITIONAL RENDERING: Only draws the blue labels if the data actually exists in the array */}
              <div className="space-y-2 mt-4">
                {project.role && (
                  <p><span className="text-blue-400">Role:</span> {project.role}</p>
                )}
                
                {project.technologies && (
                  <p><span className="text-blue-400">Technologies:</span> {project.technologies}</p>
                )}
                
                {project.features && (
                  <p><span className="text-blue-400">Features:</span> {project.features}</p>
                )}
                
                {project.linkUrl && (
                  <p>
                    <span className="text-blue-400">Link:</span>{" "}
                    <a
                      href={project.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 underline underline-offset-4"
                    >
                      {project.linkText || "View Project"}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}