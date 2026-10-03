import type { Metadata } from "next";
import { SampleBar, SampleFoot } from "@/components/samples/SampleFrame";
import { ScrollReveal } from "@/components/samples/ScrollReveal";
import "../samples.css";
import "./hidamari.css";

export const metadata: Metadata = {
  title: "サンプル｜ひだまり幼稚園（幼稚園・こども園サイト）｜WEBKURA",
  description: "WEBKURAの作成例。英字ラベルと日本語見出しを重ねた見出し設計と、年齢別クラスのタイムラインで構成した幼稚園サイトのサンプルです。掲載内容はすべて架空のものです。",
  robots: { index: false, follow: false },
};

const NEWS: { cat: string; date: string; t: string }[] = [
  { cat: "園だより", date: "2026.08.18", t: "未就園児あつまれ！子育て支援イベント「ひだまりひろば」毎月開催中です" },
  { cat: "募集", date: "2026.07.30", t: "2027（令和9）年度 満3歳児『つぼみ組』の園児を募集しています" },
  { cat: "募集", date: "2026.07.01", t: "2027年度 2・3歳児親子クラス『こぐま組』園児募集のご案内" },
  { cat: "行事", date: "2026.06.20", t: "夏まつりの日程が決まりました。卒園生のみなさんもぜひお越しください" },
];

const CLASS_CARDS: { tag: string; t: string; p: string }[] = [
  { tag: "1歳児 親子クラス", t: "いちご組", p: "はじめての集団生活。保護者の方と一緒に、歌やふれあい遊びから慣れていきます。週1回・全30回。" },
  { tag: "2歳児 親子クラス", t: "こぐま組", p: "手先を使う遊びや戸外遊びを中心に。保護者同士が話せる時間も毎回設けています。週2回。" },
  { tag: "満3歳児クラス", t: "つぼみ組", p: "3歳の誕生日を迎えた月から入園できるクラス。少人数でゆっくり園生活に入っていきます。" },
];

const DAYS: { en: string; t: string; p: string; ph: string }[] = [
  { en: "ONE DAY", t: "園の一日", p: "登園してからの自由遊び、クラスでの活動、お弁当、午後の外遊び。一日の流れは、子どもの体力と集中の波に合わせて組んでいます。急かさないことを、いちばん大事にしています。", ph: "hd-ph--g1" },
  { en: "ANNUAL EVENTS", t: "年間行事", p: "春の遠足、夏のプールと夏まつり、秋の運動会、冬のもちつきと発表会。季節ごとの行事はすべて、日々の保育の延長線上にあります。行事のための練習漬けにはしません。", ph: "hd-ph--g2" },
  { en: "EXTRACURRICULAR", t: "課外教室", p: "バレエ、絵画、サッカー、英語ミュージカル。降園後の時間を使って、遊びの感覚のまま芸術やスポーツに触れられる場を用意しています。希望制です。", ph: "hd-ph--g4" },
];

const FACILITY: [string, string][] = [
  ["ひとつながりの保育室", "壁で仕切らず、年齢の違う子が自然に混ざる設計。異年齢の関わりが毎日起こります。"],
  ["園庭と築山", "土のままの園庭に、走って登れる築山。転ぶことも経験のうちと考えています。"],
  ["安全管理", "登降園の入退室管理、AED設置、月1回の避難訓練。設備は毎年点検しています。"],
];

