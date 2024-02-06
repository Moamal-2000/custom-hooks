const FullscreenButton = ({ isFullScreen, toggleIsFullScreen }) => {
  const iconName = isFullScreen ? "compress" : "expand";

  return (
    <button type="button" title="Full Screen Code" onClick={toggleIsFullScreen}>
      <i className={`fa-solid fa-${iconName}`}></i>
    </button>
  );
};
export default FullscreenButton;
