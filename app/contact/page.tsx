import Contact from "@/components/Contact";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact US",
};

function page() {
  return <Contact />;
}

export default page;
