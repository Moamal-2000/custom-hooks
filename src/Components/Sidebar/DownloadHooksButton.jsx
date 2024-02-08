import { hooksData } from "../../Data/hooksData";
import { saveInRAR } from "../../Functions/helper";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import styles from "./DownloadHooksButton.module.scss";

const DownloadHooksButton = () => {
  return (
    <button
      type="button"
      className={styles.downloadAllButton}
      onClick={() => saveInRAR(hooksData)}
    >
      <span>Download Hooks</span>
      <div className={styles.iconWrapper}>
        <SvgIcon name="arrowDown" />
      </div>
    </button>
  );
};

export default DownloadHooksButton;
