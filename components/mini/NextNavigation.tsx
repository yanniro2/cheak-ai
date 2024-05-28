import Link from "next/link";
import React from "react";
import Scroll from "../animation/Scroll";
import { NextNavigationProps } from "@/types";

const NextNavigation = (props: NextNavigationProps) => {
  if (!props.data) {
    console.error("Data prop is undefined");
    return null;
  }

  const projectToRender = props.data.find(
    (project) => project.url === `/services/${props.slug}`
  );

  const currentIndex = projectToRender
    ? props.data.findIndex((project) => project.url === projectToRender.url)
    : -1;

  const previousProject =
    currentIndex > 0 ? props.data[currentIndex - 1] : null;
  const nextProject =
    currentIndex < props.data.length - 1 ? props.data[currentIndex + 1] : null;

  return (
    <Scroll className="flex justify-between mt-8 w-full gap-[2rem]">
      {previousProject && (
        <Link href={previousProject.url} className="btn btn-2">
          &lt; Previous
        </Link>
      )}
      {nextProject && (
        <Link href={nextProject.url} className="btn btn-1">
          Next &gt;
        </Link>
      )}
    </Scroll>
  );
};

export default NextNavigation;
