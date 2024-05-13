import About from "@/components/About";
import Benifits from "@/components/Benifits";
import Contact from "@/components/Contact";
import Dedicate from "@/components/Dedicate";
import Faq from "@/components/Faq";
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
      <Services />
      <Benifits />
      <Howit />
      <Why />
      <Faq/>
      <Contact />
      <Footer />
    </>
  );
}
