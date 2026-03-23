import ModelShowcase from "../../../components/site/ModelShowcase";
import { blogPosts } from "../../../components/site/siteData";

export default function BlogsPage() {
  return (
    <main className="page-top-space">
      <section className="section-space-lg">
        <div className="site-shell grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-7">
            <span className="eyebrow">Insights</span>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
              <span className="headline-gradient">Sharp thinking on web, AI, cloud, and growth.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/68">
              The Sysjini insights section focuses on practical execution, not filler. Expect guidance on product
              delivery, digital strategy, cloud maturity, and AI implementation that fits real operations.
            </p>
          </div>
          <ModelShowcase
            variant="intelligence"
            title="Insight and analysis model"
            caption="The insights page uses the brain hologram model to match strategy, analysis, and AI-oriented thinking."
          />
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <a key={post.id} href={`/blogs/${post.id}`} className="surface-card outline-grid rounded-[30px] p-7 transition hover:-translate-y-1">
              <div className="text-sm text-white/42">
                {post.category} • {post.date}
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.05em]">
                {post.title}
              </h2>
              <p className="mt-4 text-white/66">{post.excerpt}</p>
              <div className="mt-6 text-sm font-medium text-[#b49aff]">Read article</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
