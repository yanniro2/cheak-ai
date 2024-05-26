import Services from "@/components/Services";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Check AI - Services",
};
type Props = {};

const page = (props: Props) => {
  return <Services />;
};

export default page;
