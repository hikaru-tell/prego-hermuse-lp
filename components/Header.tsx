"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { href: "#about", label: "コンセプト" },
  { href: "#why", label: "特徴" },
  { href: "#curriculum", label: "カリキュラム" },
  { href: "#pricing", label: "料金" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenu();
    }
    function onResize() {
      if (window.innerWidth > 980) closeMenu();
    }
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [closeMenu]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo" href="#top" aria-label="HER MUSE トップへ">
          HER MUSE
        </a>
        <nav className="nav" aria-label="メインナビゲーション">
          <ul className={`nav-list${open ? " open" : ""}`} id="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            ref={buttonRef}
            className="menu-button"
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-controls="nav-list"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
