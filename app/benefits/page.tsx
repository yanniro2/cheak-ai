import Benifits from "@/components/Benifits";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Benifits",
};



function page() {
  return <Benifits />;
}

export default page;
