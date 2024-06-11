import React from "react";

interface ProjectNameProps {
  value?: string;
  children?: string;
  as?: "strong" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function ProjectName(props: ProjectNameProps) {
  const { value, children, as = "strong" } = props;
  const className = as === "strong" ? "!my-0 !text-[16px]" : "!my-0";
  const Component = React.createElement(as, { className }, value ?? children);

  return Component;
}
