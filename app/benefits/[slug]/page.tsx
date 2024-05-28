import React from "react";
import data from "@/data/benifitsData.json";
import Image from "next/image";
// import { useRouter } from "next/router";

export function generateStaticParams() {
  return [
    { slug: "dedicated-artificial-intelligence" },
    { slug: "fully-responsive-mobile-friendly" },
    { slug: "clean-modern-design-layout" },
    { slug: "multi-device-testing-system" },
    { slug: "great-user-experience" },
  ];
}

function Page({ params }: { params: { slug: string } }) {
  const { benefits } = data;
  const serviceToRender = benefits.find(
    (service) => service.url === `/benefits/${params.slug}`
  );

  if (!serviceToRender) return <div>Service not found</div>;

  return (
    <div>
      <h1>{serviceToRender.title}</h1>
      <Image
        src={serviceToRender.img.src}
        alt={serviceToRender.img.alt}
        width={1000}
        height={500}
      />
      <p>{serviceToRender.description}</p>
      <p>{serviceToRender.overview}</p>

      <div>
        <h2>Key Features</h2>
        {serviceToRender.key_features.map((feature, index) => (
          <div key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h2>Sub Sections</h2>
        {serviceToRender.sub_sections.map((subSection, index) => (
          <div key={index}>
            <h3>{subSection.title}</h3>
            <i className={subSection.icon}></i>
            <p>{subSection.brief}</p>
            <ul>
              {subSection.examples.map((example, idx) => (
                <li key={idx}>{example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
