"use client";
import React from "react";
import Image from "next/image";

const Project = ({ indx }: ProjectProps) => {
  return (
    <div
      className={`h-fit overflow-hidden bg-gray-300 rounded-md  ${
        indx % 2
          ? "w-[calc(50%-20px)] text-black  pb-9"
          : "w-[calc(50%-20px)] text-blue-600"
      }}`}
    >
      <div className={`w-full  relative overflow-hidden group h-[350px]`}>
        <Image src={'/assets/auction_hd.png'} fill alt="auction image" style={{objectFit:'cover',}} />
      </div>
      <p className="">Auction Project which is the first project of my studying</p>
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
