import { useGlobalContext } from "../../Context/GlobalContext";
import styles from "./FocusMode.module.scss";

const FocusMode = () => {
  const { isFocusModeActive, toggleIsFocusModeActive, setIsSideBarExtended } =
    useGlobalContext();

  function handleFocusModeButton() {
    toggleIsFocusModeActive();

    if (isFocusModeActive) {
      setIsSideBarExtended(false);
      document.body.classList.remove("focusMode")
    } else {
      setIsSideBarExtended(true);
      document.body.classList.add("focusMode")
    }
  }

  return (
    <button
      type="button"
      className={`${styles.focusModeButton} ${
        isFocusModeActive ? styles.focusMode : ""
      }`}
      onClick={handleFocusModeButton}
    >
      {isFocusModeActive ? (
        <i className={`fa-regular fa-eye-slash ${styles.eyeSlashIcon}`}></i>
      ) : (
        <i className="fa-regular fa-eye"></i>
      )}
    </button>
  );
};
export default FocusMode;
