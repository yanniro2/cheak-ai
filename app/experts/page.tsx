import React from "react";
import Title1 from "@/components/mini/Title";
import expertData from "@/data/experData.json";
import Image from "next/image";
import Scroll from "@/components/animation/Scroll";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Experts",
};

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
        <Scroll className="w-full">
          <Link
            href="/howItWorks"
            className="cursor-pointer hover:text-primary underline text transition-all">
            Back
          </Link>
        </Scroll>

        <Scroll className="flex w-full justify-between gap-[1rem] ">
          {expertData.map((expert: any, index: number) => (
            <Scroll
              key={index}
              className="w-full flex items-center justify-center flex-col md:flex-row rounded shadow-primary shadow overflow-hidden">
              <Scroll className="md:w-1/3 h-fit overflow-hidden w-full">
                <Image
                  src={expert.img}
                  alt={expert.name}
                  width={"600"}
                  height={"600"}
                  className="object-cover  w-full h-full"
                />
              </Scroll>

              <Scroll className="md:w-2/3 md:h-full flex flex-col items-start justify-center bg-lighDark p-5  gap-[1rem] text-left md:pl-[3rem] w-full ">
                <Scroll>
                  <Scroll className="h1">{expert.name}</Scroll>
                  <Scroll className="text-primary font-semibold">
                    [ {expert.field} ]
                  </Scroll>
                </Scroll>
                <Scroll className="flex flex-col gap-3">
                  <Scroll className="text">{expert.quotes.p1}</Scroll>
                  <Scroll className="text">{expert.quotes.p2}</Scroll>
                  <Scroll className="text">{expert.quotes.p3}</Scroll>
                </Scroll>

                <div className="capitalize text-secondry font-poppins font-semibold">
                  Contact with in
                </div>

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
