import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";

const FullscreenButton = ({ isFullScreen, toggleIsFullScreen }) => {
  return (
    <button type="button" title="Full Screen Code" onClick={toggleIsFullScreen}>
      <SvgIcon name={isFullScreen ? "compress" : "expand"} />
    </button>
  );
};
export default FullscreenButton;
