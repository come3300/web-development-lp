import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "#0e1b2c", color: "#fff", padding: "32px clamp(20px,4vw,56px)", borderTop: "1px solid rgba(255,255,255,0.14)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 28, height: 28, background: "#fff", color: "#0e1b2c", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "0.9rem" }}>T</div>
        <span style={{ fontWeight: 900, letterSpacing: "0.02em", color: "#fff" }}>TSUKURU WEB STUDIO</span>
      </Link>
      <span style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)" }}>© 2026 TSUKURU — WEB DESIGN × SEO × MARKETING</span>
    </footer>
  );
}
