import Benifits from "@/components/Benifits";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Check AI - Benifits",
};

type Props = {};

function page({}: Props) {
  return <Benifits />;
}

export default page;
