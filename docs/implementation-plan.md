# 実装計画：お問い合わせ機能 / 投稿機能

## 現状整理

- お問い合わせフォーム（[ContactForm.tsx](../src/components/ContactForm.tsx)）は `mailto:` リンクを開くだけのクライアント処理のみ。サーバー側の送受信・保存は未実装で、メールクライアント未設定の端末では機能しない。送信記録も残らず、スパム対策もない。
- 投稿機能（ブログ/お知らせ）は未実装。`/works` は静的な実績一覧コンポーネント（[WorksGrid.tsx](../src/components/WorksGrid.tsx)）のみで、記事の追加・編集の仕組みはない。料金プランには「ブログ・お知らせ機能」という記載があり、これを見据えた設計にする。

---

## 1. お問い合わせ機能

### フェーズ1（MVP・すぐ実装可能）

- `src/app/api/contact/route.ts` を新設し、POSTを受けるAPI Routeを追加
- バリデーションに `zod` を追加（name/email/message必須、email形式チェック）
- メール送信は `resend`（Vercel系プロジェクトとの親和性が高く、SDKもシンプル）を採用し、
  - 管理者宛の通知メール
  - 送信者への自動返信（任意）
  を送る
- `ContactForm.tsx` の `handleSubmit` を `fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })` に置き換え、送信中/成功/失敗のUI状態を追加
- スパム対策として非表示のハニーポット入力欄を1つ追加（コストゼロで効果あり）
- 環境変数 `RESEND_API_KEY` / `CONTACT_TO_EMAIL` を `.env.local` に追加（`.gitignore` 対象）

### フェーズ2（運用しながら強化）

- IPベースの簡易レート制限（Vercel Edge Config / Upstash Redis、または単純なメモリキャッシュ）
- スパムが増えてきたら Cloudflare Turnstile などの軽量CAPTCHAを追加

### フェーズ3（必要であれば）

- 問い合わせ内容をDB（Supabase/Vercel Postgresなど）やスプレッドシートにも保存し、簡易CRM的に一覧管理できるようにする（最初から作り込まず、必要になったら追加でよい範囲）

---

## 2. 投稿機能（ブログ・お知らせ）

「一旦コードベースで、ゆくゆくはCMSで管理」という要件のため、**データ取得部分を抽象化した薄いレイヤーを最初から用意**し、フェーズ2でCMSに差し替えても画面側のコードは変えずに済む設計にする。

### 設計の要：`src/lib/posts.ts`

```ts
getAllPosts(): Post[]
getPostBySlug(slug: string): Post | null
getPostSlugs(): string[]
```

ページ・コンポーネントは常にこの関数経由でデータを取得し、Markdownファイルを直接読みにいったりしない。中身をCMS API呼び出しに差し替えるだけで移行完了、という状態を目指す。

### フェーズ1：コードベース（Markdown）

- 記事本体：`content/posts/*.md`（frontmatterに `title / slug / date / category / excerpt / thumbnail`）
- パース：`gray-matter`（frontmatter）＋ `remark` + `remark-html`（本文をHTML化。将来的にReactコンポーネントを埋め込みたければMDX/`next-mdx-remote`に変更可）
- ルーティング：
  - `src/app/blog/page.tsx` — 一覧（`WorksGrid` と同様にカテゴリフィルタ付きグリッド、静的生成）
  - `src/app/blog/[slug]/page.tsx` — 詳細（`generateStaticParams` で全記事を事前生成、`generateMetadata` でSEO対応）
- `Header.tsx` にナビ追加、`src/app/sitemap.ts` を新設して記事URLもサイトマップに含める（SEO目的）
- 全記事がGit管理下＝更新はコミット＆デプロイで反映（サーバー不要、運用コスト最小）

### フェーズ2：CMS移行

- 候補：**microCMS**（日本製・日本語UIで非エンジニアでも運用しやすく、この規模のコーポレートサイトでの採用例が多い）を第一候補、代替として Contentful / Sanity / WordPress(headless) も検討可
- `lib/posts.ts` の中身だけをCMS APIフェッチに差し替え（フロント側は無改修）
- データモデルをMarkdown frontmatterと揃えておく（title/slug/date/category/thumbnail/body）ことで移行時のマッピングを最小化
- ISR（`export const revalidate = 60` など）に変更し、CMS側で公開してもフルデプロイ不要に
- CMSのWebhookから叩く `src/app/api/revalidate/route.ts` を追加し、公開即時反映も可能に

---

## 追加が必要な依存パッケージ

```
zod, resend                        # お問い合わせ
gray-matter, remark, remark-html   # 投稿機能（フェーズ1）
```

## 優先順位の提案

1. お問い合わせ機能フェーズ1（現状の `mailto` は壊れやすいためリスクが高い）
2. 投稿機能フェーズ1（コードベース、Markdown）
3. 運用しながらスパム対策・CMS移行を検討

---

## 実装状況（フェーズ1・実装済み）

### お問い合わせ機能

