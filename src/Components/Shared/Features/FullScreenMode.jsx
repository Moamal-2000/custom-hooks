import { enterFullScreen } from "../../../Functions/projectFunctions";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import useToggle from "../../../Hooks/useToggle";
import styles from "./FullScreenMode.module.scss";

const FullScreenMode = () => {
  const [isFullScreen, toggleIsFullScreen] = useToggle();

  useFunctionOnKey(handleFullScreen, "KeyF")

  function handleFullScreen() {
    toggleIsFullScreen();

    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }

    enterFullScreen();
  }

  return (
    <button
      type="button"
      title="Full Screen mode"
      className={styles.fullScreenButton}
      onClick={handleFullScreen}
    >
      {isFullScreen ? (
        <i className="fa-solid fa-compress"></i>
      ) : (
        <i className="fa-solid fa-expand"></i>
      )}
    </button>
  );
};
export default FullScreenMode;