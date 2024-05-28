import Scroll from "@/components/animation/Scroll";
import servicesData from "@/data/realmsData.json";
import mainServiceData from "@/data/mainServiceData.json";
import ServiceSlug from "@/components/Slug/ServiceSlug";
import { generateMetadata } from "@/components/meta/generateMetadata";

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

  if (serviceToRender) {
    const { title, main, subTitle, description, img, content } =
      serviceToRender;
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

export { generateMetadata };
