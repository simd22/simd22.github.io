import React from "react";
import Projects from "./Projects";
import { Link as ScrollLink } from "react-scroll";
import bitmoji from "../assets/bitmoji.png";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen pt-[60px] bg-white">
      {/* Container */}
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col justify-center h-full md:flex-row md:items-center">
        {/* TEXT */}
        <div className="max-w-[650px] md:flex flex-col">
          <h2 className="text-1xl sm:text-4xl font-bold text-[#FCA734]">
            Hi, I'm Simeon{" "}
          </h2>
          <div className="text-1xl sm:text-4xl text-[#FABE4E]">
            <Typewriter
              className="z-0"
              options={{
                strings: ["Learner", "Leader", "Explorer"],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </div>
          <p className="sm:text-2xl py-4 ">
            I recently graduated from Brown University as a student-athlete and
            am returning for a Fifth Year Master's in Computer Science. I'm
            passionate about solving big picture challenges to drive excellence!
          </p>
          <div className="flex">
            <ScrollLink
              activeClass="active"
              to="projects"
              smooth={true}
              duration={500}
            >
              <button className="bg-[#F3AD55] border-[#F3AD55] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-[#F3AD55] hover:text-[#F3AD55]">
                See Projects
              </button>
            </ScrollLink>
          </div>
        </div>

        {/* IMAGE */}
        <div className="md:w-1/2 mt-4 md:mt-0 text-center">
          <img
            src={bitmoji}
            alt="Headshot"
            className="mx-auto w-60 h-60 md:w-80 md:h-80"
          />
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default Home;
