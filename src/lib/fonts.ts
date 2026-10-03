import { Noto_Sans_JP, Anton, Zen_Maru_Gothic, Zen_Kaku_Gothic_Antique, Zen_Kaku_Gothic_New, Lexend_Zetta, League_Spartan, Oswald, Roboto } from "next/font/google";

export const noto = Noto_Sans_JP({ weight: ["400","500","700","900"], subsets: ["latin"], variable: "--font-noto", display: "swap", preload: false });
export const anton = Anton({ weight: ["400"], subsets: ["latin"], variable: "--font-anton", display: "swap" });

/* ---- 以下はサンプルサイト (/samples) 専用。参考サイトが実際に使っている書体に合わせている ---- */
export const zenMaru = Zen_Maru_Gothic({ weight: ["400","500","700","900"], subsets: ["latin"], variable: "--font-maru", display: "swap", preload: false });
export const zenKaku = Zen_Kaku_Gothic_Antique({ weight: ["400","500","700"], subsets: ["latin"], variable: "--font-kaku", display: "swap", preload: false });
export const lexendZetta = Lexend_Zetta({ weight: ["400","700"], subsets: ["latin"], variable: "--font-lexend", display: "swap", preload: false });
export const oswald = Oswald({ weight: ["400","500","600"], subsets: ["latin"], variable: "--font-oswald", display: "swap", preload: false });
export const roboto = Roboto({ weight: ["400","500","700"], subsets: ["latin"], variable: "--font-roboto", display: "swap", preload: false });
export const zenKakuNew = Zen_Kaku_Gothic_New({ weight: ["400","500","700","900"], subsets: ["latin"], variable: "--font-kaku-new", display: "swap", preload: false });
export const leagueSpartan = League_Spartan({ weight: ["400","500","700"], subsets: ["latin"], variable: "--font-spartan", display: "swap", preload: false });

export const fontVariables = [noto, anton, zenMaru, zenKaku, zenKakuNew, lexendZetta, leagueSpartan, oswald, roboto].map((f) => f.variable).join(" ");
