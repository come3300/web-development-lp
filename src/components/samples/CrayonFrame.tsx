/**
 * 参考サイト（seigaku.jp/ushizu）の写真枠は、角丸ではなく手で切ったようなラフな輪郭になっている。
 * 画像素材を足さずに同じ質感を出すため、feTurbulence で作ったノイズで
 * 要素そのものの輪郭を feDisplacementMap でずらしている。
 *
 * scale を上げるほど輪郭は荒れるが、写真の中身も一緒に歪む。
 * 人物の顔が歪まない範囲（8〜10px）に留めて、枠の縁だけがゆらぐように調整している。
 * 大小2種類あるのは、小さい写真に大きい scale をかけると形が崩れるため。
 */
export function CrayonFrame() {
  return (
    <svg className="sm-crayondefs" aria-hidden="true" focusable="false">
      <defs>
        <filter id="sm-crayon" x="-8%" y="-8%" width="116%" height="116%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.011 0.015" numOctaves="4" seed="12" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="10" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="sm-crayon-s" x="-8%" y="-8%" width="116%" height="116%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.022 0.028" numOctaves="3" seed="5" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
