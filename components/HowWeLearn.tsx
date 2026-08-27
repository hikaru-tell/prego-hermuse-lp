const STEPS = [
  { no: "01", label: "学ぶ" },
  { no: "02", label: "整理する" },
  { no: "03", label: "話す" },
  { no: "04", label: "試す" },
];

export default function HowWeLearn() {
  return (
    <section className="how-learn section--strong" aria-labelledby="how-learn-title">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">HOW WE LEARN</p>
          <h2 className="section-title jp-heading" id="how-learn-title">
            一人で答えを
            <br className="br-sp" />
            出さない学び方。
          </h2>
        </header>
        <div className="learn-grid">
          {STEPS.map((step) => (
            <article className="learn-step" key={step.no}>
              <span className="learn-step-no">{step.no}</span>
              <h3 className="jp-heading">{step.label}</h3>
            </article>
          ))}
        </div>
        <p className="together-copy heading-serif jp-copy">
          自分のことだからこそ、
          <br />
          一人では見えないことがある。
        </p>
      </div>
    </section>
  );
}
