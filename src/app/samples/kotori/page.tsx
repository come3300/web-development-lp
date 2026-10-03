import type { Metadata } from "next";
import { SampleBar, SampleFoot } from "@/components/samples/SampleFrame";
import { ScrollReveal } from "@/components/samples/ScrollReveal";
import "../samples.css";
import "./kotori.css";

export const metadata: Metadata = {
  title: "サンプル｜ことり保育園（小規模認可保育園サイト）｜WEBKURA",
  description: "WEBKURAの作成例。エリア別の園一覧・空き状況・見学申込みの導線を整理した、多拠点の小規模保育園サイトのサンプルです。掲載内容はすべて架空のものです。",
  robots: { index: false, follow: false },
};

const PAGELINKS: { ic: string; t: string; p: string }[] = [
  { ic: "園", t: "ことり保育園とは", p: "保育の考え方と、日々の工夫" },
  { ic: "日", t: "日々のようす", p: "1日の流れ・年間行事・保護者の声" },
  { ic: "探", t: "園を探す", p: "エリアから近くの園を探す" },
  { ic: "空", t: "募集状況", p: "各園の空き状況を毎月更新" },
];

const AREAS: [string, string][] = [
  ["東京都", "3園（文京区・江戸川区・墨田区）"],
  ["千葉県", "15園（船橋市・松戸市・八千代市 ほか）"],
  ["埼玉県", "2園（さいたま市・川口市）"],
  ["茨城県", "1園（つくば市）"],
];

const NEWS: { cat: string; mod?: string; date: string; t: string }[] = [
  { cat: "新園", mod: "kt-news__cat--new", date: "2026.08.20", t: "2027年4月、ことり認可園（習志野台）を開園いたします" },
  { cat: "お知らせ", date: "2026.08.01", t: "8月の空き状況を更新しました。見学は随時受け付けています" },
  { cat: "採用", mod: "kt-news__cat--rec", date: "2026.07.14", t: "保育士（正職員・パート）の募集を開始しました" },
  { cat: "お知らせ", date: "2026.06.28", t: "入園説明会（9月開催分）のお申し込みを受付中です" },
];

const KIGYO: { pref: string; parks: [string, string][] }[] = [
  { pref: "東京都", parks: [["ことり千駄木園", "文京区"], ["ことり船堀園", "江戸川区"], ["ことり菊川園", "墨田区"]] },
];

const NINKA: { pref: string; parks: [string, string][] }[] = [
  {
    pref: "千葉県",
    parks: [
      ["ことりゆりのき台園", "八千代市"], ["ことりゆりのき台園 第二", "八千代市"], ["ことり二和向台園", "船橋市"],
      ["ことり八千代中央駅前園", "八千代市"], ["ことり緑が丘園", "八千代市"], ["ことり北小金園", "松戸市"],
      ["ことり北小金園 第二", "松戸市"], ["ことり新松戸園", "松戸市"], ["ことり本町通り園", "船橋市"],
      ["ことり村上園", "八千代市"], ["ことり芝山園", "船橋市"], ["ことり飯山満町園", "船橋市"],
    ],
  },
  { pref: "埼玉県", parks: [["ことり浦和園", "さいたま市"], ["ことり川口園", "川口市"]] },
  { pref: "茨城県", parks: [["ことりつくば千現園", "つくば市"]] },
];

const VACANCY: [string, string, string, string][] = [
  ["ことり千駄木園", "空きあり", "残りわずか", "空きなし"],
  ["ことり船堀園", "空きあり", "空きあり", "残りわずか"],
  ["ことり二和向台園", "残りわずか", "空きなし", "空きなし"],
  ["ことり北小金園", "空きあり", "空きあり", "空きあり"],
  ["ことりつくば千現園", "空きなし", "残りわずか", "空きあり"],
];

const vacClass = (v: string) => (v === "空きあり" ? "ok" : v === "残りわずか" ? "few" : "no");

const STRIP = ["kt-ph--g1", "kt-ph--g2", "kt-ph--g3", "kt-ph--g4", "kt-ph--g5", "kt-ph--g2", "kt-ph--g1", "kt-ph--g3"];

