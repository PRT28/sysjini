import ServiceDetailPage from "../../../../components/site/ServiceDetailPage";
import { services } from "../../../../components/site/siteData";

export default function EcommerceSolutions() {
  const service = services.find((item) => item.slug === "e-commerce-solutions");
  return <ServiceDetailPage service={service} />;
}
