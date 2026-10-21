// Shippori Mincho をページで使う文字だけにサブセット化して fonts/ に保存する。
// フル日本語フォントは1ウェイトあたり数MBあるため、自前でサブセットを持つ。
// コピー（app/page.tsx）を変更したら `npm run fonts:subset` を実行する（prebuild でも自動実行）。
import { mkdir, readFile, writeFile } from "node:fs/promises";

const SOURCES = ["app/page.tsx"];
const WEIGHTS = [400, 500, 600, 700];
const FAMILY = "Shippori Mincho";
const OUT_DIR = "fonts";
// woff2 を返してもらうためにモダンブラウザの UA を名乗る
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

async function collectText() {
  const ascii = Array.from({ length: 0x7f - 0x20 }, (_, i) => String.fromCharCode(0x20 + i)).join("");
  const texts = await Promise.all(SOURCES.map((file) => readFile(file, "utf8")));
  const chars = new Set(ascii + texts.join("").replace(/<[^>]*>/g, ""));
  for (const char of chars) {
    if (/\s/.test(char)) chars.delete(char);
  }
  return [...chars].sort().join("");
}

async function fetchSubset(weight, text) {
  const cssUrl =
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(FAMILY)}:wght@${weight}` +
    `&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(cssUrl, { headers: { "User-Agent": USER_AGENT } })).text();
  const fontUrl = css.match(/src:\s*url\(([^)]+)\)\s*format\('woff2'\)/)?.[1];
  if (!fontUrl) throw new Error(`woff2 URL not found for weight ${weight}`);
  const response = await fetch(fontUrl);
  if (!response.ok) throw new Error(`HTTP ${response.status} for weight ${weight}`);
  return Buffer.from(await response.arrayBuffer());
}

try {
  const text = await collectText();
  await mkdir(OUT_DIR, { recursive: true });
  for (const weight of WEIGHTS) {
    const font = await fetchSubset(weight, text);
    await writeFile(`${OUT_DIR}/shippori-${weight}.woff2`, font);
    console.log(`fonts/shippori-${weight}.woff2 ${(font.length / 1024).toFixed(1)}KB`);
  }
  console.log(`subset: ${text.length} chars`);
} catch (error) {
  // ネットワーク不通でもビルドは止めず、コミット済みのサブセットを使う
  console.warn(`[subset-fonts] skipped, using committed fonts: ${error.message}`);
}
