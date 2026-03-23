import ServiceDetailPage from "../../../../components/site/ServiceDetailPage";
import { services } from "../../../../components/site/siteData";

export default function DigitalMarketingAndSeo() {
  const service = services.find((item) => item.slug === "digital-marketing-and-seo");
  return <ServiceDetailPage service={service} />;
}
