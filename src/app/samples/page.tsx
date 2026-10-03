import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import "./samples.css";

export const metadata: Metadata = {
  title: "サンプルサイト・作成例｜WEBKURA",
  description: "WEBKURAで制作できるホームページの作成例です。クリエイティブ系企業サイト、柔らかな雰囲気の認定こども園、幼稚園、小規模保育園、BtoBのコーポレートサイトの5タイプを、実際に動くサンプルサイトとしてご覧いただけます。",
};

type Sample = {
  slug: string;
  no: string;
  cat: string;
  name: string;
  title: string;
  lead: string;
  meta: [string, string][];
  /** サムネイル：サンプルサイト本体のファーストビューを実際にキャプチャしたもの。
      PCは各サイトのファーストビューの高さで切っているため縦横比が異なる */
  shot: { w: number; h: number };
};

const SAMPLES: Sample[] = [
  {
    slug: "atelier",
    no: "SAMPLE 01",
    cat: "CREATIVE / CORPORATE",
    name: "STUDIO KAIRO",
    title: "クリエイティブ系の企業サイト",
    lead: "斜めに切った色面と、余白を大きく取った字組で構成した企業サイト。ブランド体験を設計する会社や、デザイン・映像・広告など「見た目そのものが実績になる」業種を想定しています。",
    meta: [
      ["業種", "クリエイティブスタジオ・制作会社・D2Cブランド"],
      ["構成", "トップ／事業／ニュース／採用／会社概要"],
      ["特徴", "斜め30度のモチーフ、全画面のキービジュアル、多色グラデーション"],
    ],
    shot: { w: 1440, h: 941 },
  },
  {
    slug: "morinoen",
    no: "SAMPLE 02",
    cat: "SOFT / NURSERY",
    name: "かぜのおか こどもの森",
    title: "柔らかな雰囲気の認定こども園サイト",
    lead: "丸ゴシックと手描き風のあしらいで、園の空気そのものを伝えるサイト。読ませる文章を短く区切って積み上げ、写真をやわらかい形に切り抜いて配置しています。",
    meta: [
      ["業種", "認定こども園・保育園・教育施設・自然体験施設"],
      ["構成", "トップ／園について／園の生活／入園案内／職員採用／ブログ"],
      ["特徴", "丸ゴシック、有機的なマスク、詩のような縦積みのコピー"],
    ],
    shot: { w: 1440, h: 760 },
  },
  {
    slug: "hidamari",
    no: "SAMPLE 03",
    cat: "KINDERGARTEN",
    name: "ひだまり幼稚園",
    title: "保育園・幼稚園サイト",
    lead: "英字ラベルと日本語見出しを重ねたセクション設計で、情報量の多い園の内容を整理したサイト。年齢別のクラス編成を時間軸で見せる構成が中心になっています。",
    meta: [
      ["業種", "幼稚園・こども園・学校法人"],
      ["構成", "トップ／園について／保育クラス／園での生活／施設紹介／入園案内"],
      ["特徴", "年齢別クラスのタイムライン、パステルの色分け、スライダー"],
    ],
    shot: { w: 1440, h: 681 },
  },
  {
    slug: "kotori",
    no: "SAMPLE 04",
    cat: "NURSERY / MULTI-SITE",
    name: "ことり保育園",
    title: "小規模保育園（多拠点）のサイト",
    lead: "園を複数運営している法人向けのサイト。エリアから園を探す導線と、空き状況・見学申込みへの動線を最短にすることを優先した構成です。",
    meta: [
      ["業種", "小規模認可保育園・企業主導型保育園・多店舗展開の事業者"],
      ["構成", "トップ／保育方針／日々のようす／園を探す／募集状況／入園案内"],
      ["特徴", "エリア別の園一覧、空き状況の一覧表、見学申込みの固定ボタン"],
    ],
    shot: { w: 1440, h: 719 },
  },
  {
    slug: "minamoto",
    no: "SAMPLE 05",
    cat: "BtoB / CORPORATE",
    name: "株式会社ミナモト",
    title: "メーカー・卸・商社のコーポレートサイト",
    lead: "縦組みの見出しと、端が半円になるまで切り抜いた写真で構成した企業サイト。事業内容・実績・お知らせといった情報量の多いページを、余白と罫線だけで整理しています。",
    meta: [
      ["業種", "食品卸・メーカー・商社・BtoBの事業会社"],
      ["構成", "トップ／私たちについて／事業内容／自社ブランド／実績／読みもの"],
      ["特徴", "縦組みの見出し、ピル型の写真、輪郭に沿って流れる英文"],
    ],
    shot: { w: 1440, h: 1082 },
  },
];

export default function SamplesPage() {
  return (
    <main style={{ background: "#f4f6f8", color: "#0e1b2c", overflowX: "hidden" }}>
      <Header />

      <PageHero
        eyebrow="SAMPLES"
        crumb="作成例"
        watermark="SAMPLES"
        title={<>ホームページの作成例</>}
        lead="「こういう雰囲気のサイトが作れます」を、文章ではなく実物でご覧いただくためのページです。それぞれ架空の法人・企業を設定し、トップページを最後まで実装しています。リンクをクリックすると、そのままサンプルサイトが開きます。"
      />

      <section className="sm-list">
        <div className="sm-list__in">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 26 }}>
            <div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>SAMPLE SITES</span>
              <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 0" }}>5タイプの作成例</h2>
            </div>
            <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#5a6b80", maxWidth: "26em", lineHeight: 1.9 }}>
              ※ 掲載しているサンプルはすべて架空の団体・企業です。写真はイメージ素材で、実制作ではお預かりした写真に差し替えます。
            </span>
          </div>

          {SAMPLES.map((s) => (
            <article key={s.slug} className="sm-item">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                  <span className="sm-item__no">{s.no}</span>
                  <span style={{ flex: 1, height: 1, background: "rgba(14,27,44,0.14)" }} />
                </div>
                <span className="sm-item__cat">{s.cat}</span>
                <h3 className="sm-item__t">{s.title}</h3>
                <p className="sm-item__p">{s.lead}</p>
                <dl className="sm-item__meta">
                  {s.meta.map(([k, v]) => (
                    <li key={k}><dt>{k}</dt><dd style={{ margin: 0 }}>{v}</dd></li>
                  ))}
                </dl>
                <Link href={`/samples/${s.slug}`} className="sm-item__btn">サンプルサイトを開く<ArrowRight size={16} /></Link>
              </div>

              <Link href={`/samples/${s.slug}`} className="sm-shot" aria-label={`${s.name}のサンプルサイトを開く`}>
                <span className="sm-shot__pc">
                  <Image
                    src={`/samples/${s.slug}-pc.webp`}
                    alt={`${s.name}のトップページ（パソコン表示）`}
                    width={s.shot.w}
                    height={s.shot.h}
                    sizes="(max-width: 820px) 92vw, 46vw"
                  />
                </span>
                <span className="sm-shot__sp">
                  <Image
                    src={`/samples/${s.slug}-sp.webp`}
                    alt={`${s.name}のトップページ（スマートフォン表示）`}
                    width={400}
                    height={866}
                    sizes="(max-width: 820px) 22vw, 11vw"
                  />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <ContactCta />
      <Footer />
    </main>
  );
}
