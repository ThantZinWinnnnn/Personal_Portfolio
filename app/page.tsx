"use client";

import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import IntroText from "@/components/Intro/intro.text";
import Navbar from "@/components/Nav/Navbar";
import ProfileDetail from "@/components/Profile/profile.detail";
import ShowSkill from "@/components/Skills/skill.page";
import ProjectsPage from "@/components/projects/project.page";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="h-screen lg:container lg:mx-auto">
      <IntroText />
      <ProjectsPage />
      <ProfileDetail />
      <ShowSkill />
      <Contact />
    </main>
  );
}
