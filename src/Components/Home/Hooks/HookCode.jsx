import { memo, useEffect, useState } from "react";
import { Prism as Highlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import reactIcon from "../../../Assets/Images/react-icon.svg";
import useToggle from "../../../Hooks/useToggle";
import CopyButton from "./Buttons/CopyButton";
import DownloadButton from "./Buttons/DownloadButton";
import FullscreenButton from "./Buttons/FullscreenButton";
import styles from "./HookCode.module.scss";

const HookCode = ({ hookData }) => {
  const { code, name } = hookData;
  const [isFullScreen, toggleIsFullScreen] = useToggle(false);
  const [numberOfLines, setNumberOfLines] = useState(0);
  const numbersOfLines = Array.from({ length: numberOfLines }).map(
    (_, i) => i + 1
  );

  useEffect(() => {
    let lines = code?.split("\n");
    setNumberOfLines(lines?.length);
  }, []);

  return (
    <div className={`${styles.code} ${isFullScreen ? styles.fullscreen : ""}`}>
      <header>
        <button type="button" className={styles.fileName}>
          <img src={reactIcon} alt="React Logo" />
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
        <ul className={styles.numbering}>
          {numbersOfLines.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>

        <Highlighter
          className={`${styles.preElement}`}
          language="javascript"
          style={vscDarkPlus}
        >
          {code}
        </Highlighter>
      </div>
    </div>
  );
};

export default memo(HookCode);
