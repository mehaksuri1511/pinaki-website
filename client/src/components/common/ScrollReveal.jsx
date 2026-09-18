import { useEffect, useRef } from "react";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  distance = 40,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    /*
     * Get the actual content elements inside the section.
     *
     * We intentionally animate only elements that don't contain
     * other HTML elements. This prevents outer containers/cards/
     * sections from moving.
     */
    const elements = Array.from(
      container.querySelectorAll("*")
    ).filter((element) => {
      if (element.tagName === "SVG") return false;
      if (element.closest("svg")) return false;

      return element.children.length === 0;
    });

    /*
     * Initial state.
     *
     * Only the actual content elements are moved.
     * Parent containers remain completely stationary.
     */
    elements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = `translateY(${distance}px)`;
      element.style.transition = "none";
    });

    let observer;

    const startAnimation = () => {
      elements.forEach((element, index) => {
        element.style.transition = [
          `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`,
          `transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`,
        ].join(", ");

        element.style.transitionDelay = `${
          delay + index * 0.015
        }s`;

        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      });
    };

    /*
     * Observe the whole section.
     */
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();

            /*
             * Animation should happen only once.
             */
            observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(container);

    return () => {
      observer?.disconnect();

      elements.forEach((element) => {
        element.style.opacity = "";
        element.style.transform = "";
        element.style.transition = "";
        element.style.transitionDelay = "";
      });
    };
  }, [delay, duration, distance]);

  return (
    <div
      ref={containerRef}
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;