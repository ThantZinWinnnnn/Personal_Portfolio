"use client";

import Contact from "@/components/Contact/Contact";
import IntroText from "@/components/Intro/IntorText";

import ProfileDetail from "@/components/Profile/ProfileDetails";
import ShowSkill from "@/components/Skills/SkillPage";
import ProjectsPage from "@/components/projects/ProjectPage";

import { useEffect, useRef } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="h-screen lg:container lg:mx-auto">
      <IntroText />
      <ProjectsPage />
      <ProfileDetail />
      <ShowSkill />
      <Contact />
    </div>
  );
}
