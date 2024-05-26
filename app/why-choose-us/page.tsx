import Why from "@/components/Why";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Why Choose Us",
};
type Props = {};

function page({}: Props) {
  return <Why />;
}

export default page;
