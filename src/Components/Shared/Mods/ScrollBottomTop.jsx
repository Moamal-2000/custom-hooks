import { useState } from "react";
import { scrollCalculations } from "../../../Functions/projectFunctions";
import useEventListener from "../../../Hooks/useEventListener";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";

const ScrollBottomTop = () => {
  const { isUserScrolledToTop } = scrollCalculations();
  const [noun, setNoun] = useState("Bottom");
  const [iconName, setIconName] = useState(isUserScrolledToTop ? "chevronDown" : "chevronUp");
  let toolTipLeftPos = noun === "Bottom" ? "-126px" : "-105px";
  useEventListener(window, "scroll", () => handleFlipScrollIcon());
  useFunctionOnKey(handleScrollButton, ["KeyS"], 300, true);

  function handleFlipScrollIcon() {
    const { isUserScrolledToTop } = scrollCalculations();
    setNoun(isUserScrolledToTop ? "Bottom" : "Top");
    setIconName(isUserScrolledToTop ? "chevronDown" : "chevronUp");
  }

  function handleScrollButton() {
    const { scrollToY } = scrollCalculations();
    window.scrollTo({ behavior: "smooth" }, scrollToY, 0);
    setTimeout(() => handleFlipScrollIcon(), 700);
  }

  return (
    <button
      type="button"
      onClick={handleScrollButton}
      aria-label={`Scroll to ${noun}`}
    >
      <SvgIcon name={iconName} />
      <ToolTip
        content={`Scroll to ${noun}`}
        left={toolTipLeftPos}
        top="1.3px"
        arrowDir="right"
      />
    </button>
  );
};
export default ScrollBottomTop;
