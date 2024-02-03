import { hooksData } from "../../Data/hooksData";
import { saveInRAR } from "../../Functions/helper";
import styles from "./DownloadHooksButton.module.scss";

const DownloadHooksButton = () => {
  return (
    <button
      type="button"
      className={styles.downloadAllButton}
      onClick={() => saveInRAR(hooksData)}
    >
      <span>Download Hooks</span>
      <i className="fa-solid fa-arrow-down"></i>
    </button>
  );
};

export default DownloadHooksButton;
