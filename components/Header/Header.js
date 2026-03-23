"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navItems } from "../site/siteData";
import ThemeToggle from "../theme/ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3">
      <div
        className={`site-shell rounded-[28px] border transition-all duration-300 ${
          isScrolled
            ? "border-white/12 shadow-[0_20px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
            : "border-white/8 backdrop-blur-xl"
        }`}
        style={{ backgroundColor: isScrolled ? "var(--header-bg-scrolled)" : "var(--header-bg)" }}
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Sysjini"
              width={44}
              height={44}
              className="h-11 w-11 rounded-2xl border border-white/10 object-cover"
              priority
            />
            <div>
              <div className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.04em] text-white">
                Sysjini
              </div>
              <div className="text-xs uppercase tracking-[0.22em] text-white/45">Build. Scale. Automate.</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/72 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
          </div>

          <div className="hidden md:block">
            <a href="/contact" className="btn-primary text-sm">
              Start a Project
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Toggle navigation"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d={isMobileMenuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div className="border-t border-white/8 px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              <div className="mb-2">
                <ThemeToggle />
              </div>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-white/78 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="/contact" className="btn-primary mt-2 text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                Start a Project
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
