export default function ContactSatellite() {
  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-[32px] border border-white/8 bg-[radial-gradient(circle_at_32%_26%,rgba(138,92,245,0.32),transparent_22%),radial-gradient(circle_at_72%_64%,rgba(255,255,255,0.16),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] md:h-[340px] lg:h-[500px]">
      <div className="absolute inset-x-[16%] top-[18%] h-[42%] rounded-full bg-[#8A5CF5]/20 blur-3xl" />
      <div className="absolute inset-8 rounded-[26px] border border-white/8 bg-black/16" />
      <div className="absolute left-8 top-8 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/52">
        Static visual
      </div>
      <div className="absolute bottom-8 left-8 right-8 grid gap-3 md:grid-cols-3">
        {["Orbit", "Signal", "Support"].map((item) => (
          <div key={item} className="rounded-[18px] border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white/68">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
