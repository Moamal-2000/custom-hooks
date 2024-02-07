import { useEffect, useRef, useState } from "react";
import { scrollCalculations } from "../../../Functions/projectFunctions";
import useEventListener from "../../../Hooks/useEventListener";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";

const ScrollBottomTop = () => {
  const arrowIconRef = useRef();
  useEventListener(window, "scroll", () => handleFlipScrollIcon(arrowIconRef));
  useFunctionOnKey(handleScrollButton, "KeyS", true);
  const [noun, setNoun] = useState("Bottom");

  function handleFlipScrollIcon(buttonIconRef) {
    if (!buttonIconRef.current) return;
    const { isUserScrolledToTop } = scrollCalculations();
    const turnValue = isUserScrolledToTop ? ".5" : "5.0";

    setNoun(isUserScrolledToTop ? "Bottom" : "Top");
    buttonIconRef.current.style.transform = `rotate(${turnValue}turn)`;
  }

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
      title={`Scroll to ${noun}`}
    >
      <i ref={arrowIconRef} className="fa-solid fa-chevron-up"></i>
    </button>
  );
};
export default ScrollBottomTop;
