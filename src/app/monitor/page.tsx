import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftRight, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MonitorHero } from "@/components/monitor/MonitorHero";

export const metadata: Metadata = {
  title: "モニターキャンペーン｜ホームページ制作が一律7万円｜WEBKURA",
  description: "制作事例として掲載させていただく代わりに、現役エンジニアが手がけるホームページを一律7万円で制作します。先着3社限定のキャンペーンです。",
};

/** 価格の目安。同規模のサイトを依頼した場合の比較 */
const BARS: { label: string; value: string; width: string; now?: boolean }[] = [
  { label: "一般的な制作会社", value: "50〜150万円", width: "100%" },
  { label: "WEBKURA 通常プラン", value: "10〜20万円", width: "40%" },
  { label: "モニター価格", value: "一律 7万円", width: "26%", now: true },
];

const INCLUDED: string[] = [
  "全6ページ構成（TOP／会社概要／サービス／実績／お問い合わせ／その他1ページ）",
  "目的とターゲットに合わせた構成設計とデザイン",
  "スマートフォン・タブレット対応のレスポンシブ実装",
  "お問い合わせフォームの設置（メール通知つき）",
  "SEOの基本設定（タイトル・説明文・構造化データ・サイトマップ）",
  "ドメイン取得・サーバー契約・SSL化・公開作業の代行",
];

const EXCLUDED: string[] = [
  "7ページ目以降のページ追加",
  "ブログ・お知らせなどのCMS導入",
  "予約・決済・会員機能などのシステム開発",
  "ロゴ制作・撮影・イラストなどの素材制作",
  "多言語対応、外部サービスとの連携",
];

const FLOW: [string, string, string, "free" | "paid" | ""][] = [
  ["01", "お問い合わせ", "フォームに「モニター希望」とご記入のうえ送信してください。", "free"],
  ["02", "ヒアリング", "事業の内容・目的・掲載したいことを伺い、必要なページを整理します。", "free"],
  ["03", "お見積り・ご契約", "作業範囲と金額を書面でご確認いただきます。着手金50%をお支払い。", "paid"],
  ["04", "制作", "構成案・原稿のたたき台をご用意し、デザインと実装を進めます。", ""],
  ["05", "公開", "ドメイン・サーバーの設定と公開作業を代行します。残金50%をお支払い。", ""],
  ["06", "掲載・ご感想", "制作事例として掲載し、簡単なアンケートにご協力いただきます。", ""],
];

const PAYMENT: [string, string][] = [
  ["お支払い", "ご契約時に着手金50%、公開後に残金50%をお振込みください。ご事情に応じて分割のご相談も承ります。"],
  ["サーバー・ドメイン", "年間1〜2万円程度の実費が別途かかります。お客様名義でのご契約となり、取得・設定はこちらで代行します。"],
  ["月額費用", "かかりません。公開後の保守・運用サポートは任意で、ご希望の場合のみ別途お見積りします。"],
];

const REQUIREMENTS: [string, string][] = [
  ["募集数", "先着3社（予定）。枠が埋まり次第、受付を終了します。"],
  ["制作料金", "一律70,000円（税込）。着手金50%・公開後に残金50%。"],
  ["対象", "個人事業主・小規模事業者・これから開業される方・団体など。"],
  ["納期", "着手から最短1週間〜（内容により2〜3週間程度）。"],
  ["ご参加条件", "制作事例としての掲載許可、公開後の簡単なご感想アンケートへのご協力。"],
  ["応募方法", "お問い合わせフォームより「モニター希望」と明記のうえご連絡ください。"],
];

