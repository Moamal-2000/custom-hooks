import { useEffect, useRef, useState } from "react";
import { scrollCalculations } from "../../../Functions/projectFunctions";
import useEventListener from "../../../Hooks/useEventListener";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";

const ScrollBottomTop = () => {
  const arrowButtonRef = useRef();
  const [noun, setNoun] = useState("Bottom");
  useEventListener(window, "scroll", () =>
    handleFlipScrollIcon(arrowButtonRef)
  );
  let toolTipLeftPos = noun === "Bottom" ? "-145px" : "-119px";
  useFunctionOnKey(handleScrollButton, ["KeyS"], 300, true);

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
    <ToolTip
      content={`Scroll to ${noun}`}
      left={toolTipLeftPos}
      top="3px"
      arrowDir="right"
    >
      <button
        ref={arrowButtonRef}
        type="button"
        onClick={handleScrollButton}
        // title={`Scroll to ${noun}`}
      >
        <SvgIcon name="chevronUp" />
      </button>
    </ToolTip>
  );
};
export default ScrollBottomTop;
