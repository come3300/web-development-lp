import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "無料相談・お問い合わせ｜WEBKURA",
  description: "WEBKURAへの無料相談・お見積りのお問い合わせページです。新規制作・リニューアル・保守運用など、お気軽にご相談ください。",
};

export default function ContactPage() {
  return (
    <main style={{ background: "#f4f6f8", color: "#0e1b2c", overflowX: "hidden" }}>
      <Header />

      <PageHero
        eyebrow="CONTACT"
        crumb="お問い合わせ"
        watermark="CONTACT"
        title="まずはお気軽に、お問い合わせください。"
        lead="ご相談・お見積りは無料です。現状のサイトの診断だけでも承ります。営業目的のしつこい連絡は一切しません。"
      />

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "clamp(32px,5vw,80px)", alignItems: "start" }}>
          <div>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>INFO</span>
            <h2 style={{ fontWeight: 900, fontSize: "1.5rem", lineHeight: 1.6, margin: "16px 0 32px" }}>お問い合わせについて</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 40 }}>
              <div style={{ borderTop: "1.5px solid #0e1b2c", paddingTop: 16 }}>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", color: "#5a6b80", marginBottom: 8 }}>対応エリア</div>
                <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.8 }}>全国対応(オンライン)</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(14,27,44,0.10)", paddingTop: 16 }}>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", color: "#5a6b80", marginBottom: 8 }}>返信目安</div>
                <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.8 }}>1〜2営業日以内にご返信します。</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(14,27,44,0.10)", paddingTop: 16 }}>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", color: "#5a6b80", marginBottom: 8 }}>メールで直接連絡</div>
                <a href="mailto: yonekura.business2026@gmail.com" style={{ fontSize: "0.92rem", lineHeight: 1.8, color: "#2f6bff", fontWeight: 700 }}>yonekura.business2026@gmail.com</a>
              </div>
            </div>

            <div style={{ background: "#f4f6f8", padding: "24px 24px 4px", marginBottom: 32 }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", color: "#5a6b80", marginBottom: 16 }}>お問い合わせ後の流れ</div>
              {["ヒアリング日程の調整", "無料ヒアリング(オンライン30分程度)", "お見積りのご提示"].map((t, i, arr) => (
                <div key={t} style={{ display: "flex", gap: 12, paddingBottom: 20 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "#2f6bff" }}>{i + 1}</div>
                  <p style={{ margin: 0, fontSize: "0.86rem", lineHeight: 1.7 }}>{t}</p>
                </div>
              ))}
              <Link href="/flow" style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0e1b2c", display: "inline-block", marginBottom: 20 }}>制作の流れを詳しく見る →</Link>
            </div>

            <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "#5a6b80", margin: 0 }}>
              料金の目安は<Link href="/price" style={{ color: "#2f6bff", fontWeight: 700 }}>プラン・料金ページ</Link>、よくある質問は<Link href="/faq" style={{ color: "#2f6bff", fontWeight: 700 }}>FAQページ</Link>でもご確認いただけます。
            </p>
          </div>

          <div style={{ border: "1px solid rgba(14,27,44,0.10)", borderRadius: 16, overflow: "hidden", padding: "clamp(28px,4vw,48px)", background: "#fff" }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
