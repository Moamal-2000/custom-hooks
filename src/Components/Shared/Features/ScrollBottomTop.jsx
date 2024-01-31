import { useEffect, useRef } from "react";
import {
  handleFlipScrollIcon,
  scrollCalculations,
} from "../../../Functions/projectFunctions";
import useEventListener from "../../../Hooks/useEventListener";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import styles from "./ScrollBottomTop.module.scss";

const ScrollBottomTop = () => {
  const arrowIconRef = useRef();
  useEventListener(window, "scroll", handleFlipScrollIcon(arrowIconRef));

  function handleScrollButton() {
    const { scrollToY } = scrollCalculations();
    window.scrollTo({ behavior: "smooth" }, scrollToY, 0);
  }

  useFunctionOnKey(handleScrollButton, "KeyS");

  useEffect(() => {
    handleFlipScrollIcon(arrowIconRef);
  }, []);

  return (
    <button
      type="button"
      className={styles.scrollToTopButton}
      onClick={handleScrollButton}
      title="Scroll to top/bottom"
      tabIndex="5"
    >
      <i ref={arrowIconRef} className="fa-solid fa-chevron-up"></i>
    </button>
  );
};
export default ScrollBottomTop;
