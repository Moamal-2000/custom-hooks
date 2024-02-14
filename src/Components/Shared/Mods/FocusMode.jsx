import { useEffect } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";
import styles from "./FocusMode.module.scss";

const FocusMode = () => {
  const { isFocusModeActiveLocal, setIsFocusModeActive, setIsSideBarExtended } =
    useGlobalContext();
  const focusModeClass = isFocusModeActiveLocal ? styles.focusMode : "";
  useFunctionOnKey(toggleFocusMode, ["KeyG"], 300, true);

  function toggleFocusMode() {
    setIsFocusModeActive(!isFocusModeActiveLocal);
  }

  useEffect(() => {
    setTimeout(() => {
      if (isFocusModeActiveLocal) {
        setIsSideBarExtended(true);
        document.body.classList.add("focusMode");
        return;
      }

      setIsSideBarExtended(false);
      document.body.classList.remove("focusMode");
    }, 0);
  }, [isFocusModeActiveLocal]);

  return (
    <button
      type="button"
      className={`${styles.focusModeButton} ${focusModeClass}`}
      onClick={toggleFocusMode}
      aria-label="Focus Mode"
    >
      <SvgIcon name={isFocusModeActiveLocal ? "eyeSlash" : "eye"} />
      <ToolTip content="Focus Mode" left="-105px" top="1.2px" arrowDir="right" />
    </button>
  );
};

export default FocusMode;
