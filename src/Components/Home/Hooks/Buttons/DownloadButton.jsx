import { saveInFile } from "../../../../Functions/helper";
import useToggle from "../../../../Hooks/useToggle";

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
      <i className={`fa-solid fa-${isDownloaded ? "check" : "download"}`}></i>
    </button>
  );
};
export default DownloadButton;
