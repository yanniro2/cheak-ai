import Contact from "@/components/Contact";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact US",
};
type Props = {};

function page({}: Props) {
  return <Contact />;
}

export default page;
