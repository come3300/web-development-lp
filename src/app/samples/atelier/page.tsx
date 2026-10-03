import type { Metadata } from "next";
import Image from "next/image";
import { SampleBar, SampleFoot } from "@/components/samples/SampleFrame";
import { ScrollReveal } from "@/components/samples/ScrollReveal";
import { AtelierNav } from "@/components/samples/AtelierNav";
import "../samples.css";
import "./atelier.css";

/* 写真の出所は docs/sample-photo-credits.md に記載。 */
const PHOTOS = {
  hero: { src: "/samples/atelier/hero.webp", alt: "街と緑を見おろす眺め" },
  business: { src: "/samples/atelier/business.webp", alt: "資料を見ながら打ち合わせをするメンバー" },
  recruit: { src: "/samples/atelier/recruit.webp", alt: "オフィスで作業するメンバー" },
} as const;

export const metadata: Metadata = {
  title: "サンプル｜STUDIO KAIRO（クリエイティブ系企業サイト）｜WEBKURA",
  description: "WEBKURAの作成例。斜め30度のモチーフと大きな余白で構成した、クリエイティブ系企業向けのコーポレートサイトのサンプルです。掲載内容はすべて架空のものです。",
  robots: { index: false, follow: false },
};

const DOMAIN_LIST: { no: string; nm: string; note: string; tag: string }[] = [
  { no: "01", nm: "ブランド設計", note: "名前・言葉・佇まいまで、事業の核になるものを一緒に決めます。", tag: "BRANDING" },
  { no: "02", nm: "空間とグラフィック", note: "店舗、パッケージ、印刷物。手で触れる部分をつくります。", tag: "DESIGN" },
  { no: "03", nm: "デジタルプロダクト", note: "サイト、アプリ、映像。届き方まで含めて設計します。", tag: "DIGITAL" },
  { no: "04", nm: "伴走支援", note: "つくって終わりにせず、育てる工程に月単位で入ります。", tag: "PARTNER" },
];

const NEWS: { date: string; cat: string; title: string }[] = [
  { date: "2026.08.04", cat: "NEWS", title: "ライフスタイルブランド「hoi.」のリブランディングを担当しました" },
  { date: "2026.07.18", cat: "AWARD", title: "国内デザインアワード 2026 コミュニケーション部門で入選しました" },
  { date: "2026.06.29", cat: "RECRUIT", title: "アートディレクター・プロジェクトマネージャーの募集を開始しました" },
  { date: "2026.05.30", cat: "NEWS", title: "京都に2つ目の拠点「KAIRO KYOTO」を開設しました" },
];

