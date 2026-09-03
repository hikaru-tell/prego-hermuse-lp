"use client";

import { useEffect } from "react";

export function MotionEnhancer() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".hmr-page");
    const media = window.matchMedia("(max-width: 767px)");

    const syncLayout = () => {
      page?.classList.toggle("hmr-page-sp", media.matches);
    };

    syncLayout();
    media.addEventListener("change", syncLayout);

    return () => media.removeEventListener("change", syncLayout);
  }, []);

  return null;
}
