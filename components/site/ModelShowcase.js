const MODEL_STYLES = {
  earth: {
    badge: "Global Systems",
    glow: "bg-[radial-gradient(circle_at_30%_35%,rgba(138,92,245,0.34),transparent_24%),radial-gradient(circle_at_70%_55%,rgba(88,153,255,0.22),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
  },
  station: {
    badge: "Platform Architecture",
    glow: "bg-[radial-gradient(circle_at_32%_30%,rgba(138,92,245,0.32),transparent_22%),radial-gradient(circle_at_76%_62%,rgba(255,255,255,0.18),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
  },
  commerce: {
    badge: "Commerce Engine",
    glow: "bg-[radial-gradient(circle_at_26%_34%,rgba(138,92,245,0.28),transparent_24%),radial-gradient(circle_at_68%_68%,rgba(255,214,122,0.18),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
  },
  infrastructure: {
    badge: "Infrastructure Layer",
    glow: "bg-[radial-gradient(circle_at_28%_32%,rgba(138,92,245,0.28),transparent_22%),radial-gradient(circle_at_72%_64%,rgba(106,210,255,0.18),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
  },
  intelligence: {
    badge: "Strategy Signal",
    glow: "bg-[radial-gradient(circle_at_30%_34%,rgba(138,92,245,0.34),transparent_22%),radial-gradient(circle_at_68%_58%,rgba(255,255,255,0.16),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
  },
  default: {
    badge: "System View",
    glow: "bg-[radial-gradient(circle_at_30%_30%,rgba(138,92,245,0.32),transparent_24%),radial-gradient(circle_at_70%_65%,rgba(255,255,255,0.14),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
  },
};

function getModelStyle(variant = "") {
  return MODEL_STYLES[variant] || MODEL_STYLES.default;
}

export default function ModelShowcase({ variant, title, caption, className = "", compact = false }) {
  const style = getModelStyle(variant);

  return (
    <div className={`surface-card outline-grid rounded-[32px] p-6 md:p-7 ${className}`}>
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="eyebrow">Relevant Model</span>
        <span className="text-xs uppercase tracking-[0.18em] text-white/38">{style.badge}</span>
      </div>
      <div
        className={`relative mb-6 overflow-hidden rounded-[28px] border border-white/8 ${compact ? "h-48" : "h-[340px]"} ${style.glow}`}
      >
        <div className="absolute inset-x-[14%] top-[14%] h-[34%] rounded-full bg-white/8 blur-3xl" />
        <div className="absolute inset-x-10 bottom-8 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <div className="absolute left-8 top-8 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/52">
          Static visual
        </div>
        <div className="absolute inset-8 rounded-[24px] border border-white/8 bg-black/12" />
        <div className="absolute bottom-8 left-8 right-8 grid gap-3 sm:grid-cols-3">
          {["Clarity", "Reliability", "Relevance"].map((item) => (
            <div key={item} className="rounded-[18px] border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white/68">
              {item}
            </div>
          ))}
        </div>
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.05em] text-white">
        {title}
      </h3>
      {caption ? <p className="mt-4 text-sm leading-7 text-white/66">{caption}</p> : null}
    </div>
  );
}
