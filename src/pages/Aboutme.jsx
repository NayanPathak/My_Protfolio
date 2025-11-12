import TextPressure from "../components/TextPressure";
import ProfileCard from "../components/ProfileCard";
const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-items-normal px-16 md:px-64 py-16 gap-1"
    >
      {" "}
      {/* Left side: Text + Animated heading */}{" "}
      <div className="w-full md:w-1/2 space-y-6 px-8">
        {" "}
        <div style={{ width: "100%", height: "140px", position: "relative" }}>
          {" "}
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
            minFontSize={108}
          />{" "}
        </div>{" "}
        <p className="text-gray-300 text-lg leading-relaxed">
          {" "}
          Hi, I'm{" "}
          <span className="text-blue-400 font-semibold">Nayan Pathak</span>, a
          passionate developer skilled in MERN, Flutter, and IoT. I love
          creating impactful products — from smart IoT systems to modern web
          platforms.{" "}
        </p>{" "}
        <p className="text-gray-400">
          {" "}
          I enjoy turning complex problems into simple, elegant solutions — and
          constantly learning new technologies that push creativity to the next
          level.{" "}
        </p>{" "}
        <div className="flex gap-4 py-16">
          {" "}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition">
            {" "}
            Know More{" "}
          </button>{" "}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition ">
            {" "}
            Get Resume{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* Right side: Image */}{" "}
      <div className="w-full md:w-1/2 flex justify-end">
        {" "}
        <ProfileCard
          name="Nayan Pathak"
          title="Software Engineer"
          handle="ipathaknayan"
          status="Online"
          contactText="Contact Me"
          avatarUrl="./src/assets/my-pic.jpg"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() =>
            window.open(
              "https://linktr.ee/nayanpathak",
              "_blank",
              "noopener,noreferrer"
            )
          }
        />{" "}
        ;{" "}
      </div>{" "}
    </section>
  );
};
export default AboutMe;
