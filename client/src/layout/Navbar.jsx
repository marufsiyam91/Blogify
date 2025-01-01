import React from "react";
import { NavLink } from "react-router-dom";
import { LuSun } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="w-full h-[90px] top-0 mx-auto flex items-center justify-center fixed bg-[#f5f9fdf8] dark:bg-[#181A1B] shadow-sm z-10">
      <div className="max-w-screen-xl w-full p-4 flex justify-between">
        <div className="flex items-center gap-14 ">
          <NavLink to={"/"}>
            <h2 className="text-[#131315] text-4xl dark:text-[#CBC6C0]">Blogify</h2>
          </NavLink>
          <div>
            <ul className="flex gap-10 dark:text-[#CBC6C0]">
              <li className="text-lg">
                <NavLink>Blog</NavLink>
              </li>
              <li className="text-lg">
                <NavLink>About Me</NavLink>
              </li>
              <li className="text-lg">
                <NavLink>Testimonials</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4 dark:text-[#CBC6C0]">
          {/* Toggle Dark Mode */}
          <span onClick={toggleDarkMode} className="text-3xl cursor-pointer transition rounded-full p-1 bg-[#2121214d] dark:bg-[#002433]">
            {darkMode ? <LuSun /> : <FaMoon />}
          </span>
          <span className="text-2xl">
            <IoSearch />
          </span>

          <button className="flex items-center gap-3 pl-3 pr-4 py-2 rounded-3xl bg-[#002433] text-white dark:text-[#CBC6C0]">
            <span className="text-xl">
              <FaTelegramPlane />
            </span>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

