export default function Work() {
  return (
    <section className="work" aria-labelledby="work-title">
      <div className="wrap work-grid">
        <div>
          <header className="section-head">
            <p className="eyebrow">WORK</p>
            <h2 className="section-title jp-heading" id="work-title">
              私たちは、
              <br className="br-pc" />
              <br className="br-sp" />
              なんのために働いて
              <br className="br-sp" />
              いるんだろう。
            </h2>
          </header>
          <p className="body-copy work-copy jp-copy">
            答えが決まっていなくても、
            <br />
            <span className="no-break">HER MUSE</span>はそこから始められます。
          </p>
        </div>
        <div className="work-stat">
          <div className="work-chart-wrap">
            <div className="work-chart" role="img" aria-label="75.2パーセントを示すドーナツチャート"></div>
          </div>
          <div>
            <strong>
              <span className="work-value">
                75.2<span className="work-unit">%</span>
              </span>
            </strong>
            <p className="body-copy jp-copy">
              「いったい自分はなんのために働いているのだろう」と感じたことがある人
            </p>
            <small className="jp-copy">※doda「はたらく」調査（2024年8月、15,000人対象）より</small>
          </div>
        </div>
      </div>
    </section>
  );
}
