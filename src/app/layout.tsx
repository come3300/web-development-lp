import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "WEBKURA｜成果から逆算する、Web制作。",
  description: "現役エンジニアが直接手がける、最短1〜2週間・低コストのホームページ制作サービス WEBKURA。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="ja" className={fontVariables}><body>{children}</body></html>);
}
