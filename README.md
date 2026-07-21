# TSUKURU — Next.js + TypeScript

ここでデザインした「成果から逆算する、Web制作。」LP（ネイビー×ブルー、Noto Sans JP + Anton、3Dキャンバス演出付き）を、そのままNext.js (App Router) + TypeScriptへ移植したコードベースです。単一ページ構成（Hero/About/Strength/Works/Price/Flow/FAQ/Contact/Footer）をピクセル単位で再現しています。

## セットアップ
```bash
npm install
npm run dev   # http://localhost:3000
```

## 構成
- `src/app/page.tsx` → `src/components/HomeView.tsx`（デザイン全体をそのまま実装。ヘッダー〜フッターまで1コンポーネント）
- `src/components/ImagePlaceholder.tsx`（実績サムネイル等のプレースホルダー）
- `src/lib/fonts.ts`（Noto Sans JP / Anton を next/font/google で読み込み）
- キャンバス背景演出（ヒーローのワイヤーフレーム球体、ノイズレイン、グリッド等）はクラスコンポーネント内でcanvas 2D描画として移植済み。

## 本番化前に
1. 実績サムネイル・デバイスモックアップ画像を実素材へ（`ImagePlaceholder`を置き換え）
2. `mailto:` リンクを実際のフォーム送信に置き換え
3. ロゴ・会社情報を正式なものへ
