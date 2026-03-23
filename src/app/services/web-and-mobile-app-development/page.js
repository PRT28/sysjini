import ServiceDetailPage from "../../../../components/site/ServiceDetailPage";
import { services } from "../../../../components/site/siteData";

export default function WebAndMobileAppDevelopment() {
  const service = services.find((item) => item.slug === "web-and-mobile-app-development");
  return <ServiceDetailPage service={service} />;
}
