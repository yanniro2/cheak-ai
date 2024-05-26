import Faq from "@/components/Faq";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQ",
};
type Props = {};

function page({}: Props) {
  return <Faq />;
}

export default page;
