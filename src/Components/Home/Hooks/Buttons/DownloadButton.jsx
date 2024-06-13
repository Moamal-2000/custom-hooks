import { saveInFile } from "src/Functions/helper";
import useToggle from "src/Hooks/useToggle";
import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";

const DownloadButton = ({ name, code }) => {
  const [isDownloaded, toggleIsDownloaded] = useToggle(false);

  function handleDownloadButton() {
    if (isDownloaded) return;

    toggleIsDownloaded();
    saveInFile(`${name}.jsx`, code);
    setTimeout(() => toggleIsDownloaded(), 1000);
  }

  return (
    <button type="button" title="Download Code" onClick={handleDownloadButton}>
      <SvgIcon name={isDownloaded ? "checked" : "download"} />
    </button>
  );
};
export default DownloadButton;
