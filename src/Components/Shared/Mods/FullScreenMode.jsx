import { enterFullScreen } from "../../../Functions/projectFunctions";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import useToggle from "../../../Hooks/useToggle";

const FullScreenMode = () => {
  const [isFullScreen, toggleIsFullScreen] = useToggle();
  const iconName = isFullScreen ? "compress" : "expand";
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
    <button type="button" title="Full Screen Mode" onClick={handleFullScreen}>
      <i className={`fa-solid fa-${iconName}`}></i>
    </button>
  );
};
export default FullScreenMode;
