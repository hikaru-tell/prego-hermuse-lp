import type { Metadata, Viewport } from "next";
import { MotionEnhancer } from "@/components/motion-enhancer";
import { anton, dmSans, playfairDisplay, shipporiMincho } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "HER MUSE | 女性のための6ヶ月制オンラインカレッジ",
  description:
    "何か変えたい。でも、何を選べばいいか分からない。社会と自分を知り、次の一歩を自分で決めるための、女性のための6ヶ月制オンラインカレッジ。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f5ef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${anton.variable} ${dmSans.variable} ${playfairDisplay.variable} ${shipporiMincho.variable}`}
    >
      <body>
        <MotionEnhancer />
        {children}
      </body>
    </html>
  );
}
