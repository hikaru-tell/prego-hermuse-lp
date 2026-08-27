const FOOTER_LINKS = [
  { href: "#about", label: "コンセプト" },
  { href: "#why", label: "特徴" },
  { href: "#curriculum", label: "カリキュラム" },
  { href: "#pricing", label: "料金" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="logo" href="#top">
              HER MUSE
            </a>
            <p className="jp-copy">共感型カレッジ</p>
          </div>
          <ul className="footer-links">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bottom">
          <span className="no-break">© HER MUSE</span>
        </div>
      </div>
    </footer>
  );
}
