import { enterFullScreen } from "../../../Functions/projectFunctions";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import useToggle from "../../../Hooks/useToggle";
import SvgIcon from "../MiniComponents/SvgIcon";

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
    <button type="button" title="Full Screen Mode" onClick={toggleFullScreen}>
      <SvgIcon name={isFullScreen ? "compress" : "expand"} />
    </button>
  );
};
export default FullScreenMode;
