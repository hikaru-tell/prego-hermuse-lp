const LINE_CTA_URL = "#line-entry";

const pageMarkup = String.raw`
<div id="her-muse-reference-body-v2">
  <header class="hmr-site-header">
    <a class="hmr-header-logo" href="#top" aria-label="HER MUSE トップへ"><img src="/her-muse-logo.svg" alt="HER MUSE" width="88" height="63"></a>
    <nav class="hmr-header-nav" aria-label="ページ内ナビゲーション">
      <a href="#program">学びの流れ</a>
      <a href="#features">特徴</a>
      <a href="#support">サポート</a>
      <a href="#price">料金</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a class="hmr-header-cta" href="${LINE_CTA_URL}"><span>LINEで無料相談</span><b aria-hidden="true">→</b></a>
  </header>
  <a class="hmr-floating-cta" href="${LINE_CTA_URL}">
    <span><small>何から始めるか、一緒に整理する</small>LINEで無料相談</span><b aria-hidden="true">→</b>
  </a>
<main id="top" class="hmr-page" data-hmr-page aria-label="HER MUSE 女性のための6ヶ月制オンラインカレッジ">
    <section class="hmr-opening" aria-labelledby="opening-title">
      <div class="hmr-opening-copy">
        <p class="hmr-kicker hmr-opening-kicker">A fixed axis in a moving world.</p>
        <h2 id="opening-title">
          <span class="hmr-copy-pc"><i>変わる時代に、</i><i>変わらない</i><i>「自分軸」を。</i></span>
          <span class="hmr-copy-sp"><i>変わる時代に、</i><i>変わらない</i><i>「自分軸」を。</i></span>
        </h2>
        <p class="hmr-opening-lead">社会と自分を知り、自分の軸を言葉にする6ヶ月。</p>
        <div class="hmr-opening-actions">
          <a class="hmr-cta-button" href="${LINE_CTA_URL}"><span>LINEで無料相談する</span><b aria-hidden="true">→</b></a>
          <small>やりたいことが決まっていなくても大丈夫</small>
        </div>
      </div>
      <div class="hmr-opening-photo" role="img" aria-label="チューリップを抱える女性の写真"></div>
    </section>

    <section class="hmr-work-stat" aria-label="働くことに関する調査結果">
      <p class="hmr-work-stat-label">WHY WE WORK</p>
      <strong>75.2<span>%</span></strong>
      <div>
        <p>
          <span class="hmr-copy-pc"><i>「いったい自分は、</i><i>なんのために働いているのだろう」</i><i>と感じたことがある。</i></span>
          <span class="hmr-copy-sp"><i>「いったい自分は、</i><i>なんのために働いて</i><i>いるのだろう」と</i><i>感じたことがある。</i></span>
        </p>
        <small>出典：doda「なんのために働くのか？」15,000人調査（2024年）</small>
      </div>
    </section>

    <section class="hmr-problem">
      <p class="hmr-section-no">01 / YOUR QUESTION</p>
      <h2><span>転職？</span><span>副業？</span><span>独立？</span></h2>
      <p class="hmr-problem-message">
        <span class="hmr-copy-pc"><i>選択肢を増やすだけでは、</i><i>自分に合う答えは見つからない。</i></span>
        <span class="hmr-copy-sp"><i>選択肢を増やしても、</i><i>自分に合う答えは</i><i>見つからない。</i></span>
      </p>
      <div class="hmr-problem-scenes">
        <p><span><i>今の仕事を</i><i>続ける先の</i></span><strong>未来を<em>描けない</em></strong></p>
        <p><span><i>誰かの選択を</i><i>見るほど</i></span><strong><em>焦って</em>しまう</strong></p>
        <p><span><i>強みや、</i><i>やりたいことを</i></span><strong>言葉に<em>できない</em></strong></p>
        <p><span><i>何から始めるか</i></span><strong><em>整理できない</em></strong></p>
      </div>
    </section>

    <section class="hmr-after">
      <p class="hmr-section-no">02 / AFTER 6 MONTHS</p>
      <h2>
        <span class="hmr-copy-pc"><i>6ヶ月後、</i><i>「正解を探す」から</i><i>「自分の軸で選ぶ」へ。</i></span>
        <span class="hmr-copy-sp"><i>6ヶ月後、</i><i>「正解を探す」から</i><i>「自分の軸で選ぶ」へ。</i></span>
      </h2>
      <div class="hmr-after-stage">
        <article><div class="hmr-after-meta"><b>01</b><small>VALUE</small></div><strong><i>自分が大切にしたい</i><i>基準を言葉にできる</i></strong><div class="hmr-after-card-photo hmr-after-card-photo--01" role="img" aria-label="ノートに考えを書き出す女性"></div></article>
        <article><div class="hmr-after-meta"><b>02</b><small>ACTION</small></div><strong><i>次に試す行動を</i><i>ひとつ決められる</i></strong><div class="hmr-after-card-photo hmr-after-card-photo--02" role="img" aria-label="パソコンで仕事をする女性"></div></article>
        <article><div class="hmr-after-meta"><b>03</b><small>MESSAGE</small></div><strong><i>経験や強みを</i><i>届く価値に変えられる</i></strong><div class="hmr-after-card-photo hmr-after-card-photo--03" role="img" aria-label="対話しながら自分の言葉を見つける女性"></div></article>
      </div>
      <p class="hmr-after-note"><span>「もう十分」を土台に、</span><strong>「もっと良くなれる」自分へ。</strong></p>
    </section>

    <section id="program" class="hmr-program">
      <div class="hmr-program-backdrop"></div>
      <div class="hmr-program-copy">
        <p class="hmr-section-no">03 / THE HER MUSE PROGRAM</p>
        <h2>
          <span class="hmr-copy-pc"><i>社会と自分を知り、</i><i>言葉にして、形にする。</i></span>
          <span class="hmr-copy-sp"><i>社会と自分を知り、</i><i>言葉にして、</i><i>形にする。</i></span>
        </h2>
        <p>外から内へ、そして内から外へ。4つのステップで、自分の問いを具体的な一歩へつなげます。</p>
      </div>
      <div class="hmr-program-route">
        <article><b>01</b><small>MONTH 1–2</small><strong>社会を知る</strong><p>働く意味と時代の変化を知る</p></article>
        <article><b>02</b><small>MONTH 2–3</small><strong>自分を知る</strong><p>感性と心のウェルネスを整える</p></article>
        <article><b>03</b><small>MONTH 4–5</small><strong>伝える</strong><p>経験を届く言葉へ変える</p></article>
        <article><b>04</b><small>MONTH 5–6</small><strong>形にする</strong><p>自分の看板で生きる準備をする</p></article>
      </div>
    </section>

    <section id="features" class="hmr-benefits">
      <div class="hmr-benefits-heading">
        <p class="hmr-section-no">DESIGNED FOR YOUR LIFE</p>
        <h2>
          <span class="hmr-copy-pc"><i>続けられる理由を、</i><i>6つの仕組みに。</i></span>
          <span class="hmr-copy-sp"><i>続けられる理由を、</i><i>6つの仕組みに。</i></span>
        </h2>
      </div>
      <div class="hmr-benefits-grid">
        <article>
          <span class="hmr-benefit-icon"><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="35" r="20"/><path d="M25 7h14M32 15v6M45 19l5-5M32 35l9-7"/></svg></span>
          <strong>1コマ 約30分</strong>
          <p><i>短く学び、</i><i>毎日でも続けやすい</i></p>
        </article>
        <article>
          <span class="hmr-benefit-icon"><svg viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="12" width="44" height="32" rx="3"/><path d="M5 50h54M24 50h16"/></svg></span>
          <strong>オンライン完結</strong>
          <p><i>場所を選ばず、</i><i>生活に合わせて学べる</i></p>
        </article>
        <article>
          <span class="hmr-benefit-icon"><svg viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="9" width="34" height="46" rx="3"/><path d="M20 9v46M28 20h11M28 29h9M45 47l10-10 4 4-10 10-6 2z"/></svg></span>
          <strong>レッスン＋ワーク</strong>
          <p><i>聞いて終わらず、</i><i>自分の言葉に整理する</i></p>
        </article>
        <article>
          <span class="hmr-benefit-icon"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 12h38v28H24L13 50V40H8z"/><path d="M20 23h18M20 30h12M48 24h8v28H39"/></svg></span>
          <strong>対話型セッション</strong>
          <p><i>一人では見えない</i><i>視点に出会える</i></p>
        </article>
        <article>
          <span class="hmr-benefit-icon"><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="26" cy="21" r="10"/><path d="M8 52c2-11 8-17 18-17s16 6 18 17M42 30l5 5 10-12"/></svg></span>
          <strong>メンター伴走</strong>
          <p><i>迷ったときも、</i><i>次の一歩を</i><i>一緒に考える</i></p>
        </article>
        <article>
          <span class="hmr-benefit-icon"><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="23" cy="22" r="9"/><circle cx="44" cy="25" r="7"/><path d="M6 52c2-11 8-17 17-17s15 6 17 17M39 39c8 0 13 4 15 13"/></svg></span>
          <strong>6ヶ月コミュニティ</strong>
          <p><i>同じ問いを持つ人と</i><i>学びを続けられる</i></p>
        </article>
      </div>
    </section>

    <section id="line-entry" class="hmr-line-cta" aria-label="LINE無料相談のご案内">
      <div class="hmr-line-cta-copy">
        <p>FREE GUIDANCE VIA LINE</p>
        <h2>
          <span class="hmr-copy-pc"><i>答えは、まだ決まっていなくて大丈夫。</i><i>まずは今の気持ちを整理しませんか。</i></span>
          <span class="hmr-copy-sp"><i>答えは、まだ</i><i>決まっていなくて大丈夫。</i><i>まずは今の気持ちを</i><i>整理しませんか。</i></span>
        </h2>
        <small>答えを渡すのではなく、あなたの中にある言葉を一緒に見つけます。</small>
      </div>
      <a class="hmr-cta-button hmr-cta-button--light" href="${LINE_CTA_URL}" data-line-url="pending"><span>LINEで無料相談する</span><b aria-hidden="true">→</b></a>
    </section>

    <section class="hmr-learning">
      <div class="hmr-learning-illustration" role="img" aria-label="腕を伸ばす女性の線画"></div>
      <div class="hmr-learning-copy">
        <p class="hmr-section-no">04 / HOW WE LEARN</p>
        <h2>
          <span class="hmr-copy-pc"><i>仕事がある毎日でも、</i><i>学びを生活から</i><i>切り離さない。</i></span>
          <span class="hmr-copy-sp"><i>仕事がある毎日でも、</i><i>学びを生活から</i><i>切り離さない。</i></span>
        </h2>
        <p>長い講義を受け続けるのではなく、短く学び、自分の言葉で整理し、対話の中で小さく試します。</p>
      </div>
      <div class="hmr-learning-bands">
        <article><span>01</span><strong>1コマ 約30分</strong><p>社会を知り、自分の問いを立てる</p></article>
        <article><span>02</span><strong>自分専用のワーク</strong><p>経験と感性を自分の言葉にする</p></article>
        <article><span>03</span><strong>対話とフィードバック</strong><p>気づきを小さな行動として試す</p></article>
      </div>
    </section>

    <section id="support" class="hmr-support">
      <div class="hmr-support-title">
        <p class="hmr-section-no">05 / SUPPORT & PEOPLE</p>
        <h2>
          <span class="hmr-copy-pc"><i>一人で考え込まない。</i><i>そのための伴走があります。</i></span>
          <span class="hmr-copy-sp"><i>一人で考え込まない。</i><i>支える伴走があります。</i></span>
        </h2>
      </div>
      <div class="hmr-support-visual">
        <div class="hmr-support-photo" role="img" aria-label="メンターと受講生が対話している写真"></div>
        <div class="hmr-support-caption">
          <span>MENTORING SESSION</span>
          <strong>対話から、自分の言葉を見つける。</strong>
          <small>答えを急がず、あなたの中にある言葉を一緒に見つける時間</small>
        </div>
      </div>
      <div class="hmr-support-proof">
        <article><b>MENTOR</b><strong><i>答えを渡さず、</i><i>言葉を一緒に見つける</i></strong></article>
        <article><b>COMMUNITY</b><strong><i>同じ問いを持つ人と、</i><i>違う視点を交換する</i></strong></article>
        <article><b>FEEDBACK</b><strong><i>考えたことを、</i><i>行動できる形に整える</i></strong></article>
      </div>
    </section>

    <section class="hmr-voices">
      <div class="hmr-voices-heading">
        <p class="hmr-section-no">06 / REAL STORIES</p>
        <h2>
          <span class="hmr-copy-pc"><i>派手な成功より、</i><i>選び方が変わった本当の話を。</i></span>
          <span class="hmr-copy-sp"><i>派手な成功より、</i><i>選び方が変わった</i><i>本当の話を。</i></span>
        </h2>
      </div>
      <div class="hmr-voice-stage">
        <article class="hmr-voice-side"><div><span>VOICE 01</span></div><small>会社員・30代</small></article>
        <article class="hmr-voice-main"><div><span>VOICE 02</span></div><small>会社員・20代</small><h3><i>「得意なこと」を、初めて</i><i>自分の言葉で</i><i>話せるようになった。</i></h3><p>受講前の迷い、途中で気づいたこと、6ヶ月後に選んだ一歩を具体的に掲載します。</p></article>
        <article class="hmr-voice-side"><div><span>VOICE 03</span></div><small>フリーランス・30代</small></article>
      </div>
    </section>

    <section id="price" class="hmr-price">
      <div class="hmr-price-intro">
        <p class="hmr-section-no">07 / PLAN & PRICE</p>
        <h2><i>6ヶ月の学びを、</i><i>無理なく続ける。</i></h2>
        <div class="hmr-price-facts"><span>6ヶ月</span><span>オンライン</span><span>1コマ約30分</span></div>
      </div>
      <div class="hmr-price-board">
        <p><span>入会金</span><strong>49,800<small>円</small></strong></p>
        <p><span>本科カリキュラム</span><strong>9,800<small>円 / 月</small></strong></p>
        <p><span>6ヶ月総額目安</span><strong>108,600<small>円</small></strong></p>
        <small>入会金49,800円＋月額9,800円×6ヶ月</small>
        <a class="hmr-cta-button hmr-cta-button--price" href="${LINE_CTA_URL}"><span>LINEで無料相談する</span><b aria-hidden="true">→</b></a>
      </div>
    </section>

    <section id="faq" class="hmr-faq">
      <div class="hmr-faq-heading"><p class="hmr-section-no">08 / FAQ</p><h2><i>よくある質問</i></h2></div>
      <div class="hmr-faq-list">
        <p><span>Q01</span>やりたいことが決まっていなくても参加できますか？<b>＋</b></p>
        <p><span>Q02</span>仕事をしながら受講できますか？<b>＋</b></p>
        <p><span>Q03</span>すべてオンラインで受講できますか？<b>＋</b></p>
        <p><span>Q04</span>どのようなサポートがありますか？<b>＋</b></p>
        <p><span>Q05</span>受講料金はいくらですか？<b>＋</b></p>
      </div>
    </section>
  </main>
</div>
`;

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
