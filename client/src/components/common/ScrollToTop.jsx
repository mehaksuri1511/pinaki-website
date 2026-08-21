import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToTop() {
  window.scrollTo(0, 0);
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    scrollToTop();
  }, [pathname]);

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest("a");
      if (!link || link.target === "_blank") {
        return;
      }

      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      try {
        const url = new URL(link.href, window.location.origin);
        if (url.origin !== window.location.origin) {
          return;
        }
        if (url.hash) {
          return;
        }
        if (url.pathname === window.location.pathname) {
          scrollToTop();
        }
      } catch {
        scrollToTop();
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
};

export default ScrollToTop;
