"use client";
import { useEffect, useId, useRef, useState } from "react";

type Shape = "pillH" | "pillV";

/**
 * 写真の輪郭（ピル型）に沿って英文を流す。
 * ・自分の実寸を ResizeObserver で測ってから viewBox を組み立てるので、
 *   vw 指定の可変幅でも文字が引き伸ばされない
 * ・継ぎ目なくループさせるため「1フレーズの実描画幅」を測り、
 *   ちょうど1フレーズ分だけずらすアニメーションにしている
 * ・時計回りのパスなので、上辺は正立・下辺は反転して読める（参考サイトと同じ挙動）
 */
export function LoopText({
  shape,
  pad = 13,
  phrase,
  dim,
  className,
  speed = 26,
}: {
  shape: Shape;
  pad?: number;
  phrase: string;
  dim?: boolean;
  className?: string;
  speed?: number;
}) {
  const rawId = useId();
  const pathId = `loop${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const measureRef = useRef<SVGTextElement>(null);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);
  const [tile, setTile] = useState<{ tiles: number; period: number; total: number } | null>(null);
  const [motion, setMotion] = useState(true);

  const spaced = `${phrase}  `;

  /* 実寸を拾う */
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const read = () => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        setBox((prev) =>
          prev && Math.abs(prev.w - r.width) < 1 && Math.abs(prev.h - r.height) < 1
            ? prev
            : { w: Math.round(r.width), h: Math.round(r.height) }
        );
      }
    };
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* 書体が確定してから1フレーズ分の実幅を測る */
  useEffect(() => {
    if (!box) return;
    let cancelled = false;
    const measure = () => {
      if (cancelled) return;
      const path = pathRef.current;
      const text = measureRef.current;
      if (!path || !text) return;
      const pathLen = path.getTotalLength();
      const one = text.getComputedTextLength();
      if (!one || !pathLen) return;
      // パス1周がフレーズ何個ぶんかを整数に丸め、その個数でちょうど1周になるよう
      // 字送りを詰める（textLength）。こうすると始点と終点の字が一致し、継ぎ目が出ない
      const count = Math.max(2, Math.round(pathLen / one));
      const period = pathLen / count;
      setTile({ tiles: count * 2, period, total: pathLen * 2 });
    };
    if (typeof document !== "undefined" && document.fonts && document.fonts.status !== "loaded") {
      document.fonts.ready.then(measure);
    } else {
      measure();
    }
    return () => { cancelled = true; };
  }, [box, phrase, pad, shape]);

  let d = "";
  if (box) {
    const w = box.w - pad * 2;
    const h = box.h - pad * 2;
    if (shape === "pillH") {
      const r = h / 2;
      d = `M ${pad + r},${pad} H ${pad + w} V ${pad + h} H ${pad + r} A ${r},${r} 0 0 1 ${pad + r},${pad} Z`;
    } else {
      const r = w / 2;
      d = `M ${pad + w},${pad + r} V ${pad + h - r} A ${r},${r} 0 0 1 ${pad},${pad + h - r} V ${pad + r} A ${r},${r} 0 0 1 ${pad + w},${pad + r} Z`;
    }
  }

  return (
    <svg
      ref={svgRef}
      className={`mi-loop${dim ? " mi-loop--dim" : ""}${className ? ` ${className}` : ""}`}
      viewBox={box ? `0 0 ${box.w} ${box.h}` : undefined}
      aria-hidden="true"
      focusable="false"
    >
      {box && (
        <>
          <defs>
            <path id={pathId} ref={pathRef} d={d} fill="none" />
          </defs>
          <text ref={measureRef} visibility="hidden" x="0" y="0">{spaced}</text>
          {tile && (
            <text>
              <textPath
                href={`#${pathId}`}
                startOffset="0"
                textLength={tile.total}
                lengthAdjust="spacing"
              >
                {spaced.repeat(tile.tiles)}
                {motion && (
                  <animate
                    attributeName="startOffset"
                    from="0"
                    to={`-${tile.period}`}
                    dur={`${Math.max(8, tile.period / speed)}s`}
                    repeatCount="indefinite"
                  />
                )}
              </textPath>
            </text>
          )}
        </>
      )}
    </svg>
  );
}
