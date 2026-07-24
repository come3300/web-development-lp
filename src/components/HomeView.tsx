"use client";
import React from "react";
import Link from "next/link";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Pt = [number, number, number];
type Cols = { line: string; dot: string; hot: string };

export class HomeView extends React.Component {
  r = { hero: React.createRef<HTMLCanvasElement>(), problem: React.createRef<HTMLCanvasElement>(), price: React.createRef<HTMLCanvasElement>(), cta: React.createRef<HTMLCanvasElement>() };
  mx = 0; my = 0; t = 0; last = 0; raf = 0;
  cloudA: Pt[] = []; pairsA: [number, number][] = []; cloudB: Pt[] = []; pairsB: [number, number][] = [];
  onMouse = (e: MouseEvent) => { this.mx = e.clientX / window.innerWidth - 0.5; this.my = e.clientY / window.innerHeight - 0.5; };

  componentDidMount() {
    this.cloudA = this.makeCloud(210, 205);
    this.pairsA = this.makePairs(this.cloudA, 80);
    this.cloudB = this.makeCloud(150, 165);
    this.pairsB = this.makePairs(this.cloudB, 82);
    window.addEventListener("mousemove", this.onMouse);
    this.last = performance.now();
    this.raf = requestAnimationFrame(this.tick);
  }
  componentWillUnmount() { cancelAnimationFrame(this.raf); window.removeEventListener("mousemove", this.onMouse); }

