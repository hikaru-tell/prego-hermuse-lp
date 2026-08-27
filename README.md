# HER MUSE (Next.js)

共感型カレッジ HER MUSE のランディングページ。単一HTML版（`her-muse-template.html`）からNext.js（App Router）へ移行したものです。

## 起動方法

```bash
npm install
npm run dev
```

`http://localhost:3000` で表示されます。環境変数は不要です。

## ビルド方法

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## ディレクトリ構成

```
app/
  layout.tsx      ルートレイアウト、メタデータ、フォント適用
  page.tsx        全セクションを組み立てるトップページ
  globals.css     デザイントークンと全セクションのスタイル
  fonts.ts        next/font/local によるローカルフォント定義
components/       セクション単位のコンポーネント（Header, Hero, Relate, ...）
public/images/her-muse/  画像素材（下記参照）
fonts/            ローカルフォントファイル（woff2）
```

## 使用フォント

- **Zen Kaku Gothic New**（400 / 500 / 700）: 通常の見出し・本文・数値・ボタン・ナビ
- **Noto Serif JP**（500 / 600）: WHERE WE STAND見出し、HOW WE LEARN引用、最終クロージング見出し（この3箇所のみ）

`next/font/local` で `fonts/` 内のwoff2ファイルを直接読み込んでいます（外部フォントCDNへの通信なし）。Interは使用していません。

## 画像素材

`public/images/her-muse/` に、RELATEとWORKの間に配置するエディトリアル・イメージビジュアルを格納しています。

- `editorial-workspace-pc.png` … PC表示用（横長、約16:7）
- `editorial-workspace-sp.png` … SP表示用（縦長、約4:5、PC画像の単純クロップではなく専用構図）

いずれも実在の受講風景・受講生の実績を示すものではなく、ブランドの空気を伝えるための生成イメージです。ページ上にも画像近くに「イメージ」と表記しています。

## 注意事項

- 問い合わせ・体験予約の実URLは未確定のため、対応する導線（ボタン・リンク）は意図的に実装していません。確定後に別途追加してください。
- `#contact` は最終クロージングセクション自身のアンカーであり、外部フォームへのリンクではありません。
