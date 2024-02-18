import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="panels flex h-screen w-screen flex-none shrink-0 snap-start"
        id="home-id"
      >
        <h1
          className="mb-28 ml-28 flex w-fit items-end bg-gradient-to-r from-white to-blue-500 bg-clip-text text-9xl text-transparent contrast-100 saturate-150"
          id="home-id-text"
        >
          Hello,
          <br /> Traveller
        </h1>
      </div>
    </>
  );
};

export default Home;