  makeCloud(n: number, rad: number): Pt[] { const p: Pt[] = []; for (let i = 0; i < n; i++) { const th = Math.acos(2 * Math.random() - 1), ph = Math.random() * 6.2832, rr = rad * (0.7 + 0.3 * Math.random()); p.push([rr * Math.sin(th) * Math.cos(ph), rr * Math.cos(th), rr * Math.sin(th) * Math.sin(ph)]); } return p; }
  makePairs(pts: Pt[], maxD: number): [number, number][] { const out: [number, number][] = [], m2 = maxD * maxD; for (let i = 0; i < pts.length; i++) { for (let j = i + 1; j < pts.length; j++) { const a = pts[i], b = pts[j], dx = a[0] - b[0], dy = a[1] - b[1], dz = a[2] - b[2]; if (dx * dx + dy * dy + dz * dz < m2) { out.push([i, j]); if (out.length >= 320) return out; } } } return out; }
  proj(p: Pt, ry: number, rx: number, cx: number, cy: number, sc: number, fov: number) { const c1 = Math.cos(ry), s1 = Math.sin(ry); const x = p[0] * c1 + p[2] * s1, z = -p[0] * s1 + p[2] * c1, y = p[1]; const c2 = Math.cos(rx), s2 = Math.sin(rx); const y2 = y * c2 - z * s2, z2 = y * s2 + z * c2; const k = fov / (fov + z2); return [cx + x * k * sc, cy + y2 * k * sc, k]; }
  cloud(ctx: CanvasRenderingContext2D, pts: Pt[], prs: [number, number][], cx: number, cy: number, sc: number, t: number, cols: Cols) {
    const ry = t * 0.22 + this.mx * 0.6, rx = 0.35 + this.my * 0.4;
    const P = pts.map((p) => this.proj(p, ry, rx, cx, cy, sc, 560));
    ctx.lineWidth = 1;
    for (const [i, j] of prs) { const a = P[i], b = P[j]; const al = ((a[2] + b[2]) / 2 - 0.8) * 0.9; if (al <= 0.02) continue; ctx.strokeStyle = cols.line + Math.min(0.5, al) + ")"; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); }
    for (let i = 0; i < P.length; i++) { const p = P[i], rr = Math.max(0.7, (p[2] - 0.6) * 3), hot = i % 19 === 0; if (hot) { ctx.strokeStyle = cols.hot; ctx.lineWidth = 1; ctx.strokeRect(p[0] - 5, p[1] - 5, 10, 10); ctx.fillStyle = cols.hot; } else { ctx.fillStyle = cols.dot + Math.min(0.8, Math.max(0.06, (p[2] - 0.65) * 1.4)) + ")"; } ctx.beginPath(); ctx.arc(p[0], p[1], hot ? 2.2 : rr, 0, 6.2832); ctx.fill(); }
  }
  ring(ctx: CanvasRenderingContext2D, cx: number, cy: number, rad: number, tilt: number, rot: number, col: string, a: number) { ctx.strokeStyle = col + a + ")"; ctx.lineWidth = 1; ctx.beginPath(); ctx.ellipse(cx, cy, rad, rad * tilt, rot, 0, 6.2832); ctx.stroke(); }
  ticks(ctx: CanvasRenderingContext2D, W: number, H: number, t: number, col: string, n: number) { for (let i = 0; i < n; i++) { const x = ((i * 137 + 31) % 211) / 211 * W, y = ((i * 89 + 57) % 199) / 199 * H; const a = 0.12 + 0.12 * Math.sin(t * 1.5 + i * 1.7); ctx.strokeStyle = col + a + ")"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x - 5, y); ctx.lineTo(x + 5, y); ctx.moveTo(x, y - 5); ctx.lineTo(x, y + 5); ctx.stroke(); } }
  grid(ctx: CanvasRenderingContext2D, W: number, H: number, t: number, col: string) { const hz = H * 0.5; for (let i = 0; i < 16; i++) { const z = (i / 16 + t * 0.045) % 1; const y = hz + (H - hz) * z * z * z; ctx.strokeStyle = col + (0.04 + z * 0.22) + ")"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); } const vp = W * 0.5; for (let k = -14; k <= 14; k++) { ctx.strokeStyle = col + "0.07)"; ctx.beginPath(); ctx.moveTo(vp + k * W * 0.012, hz); ctx.lineTo(vp + k * W * 0.085, H); ctx.stroke(); } }
  rain(ctx: CanvasRenderingContext2D, W: number, H: number, t: number, col: string, n: number) { for (let i = 0; i < n; i++) { const seed = (i * 971) % 997; const x = (seed / 997) * W; const sp = 120 + (seed * 7) % 160; const len = 40 + (seed * 13) % 90; const y = ((t * sp) + seed * 3) % (H + len) - len; const g = ctx.createLinearGradient(0, y, 0, y + len); g.addColorStop(0, col + "0)"); g.addColorStop(1, col + "0.5)"); ctx.strokeStyle = g; ctx.lineWidth = 1.3; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + len); ctx.stroke(); } }
  glitch(ctx: CanvasRenderingContext2D, cv: HTMLCanvasElement, W: number, H: number, t: number) { if (t % 5.5 < 0.3) { const base = Math.floor(t / 5.5); for (let i = 0; i < 3; i++) { const y = Math.floor((Math.sin(base * 9.73 + i * 3.17) * 0.5 + 0.5) * H * 0.9); const hgt = 6 + i * 9; const off = Math.round(Math.sin(t * 45 + i * 2) * 16); if (y + hgt < H) ctx.drawImage(cv, 0, y, W, hgt, off, y, W, hgt); } } }
  hero = (ctx: CanvasRenderingContext2D, cv: HTMLCanvasElement, W: number, H: number, t: number, dpr: number) => {
    const cx = W * 0.72, cy = H * 0.42, s = dpr * 0.95;
    this.ticks(ctx, W, H, t, "rgba(14,27,44,", 9);
    this.ring(ctx, cx, cy, 250 * s, 0.32, -0.5 + t * 0.06, "rgba(47,107,255,", 0.35);
    this.ring(ctx, cx, cy, 290 * s, 0.26, -0.4 - t * 0.04, "rgba(14,27,44,", 0.2);
    this.cloud(ctx, this.cloudA, this.pairsA, cx, cy, s, t, { line: "rgba(47,107,255,", dot: "rgba(14,27,44,", hot: "#2f6bff" });
  };
  problem = (ctx: CanvasRenderingContext2D, cv: HTMLCanvasElement, W: number, H: number, t: number) => { this.rain(ctx, W, H, t, "rgba(57,230,255,", 12); this.glitch(ctx, cv, W, H, t); };
  price = (ctx: CanvasRenderingContext2D, cv: HTMLCanvasElement, W: number, H: number, t: number) => { this.ticks(ctx, W, H, t + 40, "rgba(14,27,44,", 7); };
  cta = (ctx: CanvasRenderingContext2D, cv: HTMLCanvasElement, W: number, H: number, t: number) => { this.grid(ctx, W, H, t, "rgba(57,230,255,"); this.rain(ctx, W, H, t, "rgba(47,107,255,", 8); this.glitch(ctx, cv, W, H, t + 2.7); };

  tick = (now: number) => {
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now; this.t += dt;
    const scenes: [React.RefObject<HTMLCanvasElement>, (ctx: CanvasRenderingContext2D, cv: HTMLCanvasElement, W: number, H: number, t: number, dpr: number) => void][] = [
      [this.r.hero, this.hero], [this.r.problem, this.problem], [this.r.price, this.price], [this.r.cta, this.cta],
    ];
    for (const [ref, fn] of scenes) {
      const cv = ref.current; if (!cv) continue;
      const rc = cv.getBoundingClientRect();
      if (rc.width < 2 || rc.bottom < -40 || rc.top > window.innerHeight + 40) continue;
      const dpr = Math.min(1.5, window.devicePixelRatio || 1);
      const W = Math.round(rc.width * dpr), H = Math.round(rc.height * dpr);
      if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
      const ctx = cv.getContext("2d")!;
      ctx.clearRect(0, 0, W, H);
      fn(ctx, cv, W, H, this.t, dpr);
    }
    this.raf = requestAnimationFrame(this.tick);
  };

  render() {
    return (<main style={{ background: "#f4f6f8", color: "#0e1b2c", overflowX: "hidden" }}>

      <Header />

      <section style={{ position: "relative", padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px) 0" }}>
        <div style={{ position: "absolute", top: 40, right: -40, fontFamily: "var(--font-display)", fontSize: "clamp(6rem,16vw,15rem)", lineHeight: 0.9, color: "transparent", WebkitTextStroke: "1.5px rgba(14,27,44,0.14)", userSelect: "none", pointerEvents: "none", textAlign: "right" }}>WEB<br />GROWTH</div>
        <canvas ref={this.r.hero} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1.5px solid #0e1b2c", padding: "8px 18px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.14em", marginBottom: 32 }}><span style={{ width: 8, height: 8, background: "#2f6bff", display: "inline-block" }} />現役エンジニアが公開までを徹底サポート</div>
          <h1 style={{ fontWeight: 900, fontSize: "clamp(2.6rem,6vw,4.8rem)", lineHeight: 1.3, letterSpacing: "0.01em", margin: 0 }}>成果から逆算する、<br /><span style={{ color: "#2f6bff" }}>Web制作</span>。</h1>
          <div style={{ fontSize: "clamp(1rem,1.5vw,1.15rem)", fontWeight: 500, lineHeight: 2.1, maxWidth: "36em", margin: "32px 0 0", color: "#3c4a5c" }}><div>ヒアリングから情報設計/原稿作成、公開後の運用までサポートする</div><div>小規模・中小企業向けのWeb制作サービスです。</div></div>
          <div style={{ display: "flex", gap: 16, marginTop: 44, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#0e1b2c", color: "#fff", fontWeight: 700, fontSize: "1.05rem", padding: "18px 48px", display: "inline-flex", alignItems: "center", gap: 12 }}>無料で相談する<span>→</span></Link>
            <Link href="/works" style={{ background: "transparent", color: "#0e1b2c", fontWeight: 700, fontSize: "1.05rem", padding: "18px 40px", border: "1.5px solid #0e1b2c" }}>制作実績を見る</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 0, marginTop: "clamp(56px,9vh,96px)", borderTop: "2px solid #0e1b2c" }}>
            <div style={{ padding: "28px 24px 36px", borderRight: "1px solid rgba(14,27,44,0.12)" }}><div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", color: "#5a6b80", marginBottom: 8 }}>制作実績</div><div style={{ fontFamily: "var(--font-display)", fontSize: "3.2rem", lineHeight: 1 }}>120<span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 700 }}>件+</span></div></div>
            <div style={{ padding: "28px 24px 36px", borderRight: "1px solid rgba(14,27,44,0.12)" }}><div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", color: "#5a6b80", marginBottom: 8 }}>保守契約 継続率</div><div style={{ fontFamily: "var(--font-display)", fontSize: "3.2rem", lineHeight: 1 }}>92<span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 700 }}>%</span></div></div>
            <div style={{ padding: "28px 24px 36px" }}><div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", color: "#5a6b80", marginBottom: 8 }}>最短納期</div><div style={{ fontFamily: "var(--font-display)", fontSize: "3.2rem", lineHeight: 1 }}>2<span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 700 }}>週間</span></div></div>
          </div>
        </div>
      </section>

      <section style={{ background: "#0e1b2c", color: "#fff", padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", marginTop: "clamp(56px,8vh,90px)", position: "relative", overflow: "hidden" }}>
        <canvas ref={this.r.problem} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>01 — ABOUT</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.5, margin: "20px 0 56px" }}>TSUKURUについて</h2>
          <div style={{ fontSize: "0.95rem", fontWeight: 500, lineHeight: 2.1, color: "rgba(255,255,255,0.75)", maxWidth: "44em", margin: "0 0 40px" }}>TSUKURU（ツクル）は現役エンジニアが直接手がける、ホームページ制作専門のサービスです。<br />制作会社を通さず直接依頼いただくことで、短納期・低コスト・高い自由度を同時に実現します。</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 1, background: "rgba(255,255,255,0.14)" }}>
            <div style={{ background: "#0e1b2c", padding: "36px 28px" }}><div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>POINT1</div><p style={{ fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.9, margin: "0 0 12px" }}>最短1〜2週間のスピード開発</p><p style={{ fontSize: "0.9rem", lineHeight: 2, color: "rgba(255,255,255,0.65)", margin: 0 }}>大人数が関わる制作会社とは違い、意思決定から実装までを少人数で完結。着手から公開まで最短1〜2週間で仕上げます。</p></div>
            <div style={{ background: "#0e1b2c", padding: "36px 28px" }}><div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>POINT2</div><p style={{ fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.9, margin: "0 0 12px" }}>現役エンジニアによる自由度の高い開発</p><p style={{ fontSize: "0.9rem", lineHeight: 2, color: "rgba(255,255,255,0.65)", margin: 0 }}>テンプレートに縛られず、現役エンジニアが直接コードを書くからこそできる、要望に合わせた柔軟な機能実装が可能です。</p></div>
            <div style={{ background: "#0e1b2c", padding: "36px 28px" }}><div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>POINT3</div><p style={{ fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.9, margin: "0 0 12px" }}>低コストで、よりリッチなサイトを</p><p style={{ fontSize: "0.9rem", lineHeight: 2, color: "rgba(255,255,255,0.65)", margin: 0 }}>営業・ディレクション等の中間コストが発生しないため、同じ予算でも制作会社より作り込んだサイトをご提供できます。</p></div>
          </div>
        </div>
      </section>

      <section id="strength" style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>02 — STRENGTH</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 64px" }}>制作会社に頼むより、速く・自由に・安く。</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              ["01", "最短1〜2週間の圧倒的スピード", "一般的な制作会社は営業・ディレクター・デザイナー・エンジニアと確認工程が多く1〜3ヶ月かかりがち。TSUKURUは少人数体制で意思決定が速く、Basicプランなら最短1週間で公開できます。", "44px 0", "1.5px solid #0e1b2c"],
              ["02", "現役エンジニア直接開発の自由度", "テンプレート頼みではなく、現役エンジニアがコードを直接書くからこそ、独自機能・複雑な要件・こだわりの動きにも柔軟に対応できます。", "44px 0", "1px solid rgba(14,27,44,0.15)"],
              ["03", "低コストで、よりリッチな仕上がり", "営業・ディレクションにかかる中間コストを省く分、同じ予算でもデザイン・機能により多くを投資でき、制作会社より作り込んだサイトになります。", "44px 0", "1px solid rgba(14,27,44,0.15)"],
              ["04", "公開後もPDCAで併走", "アクセス解析レポートと改善提案を毎月お届け。数値に基づいた改善サイクルを回し続けることで、公開後もサイトを成長させます。", "44px 0", "1px solid rgba(14,27,44,0.15)"],
            ].map(([num, title, body, pad, bt], i) => (
              <div key={num} style={{ display: "grid", gridTemplateColumns: "140px 1fr 1.2fr", gap: "clamp(20px,3vw,48px)", padding: pad, borderTop: bt, borderBottom: i === 3 ? "1.5px solid #0e1b2c" : undefined, alignItems: "start" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,5vw,4.5rem)", lineHeight: 0.9, color: "#2f6bff" }}>{num}</div>
                <h3 style={{ fontWeight: 900, fontSize: "clamp(1.2rem,2vw,1.5rem)", lineHeight: 1.7, margin: 0 }}>{title}</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 2.1, color: "#3c4a5c", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 56, padding: "32px 36px", border: "1.5px solid #0e1b2c", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div><div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", color: "#5a6b80", marginBottom: 8 }}>制作会社と迷っている方へ</div><p style={{ fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>費用・納期・自由度をひと目で比較できます。</p></div>
            <Link href="/strength" style={{ background: "#0e1b2c", color: "#fff", fontWeight: 700, fontSize: "0.95rem", padding: "16px 36px", display: "inline-flex", alignItems: "center", gap: 10 }}>強みを詳しく見る<span>→</span></Link>
          </div>
        </div>
      </section>

      <section id="works" style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 56 }}>
            <div><span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>03 — WORKS</span><h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 0" }}>制作実績</h2></div>
            <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#5a6b80" }}>※ 守秘義務のある案件はお問い合わせ時に開示します</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "clamp(20px,2.5vw,36px)", alignItems: "start" }}>
            {[
              { m: 96, cat: "CORPORATE", y: "2025", title: "製造業コーポレートサイト リニューアル", body: "問い合わせ数 前年比 2.4倍。検索流入を軸に導線を再設計。" },
              { m: 48, cat: "RECRUIT", y: "2024", title: "建設会社 採用サイト新規制作", body: "若手応募が月0→5件に。社員取材コンテンツを中心に構成。" },
              { m: 0, cat: "LP", y: "2024", title: "D2CブランドLP 制作・広告運用", body: "CVR 1.2%→3.1%。ABテストを重ねてファーストビューを最適化。" },
            ].map((w, i) => (
              <div key={w.title} style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: w.m }}>
                <div style={{ height: 240 }}><ImagePlaceholder label={`実績サムネイル ${i + 1}`} /></div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#5a6b80" }}><span>{w.cat}</span><span>·</span><span>{w.y}</span></div>
                <h3 style={{ fontWeight: 900, fontSize: "1.15rem", margin: 0 }}>{w.title}</h3>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.9, color: "#3c4a5c", margin: 0 }}>{w.body}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 56 }}>
            <Link href="/works" style={{ border: "1.5px solid #0e1b2c", color: "#0e1b2c", fontWeight: 700, fontSize: "0.95rem", padding: "16px 40px", display: "inline-flex", alignItems: "center", gap: 10 }}>実績一覧をもっと見る<span>→</span></Link>
          </div>
        </div>
      </section>

      <section id="price" style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#fff", position: "relative", overflow: "hidden" }}>
        <canvas ref={this.r.price} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>04 — PRICE</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 12px" }}>プラン・料金</h2>
          <p style={{ fontSize: "0.95rem", fontWeight: 500, lineHeight: 2, color: "#3c4a5c", margin: "0 0 40px", maxWidth: "42em" }}>必要な工程を整理し、各工程でどのような作業を行うかを明確にした上で費用を算出します。以下はお見積りの目安となるプラン例——ご予算・制作背景・目的に応じて柔軟にご提案します。</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 1, background: "rgba(14,27,44,0.15)", border: "1px solid rgba(14,27,44,0.15)", marginBottom: 56 }}>
            {[["POINT 1", "月額費用は不要", "サブスク契約・リース契約は行いません。必要なのは初期制作費とサーバー・ドメイン費のみ。"], ["POINT 2", "所有権はお客様に", "サーバー・ドメインはお客様名義でご契約いただき、サイトの著作権・所有権もお客様に帰属します。"], ["POINT 3", "保守・運用は任意", "公開後のサポート契約は任意で、いつでも解約可能。囲い込みは一切ありません。"]].map(([tag, title, body]) => (
              <div key={tag} style={{ background: "#fff", padding: "28px 24px" }}><div style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", letterSpacing: "0.18em", color: "#2f6bff", marginBottom: 12 }}>{tag}</div><h4 style={{ fontWeight: 900, fontSize: "1.05rem", margin: "0 0 10px" }}>{title}</h4><p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "#3c4a5c", margin: 0 }}>{body}</p></div>
            ))}
          </div>

          <div id="compare" style={{ marginBottom: 64, scrollMarginTop: 90 }}>
            <h3 style={{ fontWeight: 900, fontSize: "1.4rem", margin: "0 0 8px" }}>一般的な制作会社との比較</h3>
            <p style={{ fontSize: "0.88rem", fontWeight: 500, color: "#5a6b80", margin: "0 0 24px" }}>同程度の規模のサイトを依頼した場合の目安です。</p>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", border: "1px solid rgba(14,27,44,0.15)" }}>
              <div style={{ padding: "16px 20px" }} />
              <div style={{ padding: "16px 20px", background: "#f4f6f8", fontWeight: 900, fontSize: "0.95rem", borderLeft: "1px solid rgba(14,27,44,0.15)" }}>一般的な制作会社</div>
              <div style={{ padding: "16px 20px", background: "#0e1b2c", color: "#fff", fontWeight: 900, fontSize: "0.95rem", borderLeft: "1px solid rgba(14,27,44,0.15)" }}>TSUKURU</div>
              {[["制作費用", "50万円〜150万円が目安", "5万円〜20万円〜"], ["制作期間", "1〜3ヶ月程度", "最短1週間〜4週間"], ["開発体制", "営業・ディレクター経由の伝言", "現役エンジニアと直接やり取り"], ["カスタマイズ性", "テンプレート・パッケージ内が中心", "要望に合わせた自由な実装"], ["追加費用", "月額運用費・修正費が別途発生しやすい", "月額不要・保守は任意"]].map(([label, agency, us], i) => (
                <React.Fragment key={label}>
                  <div style={{ padding: "18px 20px", fontWeight: 700, fontSize: "0.88rem", borderTop: "1px solid rgba(14,27,44,0.15)", borderBottom: i === 4 ? "1px solid rgba(14,27,44,0.15)" : undefined }}>{label}</div>
                  <div style={{ padding: "18px 20px", fontSize: "0.88rem", color: "#3c4a5c", borderTop: "1px solid rgba(14,27,44,0.15)", borderLeft: "1px solid rgba(14,27,44,0.15)", borderBottom: i === 4 ? "1px solid rgba(14,27,44,0.15)" : undefined }}>{agency}</div>
                  <div style={{ padding: "18px 20px", fontSize: "0.88rem", fontWeight: 700, color: "#2f6bff", borderTop: "1px solid rgba(14,27,44,0.15)", borderLeft: "1px solid rgba(14,27,44,0.15)", borderBottom: i === 4 ? "1px solid rgba(14,27,44,0.15)" : undefined }}>{us}</div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <h3 style={{ fontWeight: 900, fontSize: "1.4rem", margin: "0 0 24px" }}>プラン一覧</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "clamp(20px,2.5vw,32px)", alignItems: "start" }}>
            <div style={{ border: "1.5px solid #0e1b2c", padding: "40px 32px", display: "flex", flexDirection: "column", gap: 18, marginTop: 48 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", letterSpacing: "0.2em", color: "#5a6b80" }}>PLAN 01</div>
              <h3 style={{ fontWeight: 900, fontSize: "1.3rem", margin: 0 }}>Basic</h3>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", lineHeight: 1 }}>¥50,000<span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 700 }}>〜</span></div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#5a6b80" }}>目安納期 〜1週間</div>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.9, color: "#3c4a5c", margin: 0, borderLeft: "2px solid #2f6bff", paddingLeft: 12 }}>最低限の情報発信をまず形にしたい方に。</p>
              <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                {["全6ページ(TOP/ABOUT/会社概要/サービス紹介/実績/お問い合わせ)", "スマホ対応レスポンシブデザイン", "お問い合わせフォーム設置", "基本的なSEO設定"].map((c, i, arr) => (
                  <div key={c} style={{ display: "flex", gap: 10, padding: "10px 0", borderTop: "1px solid rgba(14,27,44,0.12)", borderBottom: i === arr.length - 1 ? "1px solid rgba(14,27,44,0.12)" : undefined, fontSize: "0.85rem", fontWeight: 500 }}><span style={{ color: "#2f6bff", fontWeight: 700 }}>■</span>{c}</div>
                ))}
              </div>
              <Link href="/contact" style={{ border: "1.5px solid #0e1b2c", color: "#0e1b2c", fontWeight: 700, fontSize: "0.95rem", padding: "14px 0", textAlign: "center" }}>相談する →</Link>
            </div>
            <div style={{ background: "#0e1b2c", color: "#fff", padding: "40px 32px", display: "flex", flexDirection: "column", gap: 18, position: "relative" }}>
              <div style={{ position: "absolute", top: 0, right: 0, background: "#2f6bff", color: "#fff", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.14em", padding: "8px 16px" }}>RECOMMENDED</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.55)" }}>PLAN 02</div>
              <h3 style={{ fontWeight: 900, fontSize: "1.3rem", margin: 0 }}>Standard</h3>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", lineHeight: 1 }}>¥100,000<span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 700 }}>〜</span></div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>目安納期 1〜2週間</div>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.9, color: "rgba(255,255,255,0.8)", margin: 0, borderLeft: "2px solid #2f6bff", paddingLeft: 12 }}>機能・ページを追加し、より訴求力のあるサイトに。</p>
              <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                {["Basicの内容+ページ追加(〜10ページ)", "ブログ・お知らせ機能", "アニメーション演出・独自デザイン強化", "SEO・構造化データ強化"].map((c, i, arr) => (
                  <div key={c} style={{ display: "flex", gap: 10, padding: "10px 0", borderTop: "1px solid rgba(255,255,255,0.18)", borderBottom: i === arr.length - 1 ? "1px solid rgba(255,255,255,0.18)" : undefined, fontSize: "0.85rem", fontWeight: 500 }}><span style={{ color: "#2f6bff", fontWeight: 700 }}>■</span>{c}</div>
                ))}
              </div>
              <Link href="/contact" style={{ background: "#2f6bff", color: "#fff", fontWeight: 700, fontSize: "0.95rem", padding: "14px 0", textAlign: "center" }}>相談する →</Link>
            </div>
            <div style={{ border: "1.5px solid #0e1b2c", padding: "40px 32px", display: "flex", flexDirection: "column", gap: 18, marginTop: 48 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", letterSpacing: "0.2em", color: "#5a6b80" }}>PLAN 03</div>
              <h3 style={{ fontWeight: 900, fontSize: "1.3rem", margin: 0 }}>Premium</h3>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", lineHeight: 1 }}>¥200,000<span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 700 }}>〜</span></div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#5a6b80" }}>目安納期 3〜4週間</div>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.9, color: "#3c4a5c", margin: 0, borderLeft: "2px solid #2f6bff", paddingLeft: 12 }}>本格的なブランディング・集客を狙う方に。</p>
              <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                {["フルオーダーメイドデザイン・ページ数無制限", "CMS導入・自社更新対応", "競合調査・SEO設計・取材撮影ディレクション", "公開後1ヶ月の初期サポート込み"].map((c, i, arr) => (
                  <div key={c} style={{ display: "flex", gap: 10, padding: "10px 0", borderTop: "1px solid rgba(14,27,44,0.12)", borderBottom: i === arr.length - 1 ? "1px solid rgba(14,27,44,0.12)" : undefined, fontSize: "0.85rem", fontWeight: 500 }}><span style={{ color: "#2f6bff", fontWeight: 700 }}>■</span>{c}</div>
                ))}
              </div>
              <Link href="/contact" style={{ border: "1.5px solid #0e1b2c", color: "#0e1b2c", fontWeight: 700, fontSize: "0.95rem", padding: "14px 0", textAlign: "center" }}>相談する →</Link>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 32px", marginTop: 28, fontSize: "0.82rem", fontWeight: 500, color: "#5a6b80", lineHeight: 1.9 }}>
            <span>※ 上記はプラン例です。工程ごとの詳細な内訳はお見積り時にご提示します。</span>
            <span>※ お支払いは着手金50%・公開後に残金のお振込となります。</span>
          </div>
        </div>
      </section>

      <section id="flow" style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#f4f6f8" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>05 — FLOW</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 56px" }}>制作の流れ</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0,1fr))", gap: 1, background: "rgba(14,27,44,0.15)", border: "1px solid rgba(14,27,44,0.15)" }}>
            {[["01", "ヒアリング", "目的・課題・予算を整理。相談と見積りは無料です。"], ["02", "調査・設計", "競合・キーワードを調査し、サイトマップと仕様書を作成。"], ["03", "デザイン", "ワイヤーフレームを基盤に、伝わるデザインへ。"], ["04", "実装・検証", "SEO・表示速度・全端末での表示を検証して公開。"], ["05", "運用・改善", "解析レポートと改善提案で、成果までPDCAを回す。"]].map(([num, title, body]) => (
              <div key={num} style={{ background: "#f4f6f8", padding: "28px 20px" }}><div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "#2f6bff", marginBottom: 14 }}>{num}</div><h4 style={{ fontWeight: 900, fontSize: "1rem", margin: "0 0 10px" }}>{title}</h4><p style={{ fontSize: "0.82rem", lineHeight: 1.9, color: "#3c4a5c", margin: 0 }}>{body}</p></div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
            <Link href="/flow" style={{ border: "1.5px solid #0e1b2c", color: "#0e1b2c", fontWeight: 700, fontSize: "0.95rem", padding: "16px 40px", display: "inline-flex", alignItems: "center", gap: 10 }}>流れを詳しく見る<span>→</span></Link>
          </div>
        </div>
      </section>

      <section id="faq" style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>06 — FAQ</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.8rem,3.6vw,2.8rem)", lineHeight: 1.5, margin: "16px 0 48px" }}>よくあるご質問</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[["相談や見積りに費用はかかりますか。", "いずれも無料です。「まだ何も決まっていない」段階でも問題ありません。"], ["Webの知識がなくても依頼できますか。", "はい。ヒアリングの上、必要なものはこちらからご提案します。専門用語は使わずにご説明します。"], ["自分たちで更新できるようにしたいのですが。", "CMS(更新システム)を導入し、操作レクチャーまで行います。既存サイトへの導入も可能です。"], ["他社で制作したサイトの修正・リニューアルも可能ですか。", "可能です。現状の課題を整理した上で、部分改修かリニューアルか最適な形をご提案します。"]].map(([q, a], i, arr) => (
              <div key={q} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 20, padding: "28px 0", borderTop: "1px solid rgba(14,27,44,0.15)", borderBottom: i === arr.length - 1 ? "1px solid rgba(14,27,44,0.15)" : undefined }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#2f6bff" }}>Q.</div>
                <div><p style={{ fontWeight: 700, fontSize: "1.05rem", margin: "0 0 10px" }}>{q}</p><p style={{ fontSize: "0.92rem", lineHeight: 2, color: "#3c4a5c", margin: 0 }}>{a}</p></div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
            <Link href="/faq" style={{ border: "1.5px solid #0e1b2c", color: "#0e1b2c", fontWeight: 700, fontSize: "0.95rem", padding: "16px 40px", display: "inline-flex", alignItems: "center", gap: 10 }}>FAQをもっと見る<span>→</span></Link>
          </div>
        </div>
      </section>

      <section id="contact" style={{ background: "#0e1b2c", color: "#fff", padding: "clamp(80px,12vh,150px) clamp(20px,4vw,56px)", position: "relative", overflow: "hidden" }}>
        <canvas ref={this.r.cta} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -30, right: -20, fontFamily: "var(--font-display)", fontSize: "clamp(5rem,13vw,12rem)", lineHeight: 0.9, color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.12)", userSelect: "none", pointerEvents: "none" }}>CONTACT</div>
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.2em", color: "#2f6bff" }}>07 — CONTACT</span>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem,4.4vw,3.4rem)", lineHeight: 1.5, margin: "20px 0 24px" }}>まずはお気軽に、<br />お問い合わせください。</h2>
          <p style={{ fontSize: "1rem", lineHeight: 2.1, color: "rgba(255,255,255,0.75)", maxWidth: "36em", margin: "0 0 44px" }}>ご相談・お見積りは無料です。現状のサイトの診断だけでも承ります。営業目的のしつこい連絡は一切しません。</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#2f6bff", color: "#fff", fontWeight: 700, fontSize: "1.1rem", padding: "20px 56px", display: "inline-flex", alignItems: "center", gap: 12 }}>無料相談・お見積り<span>→</span></Link>
            <Link href="/price" style={{ border: "1.5px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 700, fontSize: "1.1rem", padding: "20px 44px" }}>料金を見る</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>);
  }
}
