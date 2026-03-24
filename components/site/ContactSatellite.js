import LottieVisual from "./LottieVisual";
import { getLottiePath } from "./lottiePaths";

export default function ContactSatellite() {
  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-[32px] border border-white/8 bg-[radial-gradient(circle_at_32%_26%,rgba(138,92,245,0.32),transparent_22%),radial-gradient(circle_at_72%_64%,rgba(255,255,255,0.16),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] md:h-[340px] lg:h-[500px]">
      <LottieVisual path={getLottiePath("contactus")} className="h-full w-full scale-[1.02]" />
    </div>
  );
}
