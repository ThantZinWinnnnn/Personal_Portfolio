import React from "react";
import { IconMouse } from "@tabler/icons-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { developerText } from "@/components/utils/anim";

const text = ["T", "H", "A", "N", "T", " ", "Z", "I", "N", " ", "W", "I", "N"];
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      staggerChildren: 0.1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const textItem = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1.6,
      ease: "easeInOut",
    },
  },
};

const IntroText = () => {
  return (
    <div
      id="home"
      data-scroll
      data-scroll-speed="0.3"
      className="text-white h-screen flex items-center justify-center box-border "
    >
      <div className="flex flex-col gap-40 text-center mt-32 box-border w-full overflow-hidden justify-center">
        <div className="flex flex-col gap-10 sm:gap-14 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                duration: 2,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            className="md:text-2xl xl:text-8xl font-extrabold text-[#00bfff] font-poppins"
          >
            Hey<span className="animate-wave-hand inline-block">👋</span>I am,
          </motion.h1>
          <motion.h2
            initial={"hidden"}
            animate="visible"
            variants={textContainer}
            className="flex items-center justify-center overflow-hidden"
          >
            {text.map((text, i) => (
              <motion.span
                variants={textItem}
                key={i}
                className="inline-block text-[2.5rem] sm:text-7xl md:text-8xl lg:text-8xl  whitespace-pre font-extrabold font-rubik "
              >
                {text}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            initial={"hidden"}
            animate={"visible"}
            variants={developerText}
            className="uppercase text-[0.8rem] sm:text-base tracking-widest font-bold font-rubik"
          >
            web developer based in myanmar
          </motion.p>
        </div>

        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-30}
          duration={1000}
        >
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 2,
                type: "spring",
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            className="mx-auto grow"
          >
            <svg
              className="w-[50px] h-[55px] hover:text-[#00bfff]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g transform="translate(0 24) scale(1 -1)">
                <g stroke="currentColor">
                  <path d="M6 9a6 6 0 0 1 12 0v6a6 6 0 0 1-12 0V9Z" />
                  <path d="M12 14v4" className="animate-bounce " />
                </g>
              </g>
            </svg>
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default IntroText;
