import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "制作について｜WEBKURA",
  description: "WEBKURAの制作について。ヒアリングから設計・デザイン・実装・公開後の運用まで、わかりやすく丁寧に進める制作体制をご紹介します。",
};

const VALUES = [
  {
    title: "伝わる設計から始める",
    body: "「見た目がきれい」だけでなく、目的を果たすための導線や伝え方を最初に整理します。アクセスした人が迷わず行動できる構成を大切にしています。",
  },
  {
    title: "コミュニケーションを大切にする",
    body: "専門用語を使いすぎず、事業者の方が理解しやすい言葉でご説明します。修正の方向性がぶれることなく、安心して進められる体制を整えています。",
  },
  {
    title: "成果につながる改善を続ける",
    body: "公開後もアクセスデータや改善点をもとに、次に何を整えるべきかを一緒に考えます。サイトを作って終わりではなく、運用で伸ばす視点も含めて支援します。",
  },
];

const SERVICES = [
  ["Webサイト制作", "企業サイト・採用サイト・サービス紹介サイトなど、目的に合わせて設計・デザイン・実装を一貫して担当します。"],
  ["リニューアル", "今あるサイトの課題を整理し、使いやすさと伝わりやすさを両立した改善案をご提案します。"],
  ["LP・キャンペーンページ", "新規事業・集客施策・告知ページに必要な、短期間で成果につながるページを制作します。"],
  ["保守・改善対応", "公開後の修正、更新、速度改善、導線の見直しなど、継続的な改善もサポートします。"],
];

const PROCESS = [
  { step: "01", title: "ヒアリング", detail: "課題・目標・予算感・公開時期を確認し、何を作るべきかを整理します。" },
  { step: "02", title: "設計", detail: "サイトの構成、ページ設計、ライティング方向性をまとめて、迷いのない制作にします。" },
  { step: "03", title: "デザイン", detail: "ブランドに合う見た目と、使いやすさを両立したレイアウトを作成します。" },
  { step: "04", title: "実装・検証", detail: "レスポンシブ対応、SEO設定、動作確認を行い、公開可能な状態まで整えます。" },
  { step: "05", title: "公開・改善", detail: "本番公開後に必要な調整や改善提案まで一緒に進め、効果を高めていきます。" },
];

const CREDO = [
  "事業の目的に合う設計を優先する",
  "見た目だけでなく、成果につながる導線を重視する",
  "予算と納期の両立を丁寧に調整する",
  "公開後の改善まで視野に入れた提案をする",
];

export default function CreatorPage() {
  return (
    <main style={{ background: "#f4f6f8", color: "#0e1b2c", overflowX: "hidden" }}>
      <Header />

      <PageHero
        eyebrow="CREATOR"
        crumb="制作について"
        watermark="CREATOR"
        title="制作について"
        lead="WEBKURAでは、見た目の良さだけでなく「伝わる」「使いやすい」「成果に繋がる」ことを大切にした制作をしています。小さな会社や個人事業主の強みを、サイトで最大限に伝える設計を提案します。"
      />

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 36, alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ width: "100%", aspectRatio: "4 / 3", borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 50px rgba(14,27,44,0.12)" }}>
                <ImagePlaceholder label="PHOTO / IMAGE" style={{ borderRadius: 24, fontSize: "1rem", letterSpacing: "0.12em" }} />
              </div>
              <div style={{ position: "absolute", left: 20, bottom: 20, background: "rgba(14,27,44,0.75)", color: "#fff", padding: "12px 18px", borderRadius: 14, backdropFilter: "blur(8px)", boxShadow: "0 12px 30px rgba(14,27,44,0.2)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", letterSpacing: "0.14em", opacity: 0.75 }}>WEBKURA</div>
                <div style={{ fontWeight: 800, fontSize: "1.1rem", marginTop: 4 }}>制作の考え方</div>
              </div>
            </div>

            <div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>ABOUT</span>
              <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 24px" }}>「作る」より先に、「伝わる」を考える</h2>
              <p style={{ fontSize: "0.98rem", lineHeight: 2.1, color: "#3c4a5c", margin: 0 }}>
                Webサイトは、事業の価値を伝え、問い合わせや購入につながる大切な接点です。<br />
                そのため、デザインや技術だけでなく、目的や顧客の視点を踏まえて、最適な構成と表現を選ぶことを大切にしています。<br /><br />
                ひとつのページを作るのではなく、事業が成長していく土台として使えるWebサイトを、丁寧に一緒に作っていきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>VALUES</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 52px" }}>制作で大切にしていること</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 24 }}>
            {VALUES.map((item) => (
              <div key={item.title} style={{ background: "#fff", borderRadius: 20, padding: "28px 24px", boxShadow: "0 12px 28px rgba(14,27,44,0.04)" }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg,#ff4d4f 0%,#2f6bff 100%)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, marginBottom: 18 }}>✓</div>
                <h3 style={{ fontWeight: 900, fontSize: "1.2rem", margin: "0 0 12px" }}>{item.title}</h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "#3c4a5c", margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>SERVICE</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 52px" }}>対応できること</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 20 }}>
            {SERVICES.map(([title, body]) => (
              <div key={title} style={{ border: "1px solid rgba(14,27,44,0.10)", borderRadius: 18, padding: "26px 24px", background: "#f4f6f8" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", letterSpacing: "0.12em", color: "#2f6bff", marginBottom: 12 }}>SERVICE</div>
                <h3 style={{ fontWeight: 900, fontSize: "1.1rem", margin: "0 0 12px" }}>{title}</h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "#3c4a5c", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>PROCESS</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 52px" }}>制作の進め方</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0,1fr))", gap: 16 }}>
            {PROCESS.map((item) => (
              <div key={item.step} style={{ background: "#fff", borderRadius: 18, padding: "22px 18px", border: "1px solid rgba(14,27,44,0.08)", boxShadow: "0 10px 24px rgba(14,27,44,0.03)" }}>
                <div style={{ display: "inline-flex", width: 42, height: 42, borderRadius: "50%", background: "#2f6bff", color: "#fff", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: 16 }}>{item.step}</div>
                <h3 style={{ fontWeight: 900, fontSize: "1rem", margin: "0 0 10px" }}>{item.title}</h3>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "#3c4a5c", margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>CREDO</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 52px" }}>制作に対する姿勢</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CREDO.map((item, index) => (
              <div key={item} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 16, alignItems: "center", background: "#f4f6f8", borderRadius: 18, padding: "18px 22px" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#ff4d4f 0%,#2f6bff 100%)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>{index + 1}</div>
                <p style={{ margin: 0, fontSize: "0.96rem", lineHeight: 1.9, fontWeight: 700, color: "#0e1b2c" }}>{item}</p>
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
