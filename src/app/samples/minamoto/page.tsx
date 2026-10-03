import type { Metadata } from "next";
import { SampleBar, SampleFoot } from "@/components/samples/SampleFrame";
import { ScrollReveal } from "@/components/samples/ScrollReveal";
import { LoopText } from "@/components/samples/LoopText";
import { MinamotoHeader, MinamotoMv, MiScroller, ArrowBtn } from "@/components/samples/MinamotoParts";
import "../samples.css";
import "./minamoto.css";

export const metadata: Metadata = {
  title: "サンプル｜株式会社ミナモト（食品卸のコーポレートサイト）｜WEBKURA",
  description: "WEBKURAの作成例。縦組みの見出しとピル型に切り抜いた写真で構成した、食品卸・商品企画会社のコーポレートサイトのサンプルです。掲載内容はすべて架空のものです。",
  robots: { index: false, follow: false },
};

const VALUE_CARDS: { jp: string; en: string; ph: string }[] = [
  { jp: "私たちについて", en: "ABOUT", ph: "mi-ph--g2" },
  { jp: "会社概要", en: "COMPANY", ph: "mi-ph--g5" },
  { jp: "代表メッセージ", en: "MESSAGE", ph: "mi-ph--g6" },
  { jp: "メンバー", en: "MEMBER", ph: "mi-ph--g3" },
  { jp: "お知らせ", en: "NEWS", ph: "mi-ph--g4" },
  { jp: "採用情報", en: "RECRUIT", ph: "mi-ph--g1" },
];

const SALES: { jp: string; en: string }[] = [
  { jp: "乾物・調味料の卸売事業", en: "WHOLESALE" },
  { jp: "食品メーカーの商品企画・開発・マーケティング支援", en: "PLANNING" },
  { jp: "オリジナル出汁ブランドの企画・製造・販売", en: "ORIGINAL BRAND" },
  { jp: "環境に配慮した商品の企画・OEM製造・販売", en: "ECO FRIENDLY" },
];

const WORKS: { cat: string; head: string; ex: string; ph: string }[] = [
  {
    cat: "商品開発",
    head: "国産原料だけでつくる、削りたての香りを閉じ込めた出汁パックを開発",
    ex: "焙煎から包装まで工程を見直し、開封時の香りが立つ配合と包材にたどり着きました。",
    ph: "mi-ph--g2",
  },
  {
    cat: "マーケティング支援",
    head: "老舗の乾物メーカーとともに、家庭向けブランドを新しく立ち上げ",
    ex: "業務用一本だった商品を、家庭の食卓に合う容量とパッケージに設計し直しました。",
    ph: "mi-ph--g3",
  },
  {
    cat: "OEM・環境",
    head: "紙化パッケージへの切り替えで、年間のプラスチック使用量を4.2t削減",
    ex: "中身の品質を保ちながら、包材だけを段階的に置き換える移行計画をつくりました。",
    ph: "mi-ph--g5",
  },
];

const BLOG: { cat: string; date: string; head: string; ph: string }[] = [
  { cat: "商品開発", date: "2026.08.19", head: "「無添加」と書ける線引きは、どこにあるのか。表示ルールを一度整理してみる", ph: "mi-ph--g2" },
  { cat: "コラム", date: "2026.08.02", head: "だしの取り方を聞かれるたび、いつも同じ話をしてしまう", ph: "mi-ph--g6" },
  { cat: "環境", date: "2026.07.21", head: "包材を紙に替えるとき、いちばん揉めるのは中身ではなく物流だった", ph: "mi-ph--g3" },
  { cat: "経営", date: "2026.07.04", head: "創業68年の会社で、はじめて商品企画の部署をつくった話", ph: "mi-ph--g5" },
  { cat: "コラム", date: "2026.06.18", head: "スーパーの棚を3時間眺めていると、売れる理由が少しだけ見えてくる", ph: "mi-ph--g4" },
  { cat: "商品開発", date: "2026.05.30", head: "試作38回目でようやく決まった、たった0.4gの配合差について", ph: "mi-ph--g1" },
];

