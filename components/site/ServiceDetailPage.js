import ModelShowcase from "./ModelShowcase";

export default function ServiceDetailPage({ service }) {
  return (
    <main className="page-top-space">
      <section className="section-space-lg relative overflow-hidden">
        <div className="hero-orb hero-orb-primary left-[-8rem] top-8 h-72 w-72" />
        <div className="hero-orb hero-orb-soft right-0 top-24 h-56 w-56" />
        <div className="site-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <span className="eyebrow">{service.eyebrow}</span>
            <div className="space-y-5">
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
                <span className="headline-gradient">{service.title}</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/68 md:text-xl">{service.description}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary">
                Talk to Sysjini
              </a>
              <a href="/services" className="btn-secondary">
                View All Services
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.outcomes.map((item) => (
                <div key={item} className="surface-card rounded-[24px] p-5">
                  <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/42">Outcome</div>
                  <div className="text-lg font-medium text-white">{item}</div>
                </div>
              ))}
            </div>
          </div>
          <ModelShowcase
            variant={service.model}
            title={`${service.shortTitle} system model`}
            caption={`Selected to visually match the ${service.shortTitle.toLowerCase()} page context.`}
          />
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card-strong rounded-[32px] p-7 md:p-9">
            <div className="mb-6">
              <span className="eyebrow">Capabilities</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {service.capabilities.map((item) => (
                <div key={item} className="rounded-[22px] border border-white/8 bg-white/[0.03] p-5 text-white/72">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card rounded-[32px] p-7 md:p-9">
            <div className="mb-6">
              <span className="eyebrow">Delivery Process</span>
            </div>
            <div className="space-y-4">
              {service.process.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-[22px] border border-white/8 bg-black/20 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8A5CF5] text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-white/72">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell">
          <div className="surface-card outline-grid rounded-[32px] px-7 py-8 md:px-10 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="eyebrow">Industry Fit</span>
                <h2 className="section-title font-[family-name:var(--font-display)] mt-5">Where this service delivers best</h2>
                <p className="mt-4 max-w-xl text-white/66">
                  Sysjini aligns execution to business context, operating constraints, and growth stage rather than
                  shipping generic deliverables.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {service.industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
