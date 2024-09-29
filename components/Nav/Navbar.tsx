"use client";
import React from "react";
import { IconSun, IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { navContainer, navItem } from "@/components/utils/anim";

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
    path: "about",
    name: "About",
  },
  {
    path: "contact",
    name: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav className="font-poppins flex items-center justify-between text-white text-sm fixed w-full top-0 z-50  backdrop-blur-md h-[48px] pt-2 px-6 lg:px-10 xl:px-12 2k:px-[10%]">
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        variants={navItem}
        className="flex items-center 2xl:text-2xl"
      >
        WINN
      </motion.div>
      <motion.div
        initial={"hidden"}
        animate={"visible"}
        variants={navContainer}
        className=" items-center gap-12 cursor-pointer hidden md:flex"
      >
        {navLists.map((nav, i) => (
          <ScrollLink
            key={i}
            activeClass="actve"
            to={nav.path}
            spy={true}
            smooth={true}
            offset={-30}
            duration={1000}
            className="hover:cursor-pointer hover:text-[#00bfff] lg:!text-base  2xl:!text-lg font-semibold backdrop-blur-md"
            activeStyle={{
              color: "#00bfff",
            }}
            // style={{fontSize:16,

            // }}
          >
            <motion.div variants={navItem}>{nav.name}</motion.div>
          </ScrollLink>
        ))}
        {/* <li className="flex items-center ml-10">
          <IconSun />
        </li> */}
      </motion.div>

      <Sheet>
        <SheetTrigger asChild>
          <button className="block sm:hidden">
            <IconMenu2 size={"2rem"} />
          </button>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-screen">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-10 justify-center items-center mt-40 font-poppins">
            {navLists.map((nav, i) => (
              <ScrollLink
                key={i}
                activeClass="actve"
                to={nav.path}
                spy={true}
                smooth={true}
                offset={-30}
                duration={900}
                className="hover:cursor-pointer hover:text-[#00bfff] !text-2xl font-semibold"
                activeStyle={{
                  color: "#00bfff",
                }}
                // style={{fontSize:16,

                // }}
              >
                <SheetClose>{nav.name}</SheetClose>
              </ScrollLink>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
