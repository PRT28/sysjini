import ContactFormPanel from "../../../components/site/ContactFormPanel";
import ContactSatellite from "../../../components/site/ContactSatellite";

export default function ContactPage() {
  return (
    <main className="page-top-space">
      <section className="section-space-lg">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="space-y-7">
            <span className="eyebrow">Contact</span>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
              <span className="headline-gradient">Bring the brief. We’ll shape the system.</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/68">
              Tell Sysjini what you are building, where the bottleneck is, or what needs to perform better. We handle
              websites, apps, AI workflows, cloud infrastructure, and growth-focused redesigns.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface-card rounded-[24px] p-5">
                <div className="mb-2 text-sm text-white/42">Email</div>
                <a href="mailto:hello@sysjini.in" className="text-lg text-white">
                  hello@sysjini.in
                </a>
              </div>
              <div className="surface-card rounded-[24px] p-5">
                <div className="mb-2 text-sm text-white/42">Phone</div>
                <a href="tel:+917017197678" className="text-lg text-white">
                  +91 7017197678
                </a>
              </div>
            </div>
            <div className="relative overflow-visible">
              <div className="mb-4 flex items-center gap-3">
                <span className="eyebrow">Relevant Model</span>
                <span className="text-sm text-white/42">Satellite system</span>
              </div>
              <ContactSatellite />
            </div>
          </div>

          <ContactFormPanel />
        </div>
      </section>
    </main>
  );
}
