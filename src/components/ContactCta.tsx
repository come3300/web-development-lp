import Link from "next/link";

export function ContactCta() {
  return (
    <section style={{ background: "#0e1b2c", color: "#fff", padding: "clamp(80px,12vh,150px) clamp(20px,4vw,56px)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: -30, right: -20, fontFamily: "var(--font-display)", fontSize: "clamp(5rem,13vw,12rem)", lineHeight: 0.9, color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.12)", userSelect: "none", pointerEvents: "none" }}>CONTACT</div>
      <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>CONTACT</span>
        <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem,4.4vw,3.4rem)", lineHeight: 1.5, margin: "20px 0 24px" }}>まずはお気軽に、<br />お問い合わせください。</h2>
        <p style={{ fontSize: "1rem", lineHeight: 2.1, color: "rgba(255,255,255,0.75)", maxWidth: "36em", margin: "0 0 44px" }}>ご相談・お見積りは無料です。現状のサイトの診断だけでも承ります。営業目的のしつこい連絡は一切しません。</p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/contact" style={{ background: "#2f6bff", color: "#fff", fontWeight: 700, fontSize: "1.1rem", padding: "20px 56px", display: "inline-flex", alignItems: "center", gap: 12 }}>無料相談・お見積り<span>→</span></Link>
          <Link href="/price" style={{ border: "1.5px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 700, fontSize: "1.1rem", padding: "20px 44px" }}>料金を見る</Link>
        </div>
      </div>
    </section>
  );
}
