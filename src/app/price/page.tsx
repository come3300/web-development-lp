import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";

export const metadata: Metadata = {
  title: "プラン・料金｜WEBKURA",
  description: "WEBKURAのプラン・料金の詳細ページ。Basic/Standard/Premiumの3プランの内容、オプション費用、お支払いの流れ、料金に関するよくある質問をご紹介します。",
};

const POINTS: [string, string, string][] = [
  ["POINT 1", "月額費用は不要", "サブスク契約・リース契約は行いません。必要なのは初期制作費とサーバー・ドメイン費のみ。"],
  ["POINT 2", "所有権はお客様に", "サーバー・ドメインはお客様名義でご契約いただき、サイトの著作権・所有権もお客様に帰属します。"],
  ["POINT 3", "保守・運用は任意", "公開後のサポート契約は任意で、いつでも解約可能。囲い込みは一切ありません。"],
];

const COMPARE: [string, string, string][] = [
  ["制作費用", "50万円〜150万円が目安", "5〜20万円が目安"],
  ["制作期間", "1〜3ヶ月程度", "最短1週間〜4週間"],
  ["開発体制", "営業・ディレクター経由の伝言", "現役エンジニアと直接やり取り"],
  ["カスタマイズ性", "テンプレート・パッケージ内が中心", "要望に合わせた自由な実装"],
  ["追加費用", "月額運用費・修正費が別途発生しやすい", "月額不要・保守は任意"],
];

const OPTIONS: [string, string][] = [
  ["ページ追加(1ページあたり)", "¥25,000〜"],
  ["ブログ・お知らせ機能の追加", "¥30,000〜"],
  ["多言語対応(1言語あたり)", "¥50,000〜"],
  ["ロゴ・ブランドデザイン制作", "¥50,000〜"],
  ["公開後の月次保守・改善サポート", "¥20,000〜/月"],
];

const PAYMENT_FLOW: [string, string][] = [
  ["ご相談・お見積り", "内容を整理し、お見積りをご提示。この時点では費用は発生しません。"],
  ["ご契約・着手金のお支払い", "制作費の50%を着手金としてお振込みいただき、制作を開始します。"],
  ["制作・検収", "デザイン・実装を進め、内容をご確認いただきながら仕上げます。"],
  ["公開・残金のお支払い", "公開後に残りの50%をお振込みいただき、取引完了となります。"],
];

const FAQ: [string, string][] = [
  ["見積り後に追加費用が発生することはありますか。", "工程開始後に大きな仕様変更がない限り、追加費用は発生しません。追加が必要な場合も事前に金額をご提示し、ご了承の上で進めます。"],
  ["分割払いは可能ですか。", "着手金50%・公開後残金50%の2回払いを基本としていますが、ご事情に応じて分割回数のご相談も可能です。"],
  ["サーバー・ドメイン費用はどのくらいかかりますか。", "規模にもよりますが、年間1万円〜2万円程度が目安です。ご契約はお客様名義で行っていただきます。"],
  ["保守契約に入らないとサイトは維持できませんか。", "保守契約なしでも公開・運用は可能です。更新作業をご自身で行うのが難しい場合や、継続的な改善をご希望の場合に任意でご契約いただいています。"],
];

