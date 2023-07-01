import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className="h-auto max-w-[80rem] mx-auto">{children}</section>;
};

export default Container;
