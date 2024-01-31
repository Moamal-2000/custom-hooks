import { useEffect } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import styles from "./FocusMode.module.scss";

const FocusMode = () => {
  const {
    isFocusModeActiveLocal,
    setIsFocusModeActive,
    isSideBarExtended,
    setIsSideBarExtended,
  } = useGlobalContext();

  useEffect(() => {
    if (isFocusModeActiveLocal) {
      setIsSideBarExtended(true);
      document.body.classList.add("focusMode");
      return;
    }

    if (isSideBarExtended) setIsSideBarExtended(false);
    document.body.classList.remove("focusMode");
  }, [isFocusModeActiveLocal]);

  useFunctionOnKey(() => setIsFocusModeActive(!isFocusModeActiveLocal), "KeyG");

  return (
    <button
      type="button"
      className={`${styles.focusModeButton} ${
        isFocusModeActiveLocal ? styles.focusMode : ""
      }`}
      onClick={() => setIsFocusModeActive(!isFocusModeActiveLocal)}
      tabIndex="2"
    >
      <i
        className={
          isFocusModeActiveLocal
            ? `fa-regular fa-eye-slash ${styles.eyeSlashIcon}`
            : "fa-regular fa-eye"
        }
      ></i>
    </button>
  );
};

export default FocusMode;
