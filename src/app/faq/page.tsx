import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "よくあるご質問｜TSUKURU",
  description: "料金・制作・契約や運用について、TSUKURUへよくいただくご質問と回答をカテゴリ別にまとめました。",
};

const CATEGORIES: { name: string; items: [string, string][] }[] = [
  {
    name: "料金について",
    items: [
      ["相談や見積りに費用はかかりますか。", "いずれも無料です。「まだ何も決まっていない」段階でも問題ありません。"],
      ["見積り後に追加費用が発生することはありますか。", "工程開始後に大きな仕様変更がない限り、追加費用は発生しません。追加が必要な場合も事前に金額をご提示し、ご了承の上で進めます。"],
      ["分割払いは可能ですか。", "着手金50%・公開後残金50%の2回払いを基本としていますが、ご事情に応じて分割回数のご相談も可能です。"],
      ["サーバー・ドメイン費用はどのくらいかかりますか。", "規模にもよりますが、年間1万円〜2万円程度が目安です。ご契約はお客様名義で行っていただきます。"],
    ],
  },
  {
    name: "制作について",
    items: [
      ["Webの知識がなくても依頼できますか。", "はい。ヒアリングの上、必要なものはこちらからご提案します。専門用語は使わずにご説明します。"],
      ["素材(写真・文章)がなくても依頼できますか。", "可能です。ヒアリング内容をもとに構成案・原稿案をこちらでご用意し、ご確認いただく形で進められます。"],
      ["デザインの修正は何回までお願いできますか。", "各工程で1〜2回のフィードバック反映を想定していますが、大幅な方向転換でない限り柔軟に対応します。"],
      ["他社で制作したサイトの修正・リニューアルも可能ですか。", "可能です。現状の課題を整理した上で、部分改修かリニューアルか最適な形をご提案します。"],
      ["スマホ・タブレット表示にも対応していますか。", "はい。すべてのプランでスマホ・タブレットを含むレスポンシブデザインに対応しています。"],
    ],
  },
  {
    name: "契約・運用について",
    items: [
      ["自分たちで更新できるようにしたいのですが。", "CMS(更新システム)を導入し、操作レクチャーまで行います。既存サイトへの導入も可能です。"],
      ["保守契約は必須ですか。", "必須ではありません。保守契約なしでも公開・運用は可能で、必要になった際にいつでもご相談いただけます。"],
      ["サイトの著作権・所有権はどうなりますか。", "サーバー・ドメインはお客様名義でご契約いただき、サイトの著作権・所有権もお客様に帰属します。"],
      ["納品データはもらえますか。", "はい。ソースコード・デザインデータなど、制作物一式をお渡しします。"],
    ],
  },
  {
    name: "SEO・その他について",
    items: [
      ["SEO対策はしてもらえますか。", "基本的なSEO設定は全プランに含まれます。より本格的な対策はStandard以上のプランでキーワード調査・構造化データ対応まで行います。"],
      ["遠方でも依頼できますか。", "全国どこからでもオンラインで完結してご依頼いただけます。打ち合わせはビデオ通話・チャットが中心です。"],
    ],
  },
];

export default function FaqPage() {
  return (
    <main style={{ background: "#f4f6f8", color: "#0e1b2c", overflowX: "hidden" }}>
      <Header />

      <PageHero
        eyebrow="FAQ"
        crumb="FAQ"
        watermark="FAQ"
        title="よくあるご質問"
        lead="料金・制作・契約や運用について、よくいただくご質問をカテゴリ別にまとめました。気になる項目をタップして回答をご確認ください。"
      />

      <section style={{ padding: "clamp(70px,11vh,130px) clamp(20px,4vw,56px)", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <FaqAccordion categories={CATEGORIES} />
        </div>
      </section>

      <ContactCta />
      <Footer />
    </main>
  );
}
