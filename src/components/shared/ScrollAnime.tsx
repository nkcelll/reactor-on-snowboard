import { useEffect } from "react";

export default function useSmoothHorizontalScroll(ref: React.RefObject<HTMLElement>, speed = 2, ease = 0.03) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let targetScrollLeft = container.scrollLeft;
    let currentScrollLeft = container.scrollLeft;
    let isAnimating = false;

    function animate() {
      const delta = targetScrollLeft - currentScrollLeft;

      currentScrollLeft += delta * ease;
      container.scrollLeft = currentScrollLeft;

      if (Math.abs(delta) > 0.5) {
        requestAnimationFrame(animate);
      } else {
        container.scrollLeft = targetScrollLeft;
        isAnimating = false;
      }
    }

    function handleWheel(e: WheelEvent) {
      e.preventDefault();

      targetScrollLeft += e.deltaY * speed;

      const maxScroll =
        container.scrollWidth - container.clientWidth;

      targetScrollLeft = Math.max(
        0,
        Math.min(targetScrollLeft, maxScroll)
      );

      if (!isAnimating) {
        isAnimating = true;
        currentScrollLeft = container.scrollLeft;
        requestAnimationFrame(animate);
      }
    }

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [ref, speed, ease]);
}