- [src/lib/contact-schema.ts](../src/lib/contact-schema.ts) — zodによる入力バリデーション定義（ハニーポット項目含む）
- [src/app/api/contact/route.ts](../src/app/api/contact/route.ts) — POSTを受けてResend経由でメール送信するAPI Route。ハニーポットに値が入っている場合は送信をスキップし`{ ok: true }`を返す（ボットに気づかれないようにするため）
- [src/components/ContactForm.tsx](../src/components/ContactForm.tsx) — `mailto:` を廃止し、`fetch("/api/contact")` を呼ぶ方式に変更。送信中/成功/失敗の状態表示、非表示のハニーポット欄を追加
- [.env.local.example](../.env.local.example) — 必要な環境変数のテンプレート（値は空、コミット対象）

### 投稿機能（ブログ・お知らせ）

- [src/lib/posts.ts](../src/lib/posts.ts) — `getAllPosts` / `getPostBySlug` / `getPostSlugs` のデータアクセス層。フェーズ2でCMSに切り替える際はこのファイルの中身だけを差し替える想定
- [content/posts/](../content/posts/) — Markdown記事のサンプルを3本配置（お知らせ2本・SEOブログ1本）。新規記事はこのディレクトリに `.md` を追加するだけで公開される
- [src/app/blog/page.tsx](../src/app/blog/page.tsx) — 一覧ページ（静的生成）
- [src/app/blog/[slug]/page.tsx](../src/app/blog/[slug]/page.tsx) — 詳細ページ（`generateStaticParams`で全記事を事前生成）
- [src/components/Header.tsx](../src/components/Header.tsx) — ナビに「ブログ」を追加
- [src/app/sitemap.ts](../src/app/sitemap.ts) — 静的ページ＋全記事URLを含むsitemap.xmlを自動生成
- [src/app/globals.css](../src/app/globals.css) — 記事本文（`.post-body`）の見出し・リストの最低限のスタイル

追加した依存パッケージ: `zod` `resend` `gray-matter` `remark` `remark-html`（いずれも `npm install` 済み）。

`npx tsc --noEmit` と `npm run build` はどちらも成功済み。ローカルでAPIの正常系・異常系・ハニーポット動作も確認済み。

---

## 手動設定が必要な項目（要対応）

コード側の実装はフェーズ1の範囲で完了していますが、以下は管理画面での操作や本番環境の情報が必要なため、実際にメールが届く状態にするには手動対応が必要です。

### 1. Resendアカウントの作成とAPIキー発行

1. https://resend.com でアカウントを作成する
2. ダッシュボードの「API Keys」から新しいAPIキーを発行する（例: `re_xxxxxxxx`）
3. このキーは一度しか表示されないので、発行時に控えておく

### 2. 送信元ドメインの認証（DNS設定）

Resendはデフォルトの `onboarding@resend.dev` からもテスト送信できますが、実運用では自社ドメイン（例: `tsukuru-web.com`）から送信できるようにする必要があります。

1. Resendダッシュボードの「Domains」で送信元に使いたいドメインを追加する
2. 表示されるSPF・DKIM用のDNSレコード（TXT/CNAME）を、ドメインを管理しているサービス（お名前.com、Cloudflare、Vercelドメイン管理など）に追加する
3. DNS反映後、Resend側で「Verified」になっていることを確認する
4. 認証済みドメインのアドレス（例: `info@tsukuru-web.com`）を後述の `CONTACT_FROM_EMAIL` に設定する

ドメイン認証が済むまでは、`CONTACT_FROM_EMAIL` を `onboarding@resend.dev` にしておけばテスト送信は可能です（送信先はResendアカウント登録時のメールアドレスに限定される点に注意）。

### 3. 環境変数の設定（ローカル）

プロジェクトルートに `.env.local` を作成し（`.env.local.example` をコピーして使うと早い）、以下を埋める。

```
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=（問い合わせを受け取りたい実際のメールアドレス）
CONTACT_FROM_EMAIL=（Resendで認証済みの送信元アドレス。未認証ならonboarding@resend.dev）
NEXT_PUBLIC_SITE_URL=https://（本番で使う予定のドメイン）
```

`.env.local` は `.gitignore` 対象なのでコミットされません。設定後、開発サーバーを再起動してください。

### 4. 環境変数の設定（本番・Vercelなどにデプロイする場合）

デプロイ先のプロジェクト設定にも同じ4つの環境変数を登録する必要があります（Vercelの場合: プロジェクト → Settings → Environment Variables）。ここを忘れると本番でお問い合わせフォームが「現在ご利用いただけません」エラーになります。

### 5. 動作確認

1. 本番相当の環境で実際にフォームから送信してみて、`CONTACT_TO_EMAIL` 宛にメールが届くか確認する
2. 迷惑メールフォルダに入っていないかも確認する（ドメイン認証が済んでいれば届きやすくなる）
3. 返信は `replyTo` に送信者のメールアドレスを設定しているため、届いたメールにそのまま返信すれば送信者に届く

### 6. 記事の追加方法（投稿機能）

CMSを導入するまでは、`content/posts/` に以下の形式でMarkdownファイルを追加するだけで記事が公開されます。ファイル名がそのままURL(`/blog/ファイル名`)になるため、公開したいURLに合わせて命名してください。

```markdown
---
title: "記事タイトル"
date: "2026-08-01"
category: "お知らせ"
excerpt: "一覧ページに表示される要約文"
---

本文をMarkdownで記述します。
```

追加後は通常のコミット＆デプロイで公開されます（サーバーの再起動やDB操作は不要）。