export default function PricePage() {
  return (
    <main style={{ background: "#f4f6f8", color: "#0e1b2c", overflowX: "hidden" }}>
      <Header />

      <PageHero
        eyebrow="PRICE"
        crumb="料金"
        watermark="PRICE"
        title="プラン・料金"
        lead="必要な工程を整理し、各工程でどのような作業を行うかを明確にした上で費用を算出します。以下はお見積りの目安となるプラン例です。ご予算・制作背景・目的に応じて柔軟にご提案します。"
      />

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px) 0", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 1, background: "rgba(14,27,44,0.10)", border: "1px solid rgba(14,27,44,0.10)", borderRadius: 16, overflow: "hidden", marginBottom: 80 }}>
            {POINTS.map(([tag, title, body]) => (
              <div key={tag} style={{ background: "#fff", padding: "28px 24px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", letterSpacing: "0.18em", color: "#2f6bff", marginBottom: 12 }}>{tag}</div>
                <h4 style={{ fontWeight: 900, fontSize: "1.05rem", margin: "0 0 10px" }}>{title}</h4>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "#3c4a5c", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>

          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>PLANS</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 56px" }}>プラン一覧</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "clamp(20px,2.5vw,32px)", alignItems: "start", marginBottom: 24 }}>
            <div style={{ border: "1.5px solid #0e1b2c", borderRadius: 20, boxShadow: "0 6px 20px rgba(14,27,44,0.05)", padding: "40px 32px", display: "flex", flexDirection: "column", gap: 18, marginTop: 96 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", letterSpacing: "0.2em", color: "#5a6b80" }}>PLAN 01</div>
              <h3 style={{ fontWeight: 900, fontSize: "1.3rem", margin: 0 }}>Basic</h3>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", lineHeight: 1 }}>¥50,000<span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 700 }}>〜</span></div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#5a6b80" }}>目安納期 〜1週間</div>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.9, color: "#3c4a5c", margin: 0, borderLeft: "2px solid #2f6bff", paddingLeft: 12 }}>最低限の情報発信をまず形にしたい方に。</p>
              <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                {["全6ページ(TOP/ABOUT/会社概要/サービス紹介/実績/お問い合わせ)", "スマホ対応レスポンシブデザイン", "お問い合わせフォーム設置", "基本的なSEO設定"].map((c, i, arr) => (
                  <div key={c} style={{ display: "flex", gap: 10, padding: "10px 0", borderTop: "1px solid rgba(14,27,44,0.08)", borderBottom: i === arr.length - 1 ? "1px solid rgba(14,27,44,0.08)" : undefined, fontSize: "0.85rem", fontWeight: 500 }}><span style={{ color: "#2f6bff", fontWeight: 700 }}>■</span>{c}</div>
                ))}
              </div>
              <Link href="/contact" style={{ border: "1.5px solid #0e1b2c", borderRadius: 20, boxShadow: "0 6px 20px rgba(14,27,44,0.05)", color: "#0e1b2c", fontWeight: 700, fontSize: "0.95rem", padding: "14px 0", textAlign: "center" }}>相談する →</Link>
            </div>
            <div style={{ background: "linear-gradient(135deg,#0e1b2c 0%,#1c2f57 100%)", color: "#fff", padding: "40px 32px", display: "flex", flexDirection: "column", gap: 18, marginTop: 48, position: "relative" }}>
              <div style={{ position: "absolute", top: 0, right: 0, background: "linear-gradient(135deg,#ff4d4f 0%,#2f6bff 100%)", color: "#fff", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.14em", padding: "8px 16px" }}>RECOMMENDED</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.55)" }}>PLAN 02</div>
              <h3 style={{ fontWeight: 900, fontSize: "1.3rem", margin: 0 }}>Standard</h3>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", lineHeight: 1 }}>¥100,000<span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 700 }}>〜</span></div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>目安納期 1〜2週間</div>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.9, color: "rgba(255,255,255,0.8)", margin: 0, borderLeft: "2px solid #2f6bff", paddingLeft: 12 }}>機能・ページを追加し、より訴求力のあるサイトに。</p>
              <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                {["Basicの内容+ページ追加(〜10ページ)", "ブログ・お知らせ機能", "アニメーション演出・独自デザイン強化", "SEO・構造化データ強化"].map((c, i, arr) => (
                  <div key={c} style={{ display: "flex", gap: 10, padding: "10px 0", borderTop: "1px solid rgba(255,255,255,0.13)", borderBottom: i === arr.length - 1 ? "1px solid rgba(255,255,255,0.13)" : undefined, fontSize: "0.85rem", fontWeight: 500 }}><span style={{ color: "#2f6bff", fontWeight: 700 }}>■</span>{c}</div>
                ))}
              </div>
              <Link href="/contact" style={{ background: "linear-gradient(135deg,#ff4d4f 0%,#2f6bff 100%)", color: "#fff", fontWeight: 700, fontSize: "0.95rem", padding: "14px 0", textAlign: "center", borderRadius: 999 }}>相談する →</Link>
            </div>
            <div style={{ border: "1.5px solid #0e1b2c", borderRadius: 20, boxShadow: "0 6px 20px rgba(14,27,44,0.05)", padding: "40px 32px 56px", display: "flex", flexDirection: "column", gap: 18, marginTop: 0 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", letterSpacing: "0.2em", color: "#5a6b80" }}>PLAN 03</div>
              <h3 style={{ fontWeight: 900, fontSize: "1.3rem", margin: 0 }}>Premium</h3>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", lineHeight: 1 }}>¥200,000<span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 700 }}>〜</span></div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#5a6b80" }}>目安納期 3〜4週間</div>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.9, color: "#3c4a5c", margin: 0, borderLeft: "2px solid #2f6bff", paddingLeft: 12 }}>本格的なブランディング・集客を狙う方に。</p>
              <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                {["フルオーダーメイドデザイン・ページ数無制限", "CMS導入・自社更新対応", "競合調査・SEO設計・取材撮影ディレクション", "公開後1ヶ月の初期サポート込み"].map((c, i, arr) => (
                  <div key={c} style={{ display: "flex", gap: 10, padding: "10px 0", borderTop: "1px solid rgba(14,27,44,0.08)", borderBottom: i === arr.length - 1 ? "1px solid rgba(14,27,44,0.08)" : undefined, fontSize: "0.85rem", fontWeight: 500 }}><span style={{ color: "#2f6bff", fontWeight: 700 }}>■</span>{c}</div>
                ))}
              </div>
              <Link href="/contact" style={{ border: "1.5px solid #0e1b2c", borderRadius: 20, boxShadow: "0 6px 20px rgba(14,27,44,0.05)", color: "#0e1b2c", fontWeight: 700, fontSize: "0.95rem", padding: "14px 0", textAlign: "center" }}>相談する →</Link>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 80, fontSize: "0.82rem", fontWeight: 500, color: "#5a6b80", lineHeight: 1.9 }}>
            <span>※ 上記はプラン例です。工程ごとの詳細な内訳はお見積り時にご提示します。</span>
            <span>※ お支払いは着手金50%・公開後に残金のお振込となります。</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px,4vw,56px) clamp(70px,11vh,130px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>OPTIONS</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.2rem)", lineHeight: 1.5, margin: "16px 0 8px" }}>オプション費用の目安</h2>
          <p style={{ fontSize: "0.9rem", color: "#5a6b80", margin: "0 0 32px" }}>プランに含まれない要望は、以下を目安に個別お見積りします。</p>
          <div style={{ border: "1px solid rgba(14,27,44,0.10)", borderRadius: 16, overflow: "hidden" }}>
            {OPTIONS.map(([label, price], i) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: 20, padding: "18px 24px", borderTop: i === 0 ? undefined : "1px solid rgba(14,27,44,0.08)", flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.92rem", fontWeight: 700 }}>{label}</span>
                <span style={{ fontSize: "0.92rem", fontWeight: 900, color: "#2f6bff" }}>{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#f4f6f8", scrollMarginTop: 90 }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <h2 style={{ fontWeight: 900, fontSize: "1.4rem", margin: "0 0 8px" }}>一般的な制作会社との比較</h2>
          <p style={{ fontSize: "0.88rem", fontWeight: 500, color: "#5a6b80", margin: "0 0 24px" }}>同程度の規模のサイトを依頼した場合の目安です。</p>
          <div style={{ overflowX: "auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", border: "1px solid rgba(14,27,44,0.10)", borderRadius: 16, overflow: "hidden", minWidth: 640 }}>
              <div style={{ padding: "16px 20px", background: "#fff" }} />
              <div style={{ padding: "16px 20px", background: "#fff", fontWeight: 900, fontSize: "0.95rem", borderLeft: "1px solid rgba(14,27,44,0.10)" }}>一般的な制作会社</div>
              <div style={{ padding: "16px 20px", background: "linear-gradient(135deg,#0e1b2c 0%,#1c2f57 100%)", color: "#fff", fontWeight: 900, fontSize: "0.95rem", borderLeft: "1px solid rgba(14,27,44,0.10)" }}>WEBKURA</div>
              {COMPARE.map(([label, agency, us], i) => (
                <React.Fragment key={label}>
                  <div style={{ padding: "18px 20px", background: "#fff", fontWeight: 700, fontSize: "0.88rem", borderTop: "1px solid rgba(14,27,44,0.10)", borderBottom: i === COMPARE.length - 1 ? "1px solid rgba(14,27,44,0.10)" : undefined }}>{label}</div>
                  <div style={{ padding: "18px 20px", background: "#fff", fontSize: "0.88rem", color: "#3c4a5c", borderTop: "1px solid rgba(14,27,44,0.10)", borderLeft: "1px solid rgba(14,27,44,0.10)", borderBottom: i === COMPARE.length - 1 ? "1px solid rgba(14,27,44,0.10)" : undefined }}>{agency}</div>
                  <div style={{ padding: "18px 20px", background: "#fff", fontSize: "0.88rem", fontWeight: 700, color: "#2f6bff", borderTop: "1px solid rgba(14,27,44,0.10)", borderLeft: "1px solid rgba(14,27,44,0.10)", borderBottom: i === COMPARE.length - 1 ? "1px solid rgba(14,27,44,0.10)" : undefined }}>{us}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>PAYMENT FLOW</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.2rem)", lineHeight: 1.5, margin: "16px 0 48px" }}>お支払いの流れ</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 1, background: "rgba(14,27,44,0.10)", border: "1px solid rgba(14,27,44,0.10)", borderRadius: 16, overflow: "hidden" }}>
            {PAYMENT_FLOW.map(([title, body], i) => (
              <div key={title} style={{ background: "#fff", padding: "28px 22px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", marginBottom: 12, backgroundImage: "linear-gradient(135deg,#ff4d4f 0%,#2f6bff 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{String(i + 1).padStart(2, "0")}</div>
                <h4 style={{ fontWeight: 900, fontSize: "0.98rem", margin: "0 0 10px" }}>{title}</h4>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.9, color: "#3c4a5c", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>PRICE FAQ</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.2rem)", lineHeight: 1.5, margin: "16px 0 40px" }}>料金についてのご質問</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {FAQ.map(([q, a], i, arr) => (
              <div key={q} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 10, padding: "28px 0", borderTop: "1px solid rgba(14,27,44,0.10)", borderBottom: i === arr.length - 1 ? "1px solid rgba(14,27,44,0.10)" : undefined }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#2f6bff" }}>Q.</div>
                <div><p style={{ fontWeight: 700, fontSize: "1.02rem", margin: "0 0 10px" }}>{q}</p><p style={{ fontSize: "0.9rem", lineHeight: 2, color: "#3c4a5c", margin: 0 }}>{a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
      <Footer />
    </main>
  );
}
