import type { Metadata } from "next";
import Image from "next/image";
import { SampleBar, SampleFoot } from "@/components/samples/SampleFrame";
import { ScrollReveal } from "@/components/samples/ScrollReveal";
import { CrayonFrame } from "@/components/samples/CrayonFrame";
import "../samples.css";
import "./morinoen.css";

export const metadata: Metadata = {
  title: "サンプル｜かぜのおか こどもの森（認定こども園サイト）｜WEBKURA",
  description: "WEBKURAの作成例。丸ゴシックと自然色でまとめた、柔らかな雰囲気の認定こども園サイトのサンプルです。掲載内容はすべて架空のものです。",
  robots: { index: false, follow: false },
};

const LIFE: { shape: string; img: string; alt: string; t: string; p: string }[] = [
  { shape: "mo-ph--leaf", img: "1", alt: "おやつの時間のこどもたち", t: "園での一日", p: "朝の会から降園まで。こどもたちが森で過ごす一日の流れをご紹介します。" },
  { shape: "mo-ph--arch", img: "3", alt: "散歩に出かけるこどもたち", t: "年間行事", p: "田植え、夏の川あそび、焚き火。季節の手ざわりをそのまま行事にしています。" },
  { shape: "mo-ph--circle", img: "7", alt: "シャボン玉であそぶこどもと保育者", t: "写真ギャラリー", p: "園庭や保育室の様子、こどもたちの表情を写真でご覧いただけます。" },
];

const BLOG: { cat: string; date: string; t: string; img: string }[] = [
  { cat: "つぶやき", date: "2026.08.12", t: "8月 園長のつぶやき／裸足で歩いた日のこと", img: "3" },
  { cat: "行事", date: "2026.07.29", t: "夏まつりを行いました。提灯はぜんぶ手づくりです", img: "7" },
  { cat: "お知らせ", date: "2026.07.02", t: "9月の園庭開放と、未就園児親子クラスのご案内", img: "8" },
];

/* 横に流す写真帯。同じ配列を2回並べて途切れないループにする */
const STRIP = ["1", "4", "2", "5", "7", "3", "8", "4"];

