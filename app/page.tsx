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
import Loading from "./loading";
import HeroBanner from "@/components/HeroBanner";
import Notifications from "@/components/mini/Notifications";

export const metadata: Metadata = {
  title: "Home - Check AI",
};

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      {/* <HeroBanner /> */}
      <Hero />
      <About />
      <Services />
      <Benifits />
      <Howit />
      <Why />
      <Faq />
      <Contact />
      {/* <Footer /> */}
      {/* <Loading /> */}
      {/* <Notifications /> */}
      
    </>
  );
}
