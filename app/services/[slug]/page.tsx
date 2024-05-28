import Scroll from "@/components/animation/Scroll";
import NextNavigation from "@/components/mini/NextNavigation";
import Title from "@/components/mini/Title";
import servicesData from "@/data/realmsData.json";
import mainServiceData from "@/data/mainServiceData.json";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ServiceSlug from "@/components/Slug/ServiceSlug";
import Contact from "@/components/Contact";

export function generateStaticParams() {
  return [
    { slug: "data-analysis" },
    { slug: "automation-solutions" },
    { slug: "cloud-integration" },
    { slug: "cybersecurity-essentials" },
    { slug: "border-watch" },
    { slug: "fraud-detection" },
    { slug: "ai-startups" },
    { slug: "leo-ai-assistant" },
    { slug: "custom-ai-solutions" },
    { slug: "ai-consulting" },
  ];
}

export default function ServicesPage({ params }: { params: { slug: string } }) {
  const { briefServices } = servicesData;
  const { mainServices } = mainServiceData;

  const serviceToRender = briefServices.find(
    (service) => service.url === `/services/${params.slug}`
  );

  const mainToRender = mainServices.find(
    (service) => service.url === `/services/${params.slug}`
  );

  // let metadata = generateMetadata(params.slug);

  if (serviceToRender) {
    const { title, main, subTitle, description, img, content } =
      serviceToRender;
    // const { title } = serviceToRender;
    // metadata = generateMetadata(title);

    return (
      <ServiceSlug
        title={title}
        subTitle={subTitle}
        main={main}
        description={description}
        content={{
          main: content.main,
          p1: content.p1,
          p2: content.p2,
        }}
        img={{
          src: img.src,
          alt: img.alt,
        }}
        params={{
          slug: params.slug,
        }}
        data={briefServices}
      />
    );
  } else if (mainToRender) {
    const { title, main, subTitle, description, img, content } = mainToRender;
    // metadata = generateMetadata(title);
    return (
      <ServiceSlug
        title={title}
        subTitle={subTitle}
        main={main}
        description={description}
        content={{
          main: content.main,
          p1: content.p1,
          p2: content.p2,
        }}
        img={{
          src: img.src,
          alt: img.alt,
        }}
        params={{
          slug: params.slug,
        }}
        data={mainServices}
      />
    );
  } else {
    return (
      <Scroll className="w-full h-full">
        <Scroll className="container mx-auto py-[6rem]">
          Service not found
        </Scroll>
      </Scroll>
    );
  }
}
