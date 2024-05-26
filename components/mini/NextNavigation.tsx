import Link from "next/link";
import React from "react";
import Scroll from "../animation/Scroll";

type BriefService = {
  id: number;
  title: string;
  main: string;
  subTitle: string;
  description: string;
  url: string;
  img: {
    src: string;
    alt: string;
  };
  content: {
    main: string;
    p1: string;
    p2: string;
  };
};

type MainService = {
  id: number;
  title: string;
  description: string;
  url: string;
  icon: string;
  img?: {
    src: string;
    alt: string;
  };
};

type Props = {
  slug: string;
  data: (BriefService | MainService)[];
};

const NextNavigation = (props: Props) => {
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
    <Scroll className="flex justify-between mt-8 w-full">
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
