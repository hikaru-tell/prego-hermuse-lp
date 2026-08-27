export default function World() {
  return (
    <section className="world" aria-labelledby="world-title">
      <div className="wrap">
        <header className="section-head section-head--center">
          <p className="eyebrow">THE WORLD AROUND US</p>
          <h2 className="section-title jp-heading" id="world-title">
            選択肢が増えた
            <br className="sp-br" />
            時代だから、
            <br />
            自分の基準が
            <br className="sp-br" />
            必要になった。
          </h2>
        </header>
        <div className="world-list">
          <article className="world-item">
            <span className="world-number" aria-hidden="true">
              01
            </span>
            <h3>SNS NATIVE</h3>
            <p className="body-copy jp-copy">
              常に誰かの生活や
              <br />
              価値観が流れてくる。
            </p>
          </article>
          <article className="world-item">
            <span className="world-number" aria-hidden="true">
              02
            </span>
            <h3>DIGITAL LOOKISM</h3>
            <p className="body-copy jp-copy">見た目や生き方の基準が、日々更新される。</p>
          </article>
          <article className="world-item">
            <span className="world-number" aria-hidden="true">
              03
            </span>
            <h3>AGEISM</h3>
            <p className="body-copy jp-copy">
              「もう遅いかもしれない」
              <br className="br-tablet br-sp-360" />
              という外側の基準。
            </p>
          </article>
        </div>
        <p className="world-closing jp-copy">外を知ったうえで、最後の判断を自分に戻す。</p>
      </div>
    </section>
  );
}