export default function MorinoenSamplePage() {
  return (
    <>
      <SampleBar name="かぜのおか こどもの森" kind="認定こども園" />

      <main className="mo">
        <ScrollReveal />
        <CrayonFrame />

        {/* ---------- ヘッダー ---------- */}
        <div className="mo-header">
          <a href="#" className="mo-logo">
            <span className="mo-logo__mk">森</span>
            <span className="mo-logo__txt">
              <b>かぜのおか こどもの森</b>
              <span>KAZENOOKA KODOMONO MORI</span>
            </span>
          </a>
          <div className="mo-hdr__r">
            <div className="mo-hdr__tel">0000-00-0000<small>受付 ／ 月〜金 8:00-17:00</small></div>
            <button type="button" className="mo-burger" aria-label="メニューを開く"><i /><i /><i /></button>
          </div>
        </div>

        {/* ---------- ヒーロー ---------- */}
        <section className="mo-hero">
          <div className="mo-hero__ph">
            <span className="mo-hero__sun" />
            <span className="mo-hero__hill mo-hero__hill--3" />
            <span className="mo-hero__hill mo-hero__hill--2" />
            <span className="mo-hero__hill mo-hero__hill--1" />
          </div>

          {/* 参考にした園サイトはどれもファーストビューに実写を大きく置いている。
              色面だけだと園の空気が伝わらないので、手前に2枚重ねる */}
          <div className="mo-hero__figs">
            <div className="mo-ph mo-ph--photo mo-hero__fig mo-hero__fig--b">
              <Image src="/samples/morinoen/4.webp" alt="トンネルをくぐってあそぶこども" fill sizes="(max-width:640px) 32vw, 200px" />
            </div>
            <div className="mo-ph mo-ph--photo mo-hero__fig mo-hero__fig--a">
              <Image src="/samples/morinoen/7.webp" alt="シャボン玉であそぶこどもと保育者" fill sizes="(max-width:640px) 46vw, 340px" priority />
            </div>
          </div>
          <div className="mo-hero__catch">
            <p>自然と触れあう、よろこび。</p>
            <p>どこまでも自由な、こころ。</p>
            <p><em>想像して創造する、ちから。</em></p>
          </div>
          <span className="mo-hero__scroll mo-en">SCROLL</span>
        </section>

        {/* ---------- 入園案内バナー ---------- */}
        <div className="mo-bnr">
          <a href="#"><b>入園のご案内</b><span>ADMISSION</span></a>
          <a href="#"><b>見学のお申込み</b><span>VISIT US</span></a>
        </div>

        {/* ---------- イントロ ---------- */}
        <section className="mo-sec mo-intro">
          <span className="mo-leaf mo-leaf--a" />
          <span className="mo-leaf mo-leaf--b" />
          <div className="mo-wrap">
            <div className="mo-intro__lines">
              <p data-reveal>土の匂いを、覚えていてほしい。</p>
              <p data-reveal data-delay="1">転んだ日のことも、笑った日のことも。</p>
              <p data-reveal data-delay="2">その全部が、根っこになるから。</p>
            </div>
            <p className="mo-intro__read" data-reveal data-delay="3">
              かぜのおか こどもの森では、<strong>遊びのなかで夢中になれるもの</strong>を、
              ひとつひとつこどもたちに手渡しています。
              この森で本物と出会い、本質と向き合った日々は、いつか人生の土台になる。
              明日につながる「生きるの根っこ」を、おとなも一緒に育てています。
            </p>
            <div className="mo-intro__ph">
              <div className="mo-ph mo-ph--leaf mo-ph--photo" data-reveal><Image src="/samples/morinoen/5.webp" alt="園庭の芝生で過ごすこどもたち" fill sizes="230px" /></div>
              <div className="mo-ph mo-ph--arch mo-ph--photo" data-reveal data-delay="1"><Image src="/samples/morinoen/3.webp" alt="散歩に出かけるこどもたちの後ろ姿" fill sizes="230px" /></div>
              <div className="mo-ph mo-ph--circle mo-ph--photo" data-reveal data-delay="2"><Image src="/samples/morinoen/8.webp" alt="園舎のかげからのぞくこども" fill sizes="230px" /></div>
            </div>
          </div>
        </section>

        {/* ---------- 園の生活 ---------- */}
        <section className="mo-sec mo-life">
          <div className="mo-wrap">
            <div className="mo-head" data-reveal>
              <span className="mo-head__en">DAILY LIFE</span>
              <h2 className="mo-head__ja">園の生活<small>森のなかで、こどもたちがどんな時間を過ごしているのか。</small></h2>
            </div>
            <div className="mo-life__grid">
              {LIFE.map((l, i) => (
                <a href="#" className="mo-life__item" key={l.t} data-reveal data-delay={i === 0 ? undefined : String(i)}>
                  <div className={`mo-ph mo-life__ph mo-ph--photo ${l.shape}`}>
                    <Image src={`/samples/morinoen/${l.img}.webp`} alt={l.alt} fill sizes="(max-width:640px) 40vw, 330px" />
                  </div>
                  <div>
                    <h3>{l.t}</h3>
                    <p>{l.p}</p>
                    <span className="mo-life__more">くわしく見る</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 写真の帯 ---------- */}
        <section className="mo-slide" aria-hidden="true">
          <div className="mo-slide__track">
            {[...STRIP, ...STRIP].map((c, i) => (
              <div className="mo-ph mo-ph--soft mo-ph--photo" key={i}>
                <Image src={`/samples/morinoen/${c}.webp`} alt="" fill sizes="290px" />
              </div>
            ))}
          </div>
        </section>

        {/* ---------- 特集 ---------- */}
        <section className="mo-sec mo-sp">
          <div className="mo-wrap">
            <div className="mo-head" data-reveal>
              <span className="mo-head__en">SPECIAL CONTENTS</span>
              <h2 className="mo-head__ja">わたしたちが大事にしていること</h2>
            </div>
            <div className="mo-sp__grid">
              <a href="#" className="mo-sp__card mo-sp__card--01" data-reveal>
                <span className="mo-sp__no mo-en">Special Contents #01</span>
                <h3 className="mo-sp__t">ほんものに出会い、<br />ほんもので育つ。</h3>
                <p className="mo-sp__p">
                  本物の道具、本物の土、本物の火。こどもだからと薄めないことが、
                  この園のいちばん大きな方針です。
                </p>
                <span className="mo-sp__more">more</span>
              </a>
              <a href="#" className="mo-sp__card mo-sp__card--02" data-reveal data-delay="1">
                <span className="mo-sp__no mo-en">Special Contents #02</span>
                <h3 className="mo-sp__t">五感で感じて、<br />つくりだすよろこびを。</h3>
                <p className="mo-sp__p">
                  絵本との触れ合いと、手を動かす表現活動。かぜのおかの創造性は、
                  この2つから生まれています。
                </p>
                <span className="mo-sp__more">more</span>
              </a>
            </div>
          </div>
        </section>

        {/* ---------- 採用 ---------- */}
        <section className="mo-sec mo-recruit">
          <div className="mo-wrap mo-recruit__in">
            <div className="mo-ph mo-ph--arch mo-recruit__ph mo-ph--photo" data-reveal>
              <Image src="/samples/morinoen/4.webp" alt="トンネルをくぐってあそぶこども" fill sizes="(max-width:900px) 92vw, 420px" />
            </div>
            <div data-reveal data-delay="1">
              <span className="mo-head__en" style={{ textAlign: "left" }}>STAFF RECRUITMENT</span>
              <h2 className="mo-recruit__t">こどもも大人も、<br /><em>ともに育つ園</em>でありたい。</h2>
              <p>
                こどもたちの成長は、驚きと発見の連続です。オンリーワンと胸を張れる園を目指して、
                これからを生きるこどもたちに、生きるよろこびを手渡せる保育者と出会いたいと思っています。
              </p>
              <p>
                園としても、先生自身が「ありのままの自分」で働けるよう、
                勤務時間・持ち帰り仕事・研修のしくみを毎年見直しています。
              </p>
              <a href="#" className="mo-btn mo-btn--green">募集要項を見る<i /></a>
            </div>
          </div>
        </section>

        {/* ---------- ブログ ---------- */}
        <section className="mo-sec mo-blog">
          <div className="mo-wrap">
            <div className="mo-head" data-reveal>
              <span className="mo-head__en">BLOG</span>
              <h2 className="mo-head__ja">園からのおたより</h2>
            </div>
            <div className="mo-blog__list">
              {BLOG.map((b, i) => (
                <a href="#" className="mo-blog__item" key={b.t} data-reveal data-delay={i === 0 ? undefined : String(i)}>
                  <div className="mo-ph mo-ph--soft mo-blog__ph mo-ph--photo">
                    <Image src={`/samples/morinoen/${b.img}.webp`} alt="" fill sizes="(max-width:900px) 45vw, 330px" />
                  </div>
                  <div className="mo-blog__meta">
                    <span className="mo-blog__cat">{b.cat}</span>
                    <span className="mo-blog__date">{b.date}</span>
                  </div>
                  <h3>{b.t}</h3>
                </a>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "clamp(30px,4vw,48px)" }}>
              <a href="#" className="mo-btn">おたよりを一覧で見る<i /></a>
            </div>
          </div>
        </section>

        {/* ---------- お問い合わせ ---------- */}
        <section className="mo-sec mo-contact">
          <div className="mo-wrap">
            <div className="mo-head" data-reveal>
              <span className="mo-head__en">CONTACT</span>
              <h2 className="mo-head__ja">お問い合わせ<small>ご相談やご質問、見学のお申込みなど、お気軽にどうぞ。</small></h2>
            </div>
            <div className="mo-contact__box">
              <div className="mo-contact__card" data-reveal>
                <h3>お電話でのお問い合わせ</h3>
                <span className="mo-contact__tel">0000-00-0000</span>
                <small>受付時間 ／ 月〜金 8:00-17:00<br />（土日祝・年末年始を除く）</small>
              </div>
              <div className="mo-contact__card" data-reveal data-delay="1">
                <h3>フォームでのお問い合わせ</h3>
                <small style={{ marginBottom: 20 }}>24時間受け付けています。<br />3営業日以内にご返信いたします。</small>
                <a href="#" className="mo-btn">お問い合わせフォーム<i /></a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- フッター ---------- */}
        <footer className="mo-foot">
          <div className="mo-foot__in">
            <div>
              <div className="mo-foot__logo">
                <div>森</div>
                <span className="mo-logo__txt">
                  <b>かぜのおか こどもの森</b>
                  <span>KAZENOOKA KODOMONO MORI</span>
                </span>
              </div>
              <p>
                学校法人かぜのおか学園（架空）<br />
                〒000-0000 ○○県○○市○○町0-0-0<br />
                TEL 0000-00-0000 ／ FAX 0000-00-0001
              </p>
            </div>
            <ul className="mo-foot__nav">
              <li><a href="#">トップページ</a></li>
              <li><a href="#">園について</a></li>
              <li><a href="#">園の生活</a></li>
              <li><a href="#">入園案内</a></li>
              <li><a href="#">職員採用</a></li>
              <li><a href="#">おたより</a></li>
              <li><a href="#">交通アクセス</a></li>
              <li><a href="#">お問い合わせ</a></li>
            </ul>
          </div>
          <div className="mo-foot__btm">© KAZENOOKA KODOMONO MORI（架空のサンプルです）</div>
        </footer>
      </main>

      <SampleFoot note="架空の認定こども園を想定して制作したサンプルです。丸ゴシック・自然色のパレット・葉のかたちに切り抜いた写真枠といった柔らかい表現は、保育施設や教育施設、クリニック、飲食店などにもそのまま応用できます。掲載している写真はイメージ素材で、実制作では園でお撮りになった写真に差し替えます。" />
    </>
  );
}
