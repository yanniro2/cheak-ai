import Howit from "@/components/Howit";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "How it works",
};
type Props = {};

function page({}: Props) {
  return <Howit />;
}

export default page;
