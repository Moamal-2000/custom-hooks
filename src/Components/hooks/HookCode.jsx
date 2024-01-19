import { memo, useEffect, useState } from "react";
import HighlightElement from "react-highlight";
import useCopyText from "../../Hooks/useCopyText";
import useToggle from "../../Hooks/useToggle";
import styles from "./HookCode.module.scss";

const HookCode = ({ code }) => {
  const [copiedText, copyText] = useCopyText();
  const [isCopied, toggleIsCopied] = useToggle(false);
  const [numberOfLines, setNumberOfLines] = useState(0);
  const [codeState, setCodeState] = useState(code);
  const numbersOfLines = Array.from({ length: numberOfLines }).map(
    (_, i) => i + 1
  );

  function handleCopyButton() {
    if (isCopied) return;
    copyText(code);
    toggleIsCopied();

    setTimeout(() => toggleIsCopied(), 1000);
  }

  useEffect(() => {
    let lines = code?.split("\n");
    setNumberOfLines(lines?.length);

    const codeWithSpanOnEachLine = lines.map((line, i) => (
      <span key={i}>{line}</span>
    ));
    setCodeState(codeWithSpanOnEachLine);
  }, []);

  return (
    <div className={styles.code}>
      <button
        className={styles.copyButton}
        title="Copy Code"
        onClick={handleCopyButton}
      >
        {isCopied ? (
          <i className="fa-solid fa-check"></i>
        ) : (
          <i className="fa-regular fa-copy"></i>
        )}
      </button>

      <ul className={styles.numbering}>
        {numbersOfLines.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>

      <HighlightElement className={`${styles.languageJs} js`}>
        {codeState}
      </HighlightElement>
    </div>
  );
};
export default memo(HookCode);
