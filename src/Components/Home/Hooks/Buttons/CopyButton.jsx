import useCopyText from "../../../../Hooks/useCopyText";
import useToggle from "../../../../Hooks/useToggle";
import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";

const CopyButton = ({ code }) => {
  const [copiedText, copyText] = useCopyText();
  const [isCopied, toggleIsCopied] = useToggle(false);

  function handleCopyButton() {
    if (isCopied) return;
    copyText(code);
    toggleIsCopied();
    setTimeout(() => toggleIsCopied(), 1000);
  }

  return (
    <button type="button" title="Copy Code" onClick={handleCopyButton}>
      {<SvgIcon name={isCopied ? "checked" : "copy"} />}
    </button>
  );
};
export default CopyButton;
