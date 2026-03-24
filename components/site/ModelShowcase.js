import LottieVisual from "./LottieVisual";
import { getLottiePath } from "./lottiePaths";

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
  const lottiePath = getLottiePath(variant);

  return (
    <div className={`surface-card outline-grid rounded-[32px] p-6 md:p-7 ${className}`}>
      <LottieVisual path={lottiePath} className="h-full w-full scale-[1.04]" />
    </div>
  );
}
