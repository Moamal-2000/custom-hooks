import { memo, useEffect, useState } from "react";
import { Prism as Highlighter } from "react-syntax-highlighter";
import {
  oneLight,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useToggle from "../../../Hooks/useToggle";
import CopyButton from "./Buttons/CopyButton";
import DownloadButton from "./Buttons/DownloadButton";
import FullscreenButton from "./Buttons/FullscreenButton";
import CodeBlockHeader from "./CodeBlockHeader";
import styles from "./HookCode.module.scss";

const HookCode = ({ hookData: { codes, name } }) => {
  const { isDarkModeLocal } = useGlobalContext();
  const [isFullScreen, toggleIsFullScreen] = useToggle(false);
  const codeBlockTheme = isDarkModeLocal ? oneLight : vscDarkPlus;
  const [displayedCodeName, setDisplayedCodeName] = useState(name);
  let displayedCode = codes.filter(
    ({ name }) => name === displayedCodeName
  )?.[0];
  const { name: codeName, code } = displayedCode;

  useEffect(() => {
    const method = isFullScreen ? "add" : "remove";
    document.body.classList[method]("focusMode");
  }, [isFullScreen]);

  useEffect(() => {
    displayedCode = codes.filter(({ name }) => name === displayedCodeName)?.[0];
  }, [displayedCodeName]);

  return (
    <div className={`${styles.code} ${isFullScreen ? styles.fullscreen : ""}`}>
      <CodeBlockHeader
        props={{
          displayedCodeName,
          setDisplayedCodeName,
          codes,
        }}
      />

      <div className={styles.buttons}>
        <CopyButton code={code} />
        <DownloadButton name={codeName} code={code} />
        <FullscreenButton
          ton
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
