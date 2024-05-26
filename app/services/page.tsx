import Services from "@/components/Services";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services",
};
type Props = {};

const page = (props: Props) => {
  return <Services />;
};

export default page;
