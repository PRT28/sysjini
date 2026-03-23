import Image from "next/image";
import { navItems, services } from "../site/siteData";

export default function Footer() {
  return (
    <footer className="section-space border-t border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]">
      <div className="site-shell">
        <div className="surface-card outline-grid grid gap-10 rounded-[36px] px-6 py-8 md:grid-cols-[1.5fr_1fr_1fr] md:px-10 md:py-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Sysjini"
                width={48}
                height={48}
                className="h-12 w-12 rounded-2xl border border-white/10"
              />
              <div>
                <div className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.05em]">
                  Sysjini
                </div>
                <div className="text-sm text-white/48">Professional digital execution for modern businesses</div>
              </div>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/66">
              We build sleek websites, scalable apps, AI-powered workflows, commerce systems, and cloud foundations
              that help teams move with more clarity and control.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/62">
              <a href="mailto:hello@sysjini.in" className="rounded-full border border-white/10 px-4 py-2 hover:border-white/20">
                hello@sysjini.in
              </a>
              <a href="tel:+917017197678" className="rounded-full border border-white/10 px-4 py-2 hover:border-white/20">
                +91 7017197678
              </a>
            </div>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/42">Navigation</div>
            <div className="space-y-3 text-sm text-white/72">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/42">Core Services</div>
            <div className="space-y-3 text-sm text-white/72">
              {services.slice(0, 5).map((service) => (
                <a key={service.href} href={service.href} className="block transition hover:text-white">
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-1 pt-6 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Sysjini. Professional web, app, AI and cloud solutions.</p>
          <p>Gurugram, Haryana, India</p>
        </div>
      </div>
    </footer>
  );
}
