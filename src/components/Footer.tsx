import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "linear-gradient(135deg,#0e1b2c 0%,#1c2f57 100%)", color: "#fff", padding: "32px clamp(20px,4vw,56px)", borderTop: "1px solid rgba(255,255,255,0.09)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "#fff", color: "#0e1b2c", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "0.9rem" }}>W</div>
        <span style={{ fontWeight: 900, letterSpacing: "0.02em", color: "#fff" }}>WEB DEVELOPMENT SERVICE</span>
      </Link>
      <span style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)" }}>© 2026 WEBKURA</span>
    </footer>
  );
}
