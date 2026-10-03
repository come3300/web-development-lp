import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { WorksGrid } from "@/components/WorksGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "制作実績｜WEBKURA",
  description: "コーポレートサイト・採用サイト・LP・ECサイトなど、WEBKURAのこれまでの制作実績を業種・目的別にご紹介します。",
};

export default function WorksPage() {
  return (
    <main style={{ background: "#f4f6f8", color: "#0e1b2c", overflowX: "hidden" }}>
      <Header />

      <PageHero
        eyebrow="WORKS"
        crumb="実績"
        watermark="WORKS"
        title="これまでの制作実績"
        lead="コーポレートサイトから採用サイト、LP、ECサイトまで。業種・目的を問わず、成果につながる設計を意識して制作しています。"
      />

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
            <div><span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>CASE STUDIES</span><h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 0" }}>実績一覧</h2></div>
            <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#5a6b80" }}>※ 守秘義務のある案件はお問い合わせ時に開示します</span>
          </div>
          <WorksGrid />
        </div>
      </section>

      {/* 実績のあとに、実際に触れるサンプルサイトへ送る */}
      <section style={{ padding: "0 clamp(20px,4vw,56px) clamp(70px,11vh,130px)", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", borderTop: "2px solid #0e1b2c", paddingTop: 32, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", letterSpacing: "0.2em", color: "#2f6bff" }}>SAMPLE SITES</span>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(1.4rem,2.8vw,2.1rem)", lineHeight: 1.55, margin: "14px 0 12px" }}>作れるサイトの雰囲気は、サンプルでご覧いただけます</h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 2, color: "#46566b", margin: 0, maxWidth: "38em" }}>
              クリエイティブ系の企業サイト、認定こども園、幼稚園、多拠点の小規模保育園、BtoBのコーポレートサイト。
              5タイプの作成例を、実際に動くサンプルサイトとして公開しています。
            </p>
          </div>
          <Link href="/samples" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "0.9rem", fontWeight: 700, color: "#fff", background: "#0e1b2c", borderRadius: 3, padding: "15px 30px", whiteSpace: "nowrap" }}>
            作成例を見る →
          </Link>
        </div>
      </section>

      <ContactCta />
      <Footer />
    </main>
  );
}