export default function HidamariSamplePage() {
  return (
    <>
      <SampleBar name="ひだまり幼稚園" kind="幼稚園" />

      <main className="hd">
        <ScrollReveal />

        {/* ---------- ヘッダー ---------- */}
        <header className="hd-header">
          <div className="hd-header__in">
            <a href="#" className="hd-hlogo">
              <span className="hd-hlogo__mk">ひ</span>
              <span className="hd-hlogo__txt">
                <b>ひだまり幼稚園</b>
                <span>HIDAMARI KINDERGARTEN</span>
              </span>
            </a>
            <nav className="hd-hnav">
              <a href="#">園について</a>
              <a href="#">保育クラス</a>
              <a href="#">園での生活</a>
              <a href="#">施設紹介</a>
              <a href="#">よくあるご質問</a>
              <a href="#">採用情報</a>
            </nav>
            <div className="hd-hcta">
              <a href="#">入園のご案内</a>
              <a href="#">お問い合わせ</a>
            </div>
          </div>
        </header>

        {/* ---------- メインビジュアル ---------- */}
        <section className="hd-mv">
          <span className="hd-mv__deco hd-mv__deco--1" />
          <span className="hd-mv__deco hd-mv__deco--2" />
          <span className="hd-mv__deco hd-mv__deco--3" />
          <div className="hd-mv__in">
            <div>
              <span className="hd-mv__sub">子どもに</span>
              <h1 className="hd-mv__catch">
                <em>夢</em>を、<em>自然</em>を、<br /><em>たくましさ</em>を。
              </h1>
              <p className="hd-mv__txt">
                広がる自由な空間で、子どもたちが自ら伸びる力を育てます。<br />
                町のまんなかにある、土と風のある幼稚園です。
              </p>
            </div>
            <div className="hd-mv__ph">
              <div className="hd-ph hd-ph--g1" />
              <div className="hd-ph hd-ph--g2" />
              <div className="hd-ph hd-ph--g3" />
            </div>
          </div>
          <span className="hd-mv__scroll">scroll</span>
        </section>

        {/* ---------- お知らせ ---------- */}
        <section className="hd-sec hd-news">
          <div className="hd-wrap hd-news__in">
            <div data-reveal>
              <div className="hd-ttl">
                <span className="hd-ttl__en">NEWS</span>
                <h2 className="hd-ttl__ja">お知らせ</h2>
              </div>
              <a href="#" className="hd-btn">お知らせ一覧へ</a>
            </div>
            <ul className="hd-news__list" data-reveal data-delay="1">
              {NEWS.map((n) => (
                <li key={n.t}>
                  <a href="#">
                    <span className="hd-news__cat">{n.cat}</span>
                    <span className="hd-news__date">{n.date}</span>
                    <span className="hd-news__t">{n.t}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- 思い ---------- */}
        <section className="hd-sec hd-thoughts">
          <div className="hd-wrap hd-thoughts__in">
            <div data-reveal>
              <div className="hd-ttl hd-ttl--blue">
                <span className="hd-ttl__en">THOUGHTS</span>
                <h2 className="hd-ttl__ja">未来に生きる子どもたちの<br />心と体を豊かに</h2>
              </div>
              <p className="hd-lead">
                ひだまり幼稚園は、子どもたちが「夢」「自然」「たくましさ」を育む場所です。
                のびのびと自分の力を発揮できる環境を大切にし、自由な遊びや多様な活動を通じて、
                自立心と豊かな人間性を育てます。
              </p>
              <p className="hd-lead">
                園で過ごす時間が、未来を担う子どもたちの心と体を支える基礎になるよう、
                職員全員で見守っています。
              </p>
              <div style={{ marginTop: "clamp(22px,3vw,32px)" }}>
                <a href="#" className="hd-btn hd-btn--green">園についてくわしく見る</a>
              </div>
            </div>
            <div className="hd-thoughts__ph" data-reveal data-delay="1">
              <div className="hd-ph hd-ph--round hd-ph--g5" />
              <div className="hd-ph hd-ph--round hd-ph--g2" />
              <div className="hd-ph hd-ph--g3" />
            </div>
          </div>
        </section>

        {/* ---------- 年齢別クラス ---------- */}
        <section className="hd-sec hd-class">
          <div className="hd-wrap">
            <div className="hd-ttl hd-ttl--center" data-reveal>
              <span className="hd-ttl__en">CLASS</span>
              <h2 className="hd-ttl__ja">年齢別保育クラス・子育て支援</h2>
              <p className="hd-lead">
                未就園児の年齢から就園に向けて、子どもの興味・関心を広げていくことを目指しています。
                元気にたくさん遊び、わくわくする経験に出会える場、そして保護者同士が出会える場でありたいと考えています。
              </p>
            </div>

            <div className="hd-timeline" data-reveal>
              <div className="hd-timeline__in">
                <div className="hd-ages">
                  <span>0歳児</span><span>1歳児</span><span>2歳児</span><span>3歳児</span><span>4歳児〜5歳児</span>
                </div>
                <div className="hd-bars">
                  <div className="hd-bar hd-bar--play">子育て支援プログラム「ひだまりひろば」<small>0〜2歳・親子・毎月開催</small></div>
                  <div className="hd-bar hd-bar--ichigo">いちご組<small>親子クラス</small></div>
                  <div className="hd-bar hd-bar--koguma">こぐま組<small>親子クラス</small></div>
                  <div className="hd-bar hd-bar--tsubomi">つぼみ組<small>満3歳児・4年保育</small></div>
                  <div className="hd-bar hd-bar--3y">3年保育（年少・年中・年長）<small>通常保育</small></div>
                  <div className="hd-bar hd-bar--azukari">預かり保育「にじ」<small>朝7:30〜／降園後18:30まで・長期休業中も実施</small></div>
                </div>
              </div>
            </div>
            <p className="hd-class__note">※ 横にスクロールしてご覧いただけます。学年の区切りは4月1日時点の年齢です。</p>

            <div className="hd-class__cards">
              {CLASS_CARDS.map((c, i) => (
                <div className="hd-card" key={c.t} data-reveal data-delay={i === 0 ? undefined : String(i)}>
                  <span className="hd-card__tag">{c.tag}</span>
                  <h3>{c.t}</h3>
                  <p>{c.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 園での生活 ---------- */}
        <section className="hd-sec hd-days">
          <div className="hd-wrap">
            <div className="hd-ttl hd-ttl--yellow" data-reveal>
              <span className="hd-ttl__en">DAYS</span>
              <h2 className="hd-ttl__ja">園での生活</h2>
              <p className="hd-lead">
                毎日の保育と年間行事は、子どもたちの年齢や発達に合わせて計画しています。
                遊びや友だちとの関係を通して「喜び」「不思議さ」「思いやり」を共に感じ、たくさんのことを学びます。
              </p>
            </div>
            {DAYS.map((d) => (
              <div className="hd-days__block" key={d.t} data-reveal>
                <div className={`hd-ph hd-days__ph ${d.ph}`} />
                <div>
                  <h3><span>{d.en}</span>{d.t}</h3>
                  <p>{d.p}</p>
                  <a href="#" className="hd-btn">くわしく見る</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- 施設 ---------- */}
        <section className="hd-sec hd-fac">
          <div className="hd-wrap">
            <div className="hd-ttl hd-ttl--pink" data-reveal>
              <span className="hd-ttl__en">FACILITY</span>
              <h2 className="hd-ttl__ja">子どもたちが、毎日のびのびと過ごせる空間</h2>
              <p className="hd-lead">
                2019年に建て替えた園舎は、保育室と廊下の境目をなくした一体の空間です。
                どこにいても子どもの姿が見え、職員同士も声をかけ合える設計にしました。
              </p>
            </div>
            <div className="hd-ph hd-fac__ph hd-ph--g3" data-reveal />
            <div className="hd-fac__pts">
              {FACILITY.map(([t, p], i) => (
                <div key={t} data-reveal data-delay={i === 0 ? undefined : String(i)}>
                  <b>{t}</b>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 入園案内 ---------- */}
        <section className="hd-sec hd-guide">
          <div className="hd-wrap">
            <div className="hd-ttl hd-ttl--center" data-reveal>
              <span className="hd-ttl__en">GUIDE</span>
              <h2 className="hd-ttl__ja">入園をご検討の保護者様へ</h2>
              <p className="hd-lead">
                園の見学やご相談は随時受け付けています。「どんな雰囲気か見てみたい」「まずは話を聞いてみたい」だけでも構いません。
              </p>
            </div>
            <div className="hd-guide__grid">
              <a href="#" className="hd-guide__card" data-reveal>
                <div><b>入園のご案内</b><span>ADMISSION</span></div>
                <i />
              </a>
              <a href="#" className="hd-guide__card" data-reveal data-delay="1">
                <div><b>よくあるご質問</b><span>FAQ</span></div>
                <i />
              </a>
            </div>
          </div>
        </section>

        {/* ---------- お問い合わせ ---------- */}
        <section className="hd-sec hd-contact">
          <div className="hd-wrap">
            <div className="hd-ttl hd-ttl--center" data-reveal>
              <span className="hd-ttl__en">CONTACT</span>
              <h2 className="hd-ttl__ja">ご相談や見学など、<br />お気軽にお問い合わせください。</h2>
            </div>
            <div className="hd-contact__box">
              <div className="hd-contact__card" data-reveal>
                <h3>お電話でのお問い合わせ</h3>
                <span className="hd-contact__tel">000-0000-0000</span>
                <small>平日 10:00〜16:00 ／ 土曜日 10:00〜12:00</small>
              </div>
              <div className="hd-contact__card" data-reveal data-delay="1">
                <h3>フォームでのお問い合わせ</h3>
                <small style={{ marginBottom: 18 }}>見学のお申込みもこちらから承ります。<br />3日以内にご返信いたします。</small>
                <a href="#" className="hd-btn hd-btn--green">お問い合わせフォーム</a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- フッター ---------- */}
        <footer className="hd-foot">
          <div className="hd-foot__in">
            <div>
              <div className="hd-hlogo">
                <span className="hd-hlogo__mk">ひ</span>
                <span className="hd-hlogo__txt">
                  <b>ひだまり幼稚園</b>
                  <span>HIDAMARI KINDERGARTEN</span>
                </span>
              </div>
              <p>
                学校法人ひだまり学園（架空）<br />
                〒000-0000 ○○県○○市○○1-5-2<br />
                TEL 000-0000-0000
              </p>
              <ul className="hd-foot__sns">
                <li><a href="#">LINE</a></li>
                <li><a href="#">Insta</a></li>
                <li><a href="#">FB</a></li>
              </ul>
            </div>
            <ul className="hd-foot__nav">
              <li><a href="#">ホーム</a></li>
              <li><a href="#">園について</a></li>
              <li><a href="#">施設紹介</a></li>
              <li><a href="#">保育クラス・子育て支援</a></li>
              <li><a href="#">園の一日</a></li>
              <li><a href="#">年間行事</a></li>
              <li><a href="#">課外教室</a></li>
              <li><a href="#">入園のご案内</a></li>
              <li><a href="#">よくあるご質問</a></li>
              <li><a href="#">採用情報</a></li>
              <li><a href="#">お知らせ</a></li>
              <li><a href="#">お問い合わせ</a></li>
            </ul>
          </div>
          <div className="hd-foot__btm">© 2026 学校法人ひだまり学園 ひだまり幼稚園（架空のサンプルです）</div>
        </footer>
      </main>

      <SampleFoot note="架空の幼稚園を想定して制作したサンプルです。年齢別クラスを時間軸の帯で見せる図や、英字ラベルと日本語見出しを重ねた見出し設計は、情報量が多くなりがちな園・学校・クリニックのサイトで特に効きます。写真枠は色面で仮置きしているため、実制作では園でお撮りになった写真が入ります。" />
    </>
  );
}
