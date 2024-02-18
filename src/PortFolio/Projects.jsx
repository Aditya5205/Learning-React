import React, { useRef, useState } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectRef = useRef();
  const [isHover, setIsHover] = useState("");

  return (
    <>
      <div
        className="panels projects-class flex h-screen w-screen shrink-0 snap-start items-end justify-center"
        id="projects-id"
        ref={projectRef}
      >
        <div className="mb-12 flex h-1/2 w-3/4 gap-4 rounded-xl bg-slate-400/50 p-4 text-white">
          <div
            className={`project-section flex w-full flex-col text-balance rounded-xl bg-gradient-to-r from-sky-300/80 to-blue-500/80 p-3 text-center hover:bg-blue-700`}
            onMouseEnter={() => setIsHover("p1")}
            onMouseLeave={() => setIsHover("")}
          >
            <div className="text-3xl font-bold ">Personal PortFolio</div>
            <p className="mt-5 flex grow justify-center p-1">
              My portfolio is a visual journey through my professional
              endeavors. It's a snapshot of the projects that define my
              expertise and creative vision. Explore, be inspired.
            </p>
            {isHover === "p1" && (
              <a
                href=""
                className="bg-github_icon h-10 w-10 rounded-full bg-white bg-cover bg-center bg-no-repeat p-1"
              ></a>
            )}
          </div>
          <div
            className="project-section flex w-full flex-col text-balance rounded-xl bg-gradient-to-r from-sky-300/80 to-blue-500/80 p-3 text-center hover:bg-blue-700"
            onMouseEnter={() => setIsHover("p2")}
            onMouseLeave={() => setIsHover("")}
          >
            <div className=" text-3xl font-bold ">Game Matrix</div>
            <p className="mt-5 flex grow justify-center p-1">
              A Game Recommendation Website consists of over 15,000 games to
              recommend from. Also get to know what other users are playing.
            </p>
            {isHover === "p2" && (
              <a
                href="https://github.com/Aditya5205/Game-recommendation-frontend.git"
                className="bg-github_icon h-10 w-10 rounded-full bg-white bg-cover bg-center bg-no-repeat p-1"
              ></a>
            )}
          </div>
          <div
            className="project-section flex w-full flex-col text-balance rounded-xl bg-gradient-to-r from-sky-300/80 to-blue-500/80 p-3 text-center hover:bg-blue-700"
            onMouseEnter={() => setIsHover("p3")}
            onMouseLeave={() => setIsHover("")}
          >
            <div className="text-3xl font-bold ">Game Recommendation Model</div>
            <p className="mt-5 flex grow justify-center p-1">
              A Machine Leaning model built in python to recommend similiar
              games based on the input of the user.
            </p>
            {isHover === "p3" && (
              <a
                href="https://github.com/Aditya5205/ML-Project-Game-Recommendation.git"
                className="bg-github_icon h-10 w-10 rounded-full bg-white bg-cover bg-center bg-no-repeat p-1"
              ></a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
