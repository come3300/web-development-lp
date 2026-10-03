"use client";
import { useEffect } from "react";

/** サンプルサイト共通のスクロール表示。data-reveal を持つ要素に is-in を付けるだけ */
export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 画面内に入ったとき。すでに上へ通り過ぎている要素（アンカー遷移や
          // 途中からの復帰でスキップされた分）も、そのまま表示状態にする
          if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
