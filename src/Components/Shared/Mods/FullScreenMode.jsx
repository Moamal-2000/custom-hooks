import { enterFullScreen } from "../../../Functions/projectFunctions";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import useToggle from "../../../Hooks/useToggle";
import SvgIcon from "../MiniComponents/SvgIcon";

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
    const method = !isFullScreen ? "add" : "remove";
    document.body.classList[method]("focusMode");
  }

  return (
    <button type="button" title="Full Screen Mode" onClick={handleFullScreen}>
      <SvgIcon name={isFullScreen ? "compress" : "expand"} />
    </button>
  );
};
export default FullScreenMode;
