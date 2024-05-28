import Services from "@/components/Services";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services",
};

const page = () => {
  return <Services />;
};

export default page;
