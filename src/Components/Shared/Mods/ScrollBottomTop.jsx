import { useEffect, useRef, useState } from "react";
import { scrollCalculations } from "../../../Functions/projectFunctions";
import useEventListener from "../../../Hooks/useEventListener";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import SvgIcon from "../MiniComponents/SvgIcon";

const ScrollBottomTop = () => {
  const arrowButtonRef = useRef();
  const [noun, setNoun] = useState("Bottom");
  useEventListener(window, "scroll", () =>
    handleFlipScrollIcon(arrowButtonRef)
  );
  useFunctionOnKey(handleScrollButton, "KeyS", 300, true);

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
    setTimeout(() => handleFlipScrollIcon(arrowButtonRef), 700);
  }

  useEffect(() => {
    handleFlipScrollIcon(arrowButtonRef);
  }, []);

  return (
    <button
      ref={arrowButtonRef}
      type="button"
      onClick={handleScrollButton}
      title={`Scroll to ${noun}`}
    >
      <SvgIcon name="chevronUp" />
    </button>
  );
};
export default ScrollBottomTop;
