export function ForgeRouteMockup() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-steel-700/50"
      style={{ background: "linear-gradient(170deg,#0a1422,#060e1a)" }}
    >
      {/* Barra superior */}
      <div className="flex items-center justify-between border-b border-steel-700/40 px-4 py-3">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-steel-300">
          <span
            className="inline-block h-[7px] w-[7px] rounded-full"
            style={{ background: "#3ddc84", boxShadow: "0 0 8px #3ddc84" }}
          />
          Motor de decisión
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-steel-500">
          auto
        </span>
      </div>

      <div className="p-4">
        {/* Expedición a decidir */}
        <div className="rounded-lg border border-steel-700/50 bg-forge-600 px-3.5 py-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-steel-300">EXP-4471</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-steel-500">
              Evaluando
            </span>
          </div>
          <div className="mt-1.5 flex gap-4 font-mono text-[10px] text-steel-500">
            <span>1.240 kg</span>
            <span>8 palets</span>
            <span>Destino · Barcelona</span>
          </div>
        </div>

        {/* Comparación de operadores */}
        <div className="mt-3 flex flex-col gap-1.5">
          <Operator name="TXT" cost="159" ok={false} reason="Supera límite de peso" />
          <Operator name="SEUR" cost="168" ok recommended />
          <Operator name="DSV" cost="182" ok />
        </div>

        {/* Decisión */}
        <div
          className="mt-3 flex items-center justify-between rounded-lg px-3.5 py-3"
          style={{ background: "rgba(245,97,2,.1)", border: "1px solid rgba(245,97,2,.35)" }}
        >
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-molten-spark">
            <CheckIcon /> Decisión automática
          </span>
          <span className="font-display text-sm font-bold text-steel-100">
            SEUR · 168&nbsp;€ · 4/4 reglas
          </span>
        </div>
      </div>
    </div>
  );
}

function Operator({
  name,
  cost,
  ok,
  recommended = false,
  reason,
}: {
  name: string;
  cost: string;
  ok: boolean;
  recommended?: boolean;
  reason?: string;
}) {
  return (
    <div
      className="flex items-center justify-between rounded-md border px-3 py-2.5"
      style={
        recommended
          ? { background: "rgba(245,97,2,.08)", borderColor: "rgba(245,97,2,.4)" }
          : { background: "#111D2D", borderColor: "rgba(58,68,83,.4)" }
      }
    >
      <div className="flex items-center gap-3">
        <span
          className={`font-display text-sm font-bold tracking-[0.04em] ${
            ok ? "text-steel-100" : "text-steel-500 line-through"
          }`}
        >
          {name}
        </span>
        {recommended && (
          <span
            className="rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em]"
            style={{ background: "rgba(245,97,2,.16)", color: "#FF7A1A" }}
          >
            Recomendado
          </span>
        )}
        {!ok && reason && (
          <span className="font-mono text-[10px] text-steel-500">{reason}</span>
        )}
      </div>
      <div className="flex items-center gap-2.5">
        <span
          className={`font-mono text-[13px] ${
            ok ? "text-steel-300" : "text-steel-500 line-through"
          }`}
        >
          {cost}&nbsp;€
        </span>
        {ok ? (
          <span className="text-[#3ddc84]">
            <CheckIcon />
          </span>
        ) : (
          <span className="font-mono text-xs text-steel-600" style={{ color: "#6b7480" }}>
            ✕
          </span>
        )}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
