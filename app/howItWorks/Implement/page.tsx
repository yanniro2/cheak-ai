import React from "react";
import Title1 from "@/components/mini/Title";
import Link from "next/link";
import Scroll from "@/components/animation/Scroll";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Implement and Optimize",
};

const page = () => {
  return (
    <section className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow">
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] md:py-[4rem] pt-[6rem]">
        <Title1
          title={"Implement and Optimize"}
          subtitle={"Deploy and Fine-Tune AI-Based Solutions"}
        />
        <Scroll className="w-full">
          <Link
            href="/howItWorks"
            className="cursor-pointer hover:text-primary underline text transition-all"
            aria-label={"benefits"}>
            Back
          </Link>
        </Scroll>

        <p className="">
          Implement the agreed-upon AI-based solutions and work with us to
          optimize and fine-tune them for maximum effectiveness. In your startup
          operations, ensuring that all aspects are covered and the transition
          to AI-based solutions is smooth.
        </p>
        <p className="">
          The final step involves putting the developed AI-based solutions into
          action. Our team will assist in the implementation process, ensuring
          everything runs smoothly. Post-implementation, we will work together
          to optimize and fine-tune the solutions, ensuring they deliver the
          desired results and drive your startup forward.
        </p>

        <div className="box-4">
          <h2 className="headline-2">Our Approach</h2>
          <p className="mt-4 ">
            Our approach ensures that the AI-based solutions are seamlessly
            integrated into your startup’s operations. We focus on covering all
            aspects of the transition to ensure it is smooth and effective.
          </p>
        </div>

        <div className="box-4">
          <h2 className="headline-2">Benefits of Implementation</h2>
          <ul className="list-disc pl-5  w-full">
            <li className="mb-2">
              Smooth transition to AI-based solutions with minimal disruption.
            </li>
            <li className="mb-2">
              Ongoing optimization and fine-tuning to ensure maximum
              effectiveness.
            </li>
            <li className="mb-2">
              Adaptation to meet evolving business needs and challenges.
            </li>
            <li className="mb-2">
              Enhanced operational efficiency and decision-making capabilities.
            </li>
          </ul>
        </div>

        <div className="box-4">
          <h2 className="headline-2">Steps to Implementation</h2>
          <ol className="list-decimal pl-5 ">
            <li className="mb-2">
              Deployment: Implementing the agreed-upon AI-based solutions.
            </li>
            <li className="mb-2">
              Integration: Ensuring all aspects of your operations are covered.
            </li>
            <li className="mb-2">
              Fine-Tuning: Optimizing the solutions for maximum effectiveness.
            </li>
            <li className="mb-2">
              Continuous Improvement: Adapting to meet your evolving business
              needs.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default page;
