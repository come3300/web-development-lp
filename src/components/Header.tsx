"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/strength", label: "強み" },
  { href: "/creator", label: "制作について" },
  { href: "/price", label: "料金" },
  { href: "/flow", label: "流れ" },
  { href: "/blog", label: "ブログ" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(20px,4vw,56px)", height: 72, position: "sticky", top: 0, zIndex: 50, background: "rgba(244,246,248,0.86)", backdropFilter: "blur(14px)", boxShadow: "0 1px 0 rgba(14,27,44,0.06), 0 4px 20px rgba(14,27,44,0.03)" }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#0e1b2c 0%,#1c2f57 100%)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>W</div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
          <span style={{ fontWeight: 900, fontSize: "1rem", letterSpacing: "0.02em", color: "#0e1b2c" }}>WEBKURA</span>
          <span style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.22em", color: "#5a6b80" }}>WEB DEVELOPMENT SERVICE</span>
        </div>
      </Link>
      <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
        {NAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} style={{ fontWeight: 700, fontSize: "0.88rem", color: active ? "#2f6bff" : "#0e1b2c" }}>{item.label}</Link>
          );
        })}
        <Link href="/contact" style={{ background: "linear-gradient(135deg,#ff4d4f 0%,#2f6bff 100%)", color: "#fff", fontWeight: 700, fontSize: "0.88rem", padding: "12px 28px", borderRadius: 999, boxShadow: "0 4px 14px rgba(47,107,255,0.25)" }}>無料相談 →</Link>
      </nav>
    </header>
  );
}
