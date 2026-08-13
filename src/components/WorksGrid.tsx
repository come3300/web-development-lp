"use client";
import React, { useMemo, useState } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

type Work = { cat: string; y: string; title: string; challenge: string; solution: string; result: string };

const WORKS: Work[] = [
  { cat: "CORPORATE", y: "2025", title: "製造業コーポレートサイト リニューアル", challenge: "検索流入が少なく、問い合わせが営業経由に偏っていた。", solution: "SEOを軸にサイト構造と導線を再設計。事例コンテンツを拡充。", result: "問い合わせ数 前年比 2.4倍。" },
  { cat: "RECRUIT", y: "2024", title: "建設会社 採用サイト新規制作", challenge: "求人媒体頼みで、若手からの応募がほぼゼロだった。", solution: "社員取材コンテンツを中心に、働く姿がわかる構成へ。", result: "若手応募が月0→5件に。" },
  { cat: "LP", y: "2024", title: "D2CブランドLP 制作・広告運用", challenge: "広告経由の流入はあるが、CVRが低く広告費が回収できない。", solution: "ファーストビューとフォーム導線をABテストで継続改善。", result: "CVR 1.2%→3.1%。" },
  { cat: "EC", y: "2024", title: "食品メーカー ECサイト構築", challenge: "自社ECがなく、販売チャネルをモール依存から脱却したい。", solution: "決済・配送連携込みでECサイトをフルスクラッチ構築。", result: "開設3ヶ月で月商50万円を達成。" },
  { cat: "CORPORATE", y: "2023", title: "士業事務所 コーポレートサイト制作", challenge: "サイトが名刺代わりで、専門性が伝わっていなかった。", solution: "対応分野ごとにコンテンツを分割し、SEOで比較検討層を獲得。", result: "自然検索経由の問い合わせが月2→9件に。" },
  { cat: "MEDIA", y: "2023", title: "地域情報オウンドメディア立ち上げ", challenge: "認知獲得のためのコンテンツ発信基盤がなかった。", solution: "CMSを導入し、月次で更新できる記事運用体制を構築。", result: "半年でセッション数が8倍に成長。" },
  { cat: "RECRUIT", y: "2023", title: "IT企業 中途採用サイト制作", challenge: "エンジニア採用で他社との差別化ができていなかった。", solution: "開発体制・技術スタックを訴求するページ構成に刷新。", result: "エンジニア応募数が2倍に増加。" },
  { cat: "LP", y: "2022", title: "セミナー集客LP 制作", challenge: "単発セミナーの申込みLPを短期間で用意する必要があった。", solution: "着手から4日で公開できるスピード制作フローで対応。", result: "申込み目標を初回開催で達成。" },
  { cat: "EC", y: "2022", title: "アパレルブランド ECサイトリニューアル", challenge: "スマホでの離脱率が高く、購入完了率が低かった。", solution: "モバイル導線と決済フローを見直し、表示速度を改善。", result: "モバイル購入完了率が1.6倍に改善。" },
];

const CATS = ["ALL", "CORPORATE", "RECRUIT", "LP", "EC", "MEDIA"];

export function WorksGrid() {
  const [active, setActive] = useState("ALL");
  const filtered = useMemo(() => (active === "ALL" ? WORKS : WORKS.filter((w) => w.cat === active)), [active]);

  return (
    <div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            style={{
              cursor: "pointer",
              border: active === c ? "1.5px solid #0e1b2c" : "1.5px solid rgba(14,27,44,0.10)",
              borderRadius: 999,
              background: active === c ? "linear-gradient(135deg,#0e1b2c 0%,#1c2f57 100%)" : "transparent",
              color: active === c ? "#fff" : "#0e1b2c",
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: "0.06em",
              padding: "10px 22px",
              fontFamily: "var(--font-body)",
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "clamp(20px,2.5vw,36px)", alignItems: "start" }}>
        {filtered.map((w, i) => (
          <div key={w.title} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ height: 220 }}><ImagePlaceholder label={`実績サムネイル ${i + 1}`} /></div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#5a6b80" }}><span>{w.cat}</span><span>·</span><span>{w.y}</span></div>
            <h3 style={{ fontWeight: 900, fontSize: "1.1rem", margin: 0, lineHeight: 1.5 }}>{w.title}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, borderTop: "1px solid rgba(14,27,44,0.08)", paddingTop: 14 }}>
              <p style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "#3c4a5c", margin: 0 }}><span style={{ fontWeight: 700, color: "#0e1b2c" }}>課題　</span>{w.challenge}</p>
              <p style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "#3c4a5c", margin: 0 }}><span style={{ fontWeight: 700, color: "#0e1b2c" }}>施策　</span>{w.solution}</p>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#2f6bff", fontWeight: 700, margin: 0 }}><span style={{ color: "#0e1b2c" }}>成果　</span>{w.result}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
