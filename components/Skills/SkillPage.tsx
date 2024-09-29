import React from "react";
import { main, familiar } from "../utils/data";
import Skills from "./MainSkills";

const ShowSkill = () => {
  return (
    <section className="h-auto max-w-[80rem] mx-auto mt-6 pb-10 flex flex-col gap-28">
      <Skills text="I mainly focus on" iconsArr={main} />
      <Skills text="I also familiar with" iconsArr={familiar} />
      {/* <FamiliarSkills/> */}
    </section>
  );
};

export default ShowSkill;
