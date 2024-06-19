import React from "react";
import Title1 from "@/components/mini/Title";
// import { Scroll } from "@react-three/drei";
import Link from "next/link";
import Scroll from "@/components/animation/Scroll";
import { Metadata } from "next";
type Props = {};
export const metadata: Metadata = {
  title: "Collaborate on Solutions",
};
const page = (props: Props) => {
  return (
    <section className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow">
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] md:py-[4rem] pt-[6rem]">
        <Title1
          title={"Collaborate on Solutions"}
          subtitle={"Develop Custom Fraud Detection Strategies"}
        />
        <Scroll className="w-full">
          <Link
            href="/howItWorks"
            className="cursor-pointer hover:text-primary underline text transition-all"
            aria-label={"benifits"}>
            Back
          </Link>
        </Scroll>

        <p className="">
          Collaborate with our team to develop customized fraud detection
          solutions tailored to your specific requirements. Our collaboration
          process ensures that the fraud detection strategies are effective and
          implementable, providing a clear roadmap to achieving your business
          goals and overcoming fraud-related challenges.
        </p>
        <p className="">
          Collaboration is key to developing effective fraud detection
          solutions. Our team will work with you to create strategies that are
          customized to your business needs. This step involves close
          interaction to ensure that the solutions we develop are perfectly
          aligned with your goals.
        </p>

        <div className="box-4">
          <h2 className="headline-2">Our Approach</h2>
          <p className="mt-4 ">
            Our approach is centered around understanding your unique business
            challenges and objectives. We use a combination of advanced
            analytics, machine learning, and expert insights to develop fraud
            detection strategies that are both innovative and practical.
          </p>
        </div>

        <div className="box-4">
          <h2 className="headline-2">Benefits of Custom Strategies</h2>
          <ul className="list-disc pl-5  w-full">
            <li className="mb-2">
              Enhanced fraud detection accuracy tailored to your specific
              business environment.
            </li>
            <li className="mb-2">
              Reduced false positives, ensuring legitimate transactions are not
              disrupted.
            </li>
            <li className="mb-2">
              Scalable solutions that grow with your business.
            </li>
            <li className="mb-2">
              Improved customer trust and satisfaction through reliable fraud
              prevention.
            </li>
          </ul>
        </div>

        <div className="box-4">
          <h2 className="headline-2">Steps to Implementation</h2>
          <ol className="list-decimal pl-5 ">
            <li className="mb-2">
              Initial Consultation: Understanding your needs and objectives.
            </li>
            <li className="mb-2">
              Strategy Development: Crafting a custom fraud detection strategy.
            </li>
            <li className="mb-2">
              Implementation: Integrating the strategy with your existing
              systems.
            </li>
            <li className="mb-2">
              Monitoring and Optimization: Continuously monitoring performance
              and optimizing as needed.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default page;
