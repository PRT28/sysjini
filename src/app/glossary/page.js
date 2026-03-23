import ModelShowcase from "../../../components/site/ModelShowcase";
import { glossaryTerms } from "../../../components/site/siteData";

export default function GlossaryPage() {
  return (
    <main className="page-top-space">
      <section className="section-space-lg">
        <div className="site-shell grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-7">
            <span className="eyebrow">Glossary</span>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
              <span className="headline-gradient">Key terms across product, AI, growth, and delivery.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/68">
              A concise reference for the concepts that appear across Sysjini projects, from automation and UX to
              conversion strategy and cloud delivery.
            </p>
          </div>
          <ModelShowcase
            variant="infrastructure"
            title="Systems reference model"
            caption="The glossary page uses the data center model to reflect architecture, systems knowledge, and technical clarity."
          />
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell max-w-5xl">
          <div className="grid gap-5">
            {glossaryTerms.map((item) => (
              <div key={item.term} className="surface-card rounded-[28px] p-6 md:p-7">
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.05em]">
                  {item.term}
                </h2>
                <p className="mt-4 text-white/66">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
