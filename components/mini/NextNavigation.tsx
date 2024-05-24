import Link from "next/link";
import React from "react";

// Define a generic type for the data
type Data<T> = {
  briefServices: T[];
};

// Define a generic type for the project
type Project = {
  id: number;
  title: string;
  url: string;
};

type Props<T> = {
  slug: string;
  data: Data<T>;
};

const NextNavigation = <T extends Project>(props: Props<T>) => {
  // Access your projects data
  const { briefServices } = props.data;

  // Find the project with the matching slug
  const projectToRender = briefServices.find(
    (project) => project.url === `/services/${props.slug}`
  );

  // Find the index of the current project
  const currentIndex = projectToRender
    ? briefServices.findIndex((project) => project.id === projectToRender.id)
    : -1;

  // Get the previous and next projects
  const previousProject =
    currentIndex > 0 ? briefServices[currentIndex - 1] : null;
  const nextProject =
    currentIndex < briefServices.length - 1
      ? briefServices[currentIndex + 1]
      : null;
  return (
    <div className="flex justify-between mt-8 w-full">
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
    </div>
  );
};

export default NextNavigation;
