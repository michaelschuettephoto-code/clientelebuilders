import { useEffect, useRef, useState } from "react";

interface ScrollStageResult {
  progress: number;       // 0..1 across whole section
  stageIndex: number;     // 0..stageCount-1
  stageProgress: number;  // 0..1 within current stage
  active: boolean;        // section is currently pinning
}

export function useScrollStage(stageCount: number): {
  sectionRef: React.RefObject<HTMLDivElement>;
  state: ScrollStageResult;
} {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<ScrollStageResult>({
    progress: 0,
    stageIndex: 0,
    stageProgress: 0,
    active: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;

    const compute = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      if (total <= 0) return;
      const scrolled = -rect.top;
      let p = scrolled / total;
      if (p < 0) p = 0;
      if (p > 1) p = 1;
      const scaled = p * stageCount;
      let idx = Math.floor(scaled);
      if (idx >= stageCount) idx = stageCount - 1;
      const sp = scaled - idx;
      const active = rect.top <= 0 && rect.bottom >= vh;
      setState({ progress: p, stageIndex: idx, stageProgress: sp, active });
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [stageCount]);

  return { sectionRef, state };
}

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
