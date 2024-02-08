import { memo, useEffect } from "react";
import { Prism as Highlighter } from "react-syntax-highlighter";
import {
  oneLight,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useToggle from "../../../Hooks/useToggle";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import CopyButton from "./Buttons/CopyButton";
import DownloadButton from "./Buttons/DownloadButton";
import FullscreenButton from "./Buttons/FullscreenButton";
import styles from "./HookCode.module.scss";

const HookCode = ({ hookData: { code, name } }) => {
  const { isDarkModeLocal } = useGlobalContext();
  const [isFullScreen, toggleIsFullScreen] = useToggle(false);
  const codeBlockTheme = isDarkModeLocal ? oneLight : vscDarkPlus;

  useEffect(() => {
    const method = isFullScreen ? "add" : "remove";
    document.body.classList[method]("focusMode");
  }, [isFullScreen]);

  if (typeof code !== "string") {
    throw Error(`The following code at ${name} is not string, ${code}`);
  }

  return (
    <div className={`${styles.code} ${isFullScreen ? styles.fullscreen : ""}`}>
      <header>
        <button type="button" className={styles.fileName}>
          <SvgIcon name="react" />
          <span>{name}.jsx</span>
        </button>
      </header>

      <div className={styles.buttons}>
        <CopyButton code={code} />
        <DownloadButton name={name} code={code} />
        <FullscreenButton
          isFullScreen={isFullScreen}
          toggleIsFullScreen={toggleIsFullScreen}
        />
      </div>

      <div className={styles.codeArea}>
        <Highlighter
          className={`${styles.preElement}`}
          language="javascript"
          style={codeBlockTheme}
          showLineNumbers={true}
        >
          {code}
        </Highlighter>
      </div>
    </div>
  );
};

export default memo(HookCode);
