import React from "react";

interface ProjectTitleProps {
  children: React.ReactNode;
}

export default function ProjectTitle(props: ProjectTitleProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-1">
      {props.children}
    </div>
  );
}
