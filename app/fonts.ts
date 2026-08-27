import localFont from "next/font/local";

export const zenKaku = localFont({
  src: [
    { path: "../fonts/zenkaku-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/zenkaku-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/zenkaku-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans-local",
  display: "swap",
});

export const notoSerif = localFont({
  src: [
    { path: "../fonts/serif-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/serif-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-serif-local",
  display: "swap",
});
