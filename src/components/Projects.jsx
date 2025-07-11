import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import spotify from "../assets/spotmock.jpg";
import shortmock from "../assets/shortmock.jpg";
import portmock from "../assets/portmock.jpg";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-black bg-white">
      <div className="max-w-[1100px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-1xl sm:text-4xl font-bold inline border-b-4 text-[#F3AD55] border-[#F3AD55]">
            Projects
          </p>
          <p className="text-1xl sm:text-2xl py-6">
            Check out some ways that I've learned new skills!
          </p>
        </div>

        {/* CONTAINER */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 ">
          {/* SPOTIFY GRID ITEM */}
          <div className="flex flex-col space-y-2">
            {/* PICTURE */}
            <RouterLink to="/spotify">
              <div
                style={{ backgroundImage: `url(${spotify})` }}
                className="hover:scale-105 shadow-lg shadow-[#E68A00] group container rounded-md flex justify-center text-center items-center mx-auto content-div hover:scale-1.02 transform transition-transform duration-200 ease-in-out "
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
                  <span className="text-m sm:text-xl font-bold text-white tracking-wider">
                    Behind Spotify
                  </span>
                  <div className="text-m sm:text-xl max-w-[200px] text-white">
                    Incorporating the Spotify API for user authentication and
                    user info
                  </div>
                </div>
              </div>
            </RouterLink>

            {/* CAPTION */}
            <div className="pt-4 flex flex-col items-center space-y-2">
              <div className="pr-8">
                <p className="text-m sm:text-2xl text-white font-bold">
                  Behind Spotify
                </p>
              </div>
              {/* React, HTML, CSS, JavaScript, Firebase */}
              <div className="flex justify-center space-x-2">
                <p className="cursor-default bg-[#FCF9DC] text-[#F3AD55] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-xs sm:text-s hover:bg-[#F3AD55] hover:text-[#FCF9DC] transition duration-300">
                  React
                </p>
                <p className="cursor-default bg-[#FCF9DC] text-[#F3AD55] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-xs sm:text-s hover:bg-[#F3AD55] hover:text-[#FCF9DC] transition duration-300">
                  Spotify API
                </p>
                <p className="cursor-default bg-[#FCF9DC] text-[#F3AD55] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-xs sm:text-s hover:bg-[#F3AD55] hover:text-[#FCF9DC] transition duration-300">
                  Firebase
                </p>
              </div>
            </div>
          </div>

          {/* PORTFOLIO GRID ITEM */}
          <div className="flex flex-col space-y-2">
            <RouterLink to="/portfolio">
              {/* PICTURE */}
              <div
                style={{ backgroundImage: `url(${portmock})` }}
                className="hover:scale-105 shadow-lg shadow-[#E68A00] group container rounded-md flex justify-center text-center items-center mx-auto content-div hover:scale-1.02 transform transition-transform duration-200 ease-in-out"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
                  <span className="text-m sm:text-xl font-bold text-white tracking-wider">
                    Personal Portfolio
                  </span>
                  <div className="text-m sm:text-xl max-w-[200px] text-white">
                    Getting creative with React and Tailwind CSS
                  </div>
                </div>
              </div>
            </RouterLink>

            {/* Caption */}
            <div className="pt-4 flex flex-col items-center space-y-2">
              <div className="pr-8">
                <p className="text-m sm:text-2xl text-[#F3AD55] font-bold">
                  Personal Portfolio
                </p>
              </div>
              {/* React, HTML, CSS, JavaScript, Firebase */}
              <div className="flex justify-center space-x-2">
                <p className="cursor-default bg-[#FCF9DC] text-[#F3AD55] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-xs sm:text-s hover:bg-[#F3AD55] hover:text-[#FCF9DC] transition duration-300">
                  React
                </p>
                <p className="cursor-default bg-[#FCF9DC] text-[#F3AD55] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-xs sm:text-s hover:bg-[#F3AD55] hover:text-[#FCF9DC] transition duration-300">
                  Firebase
                </p>
                <p className="cursor-default bg-[#FCF9DC] text-[#F3AD55] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-xs sm:text-s hover:bg-[#F3AD55] hover:text-[#FCF9DC] transition duration-300">
                  Tailwind CSS
                </p>
              </div>
            </div>
          </div>

          {/* SHORTENER GRID ITEM */}
          <div className="flex flex-col space-y-2">
            <RouterLink to="/shortener">
              {/* PICTURE */}
              <div
                style={{ backgroundImage: `url(${shortmock})` }}
                className="hover:scale-105 shadow-lg shadow-[#E68A00] group container rounded-md flex justify-center text-center items-center mx-auto content-div hover:scale-1.02 transform transition-transform duration-200 ease-in-out"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
                  <span className="text-m sm:text-2xl font-bold text-white tracking-wider">
                    Shorten Pls
                  </span>
                  <div className="text-m sm:text-xl max-w-[200px] text-white">
                    Using MongoDB database for storing and shortening links
                  </div>
                </div>
              </div>
            </RouterLink>

            {/* Caption */}
            <div className="pt-4 flex flex-col items-center space-y-2">
              <div className="pr-8">
                <p className="text-m sm:text-2xl text-[#F3AD55] font-bold">
                  Shorten Pls
                </p>
              </div>
              {/* React, HTML, CSS, JavaScript, Firebase */}
              <div className="flex justify-center space-x-2">
                <p className="cursor-default bg-[#FCF9DC] text-[#F3AD55] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-xs sm:text-s hover:bg-[#F3AD55] hover:text-[#FCF9DC] transition duration-300">
                  HTML
                </p>
                <p className="cursor-default bg-[#FCF9DC] text-[#F3AD55] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-xs sm:text-s hover:bg-[#F3AD55] hover:text-[#FCF9DC] transition duration-300">
                  CSS
                </p>
                <p className="cursor-default bg-[#FCF9DC] text-[#F3AD55] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-xs sm:text-s hover:bg-[#F3AD55] hover:text-[#FCF9DC] transition duration-300">
                  JS
                </p>
                <p className="cursor-default bg-[#FCF9DC] text-[#F3AD55] bg-opacity-70 text-opacity-80 px-2 py-1 rounded-full text-xs sm:text-s hover:bg-[#F3AD55] hover:text-[#FCF9DC] transition duration-300">
                  MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-16">
          <ScrollLink
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            <button className="bg-[#F3AD55] border-[#F3AD55] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-[#F3AD55] hover:text-[#F3AD55]">
              Back to Top
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Projects;