export default function AtelierSamplePage() {
  return (
    <>
      <SampleBar name="STUDIO KAIRO" kind="クリエイティブスタジオ" />

      <main className="at">
        <ScrollReveal />
        <AtelierNav />

        {/* ---------- ヒーロー ---------- */}
        <section className="at-hero">
          <div className="at-hero__visual">
            <div className="at-cut">
              <div className="at-cut__in">
                <Image src={PHOTOS.hero.src} alt={PHOTOS.hero.alt} fill sizes="160vw" priority />
              </div>
            </div>
            <span className="at-hero__band at-hero__band--2" />
            <span className="at-hero__band at-hero__band--1" />
            <div className="at-hero__cover"><i /><i /><i /></div>
          </div>

          <div className="at-hero__body">
            <h1 className="at-hero__ttl">
              <span><b>余白のある</b></span>
              <span><b>明日を、</b></span>
              <span><b>つくる。</b></span>
            </h1>
            <p className="at-hero__sub at-en">Brand Experience Design Studio</p>
            <p className="at-hero__txt">
              私たちが向き合っているのは、装飾ではなく、その事業が本来持っている速度と手ざわりです。
              言葉から設計し、形にして、届くところまで一緒に走ります。
            </p>
            <a href="#business" className="at-hero__link at-link">
              <span className="at-en">ABOUT US</span><span className="at-link__arw" />
            </a>
          </div>

          <span className="at-label at-hero__label at-en">SCROLL DOWN</span>
          <span className="at-hero__line" />
        </section>

        {/* ---------- 事業 ---------- */}
        <section className="at-biz" id="business">
          <div className="at-biz__skew" />
          <div className="at-biz__in">
            <div className="at-biz__img" data-reveal>
              <div className="at-cut">
                <div className="at-cut__in">
                  <Image src={PHOTOS.business.src} alt={PHOTOS.business.alt} fill sizes="(max-width:1000px) 155vw, 66vw" />
                </div>
              </div>
            </div>
            <div className="at-biz__body" data-reveal>
              <p className="at-sec__label at-en">Business Domain</p>
              <h2 className="at-sec__ttl at-en">OUR BUSINESS</h2>
              <p className="at-lead">つくる前に、<br />何をつくらないかを決める。</p>
              <p className="at-txt">
                案件のはじまりは、いつも取材からです。働いている人の話を聞き、現場に立ち、
                その事業がいちばん強く見える角度を探します。
              </p>
              <p className="at-txt">
                そこが決まってはじめて、ロゴなのか、店舗なのか、サイトなのかという手段の話をします。
                順番を逆にしないことだけを、10年間守ってきました。
              </p>
              <ul className="at-domain">
                {DOMAIN_LIST.map((d) => (
                  <li key={d.no}>
                    <span className="at-domain__no at-en">{d.no}</span>
                    <span className="at-domain__nm">{d.nm}<small>{d.note}</small></span>
                    <span className="at-domain__tag at-en">{d.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- ニュース ---------- */}
        <section className="at-news">
          <div className="at-news__in">
            <div className="at-news__ttlwrap" data-reveal>
              <div className="at-news__gradbar"><i /></div>
              <p className="at-sec__label at-en">Information</p>
              <h2 className="at-sec__ttl at-en">NEWS</h2>
            </div>
            <div data-reveal>
              <ul className="at-news__list">
                {NEWS.map((n) => (
                  <li key={n.title}>
                    <a href="#">
                      <span className="at-news__date at-en">{n.date}</span>
                      <span className="at-news__cat at-en">{n.cat}</span>
                      <span className="at-news__t">{n.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#" className="at-news__more at-link">
                <span className="at-en">VIEW MORE</span><span className="at-link__arw" />
              </a>
            </div>
          </div>
        </section>

        {/* ---------- 採用 ---------- */}
        <section className="at-recruit">
          <div className="at-recruit__skew" />
          <div className="at-recruit__in">
            <div className="at-recruit__body" data-reveal>
              <p className="at-sec__label at-en">Work at KAIRO</p>
              <h2 className="at-sec__ttl at-en">RECRUIT</h2>
              <p className="at-lead">14人が、14通りのやり方で<br />同じ方角を向いています。</p>
              <p className="at-txt">
                担当領域で人を区切っていません。編集者が設計に口を出し、エンジニアが取材に同席します。
                肩書きより、その日いちばん考えている人の意見を採用します。
              </p>
              <div className="at-recruit__nums">
                <div><b className="at-en">14</b><span>MEMBERS</span></div>
                <div><b className="at-en">2</b><span>OFFICES</span></div>
                <div><b className="at-en">10</b><span>YEARS</span></div>
              </div>
              <a href="#" className="at-link">
                <span className="at-en">VIEW POSITIONS</span><span className="at-link__arw" />
              </a>
            </div>
            <div className="at-recruit__img" data-reveal>
              <div className="at-cut">
                <div className="at-cut__in">
                  <Image src={PHOTOS.recruit.src} alt={PHOTOS.recruit.alt} fill sizes="(max-width:1000px) 155vw, 63vw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- フッター ---------- */}
        <footer className="at-foot">
          <div className="at-foot__in">
            <div>
              <div className="at-logo"><b className="at-en">STUDIO KAIRO</b><span>BRAND EXPERIENCE DESIGN</span></div>
              <dl className="at-foot__dl">
                <div><dt className="at-en">Access</dt><dd>〒150-0000 東京都渋谷区（架空）1-2-3 カイロビル 4F</dd></div>
                <div><dt className="at-en">Contact</dt><dd>03-0000-0000 ／ hello@example.com</dd></div>
                <div><dt className="at-en">Hours</dt><dd>平日 10:00 - 19:00</dd></div>
              </dl>
            </div>
            <div>
              <ul className="at-foot__nav">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">BUSINESS</a></li>
                <li><a href="#">WORKS</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">RECRUIT</a></li>
                <li><a href="#">CONTACT</a></li>
                <li><a href="#">COMPANY</a></li>
              </ul>
            </div>
          </div>
          <div className="at-foot__btm">
            <ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Sitemap</a></li></ul>
            <span className="at-en">© STUDIO KAIRO（架空のサンプルです）</span>
          </div>
        </footer>
      </main>

      <SampleFoot note="架空のクリエイティブスタジオを想定して制作したサンプルです。斜めの色面・大きな余白・英字の縦ラベルといった型は、そのまま実際のご依頼にも適用できます。掲載している写真はイメージ素材で、実制作ではお預かりした写真や撮影素材に差し替えます。" />
    </>
  );
}
