"use client";
import { useEffect, useState } from "react";

const NAV: [string, string][] = [
  ["HOME", "トップ"],
  ["ABOUT US", "私たちについて"],
  ["BUSINESS", "事業内容"],
  ["WORKS", "制作実績"],
  ["RECRUIT", "採用情報"],
  ["CONTACT", "お問い合わせ"],
];

/** ヘッダーとメニュー。開くと斜めの色面が下から立ち上がる */
export function AtelierNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="at-head">
        <a href="#" className="at-logo" onClick={(e) => e.preventDefault()}>
          <b>STUDIO KAIRO</b>
          <span>BRAND EXPERIENCE DESIGN</span>
        </a>
        <button type="button" className="at-burger" aria-expanded={open} aria-label={open ? "メニューを閉じる" : "メニューを開く"} onClick={() => setOpen((v) => !v)}>
          <i /><i /><i />
        </button>
      </div>

      <div className={`at-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="at-menu__bg"><i /><i /><i /><i /></div>
        <div className="at-menu__in">
          <ul className="at-menu__list">
            {NAV.map(([en, ja]) => (
              <li key={en}>
                <a href="#" onClick={(e) => { e.preventDefault(); setOpen(false); }}>{en}<small>{ja}</small></a>
              </li>
            ))}
          </ul>
          <div className="at-menu__sub">
            <span>Privacy Policy</span><span>Sitemap</span><span>© STUDIO KAIRO</span>
          </div>
        </div>
      </div>
    </>
  );
}
