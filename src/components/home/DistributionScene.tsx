import { lerp } from "@/hooks/useScrollStage";

interface Props {
  stageIndex: number;
  stageProgress: number;
  progress: number;
}

// Node coordinates in 600x600 SVG space.
const CARRIER = { x: 300, y: 70 };
const IMO = { x: 300, y: 200 };
const HUB = { x: 300, y: 320 };
const AGENTS = [
  { x: 130, y: 430 },
  { x: 230, y: 470 },
  { x: 370, y: 470 },
  { x: 470, y: 430 },
];
const CONSUMERS = [
  { x: 90, y: 555 },
  { x: 200, y: 555 },
  { x: 310, y: 555 },
  { x: 420, y: 555 },
  { x: 530, y: 555 },
];

// per-stage activation [0..1] for groups
const STAGE_ACTIVATION = [
  // recruiting: candidates entering (agents partial)
  { candidates: 0.4, license: 0, hub: 0.1, rail: 0, sales: 0, placed: 0, renewal: 0, mesh: 0 },
  // licensing
  { candidates: 0.7, license: 1, hub: 0.2, rail: 0, sales: 0, placed: 0, renewal: 0, mesh: 0 },
  // onboarding
  { candidates: 0.9, license: 1, hub: 1, rail: 0.2, sales: 0, placed: 0, renewal: 0, mesh: 0 },
  // activation
  { candidates: 1, license: 1, hub: 1, rail: 1, sales: 0.2, placed: 0, renewal: 0, mesh: 0.1 },
  // sales
  { candidates: 1, license: 1, hub: 1, rail: 1, sales: 1, placed: 0.3, renewal: 0, mesh: 0.2 },
  // placement
  { candidates: 1, license: 1, hub: 1, rail: 1, sales: 1, placed: 1, renewal: 0.2, mesh: 0.35 },
  // renewals
  { candidates: 1, license: 1, hub: 1, rail: 1, sales: 1, placed: 1, renewal: 1, mesh: 0.6 },
  // retention
  { candidates: 1, license: 1, hub: 1, rail: 1, sales: 1, placed: 1, renewal: 1, mesh: 1 },
];

function interp<K extends keyof (typeof STAGE_ACTIVATION)[number]>(
  key: K,
  idx: number,
  sp: number,
) {
  const cur = STAGE_ACTIVATION[idx][key];
  const next = STAGE_ACTIVATION[Math.min(idx + 1, STAGE_ACTIVATION.length - 1)][key];
  return lerp(cur, next, sp);
}

