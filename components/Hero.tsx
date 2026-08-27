import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/images/hero/hero-background.png"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="hero-image"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="wrap hero-inner">
        <p className="hero-kicker jp-copy">共感型カレッジ「Her Muse」</p>
        <h1 className="jp-heading" id="hero-title">
          変わる時代に、
          <br className="br-pc" />
          <br className="br-sp" />
          変わらない
          <br className="br-sp" />
          <span className="no-break">
            <span className="axis">「自分軸」</span>を。
          </span>
        </h1>
        <div className="hero-lede">
          <p className="body-copy jp-copy">
            社会を知り、自分を知り、
            <br />
            自分らしい働き方と生き方を形にしていく。
          </p>
          <p className="body-copy jp-copy">
            <span className="no-break">HER MUSE</span>は、女性のための
            <br className="sp-br" />
            <span className="no-break">6ヶ月制</span>カレッジです。
          </p>
        </div>
        <div className="hero-actions">
          <a className="button" href="#curriculum">
            6ヶ月の学び方を見る
          </a>
          <a className="hero-about-link" href="#about">
            <span className="no-break">HER MUSE</span>について知る ↓
          </a>
        </div>
      </div>
    </section>
  );
}
