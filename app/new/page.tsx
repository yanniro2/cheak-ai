"use client";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import sectionsData from "./data.json";

export default function Home() {
  let [activeSection, setActiveSection] = useState("about");

  let links = sectionsData.map((section) => section.id);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionsData.forEach((section) => {
      let target = document.getElementById(section.id);
      target && observer.observe(target);
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Nav links={links} activeSection={activeSection} />
      {sectionsData.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className={`w-screen h-screen flex flex-col justify-center items-center ${section.backgroundColor}`}>
          <h1 className="text-white text-6xl">{section.title}</h1>
        </div>
      ))}
    </div>
  );
}
