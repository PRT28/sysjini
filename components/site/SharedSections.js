function Glyph({ children, viewBox = "0 0 24 24" }) {
  return (
    <svg viewBox={viewBox} className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      {children}
    </svg>
  );
}

const stackItems = [
  {
    name: "Next.js",
    tone: "from-white/16 to-white/6",
    icon: (
      <Glyph>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M9 8.5v7" />
        <path d="m15.6 8.8-3.2 4.2 3.6 2.2" />
      </Glyph>
    ),
  },
  {
    name: "React",
    tone: "from-[#6ddcff]/18 to-[#6ddcff]/8",
    icon: (
      <Glyph>
        <ellipse cx="12" cy="12" rx="8" ry="3.4" />
        <ellipse cx="12" cy="12" rx="8" ry="3.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="8" ry="3.4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      </Glyph>
    ),
  },
  {
    name: "Node.js",
    tone: "from-[#84cc16]/18 to-[#84cc16]/8",
    icon: (
      <Glyph>
        <path d="m12 3.5 7 4v9l-7 4-7-4v-9z" />
        <path d="M9.5 9.2v5.4" />
        <path d="m14.5 9.2-3.5 5.6" />
      </Glyph>
    ),
  },
  {
    name: "Tailwind CSS",
    tone: "from-[#38bdf8]/18 to-[#38bdf8]/8",
    icon: (
      <Glyph>
        <path d="M5 10.5c1.4-2.1 2.8-3 4.3-3 2.4 0 2.7 2.2 4.7 2.2 1 0 1.9-.5 3-1.7-1.3 2.1-2.7 3-4.2 3-2.4 0-2.7-2.2-4.7-2.2-1 0-1.9.5-3.1 1.7Z" />
        <path d="M5 15.7c1.4-2.1 2.8-3 4.3-3 2.4 0 2.7 2.2 4.7 2.2 1 0 1.9-.5 3-1.7-1.3 2.1-2.7 3-4.2 3-2.4 0-2.7-2.2-4.7-2.2-1 0-1.9.5-3.1 1.7Z" />
      </Glyph>
    ),
  },
  {
    name: "PostgreSQL",
    tone: "from-[#60a5fa]/18 to-[#60a5fa]/8",
    icon: (
      <Glyph>
        <ellipse cx="12" cy="6.5" rx="5.5" ry="2.5" />
        <path d="M6.5 6.5v7c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-7" />
        <path d="M6.5 10c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5" />
      </Glyph>
    ),
  },
  {
    name: "OpenAI",
    tone: "from-[#c4b5fd]/18 to-[#c4b5fd]/8",
    icon: (
      <Glyph>
        <path d="M12 4.5 15.8 6.7v4.2L12 13.1 8.2 11V6.7z" />
        <path d="M8.2 11 6 14.8l3.7 2.2 3.8-2.2" />
        <path d="m15.8 11 2.2 3.8-3.7 2.2" />
      </Glyph>
    ),
  },
  {
    name: "Docker",
    tone: "from-[#67e8f9]/18 to-[#67e8f9]/8",
    icon: (
      <Glyph>
        <rect x="5" y="10" width="3" height="3" />
        <rect x="8.5" y="10" width="3" height="3" />
        <rect x="12" y="10" width="3" height="3" />
        <rect x="8.5" y="6.5" width="3" height="3" />
        <path d="M4.5 15.5h10.5c1.2 0 2.1-.4 3-1.5-1.7-.2-2.6-1.1-3-2.3h-2.5" />
      </Glyph>
    ),
  },
  {
    name: "AWS",
    tone: "from-[#f59e0b]/18 to-[#f59e0b]/8",
    icon: (
      <Glyph>
        <path d="M7 15c3.1 1.8 6.9 1.8 10 0" />
        <path d="M8 10.5 10.2 7l1.8 3.5L13.8 7l2.2 3.5" />
        <path d="M9 17.3c2 .8 4 .8 6 0" />
      </Glyph>
    ),
  },
  {
    name: "Cloudflare",
    tone: "from-[#fb923c]/18 to-[#fb923c]/8",
    icon: (
      <Glyph>
        <path d="M8 15.5h9.2a2.3 2.3 0 0 0-.7-4.5 4.8 4.8 0 0 0-9-1.2A3 3 0 0 0 8 15.5Z" />
        <path d="M6 15.5h4.3a1.8 1.8 0 0 0-.6-3.4 3.4 3.4 0 0 0-3.7 3.4Z" />
      </Glyph>
    ),
  },
  {
    name: "Automation",
    tone: "from-[#a78bfa]/18 to-[#a78bfa]/8",
    icon: (
      <Glyph>
        <circle cx="12" cy="12" r="2.6" />
        <path d="M12 5v2.2M12 16.8V19M5 12h2.2M16.8 12H19M7.2 7.2l1.5 1.5M15.3 15.3l1.5 1.5M16.8 7.2l-1.5 1.5M8.7 15.3l-1.5 1.5" />
      </Glyph>
    ),
  },
  {
    name: "RAG Systems",
    tone: "from-[#22c55e]/18 to-[#22c55e]/8",
    icon: (
      <Glyph>
        <path d="M7 6.5h10v11H7z" />
        <path d="M10 9.5h4M10 12h4M10 14.5h2.5" />
        <path d="M7 8.5 4.8 10v8.2L7 16.8" />
      </Glyph>
    ),
  },
  {
    name: "Analytics",
    tone: "from-[#f472b6]/18 to-[#f472b6]/8",
    icon: (
      <Glyph>
        <path d="M5 18.5h14" />
        <path d="M7.5 16V11" />
        <path d="M12 16V7.5" />
        <path d="M16.5 16V9.5" />
      </Glyph>
    ),
  },
];

