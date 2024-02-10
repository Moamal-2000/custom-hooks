import { enterFullScreen } from "../../../Functions/projectFunctions";
import useDebounce from "../../../Hooks/useDebounce";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import useToggle from "../../../Hooks/useToggle";
import SvgIcon from "../MiniComponents/SvgIcon";

const FullScreenMode = () => {
  const [isFullScreen, toggleIsFullScreen] = useToggle();
  const { debounceFun } = useDebounce(200);
  useFunctionOnKey(toggleFullScreen, "KeyF", true);

  function toggleFullScreen() {
    debounceFun(() => {
      toggleIsFullScreen();

      if (document.fullscreenElement) {
        document.exitFullscreen();
        return;
      }

      enterFullScreen();
      const method = !isFullScreen ? "add" : "remove";
      document.body.classList[method]("focusMode");
    });
  }

  return (
    <button type="button" title="Full Screen Mode" onClick={toggleFullScreen}>
      <SvgIcon name={isFullScreen ? "compress" : "expand"} />
    </button>
  );
};
export default FullScreenMode;
