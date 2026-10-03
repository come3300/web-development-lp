# サンプルサイトで使用している写真の出所

`/samples` 配下のサンプルサイトに入れている写真の一覧。
差し替えるときは、**必ずライセンスを確認してから**入れること。

## なぜ管理しているか

サンプルとはいえ公開ページなので、素材のライセンスは本番と同じ基準で扱う必要がある。
「サンプルだから」でストックサービスのカンプ（透かし入りプレビュー）を使うのは規約違反になる。
カンプは購入検討のための社内レイアウト確認にしか使えず、公開した時点でアウト。
`public/` に置いただけでもURL直打ちでアクセスできてしまうため、未購入素材はここに置かない。

## 出所

| 種別 | 内容 |
|---|---|
| **Adobe Stock** | ご依頼者から支給いただいた素材。**ライセンス取得済みである前提**で組み込んでいる。透かしのない原寸データ（5000〜9500px）で受領。 |
| **Pexels** | [Pexels License](https://www.pexels.com/license/)。商用利用可・クレジット表示不要。 |

支給ファイルは `public/samples/<slug>/` に置かれていたものを、
用途ごとの幅にリサイズして WebP に変換し、元の jpeg/jpg は削除している（原本はご依頼者側で保管）。

## /samples/atelier（STUDIO KAIRO）

| ファイル | 内容 | 使用箇所 | 元ファイル | 幅 |
|---|---|---|---|---|
| `hero.webp` | 街と緑を見おろす眺め | ヒーローの斜め写真 | pexels-gn0me-38363033 | 3840 |
| `business.webp` | 資料を見ながらの打ち合わせ | OUR BUSINESS | AdobeStock_1695912313 | 2400 |
| `recruit.webp` | オフィスで働く社員 | RECRUIT | AdobeStock_287184590 | 2400 |

### 解像度の決め方（ここを間違えると眠い絵になる）

斜めカットの内側 `.at-cut__in` は `min-width` のぶんだけ横に引き伸ばされる。
つまり**表示上の見た目より大きな画像が必要**で、`sizes` もその倍率で書かないと
next/image が小さい画像を選んでしまう。

必要な内側の幅は「枠の幅 + 枠の高さ × tan(30°)」。いちばん縦長の枠でも145%で足りるので
`min-width:160%` にしてある。ヒーローは画面幅いっぱい×1.6＝2304px、
Retina で 4608px 相当になるため、元画像は3840pxで用意している。

RECRUIT の枠は横に長い（およそ2.1:1）ので、**横長の写真でないと人物が枠から切れる**。
AdobeStock_287184590 は 8840×3372 と枠の比率に近く、上下を切らずに収まる。

## /samples/minamoto（株式会社ミナモト）

| ファイル | 内容 | 使用箇所 | 元ファイル |
|---|---|---|---|
| `mv1.webp` | 夕暮れの商店街 | ファーストビュー | Unsplash `photo-1528360983277-13d401cdc186` |
| `mv2.webp` | ごはんと味噌汁 | ファーストビュー／ブランド | Unsplash `photo-1516684732162-798a0062be99` |
| `mv3.webp` | 店先の野菜 | ファーストビュー | Unsplash `photo-1471193945509-9ad0617afabf` |
| `mv4.webp` | 移動販売車 | ファーストビュー | Unsplash `photo-1565123409695-7b5ef63a2efb` |
| `about.webp` | 食卓の料理 | 私たちについて | Unsplash `photo-1504674900247-0877df9cc836` |
| `company.webp` | 見上げた高層ビル群 | 会社概要 | Unsplash `photo-1486406146926-c627a92ad1ab` |
| `message.webp` | 代表のポートレート | 代表メッセージ | AdobeStock_374024806 |
| `member.webp` | 打ち合わせをする社員 | メンバー | AdobeStock_1695912313 |
| `news.webp` | 会議室 | お知らせ | Unsplash `photo-1517502884422-41eaead166d4` |
| `recruit.webp` | オフィスのラウンジ | 採用情報 | Unsplash `photo-1524758631624-e2822e304c36` |
| `sales.webp` | オフィスで働く社員 | 読みもの | AdobeStock_287184590 |
| `brand1.webp` | 湯に沈むだしパック | 事業内容 | Unsplash `photo-1576092768241-dec231879fc3` |
| `work1.webp` | 厨房 | 実績1 | Unsplash `photo-1556909212-d5b604d0c90d` |
| `work2.webp` | 商品設計を詰める作業 | 実績2 | pexels-artempodrez-6779341 |
| `work3.webp` | 魚の群れ | 実績3 | Unsplash `photo-1544551763-46a013bb70d5` |

- ブランド『ひとしずく』のセクションは写真3枚を並べていたが、角丸の四角1枚（`mv2.webp`）に絞った。
- 事業内容セクションは人物写真だと本文（乾物・調味料の卸売）と噛み合わないため `brand1.webp` を使う。
- `work3.webp` は原版にダイバーが写り込んでいて食品卸の実績としては浮くため、
  魚群だけになるよう左側 630×430 に切り出してある。

## /samples/morinoen（かぜのおか こどもの森）

| ファイル | 内容 | 元ファイル |
|---|---|---|
| `1.webp` | おやつの時間 | pexels-naomi-shi-374023-1001914 |
| `2.webp` | 園庭であそぶこどもたち | pexels-liuuu-_61-2383408-35399255 |
| `3.webp` | 散歩に出かける後ろ姿 | AdobeStock_432981014 |
| `4.webp` | トンネルをくぐってあそぶ | pexels-kindelmedia-7105540 |
| `5.webp` | 園庭の芝生で過ごす | AdobeStock_353996406 |
| `7.webp` | シャボン玉であそぶ | AdobeStock_285411823 |
| `8.webp` | 園舎のかげからのぞく | pexels-minan1398-1485260 |

ファーストビューには `7.webp`（大）と `4.webp`（小）の2枚を重ねて置いている。

※ `6.webp` は欠番（ページ側から参照していない）。

## /samples/hidamari（ひだまり幼稚園）

morinoen と並べたときに同じ写真ばかりにならないよう、絵柄を振り分けている。
`1 / 2 / 5 / 6` は hidamari だけ、`3 / 4 / 7` は morinoen と共通。

| ファイル | 内容 | 元ファイル |
|---|---|---|
| `1.webp` | 保育室で並んで座るこどもたち | AdobeStock_377213637 |
| `2.webp` | シャボン玉であそぶ | AdobeStock_285411823 |
| `3.webp` | おやつの時間 | pexels-naomi-shi-374023-1001914 |
| `4.webp` | こどもの笑顔（顔のアップ） | pexels-kindelmedia-7105536 |
| `5.webp` | 散歩に出かける | pexels-natalie-voitovich-1420612136-26595641 |
| `6.webp` | 園舎と園庭 | AdobeStock_143397428 |
| `7.webp` | トンネルをくぐってあそぶ | pexels-kindelmedia-7105540 |

顔のアップは丸く抜く枠（`hd-ph--round`）に、横長の写真はファーストビューや施設紹介にと、
**枠の形に合わせて割り当てている**。縦横比が合わない写真を入れると顔や主題が切れる。

## /samples/kotori（こどもえん ことり）

写真の支給がないため、色面のプレースホルダー（`kt-ph--g`）のまま。

## 未購入カンプの退避場所

`reference/{atelier,morinoen,hidamari,minamoto}-adobestock-comps/` に、
以前置かれていた Adobe Stock のカンプ画像（透かし入り）を退避している。
**未購入のため公開不可。** 現在サイトからは参照していない。

## 一覧サムネイルについて

`public/samples/{slug}-pc.webp` / `{slug}-sp.webp` はサンプルサイト本体を撮ったスクリーンショット。
写真を差し替えたら**必ず撮り直す**こと。手順は `scripts/capture-sample-thumbs.mjs` の冒頭コメント参照。

なお Next.js の画像最適化キャッシュに旧版が残り、差し替えても表示が変わらないことがある。
その場合は `.next/cache/images` を消してから撮り直す。

## 写真枠の手描き加工について

参考サイト（seigaku.jp/ushizu）の写真は角丸ではなく、手で切ったようなラフな輪郭になっている。
マスク用の画像素材を持ち込まずに同じ質感を出すため、`src/components/samples/CrayonFrame.tsx` で
`feTurbulence`＋`feDisplacementMap` のSVGフィルタを定義し、枠のCSSから `filter:url(#sm-crayon)` で呼んでいる。

適用範囲：

| サンプル | 適用先 |
|---|---|
| morinoen | すべての写真枠（`.mo-ph`） |
| hidamari | 写真と文章が横に並ぶ枠だけ（ファーストビュー・THOUGHTS・DAYS）。施設紹介の全幅1枚は角丸のまま |

**注意点**：`filter` は同じ要素に2つ書けない。morinoen のスクロール表示は
`filter:blur()` でフェードインしていたため、そのままだと手描きフィルタを打ち消してしまう。
`:not(.mo-ph)` でぼかしの対象から写真枠を外している。

displacement の `scale` を上げるほど輪郭は荒れるが、**写真の中身も一緒に歪む**。
顔が歪まない範囲（8〜10px）に留めること。
