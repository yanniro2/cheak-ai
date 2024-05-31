import React from "react";
import Image from "next/image";
import Title from "@/components/mini/Title";
import Title2 from "@/components/mini/Title2";
import data from "@/data/whyData.json";
import Scroll from "@/components/animation/Scroll";
import {
  BiCheckCircle,
  BiPlug,
  BiLock,
  BiShield,
  BiNetworkChart,
  BiCloud,
  BiServer,
  BiSync,
  BiPlayCircle,
  BiRocket,
  BiSupport,
  BiArch,
} from "react-icons/bi"; // Importing icons

export function generateStaticParams() {
  return [
    { slug: "step-1" },
    { slug: "step-2" },
    { slug: "step-3" },
    { slug: "startNow" },
  ];
}

const iconComponents: { [key: string]: React.ElementType } = {
  BiCheckCircle,
  BiPlug,
  BiLock,
  BiShield,
  BiNetworkChart,
  BiCloud,
  BiServer,
  BiSync,
  BiPlayCircle,
  BiRocket,
  BiSupport,
};

function Page({ params }: { params: { slug: string } }) {
  const { whyChooseUs } = data;
  const serviceToRender = whyChooseUs.find(
    (service) => service.url === `/why-choose-us/${params.slug}`
  );

  if (!serviceToRender)
    return (
      <div className="pt-[6rem]">
        Service not found
        {params.slug}
      </div>
    );
  return (
    <section className="layout-1">
      <div className="container-layout">
        <Title
          title={`${serviceToRender.stepNumber} : ${serviceToRender.title}`}
          subtitle={serviceToRender.subtitle}
        />

        <Scroll className="flex w-full items-center justify-between md:gap-[3rem] bg-lighDark md:p-[2rem] rounded shadow-lg  md:flex-row flex-col-reverse text-center md:text-left p-3 gap-3 ">
          <div className="md:w-3/4 md:text-xl font-light font-open text-white w-full">
            {serviceToRender.mainBrief}
          </div>
          <div className="md:w-1/4 text-primary font-poppins w-full">
            {serviceToRender.subBrief}
          </div>
        </Scroll>

        <Scroll className="w-full h-full">
          <Image
            src={serviceToRender.img1}
            alt={serviceToRender.title}
            width={"1000"}
            height={"1000"}
            className="w-full h-[50vh] object-cover"
          />
        </Scroll>

        <Scroll className="w-full h-full flex items-center gap-[3rem]">
          <div className="w-1/2">
            <Image
              src={serviceToRender.img2}
              width={"1000"}
              height={"1000"}
              alt="img"
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <Title2
              title={serviceToRender.description}
              subtitle={serviceToRender.subtitle}
            />

            <Scroll className="flex flex-wrap gap-3 flex-col">
              {serviceToRender.subsections.map((subsection, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 ">
                    <div className="icons-1">{renderIcon(subsection.icon)}</div>
                    <span className="font-medium">{subsection.headline}</span>
                  </div>
                );
              })}
            </Scroll>
            <Scroll className="flex flex-col gap-3 text mt-[2rem]">
              <p>{serviceToRender.brief[0].p1}</p>
              <p>{serviceToRender.brief[0].p2}</p>
              <p>{serviceToRender.brief[0].p3}</p>
              <p>{serviceToRender.brief[0].p4}</p>
            </Scroll>
          </div>
        </Scroll>
      </div>
    </section>
  );
}

const renderIcon = (iconName: string) => {
  const iconComponents: { [key: string]: React.ElementType } = {
    BiCheckCircle,
    BiPlug,
    BiLock,
    BiShield,
    BiNetworkChart,
    BiCloud,
    BiServer,
    BiSync,
    BiPlayCircle,
    BiRocket,
    BiSupport,
    BiArch,
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

export default Page;
