import { useRef } from "react";
import useEventListener from "../../Hooks/useEventListener";
import styles from "./ScrollBottomTop.module.scss";

const ScrollBottomTop = () => {
  const buttonIconRef = useRef();
  useEventListener(window, "scroll", handleFlipScrollIcon);

  function handleFlipScrollIcon() {
    const { isUserScrolledToTop } = scrollCalculations();
    buttonIconRef.current.style.transform = `rotate(${
      isUserScrolledToTop ? ".5" : "0"
    }turn)`;
  }

  function scrollCalculations() {
    const documentHeight = Number.parseInt(
      document.documentElement.offsetHeight.toFixed(0)
    );
    const halfDocumentHeight = documentHeight / 2;
    const scrollY = Number.parseInt(window.scrollY.toFixed(0));
    const isUserScrolledToTop = halfDocumentHeight > scrollY;
    const scrollToY = isUserScrolledToTop ? documentHeight : 0;

    return { scrollToY, isUserScrolledToTop };
  }

  function handleScrollButton() {
    const { scrollToY } = scrollCalculations();
    window.scrollTo({ behavior: "smooth" }, scrollToY, 0);
  }

  return (
    <button
      type="button"
      className={styles.scrollToTopButton}
      onClick={handleScrollButton}
      title="Scroll to top/bottom"
    >
      <i ref={buttonIconRef} className="fa-solid fa-chevron-up"></i>
    </button>
  );
};
export default ScrollBottomTop;
