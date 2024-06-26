"use client";
import React, { useState } from "react";
import Title1 from "@/components/mini/Title";
import data from "@/data/faqData.json";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import Scroll from "./animation/Scroll";
const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(0); // Explicitly define the type

  const handleClick = (index: number) => {

    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <section
      className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow"
      id="faq">
      <Scroll>
        <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] md:py-[4rem] pt-[6rem]">
          <Title1
            title={"Frequently Asked Questions"}
            subtitle={"Explore Answers to Common Queries about Check AI"}
          />

          <div className="w-full flex items-center justify-center flex-col md:flex-row">
            <div className="lg:w-1/2 h-full flex flex-col gap-[1rem]">
              {data.faqs.map((step, index) => (
                <div
                  key={index}
                  className={`w-full flex items-start p-[1.5rem] bg-lighDark rounded cursor-pointer gap-[1rem] justify-center  transition-all ease-linear   group flex-col ${
                    selectedQuestion === index
                      ? "border-primary border shadow-md shadow-primary "
                      : "hover:border-primary hover:border border border-transparent hover:shadow-md hover:shadow-primary "
                  }`}
                  onClick={() => handleClick(index)}>
                  <Scroll className="text-[1.5rem] font-open font-bold  uppercase group-hover:text-primary flex  items-center justify-between w-full">
                    <h3 className="text-[1rem] font-open font-bold  uppercase group-hover:text-primary w-3/4">
                      {step.question}
                    </h3>
                    <div className="w-min">
                      {selectedQuestion === index ? (
                        <div className="icons-2">
                          {<MdKeyboardDoubleArrowUp />}
                        </div>
                      ) : (
                        <div className="icons-1">
                          {<MdKeyboardDoubleArrowDown />}
                        </div>
                      )}
                    </div>
                  </Scroll>

                  {selectedQuestion === index && (
                    <Scroll className=" font-poppins font-light group-hover:text-white text-[1rem] capitalize text-primary">
                      {step.answer}
                    </Scroll>
                  )}
                </div>
              ))}
            </div>
            <Scroll className="lg:w-1/2 h-full lg:flex items-center justify-center hidden">
              <FaQuestion className="text-[30rem] text-secondry  shadow-text-secound" />
            </Scroll>
          </div>
        </div>
      </Scroll>
    </section>
  );
};

export default Faq;
