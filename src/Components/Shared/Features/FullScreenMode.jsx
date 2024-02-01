import { enterFullScreen } from "../../../Functions/projectFunctions";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import useToggle from "../../../Hooks/useToggle";
import styles from "./FullScreenMode.module.scss";

const FullScreenMode = () => {
  const [isFullScreen, toggleIsFullScreen] = useToggle();

  useFunctionOnKey(handleFullScreen, "KeyF", true);

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
      <i className={`fa-solid fa-${isFullScreen ? "compress" : "expand"}`}></i>
    </button>
  );
};
export default FullScreenMode;
