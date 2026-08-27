const COURSES = [
  { no: "01", title: "社会を知る", body: "世の中の変化を知り、不安を問いに変える。" },
  { no: "02", title: "自分を知る", body: "感性と心身を整え、自分の基準を見つける。" },
  {
    no: "03",
    title: "伝える",
    body: (
      <>
        経験や価値を、
        <br className="sp-br" />
        人に届く形へ変える。
      </>
    ),
  },
  {
    no: "04",
    title: "形にする",
    body: (
      <>
        自分の軸を、
        <br className="sp-br" />
        仕事や生き方へつなげる。
      </>
    ),
  },
];

export default function Curriculum() {
  return (
    <section className="curriculum" id="curriculum" aria-labelledby="curriculum-title">
      <div className="wrap">
        <header className="section-head curriculum-intro">
          <p className="eyebrow">THE HER MUSE ARC</p>
          <h2 className="section-title jp-heading" id="curriculum-title">
            4つの学びを、
            <br className="sp-br" />
            一本の流れで。
          </h2>
        </header>
        <div className="curriculum-grid">
          {COURSES.map((course) => (
            <article className="course" key={course.no}>
              <span className="course-no">{course.no}</span>
              <h3 className="jp-heading">{course.title}</h3>
              <p className="body-copy jp-copy">{course.body}</p>
            </article>
          ))}
        </div>
        <div className="curriculum-meta">
          <p className="jp-copy">
            期間<strong className="no-break">6ヶ月間</strong>
          </p>
          <p className="jp-copy">
            1コマ<strong>約30分</strong>
          </p>
          <p className="jp-copy">
            形式<strong>オンライン</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
