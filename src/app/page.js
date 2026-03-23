import { blogPosts, services } from "../../components/site/siteData";

const highlights = [
  { value: "End to End", label: "Delivery across strategy, build, launch, and scale." },
  { value: "AI Ready", label: "Systems integrated into real business workflows." },
  { value: "Senior Led", label: "Execution with product, design, and engineering discipline." },
];

const differentiators = [
  {
    title: "Professional execution",
    copy: "Design, product thinking, engineering, and launch quality are treated as one system instead of separate vendors.",
  },
  {
    title: "AI with operational fit",
    copy: "We implement AI where it removes real friction, improves decisions, or creates capacity instead of adding novelty.",
  },
  {
    title: "Built for growth",
    copy: "Every site, app, or workflow is structured for performance, scalability, analytics, and future iteration.",
  },
];

const workstreams = [
  {
    title: "Digital products",
    copy: "Web platforms, mobile apps, dashboards, and customer-facing systems.",
  },
  {
    title: "AI solutions",
    copy: "Automation, knowledge systems, copilots, and process intelligence layered into real operations.",
  },
  {
    title: "Brand and growth",
    copy: "Positioning, websites, conversion systems, SEO, campaigns, and sales-supporting assets.",
  },
];

export default function Home() {
  return (
    <main className="page-top-space">
      <section className="relative overflow-visible pb-24 pt-14 md:pb-28 md:pt-10">
        <div className="hero-orb hero-orb-primary left-[-7rem] top-10 h-80 w-80" />
        <div className="hero-orb hero-orb-soft right-[-3rem] top-36 h-72 w-72" />
        <div className="site-shell grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-[family-name:var(--font-display)] text-[clamp(3.4rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.08em]">
                <span className="headline-gradient">Sleek digital systems for ambitious companies.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/68 md:text-[1.15rem]">
                Sysjini builds professional websites, apps, AI workflows, commerce experiences, and cloud foundations
                for companies that need execution with polish and business relevance.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary">
                Start Your Project
              </a>
              <a href="/services" className="btn-secondary">
                Explore Services
              </a>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-white/56">
              {["Web & mobile products", "AI workflow automation", "Commerce and cloud systems"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.value} className="surface-card card-hover flex min-h-[220px] flex-col justify-between rounded-[26px] p-6">
                  <div className="mb-5 h-px w-14 bg-gradient-to-r from-[#8A5CF5] to-transparent" />
                  <div className="font-[family-name:var(--font-display)] text-[clamp(1.9rem,3vw,2.85rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-white">
                    {item.value}
                  </div>
                  <div className="mt-4 max-w-[24ch] text-[15px] leading-7 text-white/58">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[radial-gradient(circle_at_30%_18%,rgba(138,92,245,0.28),transparent_26%),radial-gradient(circle_at_80%_72%,rgba(138,92,245,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.28)] min-h-[520px]">
            <div className="absolute inset-x-10 top-10 h-40 rounded-full bg-[#8A5CF5]/18 blur-3xl" />
            <div className="absolute right-[-4rem] top-20 h-72 w-72 rounded-full border border-white/8 bg-[radial-gradient(circle,rgba(255,255,255,0.16),rgba(138,92,245,0.1)_48%,transparent_74%)] blur-[2px]" />
            <div className="relative flex h-full min-h-[460px] flex-col justify-between rounded-[28px] border border-white/8 bg-black/18 p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-sm">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/46">Delivery System</div>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.05em] text-white">
                    Strategy, interface, engineering, and launch quality in one flow.
                  </h2>
                </div>
                <div className="rounded-full border border-[#8A5CF5]/35 bg-[#8A5CF5]/12 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#c9b7ff]">
                  Static-first hero
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["Web and mobile", "Production-grade websites, apps, and conversion surfaces."],
                  ["AI automation", "Workflow systems that remove repetitive work and increase clarity."],
                  ["Cloud and commerce", "Infrastructure, reliability, and revenue-focused delivery."],
                  ["Senior execution", "Sharp design and engineering decisions without added process drag."],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-[24px] border border-white/8 bg-white/[0.04] p-5">
                    <div className="text-sm text-[#b99cff]">{title}</div>
                    <p className="mt-3 text-sm leading-7 text-white/66">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell">
          <div className="mb-8 section-intro">
            <span className="eyebrow">Why Sysjini</span>
            <h2 className="section-title font-[family-name:var(--font-display)] mt-5">Sharp execution across design, build, and scale.</h2>
          </div>
        </div>
        <div className="site-shell grid gap-6 lg:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="surface-card outline-grid card-hover rounded-[30px] p-7">
              <div className="mb-4 text-xs uppercase tracking-[0.18em] text-white/42">Why Sysjini</div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.05em] text-white">
                {item.title}
              </h2>
              <p className="mt-4 text-white/66">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell">
          <div className="mb-8 section-intro">
            <span className="eyebrow">Core Workstreams</span>
            <h2 className="section-title font-[family-name:var(--font-display)] mt-5">One partner across build, automation, and growth.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface-card-strong rounded-[32px] p-7 md:p-9">
              <div className="grid gap-5">
                {workstreams.map((item, index) => (
                  <div key={item.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                    <div className="mb-3 text-sm text-[#8A5CF5]">0{index + 1}</div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-white/66">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <a key={service.href} href={service.href} className="surface-card card-hover rounded-[30px] p-6">
                  <div className="mb-3 text-xs uppercase tracking-[0.18em] text-white/42">{service.eyebrow}</div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.05em]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/66">{service.summary}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell">
          <div className="surface-card outline-grid rounded-[36px] p-7 md:p-10">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Selected Models</span>
                <h2 className="section-title font-[family-name:var(--font-display)] mt-5">Visual cues matched to service relevance.</h2>
              </div>
              <p className="max-w-xl text-white/60">
                The new GLB assets are integrated as contextual storytelling elements rather than decorative noise.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "AI and design intelligence",
                  caption: "Positioning, UX systems, and applied AI aligned around business outcomes.",
                },
                {
                  title: "Commerce systems",
                  caption: "Checkout, transactional UX, and conversion-critical engineering decisions.",
                },
                {
                  title: "Cloud infrastructure",
                  caption: "Platform reliability, deployment pipelines, and scalable service foundations.",
                },
              ].map((item, index) => (
                <div key={item.title} className="surface-card rounded-[30px] p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="eyebrow">Relevant Model</span>
                    <span className="text-sm text-white/36">0{index + 1}</span>
                  </div>
                  <div className="mb-6 h-48 rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_30%_30%,rgba(138,92,245,0.32),transparent_24%),radial-gradient(circle_at_70%_65%,rgba(255,255,255,0.14),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.05em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/66">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="surface-card-strong rounded-[32px] p-7 md:p-10">
            <span className="eyebrow">Insights</span>
            <h2 className="section-title font-[family-name:var(--font-display)] mt-5">Clear thinking behind every build.</h2>
            <div className="mt-8 grid gap-4">
              {blogPosts.map((post) => (
                <a
                  key={post.id}
                  href={`/blogs/${post.id}`}
                  className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 transition hover:border-white/14 hover:bg-white/[0.05]"
                >
                  <div className="text-sm text-white/42">
                    {post.category} • {post.date}
                  </div>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-white/64">{post.excerpt}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="surface-card outline-grid rounded-[32px] p-7 md:p-10">
            <span className="eyebrow">Start Here</span>
            <h2 className="font-[family-name:var(--font-display)] mt-5 text-4xl font-semibold tracking-[-0.05em]">
              Need a sharp website, app, or AI workflow?
            </h2>
            <p className="mt-4 text-white/66">
              Bring the business problem. Sysjini can shape the direction, design the interface, engineer the system,
              and help it perform after launch.
            </p>
            <div className="mt-8 space-y-4 text-sm text-white/62">
              <div className="rounded-[22px] border border-white/8 bg-black/20 p-4">Web development and app delivery</div>
              <div className="rounded-[22px] border border-white/8 bg-black/20 p-4">AI automation and end-to-end solution design</div>
              <div className="rounded-[22px] border border-white/8 bg-black/20 p-4">Cloud, DevOps, commerce, and growth systems</div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary">
                Book a Consultation
              </a>
              <a href="tel:+917017197678" className="btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
