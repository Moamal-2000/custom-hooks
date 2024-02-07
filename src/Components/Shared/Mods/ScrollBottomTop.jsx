import { useEffect, useRef } from "react";
import {
  handleFlipScrollIcon,
  scrollCalculations,
} from "../../../Functions/projectFunctions";
import useEventListener from "../../../Hooks/useEventListener";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";

const ScrollBottomTop = () => {
  const arrowIconRef = useRef();
  useEventListener(window, "scroll", () => handleFlipScrollIcon(arrowIconRef));
  useFunctionOnKey(handleScrollButton, "KeyS", true);

  function handleScrollButton() {
    const { scrollToY } = scrollCalculations();
    window.scrollTo({ behavior: "smooth" }, scrollToY, 0);
    setTimeout(() => handleFlipScrollIcon(arrowIconRef), 700);
  }

  useEffect(() => {
    handleFlipScrollIcon(arrowIconRef);
  }, []);

  return (
    <button
      type="button"
      onClick={handleScrollButton}
      title="Scroll to top/bottom"
    >
      <i ref={arrowIconRef} className="fa-solid fa-chevron-up"></i>
    </button>
  );
};
export default ScrollBottomTop;
