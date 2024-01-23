import useToggle from "../../Hooks/useToggle";
import styles from "./FullScreenMode.module.scss";

const FullScreenMode = () => {
  const [isFullScreen, toggleIsFullScreen] = useToggle(false);

  function handleFullScreen() {
    const htmlElement = document.documentElement;
    toggleIsFullScreen();

    if (document.fullscreenElement) {
      document.exitFullscreen()
      return
    }
    

    if (htmlElement.requestFullscreen) {
      htmlElement.requestFullscreen()
    } else if (htmlElement.mozRequestFullScreen) {
      htmlElement.mozRequestFullScreen()
    } else if (htmlElement.webkitRequestFullscreen) {
      htmlElement.webkitRequestFullscreen()
    } else if (htmlElement.msRequestFullscreen) {
      htmlElement.msRequestFullscreen()
    }
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
