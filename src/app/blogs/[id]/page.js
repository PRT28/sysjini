import { notFound } from "next/navigation";
import ModelShowcase from "../../../../components/site/ModelShowcase";
import { blogPosts } from "../../../../components/site/siteData";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((item) => item.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="page-top-space">
      <section className="section-space-lg">
        <div className="site-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-7">
            <span className="eyebrow">{post.category}</span>
            <div className="text-sm text-white/42">{post.date}</div>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.07em]">
              <span className="headline-gradient">{post.title}</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/68">{post.excerpt}</p>
          </div>
          <ModelShowcase
            src="/models/brain_hologram.glb"
            title="Editorial relevance model"
            caption="The article view keeps the brain hologram model to anchor insight, strategy, and AI-adjacent subject matter."
            compact
          />
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell max-w-4xl">
          <article className="surface-card-strong rounded-[34px] p-7 md:p-10">
            <div className="space-y-7 text-lg leading-8 text-white/72">
              {post.body.map((paragraph, index) => (
                <p key={`${post.id}-${index}`}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10">
              <a href="/blogs" className="btn-secondary">
                Back to insights
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
