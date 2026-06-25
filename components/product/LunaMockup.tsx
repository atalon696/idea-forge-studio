export function LunaMockup() {
  const luna = "#C77DFF";
  return (
    <div
      className="overflow-hidden rounded-2xl border border-steel-700/50"
      style={{ background: "linear-gradient(170deg,#16101f,#0c0814)", padding: "26px 22px" }}
    >
      <div className="flex justify-between font-mono text-[10px] tracking-[0.1em]" style={{ color: "#9a86b8" }}>
        <span>9:41</span>
        <span>LUNA</span>
      </div>

      <div className="relative my-4 flex justify-center">
        <svg width="150" height="150" viewBox="0 0 150 150" aria-hidden>
          <circle cx="75" cy="75" r="62" fill="none" stroke="rgba(199,125,255,.15)" strokeWidth="10" />
          <circle
            cx="75" cy="75" r="62" fill="none" stroke={luna} strokeWidth="10"
            strokeLinecap="round" strokeDasharray="389" strokeDashoffset="178"
            transform="rotate(-90 75 75)"
          />
        </svg>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="font-display text-3xl font-bold leading-none text-white">Día 14</div>
          <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em]" style={{ color: luna }}>
            Ventana fértil
          </div>
        </div>
      </div>

      <div className="mt-3.5 flex justify-between px-1">
        {["L", "M", "X", "J", "V", "S", "D"].map((d, i) => (
          <div
            key={i}
            className="flex h-[26px] w-[26px] items-center justify-center rounded-full text-[10px]"
            style={
              i === 3
                ? { background: "rgba(199,125,255,.25)", color: "#fff", border: `1px solid ${luna}` }
                : { color: "#9a86b8", border: "1px solid rgba(199,125,255,.2)" }
            }
          >
            {d}
          </div>
        ))}
      </div>

      <div
        className="mt-4 flex items-center justify-between rounded-md px-3.5 py-3"
        style={{ background: "rgba(199,125,255,.08)", border: "1px solid rgba(199,125,255,.2)" }}
      >
        <span className="text-[11px]" style={{ color: "#c9b8e0" }}>Próximo ciclo previsto</span>
        <span className="font-display text-sm font-semibold text-white">28 may</span>
      </div>

      <div className="mt-3.5 flex items-center gap-2 font-mono text-[10px] tracking-[0.08em]" style={{ color: "#9a86b8" }}>
        🔒 Cifrado de extremo a extremo · Solo en tu dispositivo
      </div>
    </div>
  );
}
