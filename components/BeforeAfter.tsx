const ROWS: { before: React.ReactNode; after: React.ReactNode }[] = [
  { before: "何かしないといけない", after: "自分はこれをやる" },
  { before: "誰かや世の中が基準", after: "最後の判断を自分に戻せる" },
  {
    before: "自分には何かが足りない",
    after: (
      <>
        自分はもう十分。
        <br className="sp-br" />
        そのうえで伸ばせる
      </>
    ),
  },
];

export default function BeforeAfter() {
  return (
    <section className="before-after" aria-labelledby="before-after-title">
      <div className="wrap">
        <header className="section-head section-head--center">
          <p className="eyebrow">BEFORE / AFTER</p>
          <h2 className="section-title jp-heading" id="before-after-title">
            変わるのは、
            <br />
            スキルの数だけ
            <br className="sp-br" />
            ではない。
          </h2>
        </header>
        <div className="ba-flow">
          {ROWS.map((row, i) => (
            <div className="ba-row" key={i}>
              <p className="ba-before body-copy jp-copy">{row.before}</p>
              <span className="ba-arrow" aria-hidden="true"></span>
              <p className="ba-after body-copy jp-copy">{row.after}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
