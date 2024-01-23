import { memo, useEffect, useRef, useState } from "react";
import HighlightElement from "react-highlight";
import { saveInFile } from "../../../Functions/helper";
import useCopyText from "../../../Hooks/useCopyText";
import useToggle from "../../../Hooks/useToggle";
import styles from "./HookCode.module.scss";

const HookCode = ({ hookData }) => {
  const { code, name } = hookData;
  const [copiedText, copyText] = useCopyText();
  const [isCopied, toggleIsCopied] = useToggle(false);
  const [isDownloaded, toggleIsDownloaded] = useToggle(false);
  const [isFullScreen, toggleIsFullScreen] = useToggle(false);
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

    const codeWithSpanOnEachLine = lines.map((line, i) => (
      <span key={i}>{line}</span>
    ));

    setCodeState(codeWithSpanOnEachLine);
  }, []);

  useEffect(() => {
    const codeBlockEle = codeBlockRef.current?.querySelector("code");
    const spans = [...codeBlockEle?.children];

    if (spans.length === 0) return;

    codeBlockEle.addEventListener("mouseup", () => (mouseDown.current = false));
    codeBlockEle.addEventListener("mousedown", () => (mouseDown.current = true));
    codeBlockEle.addEventListener("mousemove", () => 
      mouseDown.current && spans.forEach((span) => span.classList.remove("focus"))
    );

    function handleFocusSpan(span) {
      spans.forEach((span) => span.classList.remove("focus"));
      span.classList.add("focus");
    }

    spans.forEach((span) =>
      span.addEventListener("click", () => handleFocusSpan(span))
    );

    return () => {
      spans.forEach((span) =>
      span.removeEventListener("click", () => handleFocusSpan(span))
    );
    }
  }, [codeState]);

  return (
    <div className={`${styles.code} ${isFullScreen ? styles.fullscreen : ""}`}>
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

      <ul className={styles.numbering}>
        {numbersOfLines.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>

      <div className={styles.codeBlock} ref={codeBlockRef}>
        <HighlightElement className={`${styles.languageJs} js`}>
          {codeState}
        </HighlightElement>
      </div>
    </div>
  );
};
export default memo(HookCode);
