import { Metadata } from "next";
import servicesData from "@/data/realmsData.json"; // Adjust the import path as necessary
import mainServiceData from "@/data/mainServiceData.json"; // Adjust the import path as necessary
import { BriefService, MainService } from "@/types";
type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const serviceToRender = servicesData.briefServices.find(
    (service: BriefService) => service.url === `/services/${slug}`
  );

  const mainToRender = mainServiceData.mainServices.find(
    (service: MainService) => service.url === `/services/${slug}`
  );

  const service = serviceToRender || mainToRender;

  if (service) {
    return {
      title: service.title,
      description: service.description,
    };
  } else {
    return {
      title: "Service not found",
      description: "The requested service could not be found.",
    };
  }
}
