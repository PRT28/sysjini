import ModelShowcase from "../../../components/site/ModelShowcase";
import { services } from "../../../components/site/siteData";

const solutionTracks = [
  {
    title: "Product delivery",
    copy: "Marketing sites, apps, portals, dashboards, and custom platforms delivered with modern engineering standards.",
  },
  {
    title: "AI implementation",
    copy: "Assistants, automation, retrieval systems, and workflow intelligence connected to real business operations.",
  },
  {
    title: "Commercial growth",
    copy: "Branding, SEO, paid support, and conversion-focused experiences tied back to revenue and pipeline.",
  },
];

export default function ServicesPage() {
  return (
    <main className="page-top-space">
      <section className="section-space-lg relative overflow-hidden">
        <div className="hero-orb hero-orb-primary left-[-6rem] top-12 h-72 w-72" />
        <div className="site-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <span className="eyebrow">Capabilities</span>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
              <span className="headline-gradient">Services built around relevance, quality, and scale.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/68">
              Sysjini delivers end-to-end digital execution across web, mobile, AI, growth, commerce, and cloud.
              Each engagement is designed to solve a business problem, not just ship a deliverable.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {solutionTracks.map((item) => (
                <div key={item.title} className="surface-card card-hover rounded-[24px] p-5">
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.04em]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/60">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <ModelShowcase
            src="/models/earth-00.glb"
            title="Global delivery model"
            caption="The services overview uses the earth model to represent connected digital systems, reach, and multi-channel execution."
          />
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <a key={service.href} href={service.href} className="surface-card outline-grid card-hover rounded-[30px] p-7">
              <div className="mb-4 text-xs uppercase tracking-[0.18em] text-white/42">{service.eyebrow}</div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.05em]">
                {service.title}
              </h2>
              <p className="mt-4 text-white/66">{service.summary}</p>
              <div className="mt-6 space-y-3 text-sm text-white/60">
                {service.capabilities.slice(0, 3).map((item) => (
                  <div key={item} className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm font-medium text-[#b49aff]">View service</div>
            </a>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell">
          <div className="surface-card-strong rounded-[36px] px-7 py-8 md:px-10 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <span className="eyebrow">How We Work</span>
                <h2 className="section-title font-[family-name:var(--font-display)] mt-5">
                  Structured delivery without the usual agency noise.
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Business and technical discovery",
                  "Clear scope, visual direction, and system planning",
                  "Delivery with stakeholder visibility and QA discipline",
                  "Post-launch optimization and growth support",
                ].map((item, index) => (
                  <div key={item} className="rounded-[22px] border border-white/8 bg-white/[0.03] p-5">
                    <div className="mb-2 text-sm text-[#8A5CF5]">0{index + 1}</div>
                    <p className="text-white/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
