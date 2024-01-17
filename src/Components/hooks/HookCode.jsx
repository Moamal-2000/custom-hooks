import { useEffect, useState } from "react";
import HighlightElement from "react-highlight";
import styles from "./HookCode.module.scss";

const HookCode = ({ code }) => {
  const [numberOfLines, setNumberOfLines] = useState(0);
  const numbersOfLines = Array.from({ length: numberOfLines }).map(
    (_, i) => i + 1
  );

  useEffect(() => {
    let lines = code?.split("\n");
    setNumberOfLines(lines?.length);
  }, []);

  return (
    <div className={styles.code}>
      <button className={styles.copyButton} title="copy icon">
        <i class="fa-regular fa-copy"></i>
      </button>

      <ul className={styles.numbering}>
        {numbersOfLines.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>

      <HighlightElement className={`${styles.languageJs} js`}>
        {code}
      </HighlightElement>
    </div>
  );
};
export default HookCode;
