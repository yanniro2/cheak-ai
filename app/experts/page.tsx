// Page.tsx

import React from "react";
import Title1 from "@/components/mini/Title";
import expertData from "@/data/experData.json";
import Image from "next/image";
import Scroll from "@/components/animation/Scroll";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <section className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow">
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] md:py-[4rem] pt-[6rem]">
        <Title1
          title={"our experts"}
          subtitle={
            "Explore our experts and book a consulting appointment with us today."
          }
        />

        <Scroll className="flex w-full justify-between gap-[1rem] ">
          {expertData.map((expert: any, index: number) => (
            <Scroll
              key={index}
              className="w-full flex items-center justify-center flex-row rounded shadow-primary shadow  overflow-hidden ">
              <Scroll className="w-1/3  overflow-hidden">
                <Image
                  src={expert.img}
                  alt={expert.name}
                  width={"500"}
                  height={"500"}
                  className="  object-cover object-center"
                />
              </Scroll>

              <Scroll className="w-2/3 h-full flex flex-col items-center justify-center bg-lighDark p-5  text-center gap-[1rem]">
                <Scroll>
                  {expert.quotes.map((quote: string, quoteIndex: number) => (
                    <Scroll
                      key={quoteIndex}
                      className="font-poppins italic  font-light text-primary text-center">
                      &quot;{quote}&quot;
                    </Scroll>
                  ))}
                  <Scroll>
                    <Scroll className="">- {expert.name}</Scroll>
                    <Scroll className="text-secondry font-poppins font-semibold">
                      [ {expert.field} ]
                    </Scroll>
                  </Scroll>
                </Scroll>

                <Scroll className="flex items-center justify-center gap-[1rem]">
                  <Link
                    href={`mailto:${expert.contact.email}`}
                    aria-label="Email"
                    className="icons-1">
                    <FaEnvelope />
                  </Link>
                  <Link
                    href={`tel:${expert.contact.phone}`}
                    aria-label="Phone"
                    className="icons-1">
                    <FaPhone />
                  </Link>
                  <Link
                    href={expert.contact.linkedin}
                    aria-label="LinkedIn"
                    className="icons-1">
                    <FaLinkedin />
                  </Link>
                </Scroll>
              </Scroll>
            </Scroll>
          ))}
        </Scroll>
      </div>
    </section>
  );
};

export default Page;
