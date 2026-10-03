/**
 * /samples 一覧に出しているサムネイル（public/samples/*.webp）を撮り直すスクリプト。
 * サンプルサイト本体を直してサムネイルとズレたときに実行する。
 *
 * 使い方:
 *   1) npm run dev  … を別ターミナルで起動しておく（http://localhost:3000）
 *   2) npm i -D playwright && npx playwright install chromium   ※初回のみ
 *   3) node scripts/capture-sample-thumbs.mjs
 *   4) cwebp で webp に変換（Homebrew: brew install webp）
 *        for s in atelier morinoen hidamari kotori minamoto; do
 *          cwebp -q 80 -resize 1440 0 .tmp-thumbs/$s-pc.png -o public/samples/$s-pc.webp
 *          cwebp -q 80 -resize 400  0 .tmp-thumbs/$s-sp.png -o public/samples/$s-sp.webp
 *        done
 *   5) PC画像は高さが変わるので、src/app/samples/page.tsx の shot: { w, h } を実寸に直す
 *      （このスクリプトが最後に出力する一覧をそのまま貼れる）
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const OUT = ".tmp-thumbs";
const BASE = process.env.BASE_URL ?? "http://localhost:3000";

/** slug と、ファーストビューの下端を測るための目印 */
const TARGETS = [
  ["atelier", ".at-hero"],
  ["morinoen", ".mo-hero"],
  ["hidamari", ".hd-mv"],
  ["kotori", ".kt-mv"],
  ["minamoto", ".mi-mv"],
];

const PC = { width: 1440, height: 1100 };
const SP = { width: 390, height: 844 };

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
const sizes = [];

for (const [slug, marker] of TARGETS) {
  // PC：ファーストビューの下端でぴったり切る（次のセクションの白場を写さない）
  {
    const page = await browser.newPage({ viewport: PC, deviceScaleFactor: 2 });
    await page.goto(`${BASE}/samples/${slug}`, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForSelector(marker, { timeout: 15000 });
    await page.addStyleTag({ content: ".sm-bar{display:none !important}" }); // WEBKURAの帯は写さない
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(2800);
    const bottom = await page.evaluate((sel) => document.querySelector(sel)?.getBoundingClientRect().bottom ?? 0, marker);
    const height = Math.min(PC.height, Math.max(Math.round(PC.width * 0.46), Math.round(bottom)));
    await page.screenshot({ path: `${OUT}/${slug}-pc.png`, clip: { x: 0, y: 0, width: PC.width, height } });
    sizes.push(`  ${slug}: shot: { w: ${PC.width}, h: ${height} },`);
    await page.close();
  }
  // SP：端末の形を揃えたいので切らず、全機種同じ比率で撮る
  {
    const page = await browser.newPage({ viewport: SP, deviceScaleFactor: 2 });
    await page.goto(`${BASE}/samples/${slug}`, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForSelector(marker, { timeout: 15000 });
    await page.addStyleTag({ content: ".sm-bar{display:none !important}" });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(2800);
    await page.screenshot({ path: `${OUT}/${slug}-sp.png` });
    await page.close();
  }
  console.log("captured", slug);
}

await browser.close();
console.log("\nsrc/app/samples/page.tsx の shot を以下に更新してください:");
console.log(sizes.join("\n"));
