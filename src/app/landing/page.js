import ModelShowcase from "../../../components/site/ModelShowcase";
import { services } from "../../../components/site/siteData";

export default function LandingPage() {
  return (
    <main className="page-top-space">
      <section className="section-space-lg">
        <div className="site-shell grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-7">
            <span className="eyebrow">Landing Experience</span>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3.2rem,7vw,6.2rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
              <span className="headline-gradient">Professional digital execution, condensed into one clear entry point.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/68">
              This landing page is tuned for quick evaluation. It summarizes what Sysjini does, how the work is
              structured, and where the value sits across websites, apps, AI, commerce, and infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary">
                Request a Proposal
              </a>
              <a href="/services" className="btn-secondary">
                Review Services
              </a>
            </div>
          </div>
          <ModelShowcase
            src="/models/space_station.glb"
            title="Condensed systems model"
            caption="The landing page uses the space station model to keep the message focused on structured, high-value digital systems."
          />
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <a key={service.href} href={service.href} className="surface-card rounded-[30px] p-7 transition hover:-translate-y-1">
              <div className="mb-3 text-xs uppercase tracking-[0.18em] text-white/42">{service.eyebrow}</div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.05em]">
                {service.title}
              </h2>
              <p className="mt-4 text-white/66">{service.summary}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell">
          <div className="surface-card-strong rounded-[36px] px-7 py-8 md:px-10 md:py-10">
            <div className="grid gap-5 md:grid-cols-4">
              {[
                "Clarify goals and scope",
                "Design the system and interface",
                "Build and integrate the solution",
                "Launch, optimize, and scale",
              ].map((step, index) => (
                <div key={step} className="rounded-[22px] border border-white/8 bg-white/[0.03] p-5">
                  <div className="mb-2 text-sm text-[#8A5CF5]">0{index + 1}</div>
                  <p className="text-white/72">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
