import Contact from "@/components/Contact";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Check AI - Contact US",
};
type Props = {};

function page({}: Props) {
  return <Contact />;
}

export default page;
