import { useEffect } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import SvgIcon from "../MiniComponents/SvgIcon";
import styles from "./FocusMode.module.scss";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";

const FocusMode = () => {
  const { isFocusModeActiveLocal, setIsFocusModeActive, setIsSideBarExtended } =
    useGlobalContext();
  const focusModeClass = isFocusModeActiveLocal ? styles.focusMode : "";
  useFunctionOnKey(toggleFocusMode, "KeyG", 200, true);

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
      title="Focus Mode"
    >
      <SvgIcon name={isFocusModeActiveLocal ? "eyeSlash" : "eye"} />
    </button>
  );
};

export default FocusMode;
