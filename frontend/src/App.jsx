import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import FadeInSection from "./components/FadeInSection";
import AboutMe from "./pages/Aboutme";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Freelance_Project from "./pages/Freelance_Project";
import ContactForm from "./pages/Contact_Me";

const SplashCursor = lazy(() => import("./components/SplashCursor"));

const NAV_SCROLL_OFFSET = 80;

function scrollToSectionEl(ref) {
  const el = ref.current;
  if (!el) return;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const top =
    el.getBoundingClientRect().top +
    window.scrollY -
    NAV_SCROLL_OFFSET;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

export default function App() {
  const aboutRef = useRef(null);
  const freelanceRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const [showSplashCursor, setShowSplashCursor] = useState(false);

  const scrollToSection = (ref) => scrollToSectionEl(ref);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    setShowSplashCursor(!reducedMotion && !coarsePointer);
  }, []);

  return (
    <>
      {showSplashCursor && (
        <Suspense fallback={null}>
          <SplashCursor
            SIM_RESOLUTION={64}
            DYE_RESOLUTION={512}
            PRESSURE_ITERATIONS={12}
            SHADING={false}
          />
        </Suspense>
      )}
      <div className="w-screen fixed inset-0 -z-10 bg-[#0a0a0a]"></div>

      <div className="relative z-10 text-white">
        <Navbar
          onAboutClick={() => scrollToSection(aboutRef)}
          onProjectClick={() => scrollToSection(projectRef)}
          onSkillsClick={() => scrollToSection(skillsRef)}
          onEducationClick={() => scrollToSection(educationRef)}
        />

        <FadeInSection
          ref={aboutRef}
          isHero
          className="min-h-screen flex items-center justify-center"
        >
          <AboutMe />
        </FadeInSection>

        <FadeInSection ref={freelanceRef}>
          <Freelance_Project />
        </FadeInSection>

        <FadeInSection ref={projectRef}>
          <Projects />
        </FadeInSection>

        <FadeInSection ref={skillsRef}>
          <Skills />
        </FadeInSection>

        <FadeInSection ref={educationRef}>
          <Education />
        </FadeInSection>

        <FadeInSection>
          <ContactForm />
        </FadeInSection>
      </div>
    </>
  );
}
