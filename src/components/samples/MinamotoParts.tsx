"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { LoopText } from "./LoopText";

const NAV: string[] = ["私たちについて", "事業内容", "出汁ブランド『ひとしずく』", "実績", "読みもの"];

/** ヘッダー。スクロールでロゴを縮め、罫線を出す */
export function MinamotoHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`mi-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="mi-header__in">
        <a href="#" className="mi-logo">
          <span className="mi-logo__mk">M</span>
          <span className="mi-logo__txt">
            <b>株式会社ミナモト</b>
            <span>MINAMOTO CO., LTD.</span>
          </span>
        </a>
        <nav className="mi-gnav">
          {NAV.map((n) => <a href="#" key={n}>{n}</a>)}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="#" className="mi-hcta">お問い合わせ</a>
          <button
            type="button"
            className="mi-burger"
            aria-expanded={open}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setOpen((v) => !v)}
          >
            <i /><i /><i />
          </button>
        </div>
      </div>
      {open && (
        <nav className="mi-spnav" style={{ display: "block" }}>
          {NAV.map((n) => (
            <a href="#" key={n} onClick={() => setOpen(false)}>
              {n}
              <Arrow size={12} />
            </a>
          ))}
          <a href="#" className="mi-hcta" onClick={() => setOpen(false)}>お問い合わせ</a>
        </nav>
      )}
    </header>
  );
}

function Arrow({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h9M7.5 3.5 11 7l-3.5 3.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const MV_SLIDES: { main: string; sub: string }[] = [
  { main: "mi-ph--g2", sub: "mi-ph--g5" },
  { main: "mi-ph--g3", sub: "mi-ph--g6" },
  { main: "mi-ph--g6", sub: "mi-ph--g2" },
  { main: "mi-ph--g5", sub: "mi-ph--g3" },
];

/**
 * ファーストビュー。左右2枚のスライダーが逆向きの半円で連動する。
 * 右の大きい写真が主、画面左端から覗く小さい写真が従で、同じ番号に同期して切り替わる。
 */
export function MinamotoMv() {
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => setI((v) => (v + 1) % MV_SLIDES.length), 4000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  const jump = (n: number) => {
    setI(n);
    if (timer.current) clearInterval(timer.current);
  };

  return (
    <section className="mi-mv">
      <div className="mi-mv__in">
        <div className="mi-mv__text">
          <h1 className="mi-mv__ttl">
            <span className="mi-mv__ttlText">
              小さな<span className="mi-mv__dot">一</span><span className="mi-mv__dot">皿</span>に、
            </span>
            <span className="mi-mv__ttlText">
              大きな<span className="mi-mv__dot">記</span><span className="mi-mv__dot">憶</span>を。
            </span>
          </h1>
        </div>

        <div className="mi-mv__slider2" aria-hidden="true">
          <div className="mi-mv__frame">
            {MV_SLIDES.map((s, n) => (
              <div className={`mi-mv__slide${n === i ? " is-on" : ""}`} key={s.sub + n}>
                <div className={`mi-ph ${s.sub}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="mi-mv__slider">
          <div className="mi-mv__frame">
            {MV_SLIDES.map((s, n) => (
              <div className={`mi-mv__slide${n === i ? " is-on" : ""}`} key={s.main + n}>
                <div className={`mi-ph ${s.main}`} />
              </div>
            ))}
          </div>
          <LoopText
            shape="pillH"
            pad={13}
            className="mi-mv__loop"
            phrase="MAKE THE TABLE A LITTLE RICHER. SINCE 1958 —"
          />
          <div className="mi-mv__pager">
            {MV_SLIDES.map((s, n) => (
              <button
                key={s.main + n}
                type="button"
                aria-label={`スライド${n + 1}へ`}
                aria-current={n === i}
                onClick={() => jump(n)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** 横スクロール。前後ボタンと進捗バーを持ち、バーの伸縮で見えている範囲を示す */
export function MiScroller({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ ratio: 1, progress: 0, atStart: true, atEnd: true });

  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1;
    setState({
      ratio: Math.min(1, ratio),
      progress: max > 0 ? el.scrollLeft / max : 0,
      atStart: el.scrollLeft <= 2,
      atEnd: max <= 2 || el.scrollLeft >= max - 2,
    });
  }, []);

  useEffect(() => {
    sync();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, [sync]);

  const step = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const amount = first ? first.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  const barWidth = `${state.ratio * 100}%`;
  const barShift = `${(state.progress * (1 - state.ratio) * 100) / Math.max(state.ratio, 0.0001)}%`;

  return (
    <div className="mi-hs">
      <div className="mi-hs__track" ref={ref} onScroll={sync}>{children}</div>
      <div className="mi-hs__foot">
        <div className="mi-hs__bar">
          <i style={{ width: barWidth, transform: `translateX(${barShift})` }} />
        </div>
        <div className="mi-hs__btns">
          <button type="button" aria-label="前へ" disabled={state.atStart} onClick={() => step(-1)}>
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M12 7H3M6.5 3.5 3 7l3.5 3.5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" aria-label="次へ" disabled={state.atEnd} onClick={() => step(1)}>
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h9M7.5 3.5 11 7l-3.5 3.5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/** 48pxの黒丸＋下線つきテキストのリンク */
export function ArrowBtn({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="mi-abtn">
      <span className="mi-abtn__mark">
        <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 7h9M7.5 3.5 11 7l-3.5 3.5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="mi-abtn__txt mi-en">{children}</span>
    </a>
  );
}
