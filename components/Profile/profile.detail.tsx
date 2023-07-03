import React from "react";
import Image from "next/image";
import ProfileButton from "./profile.button";
import {IconMail,IconDownload} from  "@tabler/icons-react"


const ProfileDetail = () => {
  return (
    <section  data-scroll data-scroll-speed="0.5" className="h-auto pb-12 text-white  max-w-[80rem] mx-auto mt-48 mb-20">
      <h3 className="text-center my-16 text-3xl font-rubik font-bold">
        Who am I ?
      </h3>
      <div className="flex ">
        <div className="w-[50%] pr-24">
          <p className="text-xl font-rubik tracking-wide font-semibold mt-10">
            I am a self-driven web developer with over one year of experience in
            front-end development. I love developing user-centric applications
            that solve my needs and real-life challenges. Currently, I am
            immersing myself in the study of Node.js and databases, eager to
            broaden my skills further.
          </p>
          <div className="flex gap-3 mt-14">
            <ProfileButton textColor="text-[#11122B]" bgC="bg-white" text="Contact Me" icon={<IconMail className="group-hover:animate-bounce"/>}/>
            <ProfileButton textColor="text-white" bgC="bg-transparent" text="Download Resume" icon={<IconDownload className="group-hover:animate-bounce"/>}/>
          </div>
        </div>
        <div className="relative w-[50%] h-[400px] overflow-hidden rounded-md">
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
