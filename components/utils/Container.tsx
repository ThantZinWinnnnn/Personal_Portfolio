import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <section id="projects"  className="h-screen overflow-y-scroll max-w-[80rem] mx-auto">{children}</section>;
};

export default Container;
