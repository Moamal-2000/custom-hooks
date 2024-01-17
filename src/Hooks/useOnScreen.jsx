import { useEffect, useState } from "react";

export default function useOnScreen(ref, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observers = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: rootMargin,
      }
    );

    observers.observe(ref.current);

    return () => {
      if (!ref.current) return;
      observers.unobserve(ref.current);
    };
  }, []);

  return isVisible;
}