const FAQ_CATEGORIES: { name: string; items: [string, string][] }[] = [
  {
    name: "キャンペーンについて",
    items: [
      ["本当に7万円だけで作ってもらえますか。", "はい。募集要項に記載した内容の範囲であれば、制作料金は一律70,000円（税込）です。ただし範囲を超えるご要望がある場合は、事前に金額をご提示したうえで追加料金をいただくことがあります。ご了承いただけない場合は追加せずに進めますので、想定外の請求は発生しません。"],
      ["なぜこの価格で提供できるのですか。", "制作事例として掲載させていただくことで、広告費をかけずにサービスを知っていただけるためです。掲載にご協力いただく代わりに、その分を制作料金から差し引いています。"],
      ["何社まで募集していますか。", "先着3社までを予定しています。お問い合わせいただいた順にご案内し、枠が埋まり次第このページでお知らせのうえ受付を終了します。"],
      ["モニターだと品質が落ちませんか。", "制作の工程・体制は通常のご依頼とまったく同じです。テンプレートの使い回しは行わず、現役エンジニアがヒアリングから実装まで担当します。"],
      ["実績掲載は必ず必要ですか。", "本キャンペーンの条件となります。ただし社名・URLを伏せた掲載や、公開時期をずらす対応も可能ですので、気になる点は事前にご相談ください。"],
    ],
  },
  {
    name: "制作・お支払いについて",
    items: [
      ["Webの知識がなくても依頼できますか。", "はい。ヒアリングの上、必要なものはこちらからご提案します。専門用語は使わずにご説明しますのでご安心ください。"],
      ["写真や文章がなくても大丈夫ですか。", "可能です。ヒアリング内容をもとに構成案・原稿のたたき台をこちらでご用意し、ご確認いただく形で進められます。"],
      ["サーバー・ドメイン費用は別途かかりますか。", "はい。年間1〜2万円程度が目安で、お客様名義でのご契約となります。取得・設定の作業はこちらで代行します。"],
      ["お支払いのタイミングを教えてください。", "ご契約時に着手金として50%、公開後に残金50%をお振込みいただきます。ご事情に応じて分割のご相談も可能です。"],
      ["公開後の月額費用はかかりますか。", "かかりません。保守・運用サポートは任意で、ご希望の場合のみ別途お見積りします。"],
    ],
  },
];

function Head({ label, title, lead }: { label: string; title: React.ReactNode; lead?: React.ReactNode }) {
  return (
    <div className="mn-head">
      <span className="mn-head__label">{label}</span>
      <h2 className="mn-head__title">{title}</h2>
      {lead && <p className="mn-head__lead">{lead}</p>}
    </div>
  );
}

