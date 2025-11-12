import { useRef } from "react";
import SplashCursor from "./components/SplashCursor";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/Aboutme";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SplashCursor />
      <div className="w-screen fixed inset-0 -z-10 bg-[#0a0a0a]"></div>

      <div className="relative z-10 text-white">
        <Navbar
          onAboutClick={() => scrollToSection(aboutRef)}
          onProjectClick={() => scrollToSection(projectRef)}
          onSkillsClick={() => scrollToSection(skillsRef)}
          onEducationClick={() => scrollToSection(educationRef)}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key="about"
            ref={aboutRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex items-center justify-center"
          >
            <AboutMe />
          </motion.div>

          <motion.div
            key="projects"
            ref={projectRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex items-center justify-center"
          >
            <Projects />
          </motion.div>

          <motion.div
            key="skills"
            ref={skillsRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex items-center justify-center"
          >
            <Skills />
          </motion.div>

          <motion.div
            key="education"
            ref={educationRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex items-center justify-center"
          >
            <Education />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
