import { Anton, DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

export const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// ページ内の文字だけに絞ったサブセット（scripts/subset-fonts.mjs で生成）
export const shipporiMincho = localFont({
  src: [
    { path: "../fonts/shippori-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/shippori-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/shippori-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/shippori-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-shippori",
  display: "swap",
  fallback: ["Yu Mincho", "Hiragino Mincho ProN", "serif"],
});
