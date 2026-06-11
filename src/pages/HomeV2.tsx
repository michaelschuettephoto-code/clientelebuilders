import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

// Parse a CSS declaration string into a React style object.
// Keeps CSS custom properties (--foo) verbatim so they reach the DOM.
const css = (s: string): React.CSSProperties => {
  const out: Record<string, string> = {};
  s.split(";").forEach((rule) => {
    const i = rule.indexOf(":");
    if (i < 0) return;
    const k = rule.slice(0, i).trim();
    const v = rule.slice(i + 1).trim();
    if (!k) return;
    const key = k.startsWith("--") ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[key] = v;
  });
  return out as React.CSSProperties;
};

const AREAS = [
  { num: "01", name: "Recruiting", q: "Can you consistently move the right people forward?" },
  { num: "02", name: "Onboarding", q: "Do new agents know exactly what to do — and do it?" },
  { num: "03", name: "Marketing", q: "Is trust built before conversations begin?" },
  { num: "04", name: "Sales Process", q: "Can attention reliably become revenue?" },
  { num: "05", name: "Persistency", q: "Is long-term profit being protected?" },
  { num: "06", name: "Compensation", q: "Are incentives aligned to the outcomes you want?" },
  { num: "07", name: "Leadership", q: "Is the next generation being developed?" },
  { num: "08", name: "Technology & Data", q: "Can leaders actually see what's working?" },
];

// Activation (right rim) leak particles — copied verbatim from the design bundle.
const LEAK_RIGHT: Array<React.CSSProperties> = [
  css("position:absolute; width:3px; height:10px; border-radius:2px; background:linear-gradient(180deg,#f6d89a,#c8902f); box-shadow:0 0 4px rgba(200,144,47,.7); animation: cbLeak 2.6s cubic-bezier(.4,.05,.6,1) infinite; animation-delay:-0.1s; --dx:30px; --dy:140px;"),
  css("position:absolute; width:3px; height:9px; border-radius:2px; background:linear-gradient(180deg,#f6d89a,#c8902f); box-shadow:0 0 4px rgba(200,144,47,.7); animation: cbLeak 2.9s cubic-bezier(.4,.05,.6,1) infinite; animation-delay:-0.7s; --dx:46px; --dy:120px;"),
  css("position:absolute; width:2.5px; height:8px; border-radius:2px; background:linear-gradient(180deg,#f6d89a,#c8902f); box-shadow:0 0 4px rgba(200,144,47,.7); animation: cbLeak 2.3s cubic-bezier(.4,.05,.6,1) infinite; animation-delay:-1.2s; --dx:18px; --dy:150px;"),
  css("position:absolute; width:3px; height:11px; border-radius:2px; background:linear-gradient(180deg,#f6d89a,#c8902f); box-shadow:0 0 4px rgba(200,144,47,.7); animation: cbLeak 3.1s cubic-bezier(.4,.05,.6,1) infinite; animation-delay:-1.8s; --dx:38px; --dy:165px;"),
  css("position:absolute; width:2.5px; height:9px; border-radius:2px; background:linear-gradient(180deg,#f6d89a,#c8902f); box-shadow:0 0 4px rgba(200,144,47,.7); animation: cbLeak 2.7s cubic-bezier(.4,.05,.6,1) infinite; animation-delay:-2.3s; --dx:24px; --dy:128px;"),
  css("position:absolute; width:3px; height:10px; border-radius:2px; background:linear-gradient(180deg,#f6d89a,#c8902f); box-shadow:0 0 4px rgba(200,144,47,.7); animation: cbLeak 2.5s cubic-bezier(.4,.05,.6,1) infinite; animation-delay:-0.4s; --dx:52px; --dy:138px;"),
  css("position:absolute; width:2.5px; height:8px; border-radius:2px; background:linear-gradient(180deg,#f6d89a,#c8902f); box-shadow:0 0 4px rgba(200,144,47,.7); animation: cbLeak 3.3s cubic-bezier(.4,.05,.6,1) infinite; animation-delay:-1.5s; --dx:14px; --dy:158px;"),
];

