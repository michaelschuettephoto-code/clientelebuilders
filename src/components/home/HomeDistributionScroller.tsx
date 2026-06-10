import { DISTRIBUTION_STAGES } from "@/data/distributionStages";
import { useScrollStage } from "@/hooks/useScrollStage";
import { DistributionScene } from "./DistributionScene";
import { StagePanel } from "./StagePanel";

export function HomeDistributionScroller() {
  const { sectionRef, state } = useScrollStage(DISTRIBUTION_STAGES.length);
  const { stageIndex, stageProgress, progress } = state;

  return (
    <section
      ref={sectionRef}
      className="dist-section bg-[hsl(var(--ink))] text-primary-foreground relative"
      aria-label="Distribution chain scroll"
    >
      {/* desktop: pinned */}
      <div className="dist-sticky">
        <div className="dist-grid">
          <StagePanel stageIndex={stageIndex} progress={progress} />
          <div className="dist-scene-col">
            <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4 dist-scene-eyebrow">
              Live Distribution Model
            </span>
            <DistributionScene
              stageIndex={stageIndex}
              stageProgress={stageProgress}
              progress={progress}
            />
          </div>
        </div>
      </div>

      {/* mobile fallback: stacked stages, no pin */}
      <div className="dist-mobile">
        <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-6">
          The Distribution Chain
        </span>
        <div className="mb-10">
          <DistributionScene stageIndex={7} stageProgress={1} progress={1} />
        </div>
        <ol className="space-y-8">
          {DISTRIBUTION_STAGES.map((s) => (
            <li key={s.id} className="border-l border-[hsl(var(--gold))]/40 pl-5">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--gold-light))]">
                  {String(s.index).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-primary-foreground/45 uppercase">
                  {s.label}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary-foreground mb-2 leading-snug">
                {s.headline}
              </h3>
              <p className="text-primary-foreground/65 text-sm leading-relaxed">{s.subhead}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
