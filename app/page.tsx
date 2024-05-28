import About from "@/components/About";
import Benifits from "@/components/Benifits";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Howit from "@/components/Howit";
import Services from "@/components/Services";
import Why from "@/components/Why";
import "animate.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Check AI",
};


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <About />
      <Services />
      <Benifits />
      <Howit />
      <Why />
      <Faq />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}