export function DistributionScene({ stageIndex, stageProgress, progress }: Props) {
  const a = {
    candidates: interp("candidates", stageIndex, stageProgress),
    license: interp("license", stageIndex, stageProgress),
    hub: interp("hub", stageIndex, stageProgress),
    rail: interp("rail", stageIndex, stageProgress),
    sales: interp("sales", stageIndex, stageProgress),
    placed: interp("placed", stageIndex, stageProgress),
    renewal: interp("renewal", stageIndex, stageProgress),
    mesh: interp("mesh", stageIndex, stageProgress),
  };

  // Camera tilt — subtle, drifts across journey
  const rotY = lerp(-12, 12, progress);
  const rotX = lerp(18, 6, progress);

  const goldStrong = "hsl(var(--gold))";
  const goldSoft = "hsl(var(--gold-light))";
  const dim = "hsl(var(--primary-foreground) / 0.18)";
  const text = "hsl(var(--primary-foreground) / 0.55)";

  const drawn = (active: number) => ({
    strokeDasharray: 1000,
    strokeDashoffset: 1000 * (1 - active),
    transition: "stroke-dashoffset 0.2s linear, stroke 0.3s linear",
  });

  return (
    <div className="dist-scene-wrap">
      <div
        className="dist-scene"
        style={{ transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)` }}
      >
        <svg viewBox="0 0 600 620" className="w-full h-full">
          <defs>
            <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={goldSoft} stopOpacity="0.6" />
              <stop offset="100%" stopColor={goldSoft} stopOpacity="0" />
            </radialGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Mesh background (retention bloom) */}
          {a.mesh > 0 && (
            <g opacity={a.mesh * 0.5}>
              {AGENTS.flatMap((ag, i) =>
                CONSUMERS.map((c, j) => (
                  <line
                    key={`m-${i}-${j}`}
                    x1={ag.x}
                    y1={ag.y}
                    x2={c.x}
                    y2={c.y}
                    stroke={goldSoft}
                    strokeWidth={0.4}
                  />
                )),
              )}
            </g>
          )}

          {/* Carrier → IMO rail */}
          <line
            x1={CARRIER.x}
            y1={CARRIER.y}
            x2={IMO.x}
            y2={IMO.y}
            stroke={a.rail > 0.05 ? goldStrong : dim}
            strokeWidth={1}
            style={drawn(Math.max(0.05, a.rail))}
          />
          {/* IMO → Hub */}
          <line
            x1={IMO.x}
            y1={IMO.y}
            x2={HUB.x}
            y2={HUB.y}
            stroke={a.hub > 0.1 ? goldStrong : dim}
            strokeWidth={1}
            style={drawn(a.hub)}
          />

          {/* Hub glow */}
          {a.hub > 0.3 && (
            <circle cx={HUB.x} cy={HUB.y} r={60} fill="url(#hubGlow)" opacity={a.hub} />
          )}

          {/* Hub → Agents */}
          {AGENTS.map((ag, i) => (
            <line
              key={`ha-${i}`}
              x1={HUB.x}
              y1={HUB.y}
              x2={ag.x}
              y2={ag.y}
              stroke={a.hub > 0.5 ? goldStrong : dim}
              strokeWidth={0.8}
              style={drawn(a.hub)}
            />
          ))}

          {/* Agents → Consumers (sales) */}
          {AGENTS.map((ag, i) => {
            const c = CONSUMERS[i + 1] || CONSUMERS[i];
            return (
              <line
                key={`ac-${i}`}
                x1={ag.x}
                y1={ag.y}
                x2={c.x}
                y2={c.y}
                stroke={a.sales > 0.2 ? goldStrong : dim}
                strokeWidth={0.8}
                style={drawn(a.sales)}
              />
            );
          })}

          {/* Renewal arcs */}
          {a.renewal > 0.05 &&
            AGENTS.map((ag, i) => {
              const c = CONSUMERS[i + 1] || CONSUMERS[i];
              const mx = (ag.x + c.x) / 2 + 30;
              const my = (ag.y + c.y) / 2;
              return (
                <path
                  key={`r-${i}`}
                  d={`M ${c.x} ${c.y} Q ${mx} ${my} ${ag.x} ${ag.y}`}
                  fill="none"
                  stroke={goldSoft}
                  strokeWidth={0.6}
                  opacity={a.renewal}
                  strokeDasharray="2 3"
                />
              );
            })}

          {/* Carrier node */}
          <g>
            <rect
              x={CARRIER.x - 50}
              y={CARRIER.y - 14}
              width={100}
              height={28}
              fill="hsl(var(--ink))"
              stroke={goldStrong}
              strokeWidth={0.8}
            />
            <text
              x={CARRIER.x}
              y={CARRIER.y + 4}
              textAnchor="middle"
              fontSize={9}
              fontFamily="DM Mono, monospace"
              letterSpacing="0.25em"
              fill={goldSoft}
            >
              CARRIER
            </text>
          </g>

          {/* IMO node */}
          <g>
            <rect
              x={IMO.x - 36}
              y={IMO.y - 12}
              width={72}
              height={24}
              fill="hsl(var(--ink))"
              stroke={a.license > 0.3 ? goldStrong : dim}
              strokeWidth={0.8}
            />
            <text
              x={IMO.x}
              y={IMO.y + 3}
              textAnchor="middle"
              fontSize={8}
              fontFamily="DM Mono, monospace"
              letterSpacing="0.25em"
              fill={a.license > 0.3 ? goldSoft : text}
            >
              IMO
            </text>
            {/* license badge */}
            {a.license > 0.1 && (
              <circle
                cx={IMO.x + 36}
                cy={IMO.y - 12}
                r={4}
                fill={goldStrong}
                opacity={a.license}
                filter="url(#glow)"
              />
            )}
          </g>

          {/* Hub node */}
          <g filter={a.hub > 0.5 ? "url(#glow)" : undefined}>
            <circle
              cx={HUB.x}
              cy={HUB.y}
              r={18}
              fill="hsl(var(--ink))"
              stroke={a.hub > 0.3 ? goldStrong : dim}
              strokeWidth={1}
            />
            <circle cx={HUB.x} cy={HUB.y} r={4} fill={a.hub > 0.5 ? goldStrong : dim} />
          </g>

          {/* Agent nodes */}
          {AGENTS.map((ag, i) => {
            const lit = i / AGENTS.length < a.candidates;
            const active = lit && a.hub > 0.5;
            return (
              <g key={`ag-${i}`}>
                <circle
                  cx={ag.x}
                  cy={ag.y}
                  r={9}
                  fill="hsl(var(--ink))"
                  stroke={active ? goldStrong : lit ? goldSoft : dim}
                  strokeWidth={1}
                  opacity={lit ? 1 : 0.35}
                />
                {a.sales > 0.5 && active && (
                  <circle cx={ag.x} cy={ag.y} r={3} fill={goldStrong} opacity={a.sales} />
                )}
              </g>
            );
          })}

          {/* Consumer nodes */}
          {CONSUMERS.map((c, i) => {
            const lit = a.placed > 0.1;
            return (
              <g key={`c-${i}`}>
                <rect
                  x={c.x - 7}
                  y={c.y - 7}
                  width={14}
                  height={14}
                  fill="hsl(var(--ink))"
                  stroke={lit ? goldStrong : dim}
                  strokeWidth={0.8}
                  opacity={lit ? 1 : 0.4}
                  transform={`rotate(45 ${c.x} ${c.y})`}
                />
              </g>
            );
          })}

          {/* Policy packet traveling */}
          {a.sales > 0.05 && a.sales < 1 && (
            <circle
              cx={lerp(AGENTS[1].x, CARRIER.x, a.sales)}
              cy={lerp(AGENTS[1].y, CARRIER.y, a.sales)}
              r={3}
              fill={goldStrong}
              filter="url(#glow)"
            />
          )}

          {/* Labels */}
          <text
            x={20}
            y={555}
            fontSize={7}
            fontFamily="DM Mono, monospace"
            letterSpacing="0.3em"
            fill={text}
          >
            CONSUMER
          </text>
          <text
            x={20}
            y={450}
            fontSize={7}
            fontFamily="DM Mono, monospace"
            letterSpacing="0.3em"
            fill={text}
          >
            AGENT
          </text>
        </svg>
      </div>
    </div>
  );
}
