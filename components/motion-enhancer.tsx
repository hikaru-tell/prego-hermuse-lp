"use client";

import { useEffect } from "react";

export function MotionEnhancer() {
  useEffect(() => {
    const opening = document.querySelector<HTMLElement>(".hmr-opening");
    const floatingCta = document.querySelector<HTMLElement>(".hmr-floating-cta");
    const sections = document.querySelectorAll<HTMLElement>(".hmr-page > section");

    const openingObserver = opening
      ? new IntersectionObserver(
          ([entry]) => floatingCta?.classList.toggle("is-visible", !entry.isIntersecting),
          { threshold: 0.05 },
        )
      : null;

    if (opening) openingObserver?.observe(opening);

    // 背景写真は画面に近づいたセクションだけ読み込む（globals.css の data-hmr-near 参照）
    const nearObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.hmrNear = "";
          nearObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "800px 0px" },
    );
    sections.forEach((section) => nearObserver.observe(section));

    return () => {
      openingObserver?.disconnect();
      nearObserver.disconnect();
    };
  }, []);

  return null;
}
