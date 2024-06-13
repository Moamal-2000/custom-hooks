import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";

const FullscreenButton = ({ isFullScreen, toggleIsFullScreen }) => {

  function handleFullScreen() {
    toggleIsFullScreen()
    document.documentElement.classList.toggle("focusMode")
  }

  return (
    <button type="button" title="Full Screen Code" onClick={handleFullScreen}>
      <SvgIcon name={isFullScreen ? "compress" : "expand"} />
    </button>
  );
};
export default FullscreenButton;
