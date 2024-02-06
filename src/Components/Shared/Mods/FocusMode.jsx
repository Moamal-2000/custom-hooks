import { useEffect } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import styles from "./FocusMode.module.scss";

const FocusMode = () => {
  const { isFocusModeActiveLocal, setIsFocusModeActive, setIsSideBarExtended } =
    useGlobalContext();
  const focusModeClass = isFocusModeActiveLocal ? styles.focusMode : "";
  useFunctionOnKey(
    () => setIsFocusModeActive(!isFocusModeActiveLocal),
    "KeyG",
    true
  );

  useEffect(() => {
    if (isFocusModeActiveLocal) {
      setIsSideBarExtended(true);
      document.body.classList.add("focusMode");
      return;
    }

    setIsSideBarExtended(false);
    document.body.classList.remove("focusMode");
  }, [isFocusModeActiveLocal]);

  const buttonIcon = (
    <i
      className={
        isFocusModeActiveLocal
          ? `fa-regular fa-eye-slash ${styles.eyeSlashIcon}`
          : "fa-regular fa-eye"
      }
    ></i>
  );

  return (
    <button
      type="button"
      className={`${styles.focusModeButton} ${focusModeClass}`}
      onClick={() => setIsFocusModeActive(!isFocusModeActiveLocal)}
      title="Focus Mode"
      tabIndex="2"
    >
      {buttonIcon}
    </button>
  );
};

export default FocusMode;
