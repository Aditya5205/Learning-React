import React from "react";

const About = () => {
  return (
    <section
      className="panels horizontal-panels about-class flex h-screen w-screen flex-none shrink-0 snap-start items-center justify-start"
      id="about-id"
    >
      <div className="center ml-28 mt-16 h-2/3 w-1/3 text-balance rounded-xl bg-slate-400/50 p-4 text-center text-3xl text-white">
        <p>
          <span className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
            Hey, This is Aditya Singh
          </span>
          <br />
          <br />I am a aspiring software developer.
        </p>
        <p>
          I have worked on different web technologies such as <br />
          <b>Reactjs</b>,<b> Vuejs</b> <br />
          and also know a thing or two about <br />
          <b>Python and Machine Learning.</b>
        </p>
      </div>
    </section>
  );
};

export default About;
