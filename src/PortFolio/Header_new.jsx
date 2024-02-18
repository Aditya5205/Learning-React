import React from "react";

const Header_new = ({ handleNavigation, activePage }) => {
  return (
    <>
      <header className="fixed z-50 flex h-20 w-full flex-none items-center justify-center">
        <nav className="flex list-none flex-wrap gap-x-16 ">
          <li
            className={`cursor-pointer text-2xl font-bold ${activePage === "home" ? "p-1.5 text-white" : " bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent"}`}
          >
            <a href="home" onClick={(e) => handleNavigation(e, 0)}>
              Home
            </a>
          </li>

          <li
            className={`cursor-pointer text-2xl font-bold ${activePage === "about" ? "p-1.5 text-white" : " bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent"}`}
            // onClick={() => handleNavigation("about-id")}
          >
            <a href="about" onClick={(e) => handleNavigation(e, 1)}>
              About
            </a>
          </li>

          <li
            className={`cursor-pointer text-2xl font-bold ${activePage === "projects" ? "p-1.5 text-white" : " bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent"}`}
          >
            <a href="projects" onClick={(e) => handleNavigation(e, 2)}>
              Projects
            </a>
          </li>

          <li
            className={`cursor-pointer text-2xl font-bold ${activePage === "contact" ? "p-1.5 text-white" : " bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent"}`}
          >
            <a href="contact" onClick={(e) => handleNavigation(e, 1)}>
              Contact Me
            </a>
          </li>
        </nav>
      </header>
    </>
  );
};

export default Header_new;
