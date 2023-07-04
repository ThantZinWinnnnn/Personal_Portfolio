"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {IconWorldWww} from "@tabler/icons-react"

const Project = ({ indx }: ProjectProps) => {
  return (
    <div
      className={` h-fit mx-auto overflow-hidden bg-[#223148] rounded-md text-white pb-4 ${
        indx % 2
          ? " w-[90%] sm:w-[85%]  lg:w-[calc(50%-20px)] text-black  pb-9"
          : "w-[90%] sm:w-[85%] lg:w-[calc(50%-20px)] text-blue-600"
      }}`}
    >
        <div className="w-full group relative overflow-hidden h-[200px] sm:h-[450px] lg:h-[350px] cursor-pointer">
        <div className="h-full w-full flex items-center justify-center backdrop-blur-md group-hover:opacity-100 opacity-0 absolute z-40 transition-all duration-500">
          <button className="text-white py-3 border-[1px] border-[#11122B] bg-[#11122B] px-3 rounded-full flex gap-4 hover:bg-transparent hover:text-[#11122B] transition-all duration-300">Explore Project <IconWorldWww/></button>      
        </div>
          <Image
            src={"/images/auction_hd.png"}
            fill
            alt="auction image"
            style={{ objectFit: "cover" }}
          />
        </div>
     

      <h3 className="sm:text-[1.3rem] lg:text-xl pt-2 pl-6 font-bold">Auction Project</h3>
      <p className="pt-2 px-6 sm:text-lg lg:text-base font-medium">
        Auction Project which is the first project of my studying
      </p>
    </div>
  );
};

export default Project;

type ProjectProps = {
  // image:string,
  // title:string,
  // link:string,
  indx: number;
};
