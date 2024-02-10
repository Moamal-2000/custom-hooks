import { useEffect } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useDebounce from "../../../Hooks/useDebounce";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import SvgIcon from "../MiniComponents/SvgIcon";
import styles from "./FocusMode.module.scss";

const FocusMode = () => {
  const { isFocusModeActiveLocal, setIsFocusModeActive, setIsSideBarExtended } =
    useGlobalContext();
  const focusModeClass = isFocusModeActiveLocal ? styles.focusMode : "";
  useFunctionOnKey(() => toggleFocusMode, "KeyG", true);
  const { debounceFun } = useDebounce(200);

  function toggleFocusMode() {
    debounceFun(() => setIsFocusModeActive(!isFocusModeActiveLocal));
  }

  useEffect(() => {
    if (isFocusModeActiveLocal) {
      setIsSideBarExtended(true);
      document.body.classList.add("focusMode");
      return;
    }

    setIsSideBarExtended(false);
    document.body.classList.remove("focusMode");
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
