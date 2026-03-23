import ServiceDetailPage from "../../../../components/site/ServiceDetailPage";
import { services } from "../../../../components/site/siteData";

export default function CloudAndDevops() {
  const service = services.find((item) => item.slug === "cloud-and-devops");
  return <ServiceDetailPage service={service} />;
}
