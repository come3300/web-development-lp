import { Noto_Sans_JP, Anton } from "next/font/google";

export const noto = Noto_Sans_JP({ weight: ["400","500","700","900"], subsets: ["latin"], variable: "--font-noto", display: "swap", preload: false });
export const anton = Anton({ weight: ["400"], subsets: ["latin"], variable: "--font-anton", display: "swap" });
export const fontVariables = `${noto.variable} ${anton.variable}`;
