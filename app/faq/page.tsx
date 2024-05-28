import Faq from "@/components/Faq";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQ",
};


function page() {
  return <Faq />;
}

export default page;
