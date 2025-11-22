export default function Navbar({
  onAboutClick,
  onProjectClick,
  onSkillsClick,
  onEducationClick,
}) {
  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-gray-700 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-white">Nayan</h1>
        <div className="flex gap-6 text-gray-300 text-sm">
          <button
            onClick={onAboutClick}
            className="hover:text-white transition"
          >
            About
          </button>
          <button
            onClick={onProjectClick}
            className="hover:text-white transition"
          >
            Projects
          </button>
          <button
            onClick={onSkillsClick}
            className="hover:text-white transition"
          >
            Skills
          </button>
          <button
            onClick={onEducationClick}
            className="hover:text-white transition"
          >
            Education
          </button>
        </div>
      </div>
    </nav>
  );
}
