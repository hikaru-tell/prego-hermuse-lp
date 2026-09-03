import type { Metadata, Viewport } from "next";
import { MotionEnhancer } from "@/components/motion-enhancer";
import { zenKaku, notoSerif } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "HER MUSE | 女性のための6ヶ月制オンラインカレッジ",
  description:
    "何か変えたい。でも、何を選べばいいか分からない。社会と自分を知り、次の一歩を自分で決めるための、女性のための6ヶ月制オンラインカレッジ。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3efe8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${zenKaku.variable} ${notoSerif.variable}`}>
      <body>
        <MotionEnhancer />
        {children}
      </body>
    </html>
  );
}
