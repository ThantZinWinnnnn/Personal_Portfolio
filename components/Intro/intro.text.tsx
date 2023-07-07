import React from "react";
import { IconMouse } from "@tabler/icons-react";

const text = ["T", "H", "A", "N", "T", " ", "Z", "I", "N", " ", "W", "I", "N"];

const IntroText = () => {
  return (
    <section id="home" data-scroll data-scroll-speed="0.3" className="text-white h-screen flex items-center justify-center box-border ">
      <div className="flex flex-col gap-40 text-center mt-32 box-border w-full overflow-hidden justify-center">
        <div className="flex flex-col gap-10 sm:gap-14">
          <h1 className="md:text-2xl xl:text-8xl font-extrabold text-[#00bfff] font-poppins">
            Hey<span className="animate-wave-hand inline-block">👋</span>I am,
          </h1>
          <h2 className="flex items-center justify-center">
            {text.map((text, i) => (
              <span
                key={i}
                className="inline-block text-[2.5rem] sm:text-7xl md:text-8xl lg:text-8xl  whitespace-pre font-extrabold font-rubik "
              >
                {text}
              </span>
            ))}
          </h2>
          <p className="uppercase text-[0.8rem] sm:text-base tracking-widest font-bold font-rubik">
            web developer based in myanmar
          </p>
        </div>
        
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
      </div>
    </section>
  );
};

export default IntroText;
