import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** サンプルの上部に置く帯。ここだけがWEBKURA本体との接点になる */
export function SampleBar({ name, kind }: { name: string; kind: string }) {
  return (
    <div className="sm-bar">
      <div className="sm-bar__l">
        <span className="sm-bar__badge"><span />WEBKURA SAMPLE</span>
        <p className="sm-bar__txt">
          これは制作イメージをご覧いただくための<b>架空の{kind}</b>「{name}」のサンプルサイトです。
        </p>
      </div>
      <div className="sm-bar__r">
        <Link href="/samples" className="sm-bar__back">← 作成例一覧</Link>
        <Link href="/contact" className="sm-bar__cta">この雰囲気で相談する<ArrowRight size={14} /></Link>
      </div>
    </div>
  );
}

/** サンプルの末尾。デモの世界観から現実（WEBKURA）へ戻す */
export function SampleFoot({ note }: { note: string }) {
  return (
    <div className="sm-foot">
      <div className="sm-foot__in">
        <div>
          <p className="sm-foot__t">ここまでがサンプルサイトです。</p>
          <p>{note}</p>
        </div>
        <div className="sm-foot__btns">
          <Link href="/contact" className="sm-foot__btn">お問い合わせはこちら<ArrowRight size={16} /></Link>
          <Link href="/samples" className="sm-foot__link">ほかの作成例を見る</Link>
        </div>
      </div>
    </div>
  );
}
