import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.jsx";
import Hello from "../components/HelloSection.jsx";

function HomePage() {
  return (
    <>
      <Hello />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 ml-8 mr-8 text-left gap-6 h-auto">
        <div className="bg-section p-6 rounded-2xl ">
          <h2 className="mb-3 font-sans font-light tracking-widest text-(--color-charcoal) gap-8">
            A LITTLE ABOUT ME
          </h2>
          <h1 className="w-fit relative text-7xl font-serif font-normal pb-6 mb-5 h-auto after:content-[''] after:w-24 after:h-1 after:left-0 after:bottom-0 after:absolute after:bg-(--color-dark-tan)">
            About Me
          </h1>
          <p className="text-3xl font-serif font-[1] mb-4 mt-2 ">
            I'm interested in learning things, learning how things work, and
            figuring out what comes next.
          </p>
          <p className="font-sans font-extralight">
            I am a Software Engineer with 3 years of professional experience
            eager to contribute innovative solutions and technical expertise to
            software development projects. Skilled in the SDLC, SW development
            I&T, automation, and interdisciplinary team collaboration. I have
            programming experience in Java, Python, Shell, and others. Highly
            motivated, with a demonstrated ability to learn quickly and apply
            new technologies effectively. I am a team player dedicated to
            continuous improvement and professional growth.
          </p>
        </div>
        <div>
          <section className="relative flex items-start justify-center">
            <div className="absolute w-54 h-54 bg-(--color-dark-tan) opacity-30"></div>
            <div className="aspect-2/3 w-100">
              <img
                src="IMG_1115.JPG"
                className="w-full h-full rounded-3xl object-contain"
              ></img>
            </div>
          </section>
        </div>
        <div className="p-6 pt-12 pl-24 w-auto h-auto rounded-xl col-start-1 bg-(--color-section) relative flex-col">
          <img
            src="grad_cap.png"
            alt="A emote of a graduation cap."
            className="h-16 absolute left-3 top-8"
          />
          <p className="text-sm uppercase tracking-[0.2em] content-center text-(--color-charcoal)">
            Education
          </p>
          <h2 className="text-xl font-medium mt-3 w-auto ">
            B.S. in Computer Science
          </h2>
          <p className="mt-1 w-auto h-auto font-extralight">
            Texas Tech University
          </p>
        </div>
        <div className="p-6 pt-12 pl-24 w-auto h-auto rounded-xl bg-(--color-section) relative flex-col">
          <img
            src="Compass.png"
            alt="A emote of a compass."
            className="h-16 absolute left-3 top-8"
          />
          <p className="text-sm uppercase tracking-[0.2em] content-center text-(--color-charcoal)">
            Research Interests
          </p>
          <h2 className="text-xl font-medium mt-3 w-auto ">
            Artificial Intillegence • Finance
          </h2>
          <p className="mt-1 w-auto h-auto font-extralight">
            Technology • Problem Solving • Continuous Learning
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
