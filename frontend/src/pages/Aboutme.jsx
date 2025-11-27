import { motion } from "framer-motion";
import TextPressure from "../components/TextPressure";
import ProfileCard from "../components/ProfileCard";


const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-[#0a0a0a] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
      >
        {/* Left side: Text + Animated heading */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="w-full h-[100px] sm:h-[140px] relative cursor-pointer z-10">
            <TextPressure
              text="Software Developer!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#00bfff"
              minFontSize={48}
            />
          </div>

          <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p>
              Hi, I'm{" "}
              <span className="text-blue-400 font-semibold">Nayan Pathak</span>,
              a passionate developer skilled in MERN, Flutter, and IoT. I love
              creating impactful products — from smart IoT systems to modern web
              platforms.
            </p>
            <p className="text-gray-400">
              I enjoy turning complex problems into simple, elegant solutions —
              and constantly learning new technologies that push creativity to
              the next level.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg shadow-blue-500/20">
              Know More
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/10UDl2_nzUE1RCS0zsypRsaNiN-rkKeIX/view?usp=drive_link",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-md font-medium transition duration-300"
            >
              Get Resume
            </button>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-0">
          <ProfileCard
            name="Nayan Pathak"
            title="Software Engineer"
            handle="ipathaknayan"
            status="Online"
            contactText="Contact Me"
            avatarUrl="../my-pic.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() =>
              window.open(
                "https://linktr.ee/nayanpathak",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
        </div>
      </motion.div>
    </section>
  );
};
export default AboutMe;
