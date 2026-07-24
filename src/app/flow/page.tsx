import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";

export const metadata: Metadata = {
  title: "制作の流れ｜TSUKURU",
  description: "ヒアリングから公開後の運用改善まで、TSUKURUの制作フローを工程ごとの期間目安・やること・ご用意いただくものとあわせて詳しく解説します。",
};

const FLOW: { num: string; title: string; period: string; tasks: string[]; prepare: string }[] = [
  { num: "01", title: "ヒアリング", period: "即日〜数日", tasks: ["目的・課題・ターゲットの整理", "ご予算感・希望納期の確認", "現状サイトの簡易診断(リニューアルの場合)"], prepare: "特別な準備は不要です。現状の課題や要望をそのままお聞かせください。" },
  { num: "02", title: "調査・設計", period: "3日〜1週間", tasks: ["競合サイト・キーワードの調査", "サイトマップ(ページ構成)の作成", "仕様書・お見積りの作成"], prepare: "会社案内・実績資料など、参考になる既存資料があればご共有ください。" },
  { num: "03", title: "デザイン", period: "3日〜2週間", tasks: ["ワイヤーフレーム(骨組み)の作成", "デザインカンプの作成", "フィードバックを踏まえた修正"], prepare: "ロゴデータ、ブランドカラー、イメージに近い参考サイトがあると設計がスムーズです。" },
  { num: "04", title: "実装・検証", period: "3日〜2週間", tasks: ["フロントエンド・サーバーサイドの実装", "CMS導入(該当プランのみ)", "SEO設定・表示速度・全端末表示の検証"], prepare: "サーバー・ドメインのご契約情報(未取得の場合はご案内します)。" },
  { num: "05", title: "公開", period: "即日", tasks: ["本番環境へのデプロイ", "最終動作確認・関係者チェック", "検索エンジンへのインデックス送信"], prepare: "特別な準備は不要です。公開日のご希望があれば事前にお知らせください。" },
  { num: "06", title: "運用・改善", period: "継続(任意)", tasks: ["アクセス解析レポートの作成(月次)", "改善提案・優先度の整理", "軽微な修正・機能追加の実装"], prepare: "特にありません。契約はいつでも解約可能です。" },
];

const FAQ: [string, string][] = [
  ["デザインの修正は何回までお願いできますか。", "各工程で1〜2回のフィードバック反映を想定していますが、大幅な方向転換でない限り柔軟に対応します。回数を明確にしたい場合は事前のお見積りでご相談ください。"],
  ["素材(写真・文章)がなくても依頼できますか。", "可能です。ヒアリング内容をもとに構成案・原稿案をこちらでご用意し、ご確認いただく形で進められます。"],
  ["納期はどのように決まりますか。", "プランと要件により異なりますが、着手時にスケジュールを提示し、各工程の完了目安を共有しながら進行します。"],
];

export default function FlowPage() {
  return (
    <main style={{ background: "#f4f6f8", color: "#0e1b2c", overflowX: "hidden" }}>
      <Header />

      <PageHero
        eyebrow="FLOW"
        crumb="流れ"
        watermark="FLOW"
        title="制作の流れ"
        lead="ご相談から公開、そして公開後の改善まで。各工程で「何を」「どのくらいの期間で」行うのか、ご用意いただきたいものとあわせて詳しくご紹介します。"
      />

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>PROCESS</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 64px" }}>ご相談から公開・運用まで</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {FLOW.map((step, i) => (
              <div key={step.num} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 28 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#0e1b2c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: "1.15rem", flexShrink: 0 }}>{step.num}</div>
                  {i < FLOW.length - 1 && <div style={{ width: 2, flex: 1, background: "rgba(14,27,44,0.15)", margin: "8px 0" }} />}
                </div>
                <div style={{ paddingBottom: i === FLOW.length - 1 ? 0 : 48 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap", marginBottom: 16 }}>
                    <h3 style={{ fontWeight: 900, fontSize: "1.3rem", margin: 0 }}>{step.title}</h3>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", color: "#2f6bff", border: "1px solid #2f6bff", padding: "4px 12px" }}>目安 {step.period}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 20 }}>
                    <div style={{ background: "#f4f6f8", padding: "20px 22px" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#5a6b80", marginBottom: 12 }}>やること</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {step.tasks.map((t) => (
                          <div key={t} style={{ display: "flex", gap: 8, fontSize: "0.85rem", lineHeight: 1.7, color: "#3c4a5c" }}><span style={{ color: "#2f6bff", fontWeight: 700 }}>■</span>{t}</div>
                        ))}
                      </div>
                    </div>
                    <div style={{ border: "1px solid rgba(14,27,44,0.15)", padding: "20px 22px" }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#5a6b80", marginBottom: 12 }}>ご用意いただくもの</div>
                      <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "#3c4a5c", margin: 0 }}>{step.prepare}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>FLOW FAQ</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem,3vw,2.2rem)", lineHeight: 1.5, margin: "16px 0 40px" }}>制作の流れについてのご質問</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {FAQ.map(([q, a], i, arr) => (
              <div key={q} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 20, padding: "28px 0", borderTop: "1px solid rgba(14,27,44,0.15)", borderBottom: i === arr.length - 1 ? "1px solid rgba(14,27,44,0.15)" : undefined }}>
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
