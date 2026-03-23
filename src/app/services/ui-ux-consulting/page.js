import ServiceDetailPage from "../../../../components/site/ServiceDetailPage";
import { services } from "../../../../components/site/siteData";

export default function UiUxConsulting() {
  const service = services.find((item) => item.slug === "ui-ux-consulting");
  return <ServiceDetailPage service={service} />;
}
