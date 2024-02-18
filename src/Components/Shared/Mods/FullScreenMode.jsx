import { enterFullScreen } from "../../../Functions/projectFunctions";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import useToggle from "../../../Hooks/useToggle";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";
import styles from "./FullScreenMode.module.scss";

const FullScreenMode = () => {
  const [isFullScreen, toggleIsFullScreen] = useToggle(false);
  useFunctionOnKey(toggleFullScreen, ["KeyF"], 200, true);

  function toggleFullScreen() {
    toggleIsFullScreen();

    if (document.fullscreenElement) document.exitFullscreen();

    enterFullScreen();
    const method = !isFullScreen ? "add" : "remove";
    document.body.classList[method]("focusMode");
  }

  return (
    <button
      type="button"
      className={styles.fullscreenModeButton}
      aria-label="Full Screen Mode"
      onClick={toggleFullScreen}
    >
      <SvgIcon name={isFullScreen ? "compress" : "expand"} />
      <ToolTip
        content="Full Screen Mode"
        left="-136px"
        top="1.2px"
        arrowDir="right"
      />
    </button>
  );
};
export default FullScreenMode;
