import { memo, useEffect, useState } from "react";
import { Prism as Highlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import useToggle from "src/Hooks/useToggle";
import CopyButton from "../Buttons/CopyButton";
import DownloadButton from "../Buttons/DownloadButton";
import FullscreenButton from "../Buttons/FullscreenButton";
import CodeBlockHeader from "./CodeBlockHeader";
import s from "./HookCode.module.scss";

const HookCode = ({ hookData: { codes, name } }) => {
  const [isFullScreen, toggleIsFullScreen] = useToggle(false);
  const [displayedCodeName, setDisplayedCodeName] = useState(name);
  let displayedCode = getDisplayedCode(codes, displayedCodeName);
  const { name: codeName, code } = displayedCode;

  useEffect(() => {
    displayedCode = getDisplayedCode(codes, displayedCodeName);
    document.documentElement.classList.toggle("focusMode", isFullScreen);
  }, [isFullScreen, displayedCodeName]);

  return (
    <div className={`${s.code} ${isFullScreen ? s.fullscreen : ""}`}>
      <CodeBlockHeader
        props={{ displayedCodeName, setDisplayedCodeName, codes }}
      />

      <div className={s.buttons}>
        <CopyButton code={code} />
        <DownloadButton name={codeName} code={code} />
        <FullscreenButton
          isFullScreen={isFullScreen}
          toggleIsFullScreen={toggleIsFullScreen}
        />
      </div>

      <div className={s.codeArea}>
        <Highlighter
          className={`${s.preElement}`}
          language="javascript"
          style={vscDarkPlus}
          showLineNumbers={true}
        >
          {code}
        </Highlighter>
      </div>
    </div>
  );
};

export default memo(HookCode);

function getDisplayedCode(codes, displayedCodeName) {
  return codes.find(({ name }) => name === displayedCodeName);
}
