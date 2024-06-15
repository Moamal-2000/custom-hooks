import { useEffect } from "react";
import { useGlobalContext } from "src/Context/GlobalContext";
import useFunctionOnKey from "src/Hooks/useFunctionOnKey";
import { useModesContext } from "../../../Context/ModesContext";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";
import s from "./FocusMode.module.scss";

const FocusMode = () => {
  const { isFocusModeActiveLocal, setIsFocusModeActive } = useModesContext();
  const { setIsSideBarExtended } = useGlobalContext();
  const focusModeClass = isFocusModeActiveLocal ? s.focusMode : "";
  useFunctionOnKey(toggleFocusMode, ["KeyG"], 300, true);

  function toggleFocusMode() {
    setIsFocusModeActive(!isFocusModeActiveLocal);
  }

  useEffect(() => {
    if (isFocusModeActiveLocal) {
      setIsSideBarExtended(true);
      document.documentElement.classList.add("focusMode");
      return;
    }

    setIsSideBarExtended(false);
    document.documentElement.classList.remove("focusMode");
  }, [isFocusModeActiveLocal]);

  return (
    <button
      type="button"
      className={`${s.focusModeButton} ${focusModeClass}`}
      onClick={toggleFocusMode}
      aria-label="Focus Mode"
    >
      <SvgIcon name={isFocusModeActiveLocal ? "eyeSlash" : "eye"} />
      <ToolTip
        content="Focus Mode"
        left="-105px"
        top="1.2px"
        arrowDir="right"
      />
    </button>
  );
};

export default FocusMode;
