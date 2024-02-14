import { enterFullScreen } from "../../../Functions/projectFunctions";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import useToggle from "../../../Hooks/useToggle";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";

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
    <ToolTip
      content="Full Screen Mode"
      left="-153px"
      top="3px"
      arrowDir="right"
    >
      <button
        type="button"
        // title="Full Screen Mode"
        onClick={toggleFullScreen}
      >
        <SvgIcon name={isFullScreen ? "compress" : "expand"} />
      </button>
    </ToolTip>
  );
};
export default FullScreenMode;
