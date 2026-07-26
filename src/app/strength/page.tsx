import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";

export const metadata: Metadata = {
  title: "強み｜TSUKURU",
  description: "制作会社に頼むより、速く・自由に・安く。現役エンジニアが直接開発するTSUKURUならではの4つの強みと、制作会社との比較を紹介します。",
};

const STRENGTHS: [string, string, string, string, string?][] = [
  ["01", "最短1〜2週間の圧倒的スピード", "一般的な制作会社は営業・ディレクター・デザイナー・エンジニアと確認工程が多く1〜3ヶ月かかりがち。TSUKURUは少人数体制で意思決定が速く、Basicプランなら最短1週間で公開できます。要件が固まっている案件では着手から数日で初稿をお見せすることも可能です。", "最短納期 1週間〜"],
  ["02", "現役エンジニア直接開発の自由度", "テンプレート頼みではなく、現役エンジニアがコードを直接書くからこそ、独自機能・複雑な要件・こだわりの動きにも柔軟に対応できます。会員機能・予約システム・外部APIとの連携なども個別に設計・実装します。", "対応範囲 コーディング全域"],
  ["03", "低コストで、よりリッチな仕上がり", "営業・ディレクションにかかる中間コストを省く分、同じ予算でもデザイン・機能により多くを投資でき、制作会社より作り込んだサイトになります。見積りの内訳も工程ごとに開示するため、費用の使いみちが明確です。", "制作費 5万円〜"],
  ["04", "公開後もPDCAで併走", "公開後も細かな修正やトラブル対応、追加機能の実装まで徹底サポートします。", "保守継続率 92%", "※ 内容によっては追加料金をいただく場合があります"],
];

const AUDIENCE = [
  "制作会社に何度も見積りを取ったが、費用感がつかめず迷っている",
  "できるだけ早く、まずは形にして公開したい",
  "テンプレートではなく、自社らしいデザイン・機能を実現したい",
  "担当者と直接やり取りして、伝言ゲームによる認識ズレをなくしたい",
  "公開して終わりではなく、成果につながる運用まで併走してほしい",
  "予算内で、できるだけ質の高いサイトに仕上げたい",
];

const COMPARE: [string, string, string][] = [
  ["制作費用", "50万円〜150万円が目安", "5万円〜20万円〜"],
  ["制作期間", "1〜3ヶ月程度", "最短1週間〜4週間"],
  ["開発体制", "営業・ディレクター経由の伝言", "現役エンジニアと直接やり取り"],
  ["カスタマイズ性", "テンプレート・パッケージ内が中心", "要望に合わせた自由な実装"],
  ["デザインの自由度", "パッケージのデザイン幅に依存", "ゼロからのオーダーメイド設計"],
  ["追加費用", "月額運用費・修正費が別途発生しやすい", "月額不要・保守は任意"],
  ["契約の縛り", "年間契約・解約違約金があるケースも", "いつでも解約可能・囲い込みなし"],
];

