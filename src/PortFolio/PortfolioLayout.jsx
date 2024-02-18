import React, { useEffect, useRef, useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
import { Home, Header_new, About, Projects, Contact } from "./index.js";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import { ReactLenis } from "@studio-freight/react-lenis";

// import useScript from "./scriptValues.js";

const PortfolioLayout = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../script.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);
    // console.log(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // const runScript = useScript("p1");

  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // });

  const comp = useRef();
  const [activePage, setActivePage] = useState("home");
  const { contextSafe } = useGSAP(
    () => {
      let sections = gsap.utils.toArray(".panels");
      // console.log(sections[0].id);

      const tl = gsap.timeline();

      tl.from("#home-id-text", {
        xPercent: "100",
        ease: "expo",
        delay: 0.5,
        opacity: 0,
      });

      // const scroller = gsap.to(sections, {
      //   xPercent: -100 * (sections.length - 1),
      //   ease: "none", // <-- IMPORTANT!
      //   scrollTrigger: {
      //     trigger: ".main-container",
      //     pin: true,
      //     scrub: 1,
      //     // markers: true,
      //     // snap: 1 / (sections.length - 1),
      //     end: () => "+=" + document.querySelector(".panels").offsetHeight,
      //     // onEnter: () => console.log("enter"),
      //   },
      // });

      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: `#${section.id}`,
          // containerAnimation: scroller,
          start: "left center",
          end: "right center",
          // overwrite: "auto",
          markers: true,
          onEnter: () => setActivePage(section.id.slice(0, -3)),
          onEnterBack: () => setActivePage(section.id.slice(0, -3)),
          // id: "section-" + i,
          // onLeave: () => console.log("left " + section.id),
          // onLeaveBack: () => console.log("left back " + section.id),
        });
      });

      // ScrollTrigger.observe({
      //   target: window, // can be any element (selector text is fine)
      //   type: "scroll", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
      //   onUp: () => {},
      //   onDown: () => {},
      //   preventDefault: true,
      //   wheelSpeed: -1,
      // });

      gsap.from(".project-section", {
        // yPercent: 100,
        scale: 0,
        opacity: 0,
        // duration: 1,
        stagger: {
          each: 0.2,
          from: "random",
        },
        scrollTrigger: {
          trigger: "#projects-id",
          start: "left center",
          toggleActions: "restart pause resume pause",
          // end: "right center",
          // pin: ".pin-image-container",
          // containerAnimation: scroller,
          // markers: true,
          // overwrite: "auto",
        },
      });
    },
    { scope: comp },
  );

  const handleNavigation = contextSafe((e, i) => {
    e.preventDefault();
    let selectedSlide = e.target.getAttribute("href");
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `#${selectedSlide}-id`,
        // y: i * window.innerHeight,
      },
      ease: "power2.out",
      // overwrite: "auto",
    });
    // setActivePage(e.target.getAttribute("href"));
  });

  // console.log(parameters);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
      }}
    >
      <div
        className="min-w-screen main-main-container min-h-screen
        snap-y snap-mandatory overscroll-y-none"
        ref={comp}
      >
        <canvas className="webgl fixed -z-50"></canvas>
        <Header_new
          handleNavigation={handleNavigation}
          activePage={activePage}
        />
        {/* <Header/> */}
        <div className="main-container h-screen w-screen">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </ReactLenis>
  );
};

export default PortfolioLayout;
