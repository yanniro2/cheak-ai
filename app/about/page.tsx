import Scroll from "@/components/animation/Scroll";
import Title from "@/components/mini/Title";
import React from "react";
import Image from "next/image";
import About from "@/components/About";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About US",
};

function page() {
  return <About />;
}

export default page;
