import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projectsAnimation = () => {
  const projectRef = useRef();

  useGSAP(
    () => {
      const photos = gsap.utils.toArray(".photo:not(:first-child)");

      gsap.set(photos, { yPercent: 100 });

      const photosAnimation = gsap.to(photos, {
        yPercent: 0,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom top",
        pin: ".pin-image-container",
        // animation: photosAnimation,
        markers: true,
        // pinSpacing: false,
        scrub: true,
      });
    },
    { scope: projectRef },
  );

  return (
    <>
      <div
        className="panels projects-class flex h-screen w-screen shrink-0 snap-start flex-col justify-center bg-slate-600"
        id="projects-id"
        ref={projectRef}
      >
        <div className=" h-1/3 w-full flex-none"></div>
        <div className="mb-16 flex h-1/2 w-full justify-center">
          <div className=" flex w-3/4 rounded-xl bg-slate-400/50 p-6">
            <div className="gallery h-fit w-1/2">
              <div className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-3xl font-bold text-transparent">
                Project Title
              </div>
              <div className="mr-2 mt-4 p-1">
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
              </div>
              <div className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-3xl font-bold text-transparent">
                Project Title 2
              </div>
              <div className="mr-2 mt-4 p-1">
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
              </div>
              <div className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-3xl font-bold text-transparent">
                Project Title 3
              </div>
              <div className="mr-2 mt-4 p-1">
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
              </div>
            </div>
            <div className="pin-image-container flex h-full w-1/2 items-center justify-center">
              <div className="photo absolute z-0 h-2/3 w-4/5 rounded-xl bg-red-500">
                Image1
              </div>
              <div className="photo absolute z-10 h-2/3 w-4/5 rounded-xl bg-green-500">
                Image2
              </div>
              <div className="photo absolute z-20 h-2/3 w-4/5 rounded-xl bg-cyan-500">
                Image3
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projectsAnimation;
