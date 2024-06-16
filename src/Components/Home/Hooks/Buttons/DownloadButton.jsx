import { ICON_TOGGLE_DELAY } from "src/Data/variables";
import { saveInFile } from "src/Functions/helper";
import useToggle from "src/Hooks/useToggle";
import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";

const DownloadButton = ({ name, code }) => {
  const [isDownloaded, toggleIsDownloaded] = useToggle(false);

  function handleDownloadButton() {
    if (isDownloaded) return;

    toggleIsDownloaded();
    saveInFile(`${name}.jsx`, code);
    setTimeout(() => toggleIsDownloaded(), ICON_TOGGLE_DELAY);
  }

  return (
    <button type="button" title="Download Code" onClick={handleDownloadButton}>
      <SvgIcon name={isDownloaded ? "checked" : "download"} />
    </button>
  );
};
export default DownloadButton;
