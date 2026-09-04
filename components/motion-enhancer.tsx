"use client";

import { useEffect } from "react";

export function MotionEnhancer() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".hmr-page");
    const opening = document.querySelector<HTMLElement>(".hmr-opening");
    const floatingCta = document.querySelector<HTMLElement>(".hmr-floating-cta");
    const media = window.matchMedia("(max-width: 767px)");

    const syncLayout = () => {
      page?.classList.toggle("hmr-page-sp", media.matches);
    };

    syncLayout();
    media.addEventListener("change", syncLayout);

    const openingObserver = opening
      ? new IntersectionObserver(
          ([entry]) => floatingCta?.classList.toggle("is-visible", !entry.isIntersecting),
          { threshold: 0.05 },
        )
      : null;

    if (opening) openingObserver?.observe(opening);

    return () => {
      media.removeEventListener("change", syncLayout);
      openingObserver?.disconnect();
    };
  }, []);

  return null;
}
