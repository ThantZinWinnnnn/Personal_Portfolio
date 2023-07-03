"use client";
import React from "react";
import { IconSun } from "@tabler/icons-react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
const navLists = [
  {
    path: "home",
    name: "Home",
  },
  {
    path: "projects",
    name: "Projects",
  },
  {
    path: "contact",
    name: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-white text-sm fixed w-full top-0 z-50  backdrop-blur-3xl h-[48px] pt-2 px-6">
      <div className="flex items-center">WINN</div>
      <ul className="flex items-center gap-12 cursor-pointer">
        {navLists.map((nav, i) => (
          <ScrollLink key={i}
          activeClass="actve"
            to={nav.path}
            spy={true}
            smooth={true}
            offset={-30}
            duration={900}
            className="hover:cursor-pointer hover:text-green-600"
            activeStyle={{
              color:"#16a34a"
            }}
            style={{fontSize:14}}
          >
            {nav.name}
          </ScrollLink>
        ))}
        <li className="flex items-center ml-10">
          <IconSun />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
