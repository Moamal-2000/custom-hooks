import { memo, useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import reactIcon from "../../../Assets/Images/react-icon.svg";
import { saveInFile } from "../../../Functions/helper";
import useCopyText from "../../../Hooks/useCopyText";
import useToggle from "../../../Hooks/useToggle";
import styles from "./HookCode.module.scss";

const HookCode = ({ hookData }) => {
  const { code, name } = hookData;
  const [copiedText, copyText] = useCopyText();
  const [isCopied, toggleIsCopied] = useToggle(false);
  const [isDownloaded, toggleIsDownloaded] = useToggle(false);
  const [isFullScreen, toggleIsFullScreen, setIsFullScreen] = useToggle(false);
  const [numberOfLines, setNumberOfLines] = useState(0);
  const [codeState, setCodeState] = useState(code);
  const codeBlockRef = useRef();
  const mouseDown = useRef(false);
  const numbersOfLines = Array.from({ length: numberOfLines }).map(
    (_, i) => i + 1
  );

  function handleCopyButton() {
    if (isCopied) return;
    copyText(code);
    toggleIsCopied();
    setTimeout(() => toggleIsCopied(), 1000);
  }

  function handleDownloadButton() {
    if (isDownloaded) return;
    saveInFile(`${name}.jsx`, code);
    toggleIsDownloaded();
    setTimeout(() => toggleIsDownloaded(), 1000);
  }

  useEffect(() => {
    let lines = code?.split("\n");
    setNumberOfLines(lines?.length);
  }, [isCopied, isDownloaded, isFullScreen]);

  return (
    <div className={`${styles.code} ${isFullScreen ? styles.fullscreen : ""}`}>
      <header>
        <button type="button" className={styles.fileName}>
          <img src={reactIcon} alt="React Logo" />
          <span>{name}.jsx</span>
        </button>
      </header>

      <div className={styles.buttons}>
        <button type="button" title="Copy Code" onClick={handleCopyButton}>
          {isCopied ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i className="fa-regular fa-copy"></i>
          )}
        </button>

        <button
          type="button"
          title="Download Code"
          onClick={handleDownloadButton}
        >
          {isDownloaded ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i className="fa-solid fa-download"></i>
          )}
        </button>

        <button
          type="button"
          title="Full Screen code"
          onClick={toggleIsFullScreen}
        >
          {isFullScreen ? (
            <i className="fa-solid fa-compress"></i>
          ) : (
            <i className="fa-solid fa-expand"></i>
          )}
        </button>
      </div>

      <div className={styles.codeArea}>
        <ul className={styles.numbering}>
          {numbersOfLines.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>

        <div className={styles.codeBlock} ref={codeBlockRef}>
          <SyntaxHighlighter
            className={`${styles.languageJs} js`}
            language="javascript"
            style={vscDarkPlus}
          >
            {codeState}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default memo(HookCode);
