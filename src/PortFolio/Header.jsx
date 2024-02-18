import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="z-50 flex h-20 w-full flex-none items-center justify-center">
        <nav className="flex list-none flex-wrap gap-x-16">
          <NavLink
            to={"#home-id"}
            className={({ isActive }) =>
              `${isActive ? "p-1.5 text-white" : "bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent"} text-2xl font-bold`
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"#about-id"}
            className={({ isActive }) =>
              `${isActive ? "p-1.5 text-white" : "bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent"} text-2xl font-bold`
            }
          >
            About
          </NavLink>

          <NavLink
            to={"#projects-id"}
            className={({ isActive }) =>
              `${isActive ? "p-1.5 text-white" : "bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent"} text-2xl font-bold`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to={"#contact-id"}
            className={({ isActive }) =>
              `${isActive ? "p-1.5 text-white" : "bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent"} text-2xl font-bold`
            }
          >
            Contact Me
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
