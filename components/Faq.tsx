const FAQS: { q: React.ReactNode; a: React.ReactNode }[] = [
  {
    q: "オンラインで受講できますか？",
    a: "はい、全てオンラインで受講いただけます。1コマ約30分なので、すきま時間を使って進められます。",
  },
  {
    q: "やりたいことが決まっていなくても参加できますか？",
    a: (
      <>
        もちろんです。<span className="no-break">HER MUSE</span>
        は、答えが決まっている人のための場所ではありません。今の自分が何を感じ、何を望んでいるのかを整理するところから始まります。
      </>
    ),
  },
  {
    q: "AIやSNSに詳しくなくても参加できますか？",
    a: "問題ありません。AIやSNSは、自分の軸を運ぶための道具として扱っています。詳しさよりも、自分の目的に応じて使えることを大切にしています。",
  },
  {
    q: "学ぶ順番はありますか？",
    a: "はい。社会を知る、自分を知る、伝える、形にするという一本の流れに沿いながら、自分のペースで進めていただけます。",
  },
  {
    q: (
      <>
        仕事をしながら
        <br className="sp-br" />
        受講できますか？
      </>
    ),
    a: "はい。1コマ約30分のオンライン受講なので、仕事を続けながら、すきま時間で進めていただけます。",
  },
  {
    q: (
      <>
        <span className="no-break">HER MUSE</span>ではどのような
        <span className="no-break">サポート</span>がありますか？
      </>
    ),
    a: (
      <>
        <span className="no-break">HER MUSE</span>
        は、動画を見るだけの場所ではありません。問いを持ち、言葉にし、誰かと対話しながら進む場所でありたいと考えています。
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <header className="faq-head">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title jp-heading" id="faq-title">
            よくある質問
          </h2>
        </header>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <details key={i}>
              <summary>
                <span className="faq-mark" aria-hidden="true">
                  Q
                </span>
                <span className="jp-copy faq-question-text">{item.q}</span>
                <span className="faq-toggle" aria-hidden="true"></span>
              </summary>
              <p className="answer body-copy jp-copy">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