export default function KotoriSamplePage() {
  return (
    <>
      <SampleBar name="ことり保育園" kind="小規模認可保育園" />

      <main className="kt">
        <ScrollReveal />

        {/* ---------- ヘッダー ---------- */}
        <header className="kt-header">
          <div className="kt-header__in">
            <a href="#" className="kt-logo">
              <span className="kt-logo__mk">こと</span>
              <span className="kt-logo__txt">
                <b>ことり保育園</b>
                <span>小規模認可保育園・企業主導型保育園</span>
              </span>
            </a>
            <nav className="kt-hnav">
              <a href="#">ことり保育園とは</a>
              <a href="#">日々のようす</a>
              <a href="#">園を探す</a>
              <a href="#">募集状況</a>
              <a href="#">入園案内</a>
              <a href="#">よくあるご質問</a>
            </nav>
            <div className="kt-hbtn">
              <a href="#">採用情報</a>
              <a href="#">見学のお申込み</a>
            </div>
          </div>
        </header>

        {/* ---------- メインビジュアル ---------- */}
        <section className="kt-mv">
          <div className="kt-mv__in">
            <div>
              <h1 className="kt-mv__catch">
                「自分がやりたいこと」を<br /><span>見つける力</span>をはぐくむ
              </h1>
              <p className="kt-mv__txt">
                子どもたちが自ら目を輝かせ、挑戦するよろこびを感じられるように。
                私たちは子どもが持つ「生きる力」を信じ、ひとりひとりに丁寧に向き合いながら、
                かけがえのない日々をともに育んでいます。
              </p>
              <div className="kt-mv__btns">
                <a href="#" className="kt-btn">近くの園を探す</a>
                <a href="#" className="kt-btn kt-btn--yellow">入園説明会に申し込む</a>
              </div>
            </div>
            <div className="kt-mv__ph">
              <span className="kt-mv__mark kt-mv__mark--1">0〜2歳<b>専門</b></span>
              <span className="kt-mv__mark kt-mv__mark--2">首都圏<b>21園</b></span>
              <div className="kt-ph kt-ph--g1" />
              <div className="kt-ph kt-ph--g2" />
              <div className="kt-ph kt-ph--g3" />
            </div>
          </div>
          <svg className="kt-wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true" style={{ color: "#fffbef" }}>
            <path d="M0,32 C240,64 480,0 720,20 C960,40 1200,60 1440,26 L1440,60 L0,60 Z" />
          </svg>
        </section>

        {/* ---------- 保育方針 ---------- */}
        <section className="kt-sec kt-about">
          <div className="kt-wrap kt-about__in">
            <div data-reveal>
              <div className="kt-head">
                <span className="kt-head__en">ABOUT US</span>
                <h2 className="kt-head__ja">保護者の方が、<em>心にゆとり</em>を<br />持って子育てできるように</h2>
              </div>
              <p className="kt-p">
                0〜2歳児だけをお預かりする、定員19名までの小さな園です。
                担任がひとりひとりの生活リズムを把握できる規模にこだわっています。
              </p>
              <ul className="kt-about__pts">
                <li><i />おむつは園で用意し、使用済みも園で処分します（持ち帰り不要）</li>
                <li><i />主食・副食・おやつはすべて園内の調理室で手づくり</li>
                <li><i />連絡帳・登降園・欠席連絡はすべてアプリで完結</li>
                <li><i />布団のレンタルとシーツ交換も園で行います</li>
              </ul>
              <div style={{ marginTop: 26 }}>
                <a href="#" className="kt-btn">ことりの保育について</a>
              </div>
            </div>
            <div className="kt-ph kt-about__ph kt-ph--g4" data-reveal data-delay="1" />
          </div>
        </section>

        {/* ---------- ページリンク ---------- */}
        <section className="kt-sec kt-links">
          <div className="kt-wrap">
            <div className="kt-links__grid">
              {PAGELINKS.map((l, i) => (
                <a href="#" className="kt-links__item" key={l.t} data-reveal data-delay={i === 0 ? undefined : String(Math.min(i, 3))}>
                  <span className="kt-links__ic">{l.ic}</span>
                  <b>{l.t}</b>
                  <span>{l.p}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 園を探す ---------- */}
        <section className="kt-sec kt-search">
          <div className="kt-wrap kt-search__in">
            <div className="kt-ph kt-search__ph kt-ph--g1" data-reveal />
            <div data-reveal data-delay="1">
              <div className="kt-head">
                <span className="kt-head__en">FIND A NURSERY</span>
                <h2 className="kt-head__ja">各園のご紹介</h2>
              </div>
              <p className="kt-p">
                東京・千葉・埼玉・茨城にあることり保育園。清潔感のある明るいスペースで、
                ひとりひとりにきちんと目が届く環境を整えています。
              </p>
              <div className="kt-areas">
                {AREAS.map(([pref, note]) => (
                  <a href="#" key={pref}>{pref}<small>{note}</small></a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 日々のようす ---------- */}
        <section className="kt-sec kt-life">
          <div className="kt-wrap">
            <div className="kt-head kt-head--center" data-reveal>
              <span className="kt-head__en">DAILY LIFE</span>
              <h2 className="kt-head__ja">日々のようす</h2>
            </div>
          </div>
          <div className="kt-life__track" aria-hidden="true">
            {[...STRIP, ...STRIP].map((c, i) => <div className={`kt-ph ${c}`} key={i} />)}
          </div>
          <div className="kt-wrap" style={{ textAlign: "center", marginTop: "clamp(26px,3.4vw,40px)" }}>
            <a href="#" className="kt-btn">1日の流れを見る</a>
          </div>
        </section>

        {/* ---------- お知らせ ---------- */}
        <section className="kt-sec kt-news">
          <div className="kt-wrap">
            <div className="kt-head" data-reveal>
              <span className="kt-head__en">NEWS</span>
              <h2 className="kt-head__ja">お知らせ</h2>
            </div>
            <ul className="kt-news__list" data-reveal data-delay="1">
              {NEWS.map((n) => (
                <li key={n.t}>
                  <a href="#">
                    <span className={`kt-news__cat ${n.mod ?? ""}`}>{n.cat}</span>
                    <span className="kt-news__date">{n.date}</span>
                    <span className="kt-news__t">{n.t}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- 開園のお知らせ ---------- */}
        <section className="kt-sec kt-open">
          <div className="kt-wrap">
            <div className="kt-head" data-reveal>
              <span className="kt-head__en">NEW OPENING</span>
              <h2 className="kt-head__ja">認可保育園 開園のお知らせ</h2>
              <p className="kt-p" style={{ color: "rgba(255,255,255,0.85)", marginTop: 16 }}>
                2027年4月に、ことり認可園（習志野台）が開園いたします。見学のご予約を受け付けています。
              </p>
            </div>
            <div className="kt-open__box" data-reveal data-delay="1">
              <dl className="kt-open__dl">
                <div><dt>名称</dt><dd>ことり習志野台園（仮称）</dd></div>
                <div><dt>所在地</dt><dd>千葉県船橋市習志野台0-00-00（架空）</dd></div>
                <div><dt>開園予定</dt><dd>2027年4月1日</dd></div>
                <div><dt>利用定員</dt><dd>80人（0〜5歳児）</dd></div>
              </dl>
              <div>
                <div className="kt-cap">
                  <div className="kt-cap__h">乳児クラス</div>
                  <div className="kt-cap__row">
                    <div><span>0歳児</span><b>3</b></div>
                    <div><span>1歳児</span><b>12</b></div>
                    <div><span>2歳児</span><b>14</b></div>
                  </div>
                </div>
                <div className="kt-cap" style={{ marginTop: 14 }}>
                  <div className="kt-cap__h">幼児クラス</div>
                  <div className="kt-cap__row">
                    <div><span>3歳児</span><b>17</b></div>
                    <div><span>4歳児</span><b>17</b></div>
                    <div><span>5歳児</span><b>17</b></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 園一覧・空き状況 ---------- */}
        <section className="kt-sec kt-list">
          <div className="kt-wrap">
            <div className="kt-head kt-head--center" data-reveal>
              <span className="kt-head__en">NURSERY LIST</span>
              <h2 className="kt-head__ja">ことり保育園 一覧</h2>
            </div>

            <div className="kt-list__type kt-list__type--alt" data-reveal>
              <h3>企業主導型保育園</h3>
              {KIGYO.map((g) => (
                <div className="kt-list__pref" key={g.pref}>
                  <h4>{g.pref}</h4>
                  <ul>
                    {g.parks.map(([nm, city]) => (
                      <li key={nm}><a href="#">{nm}<small>（{city}）</small></a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="kt-list__type" data-reveal>
              <h3>小規模認可保育園</h3>
              {NINKA.map((g) => (
                <div className="kt-list__pref" key={g.pref}>
                  <h4>{g.pref}</h4>
                  <ul>
                    {g.parks.map(([nm, city]) => (
                      <li key={nm}><a href="#">{nm}<small>（{city}）</small></a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="kt-vac" data-reveal>
              <div className="kt-vac__h">
                <b>今月の空き状況（抜粋）</b>
                <small>2026年8月1日現在 ／ 詳しくは各園までお問い合わせください</small>
              </div>
              <div className="kt-vac__scroll">
                <table>
                  <thead>
                    <tr><th>園名</th><th>0歳児</th><th>1歳児</th><th>2歳児</th></tr>
                  </thead>
                  <tbody>
                    {VACANCY.map(([nm, a, b, c]) => (
                      <tr key={nm}>
                        <td>{nm}</td>
                        <td className={vacClass(a)}>{a}</td>
                        <td className={vacClass(b)}>{b}</td>
                        <td className={vacClass(c)}>{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="kt-sec kt-cta">
          <div className="kt-wrap">
            <div className="kt-cta__grid">
              <div className="kt-cta__card" data-reveal>
                <h3>入園説明会のお申し込み</h3>
                <p>ご希望エリアの日程を選んでお申し込みください。<br />LINEからも受け付けています。</p>
                <a href="#" className="kt-btn">日程を見て申し込む</a>
              </div>
              <div className="kt-cta__card" data-reveal data-delay="1">
                <h3>お問い合わせ</h3>
                <p>園のことでご質問・ご意見がありましたら、<br />フォームまたはLINEよりお気軽にどうぞ。</p>
                <a href="#" className="kt-btn kt-btn--line">LINEで相談する</a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- フッター ---------- */}
        <footer className="kt-foot">
          <div className="kt-foot__in">
            <div>
              <div className="kt-foot__logo">
                <div>こと</div>
                <span className="kt-logo__txt">
                  <b>ことり保育園</b>
                  <span>小規模認可保育園・企業主導型保育園</span>
                </span>
              </div>
              <p>
                株式会社ことりチャイルドケア（架空）<br />
                〒000-0000 千葉県船橋市○○0-0-0<br />
                TEL 000-000-0000（平日 9:00〜18:00）
              </p>
              <ul className="kt-foot__sns">
                <li><a href="#">Insta</a></li>
                <li><a href="#">LINE</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
            <ul className="kt-foot__nav">
              <li><a href="#">ホーム</a></li>
              <li><a href="#">ことり保育園とは</a></li>
              <li><a href="#">ことりの保育</a></li>
              <li><a href="#">安心・便利の工夫</a></li>
              <li><a href="#">日々のようす</a></li>
              <li><a href="#">1日の流れ</a></li>
              <li><a href="#">年間行事</a></li>
              <li><a href="#">保護者の声</a></li>
              <li><a href="#">園を探す</a></li>
              <li><a href="#">募集状況</a></li>
              <li><a href="#">入園のご案内</a></li>
              <li><a href="#">よくあるご質問</a></li>
              <li><a href="#">会社概要</a></li>
              <li><a href="#">採用情報</a></li>
            </ul>
          </div>
          <div className="kt-foot__btm">© ことり保育園（架空のサンプルです）</div>
        </footer>

        {/* ---------- 下部固定バー ---------- */}
        <div className="kt-fixed">
          <div className="kt-fixed__t">見学は随時受付中です<small>0〜2歳・首都圏21園／空き状況は毎月更新しています</small></div>
          <div className="kt-fixed__btns">
            <a href="#" className="kt-btn kt-btn--yellow">見学を申し込む</a>
            <a href="#" className="kt-btn">空き状況を見る</a>
          </div>
        </div>
      </main>

      <SampleFoot note="架空の小規模保育園（多拠点）を想定して制作したサンプルです。園一覧・空き状況の表・下部に固定した申込みボタンといった構成は、店舗や教室を複数運営されている事業者のサイトにもそのまま使えます。写真枠は色面で仮置きしているため、実制作では各園でお撮りになった写真が入ります。" />
    </>
  );
}
