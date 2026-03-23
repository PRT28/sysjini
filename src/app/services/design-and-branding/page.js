import ServiceDetailPage from "../../../../components/site/ServiceDetailPage";
import { services } from "../../../../components/site/siteData";

export default function DesignAndBranding() {
  const service = services.find((item) => item.slug === "design-and-branding");
  return <ServiceDetailPage service={service} />;
}
