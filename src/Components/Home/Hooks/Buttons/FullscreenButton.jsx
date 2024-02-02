const FullscreenButton = ({ isFullScreen, toggleIsFullScreen }) => {
  return (
    <button type="button" title="Full Screen code" onClick={toggleIsFullScreen}>
      <i className={`fa-solid fa-${isFullScreen ? "compress" : "expand"}`}></i>
    </button>
  );
};
export default FullscreenButton;
