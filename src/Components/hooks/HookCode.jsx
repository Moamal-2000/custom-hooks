import { useEffect, useState } from "react";
import HighlightElement from "react-highlight";
import styles from "./HookCode.module.scss";

const HookCode = ({ code }) => {
  const [codeState, setCodeState] = useState(code);
  const [numberOfLines, setNumberOfLines] = useState(0);
  function numericCode() {
    let text = code;
    let lines = text.split("\n");

    for (let i = 0; i < lines.length; i++) {
      lines[i] = i + 1 + " " + lines[i];
    }

    text = lines.join("\n");

    // setCodeState(text)
    setNumberOfLines(lines.length);
  }

  useEffect(() => {
    numericCode();
  }, []);

  const numbersOfLines = Array.from({ length: numberOfLines }).map(
    (_, i) => i + 1
  );


  return (
    <div className={styles.code}>
      <ul className={styles.numbering}>
        {numbersOfLines.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <HighlightElement className={`${styles.languageJs} react`}>
        {codeState}
      </HighlightElement>
    </div>
  );
};
export default HookCode;
