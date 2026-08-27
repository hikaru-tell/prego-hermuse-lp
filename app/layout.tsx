import type { Metadata } from "next";
import { zenKaku, notoSerif } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "HER MUSE｜変わる時代に、変わらない「自分軸」を。",
  description:
    "共感型カレッジ HER MUSE。社会を知り、自分を知り、自分らしい働き方と生き方を形にしていく、女性のための6ヶ月制カレッジです。",
  icons: { icon: "data:," },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${zenKaku.variable} ${notoSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
