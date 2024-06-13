import { hooksData } from "src/Data/hooksData";
import { saveInRAR } from "src/Functions/helper";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./DownloadHooksButton.module.scss";

const DownloadHooksButton = () => {
  return (
    <button
      type="button"
      className={s.downloadAllButton}
      onClick={() => saveInRAR(hooksData)}
    >
      <span>Download Hooks</span>
      <div className={s.iconWrapper}>
        <SvgIcon name="arrowDown" />
      </div>
    </button>
  );
};

export default DownloadHooksButton;
