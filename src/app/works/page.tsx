import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { WorksGrid } from "@/components/WorksGrid";

export const metadata: Metadata = {
  title: "制作実績｜TSUKURU",
  description: "コーポレートサイト・採用サイト・LP・ECサイトなど、TSUKURUのこれまでの制作実績を業種・目的別にご紹介します。",
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

      <ContactCta />
      <Footer />
    </main>
  );
}
