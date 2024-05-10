import About from "@/components/About";
import Benifits from "@/components/Benifits";
import Contact from "@/components/Contact";
import Dedicate from "@/components/Dedicate";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Howit from "@/components/Howit";
import Services from "@/components/Services";
import Why from "@/components/Why";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Howit />
      <Why />
      <Dedicate />
      <Benifits />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