export default function MonitorPage() {
  return (
    <main className="mn">
      <Header />
      <MonitorHero />

      {/* ============ なぜ7万円なのか ============ */}
      <section className="mn-sec">
        <div className="mn-wrap">
          <Head
            label="WHY 70,000"
            title={<>安いのには理由があります。<br />削っているのは品質ではなく、間の人数です。</>}
          />
          <div className="mn-split">
            <div>
              <p className="mn-p">
                制作会社にホームページを依頼すると、見積もりのかなりの部分を営業担当・ディレクター・外注先への中間マージンが占めます。WEBKURAは<strong>現役エンジニアが直接お話を伺い、そのまま設計・実装まで担当</strong>します。間に人が入らない分だけ、価格が下がります。
              </p>
              <p className="mn-p">
                モニター価格は、そこからさらに掲載にご協力いただく分を差し引いた金額です。広告を出す代わりに、実際に作ったサイトを見ていただく。<strong>その交換で成り立っている価格</strong>なので、7万円でお引き受けできます。
              </p>
              <p className="mn-p">
                下げているのは価格だけです。テンプレートに文字と写真を差し替えるような作り方はせず、構成もデザインも実装もゼロから組み立てます。表示速度やスマートフォン表示の作り込みも省きません。
              </p>
            </div>
            <div>
              <div className="mn-bars">
                {BARS.map((b) => (
                  <div key={b.label} className={b.now ? "mn-bar mn-bar--now" : "mn-bar"}>
                    <div className="mn-bar__top">
                      <span className="mn-bar__label">{b.label}</span>
                      <span className="mn-bar__val">{b.value}</span>
                    </div>
                    <div className="mn-bar__track"><div className="mn-bar__fill" style={{ width: b.width }} /></div>
                  </div>
                ))}
              </div>
              <p className="mn-note" style={{ marginTop: 18 }}>
                ※ 全6ページ程度のコーポレートサイトを依頼した場合の目安です。モニター価格は本キャンペーンの枠に限ります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 交換条件 ============ */}
      <section className="mn-sec mn-sec--paper">
        <div className="mn-wrap">
          <Head
            label="EXCHANGE"
            title="お互いが差し出すものを、応募の前にはっきりさせます。"
            lead="「モニター」という言葉は便利ですが、曖昧です。何をお願いして、何をお返しするのか。条件は下の2つだけで、これ以外のお願いをすることはありません。"
          />
          <div className="mn-xc">
            <div className="mn-xc__col mn-xc__col--give">
              <p className="mn-xc__who">お客様から</p>
              <p className="mn-xc__what">制作事例としての掲載許可と、<br />公開後のご感想</p>
              <ul className="mn-list">
                <li><span className="mn-list__mk">01</span>完成したサイトを制作事例として掲載させていただくこと</li>
                <li><span className="mn-list__mk">02</span>公開後、5〜10分程度のご感想アンケートへのご協力</li>
              </ul>
              <p className="mn-note" style={{ marginTop: 18 }}>
                社名やURLを伏せた掲載、掲載時期をずらす対応もできます。掲載の範囲は着手前にすり合わせて決めますので、ご納得いただけない形で公開することはありません。
              </p>
            </div>

            <div className="mn-xc__div">
              <span className="mn-xc__mark"><ArrowLeftRight size={19} /></span>
            </div>

            <div className="mn-xc__col mn-xc__col--get">
              <p className="mn-xc__who">WEBKURAから</p>
              <p className="mn-xc__what">全6ページのフルオーダー制作を、<br />一律70,000円で</p>
              <ul className="mn-list">
                <li><span className="mn-list__mk">01</span>現役エンジニアによる構成設計・デザイン・実装</li>
                <li><span className="mn-list__mk">02</span>構成案と原稿のたたき台の作成</li>
                <li><span className="mn-list__mk">03</span>ドメイン取得・サーバー設定・公開作業の代行</li>
              </ul>
              <p className="mn-note" style={{ marginTop: 18 }}>
                月額費用はいただきません。サーバーとドメインはお客様名義でご契約いただくため、あとから他社へ引き継ぐことも自由です。囲い込みはしません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 含まれるもの / 含まれないもの ============ */}
      <section className="mn-sec">
        <div className="mn-wrap">
          <Head
            label="SCOPE"
            title="7万円に含まれるもの、含まれないもの。"
            lead="追加料金が発生しうる範囲を、先に開示します。含まれない項目をご希望の場合は、着手前に必ず金額と作業内容をお伝えします。"
          />
          <div className="mn-2col">
            <div>
              <p className="mn-listhead">含まれるもの <span>／ 追加料金なし</span></p>
              <ul className="mn-list">
                {INCLUDED.map((t) => <li key={t}><span className="mn-list__mk">＋</span>{t}</li>)}
              </ul>
            </div>
            <div>
              <p className="mn-listhead">含まれないもの <span>／ 別途お見積り</span></p>
              <ul className="mn-list mn-list--out">
                {EXCLUDED.map((t) => <li key={t}><span className="mn-list__mk">−</span>{t}</li>)}
              </ul>
            </div>
          </div>

          <div className="mn-callout" style={{ marginTop: "clamp(32px,4vw,48px)" }}>
            <p className="mn-p" style={{ maxWidth: "44em" }}>
              範囲を超えるご要望をいただいた場合は、<strong>必ず着手前に金額と作業内容をご提示</strong>し、ご了承いただいてから進めます。ご了承いただけない場合はその作業を行わずに進めますので、想定外の請求が発生することはありません。
            </p>
          </div>
        </div>
      </section>

      {/* ============ 進め方 ============ */}
      <section className="mn-sec mn-sec--paper">
        <div className="mn-wrap">
          <Head
            label="PROCESS"
            title="ご相談から公開まで、最短1週間。"
            lead="お見積りまでは費用がかかりません。作業範囲と金額にご納得いただいてから着手します。"
          />
          <ol className="mn-flow">
            {FLOW.map(([no, title, body, cost]) => (
              <li key={no}>
                <span className="mn-flow__no">{no}</span>
                <div>
                  <p className="mn-flow__t">{title}</p>
                  <p className="mn-flow__b">{body}</p>
                </div>
                {cost === "free" && <span className="mn-tag mn-tag--free">無料</span>}
                {cost === "paid" && <span className="mn-tag mn-tag--paid">費用発生</span>}
                {cost === "" && <span />}
              </li>
            ))}
          </ol>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginTop: 26 }}>
            <p className="mn-note" style={{ maxWidth: "34em" }}>
              ※ 納期は内容とご確認のペースにより前後します。着手時にスケジュールをご提示します。
            </p>
            <Link href="/flow" className="mn-tlink">通常の制作の流れを見る<ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* ============ 料金 ============ */}
      <section id="price" className="mn-sec mn-sec--ink" style={{ scrollMarginTop: 72 }}>
        <div className="mn-wrap">
          <Head label="PRICE" title="料金は一律70,000円。月額費用はありません。" />

          <div className="mn-split">
            <div>
              <p className="mn-was" style={{ marginBottom: 12 }}>通常価格 <s>100,000円〜</s> のところ</p>
              <div className="mn-amount">
                <span className="mn-num">¥70,000</span>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "rgba(255,255,255,0.72)" }}>税込・一律</span>
              </div>
              <p className="mn-p" style={{ marginTop: 24 }}>
                ページ数や機能によって金額が変わることはありません。「SCOPE」に記載した範囲であれば、どなたも同じ金額です。
              </p>
            </div>

            <dl className="mn-spec" style={{ borderTopColor: "rgba(255,255,255,0.3)" }}>
              {PAYMENT.map(([label, value]) => (
                <div key={label} style={{ display: "block", padding: "16px 0" }}>
                  <dt style={{ marginBottom: 7 }}>{label}</dt>
                  <dd style={{ display: "block", fontWeight: 400, fontSize: "0.86rem", lineHeight: 1.9, color: "rgba(255,255,255,0.72)" }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginTop: "clamp(40px,5vw,60px)", paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.18)" }}>
            <p style={{ display: "flex", alignItems: "center", gap: 11, margin: 0, fontSize: "0.9rem", fontWeight: 700 }}>
              <span className="mn-dot" />先着3社まで。枠が埋まり次第、受付を終了します。
            </p>
            <Link href="/contact" className="mn-btn">この内容で相談する<ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* ============ 募集要項 ============ */}
      <section className="mn-sec">
        <div className="mn-wrap mn-wrap--narrow">
          <Head label="TERMS" title="募集要項" lead="ご応募の前に、以下の内容をご確認ください。" />
          <dl className="mn-dl">
            {REQUIREMENTS.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mn-p" style={{ marginTop: 30, fontSize: "0.9rem" }}>
            条件に当てはまるか分からない場合も、まずはご相談ください。内容を伺ったうえで、モニター枠と通常プランのどちらが適しているかを正直にお伝えします。
          </p>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="mn-sec mn-sec--paper">
        <div className="mn-wrap mn-wrap--narrow">
          <Head label="FAQ" title="よくあるご質問" />
          <div className="mn-faq"><FaqAccordion categories={FAQ_CATEGORIES} /></div>
          <div style={{ marginTop: 36 }}>
            <Link href="/faq" className="mn-tlink">その他のご質問を見る<ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      {/* ============ 応募 ============ */}
      <section className="mn-sec mn-sec--ink">
        <div className="mn-wrap">
          <Head
            label="APPLY"
            title={<>まずは、今の状況をそのままお聞かせください。</>}
            lead="ご相談・お見積りは無料です。「何から始めればいいか分からない」段階でも問題ありません。お問い合わせフォームの内容欄に「モニター希望」とご記入ください。営業目的のしつこい連絡はしません。"
          />
          <div className="mn-btns" style={{ marginTop: 34 }}>
            <Link href="/contact" className="mn-btn">モニターに応募する<ArrowRight size={18} /></Link>
            <Link href="/price" className="mn-btn mn-btn--ghost">通常プランを見る</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
