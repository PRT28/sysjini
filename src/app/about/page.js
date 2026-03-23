import ModelShowcase from "../../../components/site/ModelShowcase";

const principles = [
  {
    title: "Professional by default",
    copy: "Every deliverable is judged by clarity, finish, performance, and business usefulness.",
  },
  {
    title: "Systems over fragments",
    copy: "We connect strategy, design, engineering, AI, and growth so execution compounds instead of drifting.",
  },
  {
    title: "Modern without gimmicks",
    copy: "Sleek interfaces, clear communication, and serious implementation matter more than trend-chasing.",
  },
];

export const metadata = {
  title: "About Sysjini | Professional Digital Solutions Company",
  description:
    "Learn how Sysjini approaches web, app, AI, cloud, branding, and growth delivery for modern businesses.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="page-top-space">
      <section className="section-space-lg">
        <div className="site-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <span className="eyebrow">About Sysjini</span>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
              <span className="headline-gradient">A digital execution company built for serious delivery.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/68">
              Sysjini works with businesses that need more than a basic website or outsourced development sprint. We
              build customer-facing products, internal systems, AI workflows, and brand experiences with a modern,
              polished standard from end to end.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="surface-card rounded-[24px] p-5">
                <div className="stat-value font-[family-name:var(--font-display)]">Web</div>
                <div className="mt-2 text-sm text-white/56">sites and platforms that perform</div>
              </div>
              <div className="surface-card rounded-[24px] p-5">
                <div className="stat-value font-[family-name:var(--font-display)]">AI</div>
                <div className="mt-2 text-sm text-white/56">solutions embedded in real workflows</div>
              </div>
              <div className="surface-card rounded-[24px] p-5">
                <div className="stat-value font-[family-name:var(--font-display)]">Scale</div>
                <div className="mt-2 text-sm text-white/56">cloud, growth, and operational maturity</div>
              </div>
            </div>
          </div>
          <ModelShowcase
            variant="intelligence"
            title="Strategic intelligence model"
            caption="The about page uses the brain hologram model to represent strategy, design thinking, and AI capability."
          />
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="surface-card-strong rounded-[32px] p-7 md:p-10">
            <span className="eyebrow">Positioning</span>
            <h2 className="section-title font-[family-name:var(--font-display)] mt-5">What makes Sysjini different</h2>
            <p className="mt-4 text-white/66">
              The company sits at the intersection of product execution, design polish, automation thinking, and
              business growth. That allows a project to move from concept to launch without losing coherence.
            </p>
            <div className="mt-8 space-y-4 text-white/66">
              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                Senior-level thinking across architecture, UI, and commercial outcomes.
              </div>
              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                AI solutions treated as part of the product and operations stack, not isolated experiments.
              </div>
              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                Clean, professional communication with a consistent visual standard across the work.
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="surface-card rounded-[28px] p-6">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.05em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-white/66">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell">
          <div className="surface-card outline-grid rounded-[36px] px-7 py-8 md:px-10 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <span className="eyebrow">Engagement Style</span>
                <h2 className="section-title font-[family-name:var(--font-display)] mt-5">
                  Best suited for teams that value clarity and execution quality.
                </h2>
              </div>
              <div className="space-y-4 text-white/66">
                <p>
                  Sysjini is a strong fit for startups, service firms, and growing businesses that want a credible
                  digital presence, scalable product infrastructure, or AI-enabled operational workflows.
                </p>
                <p>
                  Projects can range from a complete brand and website reset to full-stack application delivery and
                  post-launch cloud support.
                </p>
                <div className="pt-2">
                  <a href="/contact" className="btn-primary">
                    Discuss Your Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