const NEWS: { date: string; cat: string; head: string }[] = [
  { date: "2026.08.21", cat: "お知らせ", head: "出汁ブランド『ひとしずく』が、グッドデザイン賞2026を受賞しました" },
  { date: "2026.08.05", cat: "商品", head: "『ひとしずく』の紙化パッケージへの切り替えが完了しました" },
  { date: "2026.07.10", cat: "お知らせ", head: "本社倉庫の増設にともない、配送センターを移転いたします" },
  { date: "2026.06.02", cat: "採用", head: "2027年度の新卒採用エントリーの受付を開始しました" },
];

export default function MinamotoSamplePage() {
  return (
    <>
      <SampleBar name="株式会社ミナモト" kind="食品卸・商品企画会社" />

      <main className="mi">
        <ScrollReveal />
        <MinamotoHeader />
        <MinamotoMv />

        {/* ---------- 私たちについて ---------- */}
        <section className="mi-value">
          <div className="mi-container">
            <div className="mi-ttl mi-ttl--mark" data-reveal>
              <span className="mi-ttl__en">NEW TASTE <b>×</b> LOCAL ROOTS</span>
              <h2 className="mi-ttl__jp">新しい味を見つけ、<br />地域とつくる会社</h2>
            </div>
            <p className="mi-lead" data-reveal data-delay="1">
              株式会社ミナモトは、1958年創業の乾物・調味料の卸売会社です。
              オリジナルの出汁ブランド『ひとしずく』をはじめ、
              「毎日の一皿が、少しだけ良くなる」ことを目指した商品を企画・開発しています。
              安心して選べて、おいしい。その2つをどちらも譲らないために、
              新しい価値を見出した商品企画、マーケティング、コンサルティングも行っています。
            </p>

            <MiScroller>
              {VALUE_CARDS.map((c) => (
                <a href="#" className="mi-vcard" key={c.en}>
                  <span className="mi-vcard__fig">
                    <span className="mi-vcard__inner">
                      <span className={`mi-ph mi-ph--pillV ${c.ph}`} />
                      <span className="mi-vcard__label">
                        <span className="mi-vcard__jp">{c.jp}</span>
                        <span className="mi-vcard__en">{c.en}</span>
                        <span className="mi-vcard__arrow">
                          <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M2 7h9M7.5 3.5 11 7l-3.5 3.5" stroke="#222" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </span>
                    </span>
                    <LoopText shape="pillV" pad={6} className="mi-vcard__loop" phrase={`${c.en} —`} dim speed={16} />
                  </span>
                  <span className="mi-vcard__foot">
                    <b>{c.jp}</b>
                    <span className="mi-en">{c.en}</span>
                  </span>
                </a>
              ))}
            </MiScroller>
          </div>
        </section>

        {/* ---------- 事業内容 ---------- */}
        <section className="mi-sales">
          <div className="mi-container">
            <div className="mi-ttl mi-ttl--mark" data-reveal>
              <span className="mi-ttl__en">WHOLESALE ・ PRODUCT DEVELOPMENT ・ SALES</span>
              <h2 className="mi-ttl__jp">乾物調味料の卸売事業と<br />商品企画・開発・販売を手掛ける</h2>
            </div>
            <div className="mi-sales__col">
              <div className="mi-sales__text" data-reveal>
                <p className="mi-lead">
                  首都圏と中部圏の量販店・専門店・給食事業者に向けて、
                  約4,200品目を取り扱っています。
                  他にも、季節や地域性に合わせた商品の企画・販売も手掛けています。
                </p>
                <ul className="mi-sales__list">
                  {SALES.map((s) => (
                    <li className="mi-sales__item" key={s.en}>
                      <a href="#" className="mi-sales__link">
                        <span className="mi-sales__jp">{s.jp}</span>
                        <span className="mi-sales__en">{s.en}</span>
                        <span className="mi-plus" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mi-sales__fig" data-reveal data-delay="1">
                <div className="mi-ph mi-ph--g5" />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- ブランド（巨大アーチ） ---------- */}
        <section className="mi-brand">
          <div className="mi-container">
            <h2 className="mi-brand__ttl" data-reveal>
              素材だけでつくった
              <b>無添加のだしパック『ひとしずく』</b>
            </h2>
            <p className="mi-brand__desc" data-reveal data-delay="1">
              かつお、昆布、いわし煮干し。国産の原料4種だけを挽き、
              調味料も酵母エキスも使わずに仕上げました。
              水から煮出して、そのまま味噌汁の下地になります。
            </p>
            <div className="mi-brand__fig" data-reveal data-delay="1">
              <div className="mi-ph mi-ph--g3" />
              <div className="mi-ph mi-ph--g2" />
              <div className="mi-ph mi-ph--g6" />
            </div>
            <div className="mi-brand__btnwrap" data-reveal data-delay="2">
              <a href="#" className="mi-rbtn">
                出汁ブランド『ひとしずく』
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h9M7.5 3.5 11 7l-3.5 3.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ---------- 実績 ---------- */}
        <section className="mi-work">
          <div className="mi-container">
            <span className="mi-wm mi-wm--left" aria-hidden="true">WORK</span>
            <div className="mi-ttl mi-ttl--mark" data-reveal>
              <span className="mi-ttl__en">WORK</span>
              <h2 className="mi-ttl__jp">商品企画から開発・販売支援まで<br />これまでの実績をご紹介</h2>
            </div>
            <p className="mi-lead" data-reveal data-delay="1">
              株式会社ミナモトがこれまでに手掛けた、商品企画・開発・マーケティング支援の実績です。
              新しい売り場をつくるお手伝いをした事例も、あわせてご覧いただけます。
            </p>
            <ul className="mi-work__list">
              {WORKS.map((w) => (
                <li className="mi-work__item" key={w.head} data-reveal>
                  <a href="#" className="mi-work__link">
                    <span className="mi-work__fig">
                      <span className={`mi-ph mi-ph--pillH ${w.ph}`} />
                    </span>
                    <span className="mi-work__cat">{w.cat}</span>
                    <h3 className="mi-work__head">{w.head}</h3>
                    <p className="mi-work__ex">{w.ex}</p>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mi-work__btn" data-reveal>
              <ArrowBtn>VIEW ALL</ArrowBtn>
            </div>
          </div>
        </section>

        {/* ---------- 読みもの ---------- */}
        <section className="mi-blog">
          <div className="mi-container">
            <span className="mi-wm mi-wm--left" aria-hidden="true">BLOG</span>
            <div className="mi-ttl mi-ttl--mark" data-reveal>
              <span className="mi-ttl__en">BLOG</span>
              <h2 className="mi-ttl__jp">「食」にまつわるネタをお届け</h2>
            </div>
            <p className="mi-lead" data-reveal data-delay="1">
              株式会社ミナモトの社員が、商品開発の現場や日々の気づきを書いています。
              読みものとして、お気軽にどうぞ。
            </p>
            <MiScroller>
              {BLOG.map((b) => (
                <a href="#" className="mi-bcard" key={b.head}>
                  <span className="mi-bcard__fig">
                    <span className={`mi-ph ${b.ph}`} />
                  </span>
                  <span className="mi-bcard__info">
                    <span className="mi-bcard__cat">{b.cat}</span>
                    <span className="mi-bcard__date mi-en">{b.date}</span>
                  </span>
                  <h3 className="mi-bcard__head">{b.head}</h3>
                </a>
              ))}
            </MiScroller>
            <div className="mi-work__btn" data-reveal>
              <ArrowBtn>VIEW ALL</ArrowBtn>
            </div>
          </div>
        </section>

        {/* ---------- お知らせ ---------- */}
        <section className="mi-news">
          <div className="mi-container">
            <span className="mi-wm" aria-hidden="true">NEWS</span>
            <div className="mi-ttl mi-ttl--center mi-news__ttl" data-reveal>
              <span className="mi-ttl__en">NEWS</span>
              <h2 className="mi-ttl__jp">お 知 ら せ</h2>
            </div>
            <ul className="mi-news__list" data-reveal data-delay="1">
              {NEWS.map((n) => (
                <li className="mi-news__item" key={n.head}>
                  <a href="#" className="mi-news__link">
                    <span className="mi-news__date">{n.date}</span>
                    <span className="mi-news__cat">{n.cat}</span>
                    <h3 className="mi-news__head">{n.head}</h3>
                    <span className="mi-plus" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mi-news__btn" data-reveal>
              <ArrowBtn>VIEW ALL</ArrowBtn>
            </div>
          </div>
        </section>

        {/* ---------- フッター ---------- */}
        <footer className="mi-foot">
          <div className="mi-foot__in">
            <div className="mi-foot__info">
              <div className="mi-logo">
                <span className="mi-logo__mk">M</span>
                <span className="mi-logo__txt">
                  <b>株式会社ミナモト</b>
                  <span>MINAMOTO CO., LTD.</span>
                </span>
              </div>
              <p className="mi-foot__catch">小さな一皿に、大きな記憶を。</p>
              <dl className="mi-foot__dl">
                <dt>株式会社ミナモト（架空）</dt>
                <dd>〒000-0000 ○○県○○市○○町0-0-0</dd>
                <dd>TEL 000-000-0000 ／ FAX 000-000-0001</dd>
              </dl>
              <div className="mi-foot__cert">
                <span className="mi-foot__certMk">JFS<br />-B</span>
                <p className="mi-foot__certTxt">
                  食品安全マネジメント規格<br />JFS-B 適合証明取得（架空の表記です）
                </p>
              </div>
            </div>
            <div className="mi-foot__nav">
              <div className="mi-foot__navCol">
                <h4>私たちについて</h4>
                <ul>
                  <li><a href="#">会社概要</a></li>
                  <li><a href="#">代表メッセージ</a></li>
                  <li><a href="#">メンバー</a></li>
                  <li><a href="#">沿革</a></li>
                  <li><a href="#">採用情報</a></li>
                </ul>
              </div>
              <div className="mi-foot__navCol">
                <h4>事業内容</h4>
                <ul>
                  <li><a href="#">乾物・調味料の卸売事業</a></li>
                  <li><a href="#">商品企画・開発・マーケティング支援</a></li>
                  <li><a href="#">オリジナル出汁ブランドの企画・製造・販売</a></li>
                  <li><a href="#">環境に配慮した商品の企画・OEM製造・販売</a></li>
                </ul>
              </div>
              <div className="mi-foot__navCol">
                <h4>出汁ブランド『ひとしずく』</h4>
                <ul>
                  <li><a href="#">ブランドについて</a></li>
                  <li><a href="#">商品ラインナップ</a></li>
                  <li><a href="#">取扱店一覧</a></li>
                </ul>
              </div>
              <div className="mi-foot__navCol">
                <h4>お知らせ・読みもの</h4>
                <ul>
                  <li><a href="#">実績</a></li>
                  <li><a href="#">お知らせ</a></li>
                  <li><a href="#">読みもの</a></li>
                  <li><a href="#">お問い合わせ</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mi-foot__btm">
            <a href="#">プライバシーポリシー</a>
            <span className="mi-en">© MINAMOTO CO., LTD.（架空のサンプルです）</span>
          </div>
        </footer>
      </main>

      <SampleFoot note="架空の食品卸・商品企画会社を想定して制作したサンプルです。縦組みの見出し、端が半円になるまで切り抜いた写真、白抜きに黒フチの英字ラベル、輪郭に沿って流れる英文といった型は、BtoBのメーカー・卸・商社のサイトで特に効きます。写真枠は色面で仮置きしているため、実制作ではお預かりした商品写真や社内の撮影素材が入ります。" />
    </>
  );
}
