import React from "react";
import Image from "next/image";
import ProfileButton from "./profile.button";
import {IconMail,IconDownload} from  "@tabler/icons-react"


const ProfileDetail = () => {
  return (
    <section id="about"  data-scroll  className="h-auto pb-12 text-white px-4 sm:px-16 lg:px-0 xl:px-16  max-w-[80rem] mx-auto mt-48 mb-20">
      <h3 className="text-center my-16 text-xl  sm:text-3xl font-rubik sm:font-bold">
        Who am I ?
      </h3>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full text-center lg:text-left lg:w-[50%] lg:pr-24">
          <p className="leading-7 lg:leading-9 lg:text-xl font-rubik tracking-wide  mt-10 lg:mt-0 xl:mt-10">
            I am a self-driven web developer with over one year of experience in
            front-end development. I love developing user-centric applications
            that solve my needs and real-life challenges. Currently, I am
            immersing myself in the study of Node.js and databases, eager to
            broaden my skills further.
          </p>
          <div className="flex flex-col sm:flex-row  xl:flex-row gap-5 xl:gap-3 mt-14 justify-center lg:justify-start w-[85%] mx-auto lg:w-full">
            <ProfileButton textColor="text-[#11122B]" bgC="bg-white" text="Contact Me" icon={<IconMail className="group-hover:animate-bounce"/>}/>
            <ProfileButton textColor="text-white" bgC="bg-transparent" text="Download Resume" icon={<IconDownload className="group-hover:animate-bounce"/>}/>
          </div>
        </div>
        <div className="relative w-full lg:w-[50%] h-[400px] overflow-hidden rounded-md">
          <Image
            src={"/images/profile.gif"}
            fill
            alt="profile"
            style={{ objectFit: "cover" }}
            unoptimized={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileDetail;