export default function StrengthPage() {
  return (
    <main style={{ background: "#f4f6f8", color: "#0e1b2c", overflowX: "hidden" }}>
      <Header />

      <PageHero
        eyebrow="STRENGTH"
        crumb="強み"
        watermark="STRENGTH"
        title={<>制作会社に頼むより、<br />速く・自由に・安く。</>}
        lead="TSUKURUは現役エンジニアが直接手がけるホームページ制作サービスです。制作会社を通さず直接依頼いただくことで、短納期・低コスト・高い自由度を同時に実現します。"
      />

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>4 REASONS</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 64px" }}>選ばれる4つの理由</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {STRENGTHS.map(([num, title, body, stat, note], i) => (
              <div key={num} style={{ display: "grid", gridTemplateColumns: "140px 1fr 1.2fr 200px", gap: "clamp(20px,3vw,48px)", padding: "44px 0", borderTop: i === 0 ? "1.5px solid #0e1b2c" : "1px solid rgba(14,27,44,0.15)", borderBottom: i === STRENGTHS.length - 1 ? "1.5px solid #0e1b2c" : undefined, alignItems: "start" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,5vw,4.5rem)", lineHeight: 0.9, color: "#2f6bff" }}>{num}</div>
                <h3 style={{ fontWeight: 900, fontSize: "clamp(1.2rem,2vw,1.5rem)", lineHeight: 1.7, margin: 0 }}>{title}</h3>
                <div>
                  <p style={{ fontSize: "0.95rem", lineHeight: 2.1, color: "#3c4a5c", margin: 0 }}>{body}</p>
                  {note && <p style={{ fontSize: "0.78rem", fontWeight: 500, lineHeight: 1.9, color: "#5a6b80", margin: "8px 0 0" }}>{note}</p>}
                </div>
                <div style={{ border: "1px solid rgba(14,27,44,0.15)", padding: "16px 20px" }}>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", color: "#5a6b80", marginBottom: 8 }}>DATA</div>
                  <div style={{ fontWeight: 900, fontSize: "1.15rem" }}>{stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>FOR YOU</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 12px" }}>こんな方におすすめです</h2>
          <p style={{ fontSize: "0.95rem", fontWeight: 500, color: "#3c4a5c", margin: "0 0 48px" }}>ひとつでも当てはまれば、お気軽にご相談ください。</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 1, background: "rgba(14,27,44,0.15)", border: "1px solid rgba(14,27,44,0.15)" }}>
            {AUDIENCE.map((item) => (
              <div key={item} style={{ background: "#fff", padding: "24px 28px", display: "flex", gap: 14, alignItems: "flex-start", fontSize: "0.92rem", lineHeight: 1.9, fontWeight: 500 }}>
                <span style={{ color: "#2f6bff", fontWeight: 900 }}>■</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#fff", scrollMarginTop: 90 }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>COMPARISON</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 8px" }}>一般的な制作会社との比較</h2>
          <p style={{ fontSize: "0.88rem", fontWeight: 500, color: "#5a6b80", margin: "0 0 40px" }}>同程度の規模のサイトを依頼した場合の目安です。</p>
          <div style={{ overflowX: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", border: "1px solid rgba(14,27,44,0.15)", minWidth: 640 }}>
              <div style={{ padding: "16px 20px" }} />
              <div style={{ padding: "16px 20px", background: "#f4f6f8", fontWeight: 900, fontSize: "0.95rem", borderLeft: "1px solid rgba(14,27,44,0.15)" }}>一般的な制作会社</div>
              <div style={{ padding: "16px 20px", background: "#0e1b2c", color: "#fff", fontWeight: 900, fontSize: "0.95rem", borderLeft: "1px solid rgba(14,27,44,0.15)" }}>TSUKURU</div>
              {COMPARE.map(([label, agency, us], i) => (
                <React.Fragment key={label}>
                  <div style={{ padding: "18px 20px", fontWeight: 700, fontSize: "0.88rem", borderTop: "1px solid rgba(14,27,44,0.15)", borderBottom: i === COMPARE.length - 1 ? "1px solid rgba(14,27,44,0.15)" : undefined }}>{label}</div>
                  <div style={{ padding: "18px 20px", fontSize: "0.88rem", color: "#3c4a5c", borderTop: "1px solid rgba(14,27,44,0.15)", borderLeft: "1px solid rgba(14,27,44,0.15)", borderBottom: i === COMPARE.length - 1 ? "1px solid rgba(14,27,44,0.15)" : undefined }}>{agency}</div>
                  <div style={{ padding: "18px 20px", fontSize: "0.88rem", fontWeight: 700, color: "#2f6bff", borderTop: "1px solid rgba(14,27,44,0.15)", borderLeft: "1px solid rgba(14,27,44,0.15)", borderBottom: i === COMPARE.length - 1 ? "1px solid rgba(14,27,44,0.15)" : undefined }}>{us}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 56, padding: "32px 36px", border: "1.5px solid #0e1b2c", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div><div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", color: "#5a6b80", marginBottom: 8 }}>費用感を具体的に知りたい方へ</div><p style={{ fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>プラン・料金の詳細ページをご確認ください。</p></div>
            <Link href="/price" style={{ background: "#0e1b2c", color: "#fff", fontWeight: 700, fontSize: "0.95rem", padding: "16px 36px", display: "inline-flex", alignItems: "center", gap: 10 }}>料金ページを見る<span>→</span></Link>
          </div>
        </div>
      </section>

      <ContactCta />
      <Footer />
    </main>
  );
}
