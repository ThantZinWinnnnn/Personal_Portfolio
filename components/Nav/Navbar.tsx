"use client";
import React from "react";
import { IconSun } from "@tabler/icons-react";
const navLists = [
  {
    path: "",
    name: "Home",
  },
  {
    path: "",
    name: "Projects",
  },
  {
    path: "",
    name: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-white text-sm fixed w-full top-0 z-50  backdrop-blur-3xl h-[48px] pt-2 px-6">
      <div className="flex items-center">WINN</div>
      <ul className="flex items-center gap-12 cursor-pointer">
        {navLists.map((nav, i) => (
          <li key={i} className="hover:text-green-600">
            {nav.name}
          </li>
        ))}
        <li className="flex items-center ml-10">
          <IconSun />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
