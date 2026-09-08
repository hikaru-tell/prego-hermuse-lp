"use client";

import { useEffect } from "react";

export default function VoiceCarouselEnhancer() {
  useEffect(() => {
    const stage = document.querySelector<HTMLElement>("[data-voice-carousel]");
    const previous = document.querySelector<HTMLButtonElement>("[data-voice-prev]");
    const next = document.querySelector<HTMLButtonElement>("[data-voice-next]");
    const counter = document.querySelector<HTMLElement>("[data-voice-current]");

    if (!stage || !previous || !next || !counter) return;

    const originals = Array.from(stage.querySelectorAll<HTMLElement>("[data-voice-card]"));
    if (originals.length !== 3) return;

    originals.forEach((card, index) => {
      card.dataset.voiceIndex = String(index);
    });

    const makeClones = () =>
      originals.map((card) => {
        const clone = card.cloneNode(true) as HTMLElement;
        clone.dataset.voiceClone = "true";
        clone.tabIndex = -1;
        clone.setAttribute("aria-hidden", "true");
        return clone;
      });
    const leadingClones = makeClones();
    const trailingClones = makeClones();
    stage.prepend(...leadingClones);
    stage.append(...trailingClones);

    const cards = Array.from(stage.querySelectorAll<HTMLElement>("[data-voice-card]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let activePosition = 4;
    let animationFrame = 0;

    const cardLeft = (card: HTMLElement) =>
      card.offsetLeft - (stage.clientWidth - card.offsetWidth) / 2;

    const updateActive = (position: number) => {
      activePosition = position;
      cards.forEach((card, index) => {
        card.classList.toggle("is-active", index === position);
      });
      const logicalIndex = Number(cards[position].dataset.voiceIndex ?? 0);
      counter.textContent = String(logicalIndex + 1).padStart(2, "0");
    };

    const centerCard = (position: number, smooth = true) => {
      const boundedPosition = Math.max(0, Math.min(cards.length - 1, position));
      updateActive(boundedPosition);
      stage.scrollTo({
        left: cardLeft(cards[boundedPosition]),
        behavior: smooth && !reducedMotion.matches ? "smooth" : "auto",
      });
    };

    const nearestPosition = () => {
      const center = stage.scrollLeft + stage.clientWidth / 2;
      return cards.reduce((closest, card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const closestCenter = cards[closest].offsetLeft + cards[closest].offsetWidth / 2;
        return Math.abs(cardCenter - center) < Math.abs(closestCenter - center)
          ? index
          : closest;
      }, 0);
    };

    const keepInsideLoop = () => {
      const cycleWidth = cards[6].offsetLeft - cards[3].offsetLeft;
      if (!cycleWidth) return;
      const leftBoundary = cardLeft(cards[1]);
      const rightBoundary = cardLeft(cards[7]);
      if (stage.scrollLeft <= leftBoundary) {
        stage.scrollLeft += cycleWidth;
      } else if (stage.scrollLeft >= rightBoundary) {
        stage.scrollLeft -= cycleWidth;
      }
    };

    const onScroll = () => {
      keepInsideLoop();
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => updateActive(nearestPosition()));
    };

    const onStageClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-voice-card]");
      if (!target) return;
      centerCard(cards.indexOf(target));
    };

    const onStageKeyDown = (event: KeyboardEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-voice-card]");
      if ((event.key === "Enter" || event.key === " ") && target) {
        event.preventDefault();
        centerCard(cards.indexOf(target));
        return;
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        centerCard(activePosition + (event.key === "ArrowLeft" ? -1 : 1));
      }
    };

    const onPrevious = () => centerCard(activePosition - 1);
    const onNext = () => centerCard(activePosition + 1);
    const resizeObserver = new ResizeObserver(() => centerCard(activePosition, false));

    stage.addEventListener("scroll", onScroll, { passive: true });
    stage.addEventListener("click", onStageClick);
    stage.addEventListener("keydown", onStageKeyDown);
    previous.addEventListener("click", onPrevious);
    next.addEventListener("click", onNext);
    resizeObserver.observe(stage);
    centerCard(4, false);

    return () => {
      stage.removeEventListener("scroll", onScroll);
      stage.removeEventListener("click", onStageClick);
      stage.removeEventListener("keydown", onStageKeyDown);
      previous.removeEventListener("click", onPrevious);
      next.removeEventListener("click", onNext);
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationFrame);
      [...leadingClones, ...trailingClones].forEach((clone) => clone.remove());
    };
  }, []);

  return null;
}
