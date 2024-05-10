import React from 'react'
import Title from "./mini/Title";
import Image from "next/image";
type Props = {};

const About = (props: Props) => {
  return (
    <section
      className="w-screen h-full flex items-center justify-center drop-shadow shadow"
      id="about">
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] py-[4rem]">
        <Title
          title={"About us"}
          subtitle={"where imagination Meets Infinite Possibilities"}
        />
        <div className="flex w-full items-center justify-between gap-[3rem] bg-lighDark p-[2rem] rounded shadow-lg">
          <div className="w-3/4 text-xl font-light font-open text-white">
            Welcome to Our Company, where we embark on a journey where
            imagination meets innovation, and the possibilities are endless.
            From our humble beginnings to becoming a leader in our industry, our
            passion for creativity and excellence drives us forward every day.
          </div>
          <div className="w-1/4 text-primary font-poppins ">
            Our dedicated team of experts works tirelessly to deliver
            unparalleled results.
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-[1rem]">
          <div className="w-1/2 h-[60vh] flex">
            <Image
              src="/assets/img/about.jpeg"
              width="1000"
              height="1000"
              alt="about img"
              className="object-cover rounded"
            />
          </div>
          <div className="w-1/2 h-[60vh] bg-lighDark rounded flex flex-col p-[3rem]  shadow-lg">
            <h3 className="capitalize text-3xl font-poppins text-primary">
              our story
            </h3>
            <div className="flex flex-col gap-3 font-open  text">
              <p className=" pt-[2rem]">
                Welcome to Our Company, where every success is a chapter in our
                story of growth and innovation. Our journey began with a shared
                dream among a group of individuals who believed in the power of
                imagination and determination.From our humble beginnings, we
                embarked on a mission to carve a path of excellence in our
                industry.
              </p>

              <p>
                We faced adversity with resilience and embraced change with
                adaptability, always staying true to our core values. Today, our
                story is a testament to the collective effort of our dedicated
                team and the trust of our valued clients.
              </p>
              <p>
                With each endeavor, we strive to make a lasting impact, leaving
                behind a legacy of innovation and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About