const LEAK_LEFT: Array<React.CSSProperties> = [
  css("position:absolute; width:3px; height:10px; border-radius:2px; background:linear-gradient(180deg,#f6d89a,#c8902f); box-shadow:0 0 4px rgba(200,144,47,.7); animation: cbLeak 2.8s cubic-bezier(.4,.05,.6,1) infinite; animation-delay:-0.3s; --dx:-30px; --dy:120px;"),
  css("position:absolute; width:2.5px; height:9px; border-radius:2px; background:linear-gradient(180deg,#f6d89a,#c8902f); box-shadow:0 0 4px rgba(200,144,47,.7); animation: cbLeak 3.0s cubic-bezier(.4,.05,.6,1) infinite; animation-delay:-0.9s; --dx:-44px; --dy:108px;"),
  css("position:absolute; width:3px; height:11px; border-radius:2px; background:linear-gradient(180deg,#f6d89a,#c8902f); box-shadow:0 0 4px rgba(200,144,47,.7); animation: cbLeak 2.4s cubic-bezier(.4,.05,.6,1) infinite; animation-delay:-1.4s; --dx:-18px; --dy:132px;"),
  css("position:absolute; width:2.5px; height:8px; border-radius:2px; background:linear-gradient(180deg,#f6d89a,#c8902f); box-shadow:0 0 4px rgba(200,144,47,.7); animation: cbLeak 3.2s cubic-bezier(.4,.05,.6,1) infinite; animation-delay:-2.0s; --dx:-36px; --dy:145px;"),
  css("position:absolute; width:3px; height:10px; border-radius:2px; background:linear-gradient(180deg,#f6d89a,#c8902f); box-shadow:0 0 4px rgba(200,144,47,.7); animation: cbLeak 2.6s cubic-bezier(.4,.05,.6,1) infinite; animation-delay:-1.0s; --dx:-26px; --dy:115px;"),
  css("position:absolute; width:2.5px; height:9px; border-radius:2px; background:linear-gradient(180deg,#f6d89a,#c8902f); box-shadow:0 0 4px rgba(200,144,47,.7); animation: cbLeak 2.9s cubic-bezier(.4,.05,.6,1) infinite; animation-delay:-2.5s; --dx:-12px; --dy:138px;"),
];

const STAGES = [
  { num: "01", color: "#C8902F", name: "Attention", q: "Are the right people even looking?", textColor: "#b9c7d4", center: 0.20, hw: 0.12 },
  { num: "02", color: "#C8902F", name: "Trust", q: "Do they believe you before they ever talk to you?", textColor: "#b9c7d4", center: 0.40, hw: 0.12 },
  { num: "03 · LEAK", color: "#d2693f", name: "Activation", q: "Most new agents never truly start. Here's a leak.", textColor: "#e0a585", center: 0.58, hw: 0.11 },
  { num: "04", color: "#C8902F", name: "Revenue", q: "Does all that effort actually convert to production?", textColor: "#b9c7d4", center: 0.76, hw: 0.12 },
  { num: "05 · LEAK", color: "#d2693f", name: "Retention", q: "What pours out the bottom is what's left after every leak.", textColor: "#e0a585", center: 0.95, hw: 0.12 },
];

