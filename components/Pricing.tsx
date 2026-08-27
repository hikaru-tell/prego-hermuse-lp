export default function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="wrap pricing-layout">
        <header className="pricing-copy">
          <p className="eyebrow">PLAN &amp; PRICE</p>
          <h2 className="section-title jp-heading" id="pricing-title">
            <span className="no-break">6ヶ月間</span>の受講プラン
          </h2>
          <p className="body-copy jp-copy">
            入会金と月額受講料で、<span className="no-break">6ヶ月間</span>受講いただく
            <span className="no-break">プラン</span>です。
          </p>
        </header>
        <div>
          <div className="price-sheet">
            <div className="price-sheet-head">
              <span className="no-break">HER MUSE / 6 MONTHS</span>
              <span>PRICE LIST</span>
            </div>
            <div className="price-row">
              <span>
                <small>入会時</small>入会金
              </span>
              <strong>
                49,800<small>円</small>
              </strong>
            </div>
            <div className="price-row">
              <span>
                <small className="no-break">1〜6ヶ月目</small>本科カリキュラム
              </span>
              <strong>
                9,800<small>円/月</small>
              </strong>
            </div>
            <div className="price-row price-total">
              <span className="no-break">6ヶ月間の総額目安</span>
              <strong>
                108,600<small>円</small>
              </strong>
            </div>
          </div>
          <p className="price-notes jp-copy">
            ※ <span className="no-break">6ヶ月間</span>の総額は、入会金49,800円＋月額9,800円×
            <span className="no-break">6ヶ月</span>の合計です。
          </p>
        </div>
      </div>
    </section>
  );
}
