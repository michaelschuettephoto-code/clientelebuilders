import { DISTRIBUTION_STAGES } from "@/data/distributionStages";

interface Props {
  stageIndex: number;
  progress: number;
}

export function StagePanel({ stageIndex, progress }: Props) {
  return (
    <div className="dist-panel">
      <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-6">
        The Distribution Chain
      </span>

      <div className="dist-panel-stack">
        {DISTRIBUTION_STAGES.map((s, i) => (
          <div
            key={s.id}
            className="dist-stage"
            style={{ opacity: i === stageIndex ? 1 : 0 }}
            aria-hidden={i !== stageIndex}
          >
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--gold-light))]">
                {String(s.index).padStart(2, "0")} / 08
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-primary-foreground/40 uppercase">
                {s.label}
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] text-primary-foreground mb-5">
              {s.headline}
            </h3>
            <p className="text-primary-foreground/65 leading-relaxed max-w-md mb-6">
              {s.subhead}
            </p>
            <div className="border-t border-primary-foreground/10 pt-4 flex items-baseline gap-3">
              <span className="font-mono text-[28px] text-[hsl(var(--gold))] leading-none">
                {s.metric}
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-primary-foreground/45 uppercase">
                {s.metricLabel}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* progress rail */}
      <div className="mt-10 flex items-center gap-4">
        <div className="flex-1 h-px bg-primary-foreground/10 relative">
          <div
            className="absolute inset-y-0 left-0 bg-[hsl(var(--gold))]"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="font-mono text-[9px] tracking-[0.25em] text-primary-foreground/45">
          {String(stageIndex + 1).padStart(2, "0")}/08
        </span>
      </div>
    </div>
  );
}
