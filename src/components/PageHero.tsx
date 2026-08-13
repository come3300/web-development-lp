import Link from "next/link";
import React from "react";

export function PageHero({ eyebrow, crumb, watermark, title, lead }: { eyebrow: string; crumb: string; watermark: string; title: React.ReactNode; lead?: React.ReactNode }) {
  return (
    <section style={{ background: "linear-gradient(135deg,#0e1b2c 0%,#1c2f57 100%)", color: "#fff", padding: "clamp(48px,8vh,88px) clamp(20px,4vw,56px) clamp(60px,9vh,100px)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-30%", left: "-6%", width: "clamp(260px,36vw,480px)", height: "clamp(260px,36vw,480px)", borderRadius: "50%", background: "radial-gradient(circle,#ff4d4f 0%,transparent 70%)", filter: "blur(70px)", opacity: 0.45, mixBlendMode: "screen", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-40%", right: "-6%", width: "clamp(280px,38vw,520px)", height: "clamp(280px,38vw,520px)", borderRadius: "50%", background: "radial-gradient(circle,#2f6bff 0%,transparent 70%)", filter: "blur(80px)", opacity: 0.45, mixBlendMode: "screen", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -20, right: -20, fontFamily: "var(--font-display)", fontSize: "clamp(4rem,11vw,10rem)", lineHeight: 0.9, color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.12)", userSelect: "none", pointerEvents: "none" }}>{watermark}</div>
      <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", fontWeight: 500, color: "rgba(255,255,255,0.55)", marginBottom: 24 }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.55)" }}>TOP</Link><span>/</span><span style={{ color: "#fff" }}>{crumb}</span>
        </div>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>{eyebrow}</span>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(2rem,4.4vw,3.4rem)", lineHeight: 1.5, margin: "20px 0 0" }}>{title}</h1>
        {lead && <p style={{ fontSize: "1rem", lineHeight: 2.1, color: "rgba(255,255,255,0.75)", maxWidth: "40em", margin: "24px 0 0" }}>{lead}</p>}
      </div>
    </section>
  );
}