export default function HomeV2() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const dive = root.querySelector<HTMLElement>("[data-dive]");
    const scene = root.querySelector<HTMLElement>("[data-scene]");
    const caps = Array.from(root.querySelectorAll<HTMLElement>("[data-cap]"));
    const ticks = Array.from(root.querySelectorAll<HTMLElement>("[data-tick]"));
    const hint = root.querySelector<HTMLElement>("[data-hint]");
    const header = root.querySelector<HTMLElement>("[data-header]");
    const reveals = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    reveals.forEach((el) => { el.style.willChange = "transform"; });

    const stops = [
      { p: 0.00, z: 0.86, f: 0.42 },
      { p: 0.16, z: 1.20, f: 0.16 },
      { p: 0.36, z: 1.62, f: 0.30 },
      { p: 0.56, z: 2.05, f: 0.42 },
      { p: 0.76, z: 2.46, f: 0.53 },
      { p: 1.00, z: 2.95, f: 0.66 },
    ];
    const sample = (prog: number) => {
      for (let i = 0; i < stops.length - 1; i++) {
        const a = stops[i], b = stops[i + 1];
        if (prog <= b.p || i === stops.length - 2) {
          const t = clamp((prog - a.p) / (b.p - a.p), 0, 1);
          const s = t * t * (3 - 2 * t);
          return { z: lerp(a.z, b.z, s), f: lerp(a.f, b.f, s) };
        }
      }
      return { z: 1, f: 0.5 };
    };

    const update = () => {
      const vh = window.innerHeight;
      if (dive && scene) {
        const rect = dive.getBoundingClientRect();
        const total = dive.offsetHeight - vh;
        const prog = clamp(-rect.top / total, 0, 1);
        const { z, f } = sample(prog);
        const H = scene.offsetHeight;
        const ty = -(f - 0.5) * H * z;
        scene.style.transform = `translateY(${ty.toFixed(1)}px) scale(${z.toFixed(3)})`;

        caps.forEach((c) => {
          const center = parseFloat(c.getAttribute("data-center") || "0");
          let op: number;
          if (c.getAttribute("data-cap") === "overview") {
            op = clamp(1 - prog / 0.11, 0, 1);
          } else {
            const hw = parseFloat(c.getAttribute("data-hw") || "0.11");
            op = clamp(1 - Math.abs(prog - center) / hw, 0, 1);
          }
          c.style.opacity = op.toFixed(3);
          c.style.transform = `translateY(${((1 - op) * 14).toFixed(1)}px)`;
        });

        const ai = Math.round(clamp((prog - 0.08) / 0.84, 0, 1) * 4);
        ticks.forEach((t, i) => {
          const on = i === ai;
          t.style.background = on ? "#C8902F" : "rgba(244,239,227,0.25)";
          t.style.transform = on ? "scaleX(2.3)" : "scaleX(1)";
        });

        if (hint) hint.style.opacity = clamp(1 - prog / 0.06, 0, 1).toFixed(3);
      }

      reveals.forEach((el) => {
        const r = el.getBoundingClientRect();
        const prog = clamp((vh - r.top) / (vh * 0.82), 0, 1);
        el.style.transform = `translate3d(0,${((1 - prog) * 34).toFixed(1)}px,0)`;
      });

      if (header) {
        if (window.scrollY > 30) {
          header.style.background = "rgba(14,36,54,0.82)";
          header.style.backdropFilter = "blur(12px)";
          (header.style as any).webkitBackdropFilter = "blur(12px)";
          header.style.borderBottomColor = "rgba(244,239,227,0.08)";
        } else {
          header.style.background = "transparent";
          header.style.backdropFilter = "none";
          (header.style as any).webkitBackdropFilter = "none";
          header.style.borderBottomColor = "transparent";
        }
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Clientele Builders — New Home Preview</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,500;0,700;1,500&family=Hanken+Grotesk:wght@400;500&family=IBM+Plex+Mono:wght@400;600&display=swap"
        />
        <style>{`
          @keyframes cbBob { 0%,100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(7px); opacity: 1; } }
          @keyframes cbLeak {
            0%   { transform: translate(0,0) scaleY(1); opacity: 0; }
            12%  { opacity: 0.95; }
            72%  { opacity: 0.7; }
            100% { transform: translate(var(--dx,24px), var(--dy,130px)) scaleY(0.55); opacity: 0; }
          }
          @keyframes cbPulse { 0%,100% { opacity: 0.55; } 50% { opacity: 0.95; } }
          .hv2-cta:hover { background: #d9a441 !important; }
        `}</style>
      </Helmet>

      <div style={{ background: "#070f18", minHeight: "100vh" }}>
        <div
          ref={rootRef}
          style={{
            maxWidth: 460,
            margin: "0 auto",
            background: "#0E2436",
            position: "relative",
            overflowX: "clip",
            fontFamily: "'Hanken Grotesk', sans-serif",
            color: "#F4EFE3",
          }}
        >
          {/* HEADER */}
          <div
            data-header=""
            style={css("position: sticky; top: 0; z-index: 80; display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; transition: background .4s ease, border-color .4s ease; border-bottom: 1px solid transparent;")}
          >
            <span style={css("font-family: 'Bodoni Moda', serif; font-weight: 700; font-size: 17px; color: #F4EFE3; letter-spacing: 0.01em;")}>Clientele Builders</span>
            <span style={css("display: inline-flex; flex-direction: column; gap: 4px; padding: 8px 4px;")}>
              <span style={css("width: 19px; height: 1.5px; background: #C8902F; display: block;")}></span>
              <span style={css("width: 19px; height: 1.5px; background: #C8902F; display: block;")}></span>
            </span>
          </div>

          {/* FUNNEL DIVE */}
          <div data-dive="" style={css("position: relative; height: 560vh; margin-top: -64px;")}>
            <div style={css("position: sticky; top: 0; height: 100vh; overflow: hidden; background: radial-gradient(125% 78% at 50% 30%, #14283b 0%, #0b1622 54%, #070f18 100%);")}>
              <div style={css("position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;")}>
                <div data-scene="" style={css("position: relative; width: 86%; max-width: 360px; aspect-ratio: 680 / 860; transform-origin: 50% 50%; will-change: transform;")}>

                  <svg viewBox="0 0 680 860" style={css("position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible;")}>
                    <defs>
                      <radialGradient id="v3topG" cx="38%" cy="28%" r="85%">
                        <stop offset="0" stopColor="#fff7e0" />
                        <stop offset="0.34" stopColor="#f0cf78" />
                        <stop offset="0.7" stopColor="#cf9b3b" />
                        <stop offset="1" stopColor="#9c6e1e" />
                      </radialGradient>
                      <linearGradient id="v3sideG" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#b9842a" />
                        <stop offset="1" stopColor="#5b3f12" />
                      </linearGradient>
                      <linearGradient id="v3curG" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#fff3cf" />
                        <stop offset="0.5" stopColor="#ecc46b" />
                        <stop offset="1" stopColor="#c8902f" />
                      </linearGradient>
                      <radialGradient id="v3ambG" cx="50%" cy="44%" r="56%">
                        <stop offset="0" stopColor="#C8902F" stopOpacity="0.5" />
                        <stop offset="0.6" stopColor="#C8902F" stopOpacity="0.1" />
                        <stop offset="1" stopColor="#C8902F" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient id="v3leakG" cx="30%" cy="30%" r="80%">
                        <stop offset="0" stopColor="#f0a868" />
                        <stop offset="0.6" stopColor="#d2693f" />
                        <stop offset="1" stopColor="#a8401f" />
                      </radialGradient>
                      <radialGradient id="v3redGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0" stopColor="#d2693f" stopOpacity="0.55" />
                        <stop offset="1" stopColor="#d2693f" stopOpacity="0" />
                      </radialGradient>
                      <filter id="v3glow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="6" /></filter>
                      <filter id="v3soft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="16" /></filter>
                    </defs>

                    <ellipse cx="340" cy="360" rx="250" ry="320" fill="url(#v3ambG)" filter="url(#v3soft)">
                      <animate attributeName="opacity" values="0.55;0.85;0.55" dur="5.5s" repeatCount="indefinite" />
                    </ellipse>
                    <ellipse cx="340" cy="666" rx="118" ry="18" fill="#000000" opacity="0.4" filter="url(#v3soft)" />

                    <line x1="340" y1="104" x2="340" y2="636" stroke="url(#v3curG)" strokeWidth="22" strokeLinecap="round" filter="url(#v3glow)" opacity="0.6" />
                    <line x1="340" y1="104" x2="340" y2="636" stroke="#fff3cf" strokeWidth="4" strokeLinecap="round" opacity="0.8" />

                    {/* DISC A · Attention */}
                    <ellipse cx="340" cy="166" rx="165" ry="38" fill="#523910" />
                    <rect x="175" y="140" width="330" height="26" fill="url(#v3sideG)" />
                    <ellipse cx="340" cy="140" rx="165" ry="38" fill="url(#v3topG)" stroke="#ffe9b0" strokeOpacity="0.45" strokeWidth="1" />
                    {/* DISC B · Trust */}
                    <ellipse cx="340" cy="279" rx="134" ry="31" fill="#523910" />
                    <rect x="206" y="255" width="268" height="24" fill="url(#v3sideG)" />
                    <ellipse cx="340" cy="255" rx="134" ry="31" fill="url(#v3topG)" stroke="#ffe9b0" strokeOpacity="0.45" strokeWidth="1" />
                    {/* DISC C · Activation (LEAK) */}
                    <ellipse cx="340" cy="382" rx="106" ry="25" fill="#523910" />
                    <rect x="234" y="360" width="212" height="22" fill="url(#v3sideG)" />
                    <ellipse cx="340" cy="360" rx="106" ry="25" fill="url(#v3topG)" stroke="#d2693f" strokeOpacity="0.6" strokeWidth="1.3" />
                    {/* DISC D · Revenue */}
                    <ellipse cx="340" cy="476" rx="80" ry="19" fill="#523910" />
                    <rect x="260" y="458" width="160" height="18" fill="url(#v3sideG)" />
                    <ellipse cx="340" cy="458" rx="80" ry="19" fill="url(#v3topG)" stroke="#ffe9b0" strokeOpacity="0.45" strokeWidth="1" />
                    {/* DISC E · Retention (LEAK) */}
                    <ellipse cx="340" cy="562" rx="56" ry="14" fill="#523910" />
                    <rect x="284" y="548" width="112" height="14" fill="url(#v3sideG)" />
                    <ellipse cx="340" cy="548" rx="56" ry="14" fill="url(#v3topG)" stroke="#d2693f" strokeOpacity="0.6" strokeWidth="1.3" />

                    {/* spout */}
                    <path d="M294,560 L322,620 A18 6 0 0 0 358,620 L386,560 A56 14 0 0 1 294,560 Z" fill="url(#v3sideG)" />
                    <ellipse cx="340" cy="620" rx="18" ry="6" fill="url(#v3topG)" />

                    {/* leak wounds */}
                    <circle cx="468" cy="386" r="30" fill="url(#v3redGlow)" style={css("animation: cbPulse 3s ease-in-out infinite;")} />
                    <path d="M440,356 C470,360 488,378 486,402 C485,414 476,420 470,410 C466,396 452,372 440,366 Z" fill="url(#v3leakG)" filter="url(#v3glow)" />
                    <circle cx="212" cy="572" r="26" fill="url(#v3redGlow)" style={css("animation: cbPulse 3.4s ease-in-out infinite;")} />
                    <path d="M288,546 C260,550 246,566 248,588 C249,599 258,604 263,594 C266,580 278,558 288,554 Z" fill="url(#v3leakG)" filter="url(#v3glow)" />
                  </svg>

                  {/* LEAK EMITTER · Activation (right) */}
                  <div style={css("position: absolute; left: 71%; top: 43%;")}>
                    {LEAK_RIGHT.map((s, i) => <span key={i} style={s} />)}
                  </div>
                  {/* LEAK EMITTER · Retention (left) */}
                  <div style={css("position: absolute; left: 40%; top: 64%;")}>
                    {LEAK_LEFT.map((s, i) => <span key={i} style={s} />)}
                  </div>
                </div>
              </div>

              {/* VIGNETTE */}
              <div style={css("position: absolute; inset: 0; pointer-events: none; background: linear-gradient(180deg, rgba(7,15,24,0.55) 0%, rgba(7,15,24,0) 26%, rgba(7,15,24,0) 58%, rgba(7,15,24,0.82) 100%);")} />

              {/* STAGE RAIL */}
              <div style={css("position: absolute; right: 18px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 12px; z-index: 20;")}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} data-tick="" style={css("width: 14px; height: 2px; border-radius: 2px; background: rgba(244,239,227,0.25); transform-origin: right center; transition: background .35s ease, transform .35s ease;")} />
                ))}
              </div>

              {/* OVERVIEW CAPTION */}
              <div data-cap="overview" data-center="0.04" style={css("position: absolute; top: 12%; left: 26px; right: 26px; z-index: 25;")}>
                <div style={css("font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: #C8902F; margin-bottom: 22px;")}>Distribution Intelligence</div>
                <h1 style={css("font-family: 'Bodoni Moda', serif; font-weight: 700; font-size: 44px; line-height: 0.99; letter-spacing: -0.018em; margin: 0; text-shadow: 0 2px 30px rgba(7,15,24,0.6);")}>
                  Revenue leaks hide inside <span style={css("color: #C8902F; font-style: italic;")}>distribution systems.</span>
                </h1>
              </div>

              {/* STAGE CAPTIONS */}
              {STAGES.map((s) => (
                <div
                  key={s.name}
                  data-cap="stage"
                  data-center={s.center}
                  data-hw={s.hw}
                  style={css("position: absolute; bottom: 11%; left: 26px; right: 26px; z-index: 25; text-align: center; opacity: 0;")}
                >
                  <div style={{ ...css("font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.18em; margin-bottom: 8px;"), color: s.color }}>{s.num}</div>
                  <div style={css("font-family: 'Bodoni Moda', serif; font-weight: 500; font-size: 38px; line-height: 1.0; margin-bottom: 10px; text-shadow: 0 2px 24px rgba(7,15,24,0.8);")}>{s.name}</div>
                  <div style={{ ...css("font-size: 15px; text-shadow: 0 1px 14px rgba(7,15,24,0.9);"), color: s.textColor }}>{s.q}</div>
                </div>
              ))}

              {/* SCROLL HINT */}
              <div data-hint="" style={css("position: absolute; bottom: 28px; left: 0; right: 0; z-index: 25; display: flex; flex-direction: column; align-items: center; gap: 8px; color: rgba(244,239,227,0.5); font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.22em; transition: opacity .4s ease;")}>
                <span>DIVE IN</span>
                <span style={css("display: inline-block; animation: cbBob 2s ease-in-out infinite;")}>↓</span>
              </div>
            </div>
          </div>

          {/* BELIEF */}
          <div style={css("padding: 110px 26px; background: #0a1622;")}>
            <div data-reveal="" style={css("font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #b0832e; margin-bottom: 26px;")}>What we believe</div>
            <p data-reveal="" style={css("font-family: 'Bodoni Moda', serif; font-weight: 500; font-size: 34px; line-height: 1.16; margin: 0; letter-spacing: -0.01em;")}>
              You don't have a lead problem. You have a <span style={css("font-style: italic; color: #C8902F;")}>visibility</span> problem.
            </p>
            <p data-reveal="" style={css("margin: 28px 0 0; font-size: 15.5px; line-height: 1.65; color: #8ea2b4; max-width: 340px;")}>
              So most firms prescribe the wrong fix — more leads, more marketing, more tech — when the real leak is somewhere else entirely. We help you see it first.
            </p>
          </div>

          {/* EIGHT AREAS */}
          <div style={css("padding: 100px 26px; background: #0E2436;")}>
            <div data-reveal="" style={css("font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #C8902F; margin-bottom: 18px;")}>The diagnostic</div>
            <h3 data-reveal="" style={css("font-family: 'Bodoni Moda', serif; font-weight: 500; font-size: 30px; line-height: 1.1; margin: 0 0 8px; letter-spacing: -0.01em;")}>Eight systems we pressure-test.</h3>
            <p data-reveal="" style={css("margin: 0 0 36px; font-size: 15px; line-height: 1.6; color: #8ea2b4; max-width: 320px;")}>Most firms leak across several of these. Very few can clearly see which one is costing them most.</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {AREAS.map((a) => (
                <div key={a.num} data-reveal="" style={css("display: flex; align-items: baseline; gap: 16px; padding: 20px 0; border-top: 1px solid rgba(244,239,227,0.12);")}>
                  <span style={css("font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #C8902F; flex: 0 0 24px;")}>{a.num}</span>
                  <div style={{ flex: 1 }}>
                    <div style={css("font-family: 'Bodoni Moda', serif; font-size: 21px; line-height: 1.1; margin-bottom: 4px;")}>{a.name}</div>
                    <div style={css("font-size: 13px; color: #7d8fa0; line-height: 1.4;")}>{a.q}</div>
                  </div>
                </div>
              ))}
              <div style={css("border-top: 1px solid rgba(244,239,227,0.12);")} />
            </div>
          </div>

          {/* CTA */}
          <div style={css("padding: 120px 26px; background: #0a1622;")}>
            <div data-reveal="" style={css("font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #C8902F; margin-bottom: 22px;")}>Start with visibility</div>
            <h3 data-reveal="" style={css("font-family: 'Bodoni Moda', serif; font-weight: 700; font-size: 38px; line-height: 1.02; margin: 0 0 20px; letter-spacing: -0.015em; text-wrap: pretty;")}>The Distribution Leak Diagnostic.</h3>
            <p data-reveal="" style={css("margin: 0 0 34px; font-size: 16px; line-height: 1.6; color: #9DB0C0; max-width: 330px;")}>A strategic assessment that shows your biggest leak, what it's costing you, and what to fix first. The goal isn't information — it's clarity.</p>
            <a
              data-reveal=""
              className="hv2-cta"
              href="https://start.clientelebuilders.com/distributionleak"
              style={css("display: inline-flex; align-items: center; gap: 12px; padding: 17px 28px; background: #C8902F; color: #0E2436; text-decoration: none; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; border-radius: 2px; white-space: nowrap; transition: background .2s ease;")}
            >
              Take the diagnostic <span style={{ fontSize: 15 }}>→</span>
            </a>
          </div>

          {/* FOOTER */}
          <div style={css("padding: 56px 26px 64px; background: #070f18;")}>
            <div style={css("font-family: 'Bodoni Moda', serif; font-weight: 700; font-size: 19px; margin-bottom: 10px;")}>Clientele Builders</div>
            <p style={css("margin: 0 0 28px; font-size: 13px; color: #6f8294; line-height: 1.55; max-width: 270px;")}>The intelligence layer for life insurance distribution.</p>
            <div style={css("font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.14em; color: #46586a; text-transform: uppercase;")}>© 2026 · Built on visibility</div>
          </div>
        </div>
      </div>
    </>
  );
}