const timelineSteps = [
  {
    number: "01",
    title: "Clarify",
    copy: "Align on the business problem, constraints, audience, and success criteria before execution starts.",
    icon: (
      <Glyph>
        <circle cx="11" cy="11" r="5.5" />
        <path d="m15.5 15.5 3 3" />
      </Glyph>
    ),
  },
  {
    number: "02",
    title: "Design",
    copy: "Shape the interface, content structure, system architecture, and visual direction as one connected plan.",
    icon: (
      <Glyph>
        <path d="M6 17.5 17.5 6l2.5 2.5L8.5 20H6z" />
        <path d="M14 6.5 17.5 10" />
      </Glyph>
    ),
  },
  {
    number: "03",
    title: "Build",
    copy: "Implement the product, integrations, automation, and QA flow with production-grade standards.",
    icon: (
      <Glyph>
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m13.5 5.5-3 13" />
      </Glyph>
    ),
  },
  {
    number: "04",
    title: "Scale",
    copy: "Launch, observe, optimize, and extend the system with analytics, infrastructure, and iteration loops.",
    icon: (
      <Glyph>
        <path d="M5.5 16.5 10 12l3 2.5 5.5-6" />
        <path d="M15.5 8.5H19V12" />
      </Glyph>
    ),
  },
];

export function TechStackSection() {
  return (
    <section className="section-space">
      <div className="site-shell">
        <div className="surface-card outline-grid overflow-hidden rounded-[36px] px-7 py-8 md:px-10 md:py-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Tech Stack</span>
              <h2 className="section-title font-[family-name:var(--font-display)] mt-5">
                Tools chosen for reliability, speed, and maintainability.
              </h2>
            </div>
            <p className="max-w-xl text-white/60">
              Sysjini works across product interfaces, backend systems, AI workflows, deployment pipelines, and analytics layers.
            </p>
          </div>

          <div className="tech-grid">
            {stackItems.map((item, index) => (
              <div
                key={item.name}
                className={`tech-icon-card bg-gradient-to-br ${item.tone}`}
                style={{ animationDelay: `${index * 140}ms` }}
              >
                <div className="tech-icon-wrap">{item.icon}</div>
                <div className="tech-icon-label">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TimelineSection() {
  return (
    <section className="section-space">
      <div className="site-shell">
        <div className="surface-card-strong rounded-[36px] px-7 py-8 md:px-10 md:py-10">
          <div className="mb-10 section-intro">
            <span className="eyebrow">Delivery Timeline</span>
            <h2 className="section-title font-[family-name:var(--font-display)] mt-5">
              A clear path from discovery to launch.
            </h2>
          </div>

          <div className="timeline-grid">
            {timelineSteps.map((step, index) => (
              <div key={step.number} className="timeline-item">
                <div className="timeline-rail" aria-hidden="true">
                  <span className="timeline-node">{step.number}</span>
                  {index !== timelineSteps.length - 1 ? <span className="timeline-line" /> : null}
                </div>
                <div className="timeline-card">
                  <div className="timeline-card-icon">{step.icon}</div>
                  <div className="timeline-card-number">{step.number}</div>
                  <h3 className="timeline-card-title">{step.title}</h3>
                  <p className="timeline-card-copy">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
