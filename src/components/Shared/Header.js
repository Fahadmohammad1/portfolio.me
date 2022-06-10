import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const line = "FAHAD BIN NUR";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.0,
        staggerChildren: 0.09,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div>
      <div class="navbar lg:px-5 lg:container mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#62F9D5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#about">About me</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <motion.h3
              className="load-screen--message text-primary text-xs lg:text-2xl"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {line.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.h3>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a
                href="#about"
                className="text-white border-b-2 border-[border-b-2 border-[#0A192F] hover:border-b-2 hover:border-[#62F9D5]"
              >
                About me
              </a>
            </li>

            <li>
              <a
                href="/"
                className="text-white hover:border-b-2 border-[#62F9D5]"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a
            href="/"
            class="btn btn-sm lg:btn-md btn-outline text-primary hover:bg-primary hover:text-[#0A192F]"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
