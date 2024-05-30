import React from "react";
// import Image from "next/image";
import Title from "@/components/mini/Title";
// import Scroll from "@/components/animation/Scroll";
import data from "@/data/whyData.json";

export function generateStaticParams() {
  return [
    { slug: "step-1" },
    { slug: "step-2" },
    { slug: "step-3" },
    { slug: "step-4" },
  ];
}

function page({ params }: { params: { slug: string } }) {
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
          title={serviceToRender.title}
          subtitle={serviceToRender.subtitle}
        />
      </div>
    </section>
  );
}

export default page;
