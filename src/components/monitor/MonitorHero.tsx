import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SLOTS = 3;

/** ヒーロー右側：交換条件をそのまま表で出す */
const SPEC: [string, string, string][] = [
  ["制作料金", "70,000", "円（税込・一律）"],
  ["募集枠", "3", "社（先着）"],
  ["最短納期", "1", "週間（着手から）"],
];

export function MonitorHero() {
  return (
    <section className="mn-hero">
      <div className="mn-wrap">
        <div className="mn-crumb">
          <Link href="/">TOP</Link><span>/</span><span style={{ color: "#fff" }}>モニターキャンペーン</span>
        </div>

        <div className="mn-hero-grid">
          <div>
            <div className="mn-in mn-eyebrow" style={{ marginBottom: 28 }}>
              <span className="mn-dot" />MONITOR CAMPAIGN ／ 先着{SLOTS}社
            </div>

            <h1 className="mn-in mn-h1" style={{ animationDelay: "0.08s" }}>
              制作事例として掲載させてください。<br />
              その代わり、<em>7万円で作ります。</em>
            </h1>

            <p className="mn-in mn-p" style={{ margin: "30px 0 0", color: "rgba(255,255,255,0.72)", animationDelay: "0.16s" }}>
              通常10〜20万円でお引き受けしているホームページ制作を、一律70,000円で承ります。
              値引きの理由は<strong>制作事例として掲載させていただくこと</strong>、それだけです。
              工程も、かける時間も、通常のご依頼と変えません。
            </p>

            <div className="mn-in mn-btns" style={{ marginTop: 38, animationDelay: "0.24s" }}>
              <Link href="/contact" className="mn-btn">モニターに応募する<ArrowRight size={18} /></Link>
              <a href="#price" className="mn-btn mn-btn--ghost">料金の内訳を見る</a>
            </div>
          </div>

          <dl className="mn-in mn-spec" style={{ animationDelay: "0.32s" }}>
            {SPEC.map(([label, value, unit]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd><span className="mn-num">{value}</span>{unit}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
