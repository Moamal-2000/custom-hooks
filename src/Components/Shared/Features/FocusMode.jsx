import { useGlobalContext } from "../../../Context/GlobalContext";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import styles from "./FocusMode.module.scss";

const FocusMode = () => {
  const {
    isFocusModeActiveLocal,
    setIsFocusModeActive,
    setIsSideBarExtended,
  } = useGlobalContext();

  function handleFocusModeButton() {
    console.log(isFocusModeActiveLocal);
    setIsFocusModeActive(!isFocusModeActiveLocal);

    if (isFocusModeActiveLocal) {
      setIsSideBarExtended(false);
      document.body.classList.remove("focusMode");
    } else {
      setIsSideBarExtended(true);
      document.body.classList.add("focusMode");
    }
  }

  useFunctionOnKey(handleFocusModeButton, "KeyG");

  return (
    <button
      type="button"
      className={`${styles.focusModeButton} ${
        isFocusModeActiveLocal ? styles.focusMode : ""
      }`}
      onClick={handleFocusModeButton}
    >
      {isFocusModeActiveLocal ? (
        <i className={`fa-regular fa-eye-slash ${styles.eyeSlashIcon}`}></i>
      ) : (
        <i className="fa-regular fa-eye"></i>
      )}
    </button>
  );
};
export default FocusMode;
