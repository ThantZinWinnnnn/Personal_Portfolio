import React from "react";
import { IconMouse } from "@tabler/icons-react";
import { Link } from "react-scroll";
import {motion} from "framer-motion"

const text = ["T", "H", "A", "N", "T", " ", "Z", "I", "N", " ", "W", "I", "N"];
const textContainer = {
  hidden:{opacity:0},
  visible:{
    opacity:1,
    transition :{
      staggerChildren:0.2,
      type:"spring",
      ease: [0.76, 0, 0.24, 1]
    }
  }
};

const textItem = {
  hidden:{opacity:0, y:40},
  visible:{
    opacity:1,
    y:0,
    transition:{
      delay:1,
      duration:1.5,
      type:"spring",
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

console.log("render intro")

const IntroText = () => {
  return (
    <div id="home" data-scroll data-scroll-speed="0.3" className="text-white h-screen flex items-center justify-center box-border ">
      <div className="flex flex-col gap-40 text-center mt-32 box-border w-full overflow-hidden justify-center">
        <div className="flex flex-col gap-10 sm:gap-14">
          <motion.h1 initial={{opacity:0,y:-50}} animate={{opacity:1,y:0,transition:{
            type:"spring",
            duration:1.8,
            ease: [0.76, 0, 0.24, 1]
          }}} className="md:text-2xl xl:text-8xl font-extrabold text-[#00bfff] font-poppins">
            Hey<span className="animate-wave-hand inline-block">👋</span>I am,
          </motion.h1>
          <motion.h2 initial={"hidden"} animate="visible" variants={textContainer} className="flex items-center justify-center overflow-hidden">
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
          <p className="uppercase text-[0.8rem] sm:text-base tracking-widest font-bold font-rubik">
            web developer based in myanmar
          </p>
        </div>
        
        <Link to="projects" spy={true}
            smooth={true}
            offset={-30}
            duration={1000}>
        <button className="mx-auto grow">
          <svg
            className="w-[50px] h-[55px] hover:text-[#00bfff]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g transform="translate(0 24) scale(1 -1)">
              <g stroke="currentColor" stroke-linejoin="round">
                <path d="M6 9a6 6 0 0 1 12 0v6a6 6 0 0 1-12 0V9Z" />
                <path
                  stroke-linecap="round"
                  d="M12 14v4"
                  className="animate-bounce "
                />
              </g>
            </g>
          </svg>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default IntroText;
