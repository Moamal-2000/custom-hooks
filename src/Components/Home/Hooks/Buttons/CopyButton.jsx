import { ICON_TOGGLE_DELAY } from "src/Data/variables";
import useCopyText from "src/Hooks/useCopyText";
import useToggle from "src/Hooks/useToggle";
import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";

const CopyButton = ({ code }) => {
  const [, copyText] = useCopyText();
  const [isCopied, toggleIsCopied] = useToggle(false);

  function handleCopyButton() {
    if (isCopied) return;

    copyText(code);
    toggleIsCopied();
    setTimeout(() => toggleIsCopied(), ICON_TOGGLE_DELAY);
  }

  return (
    <button type="button" title="Copy Code" onClick={handleCopyButton}>
      {<SvgIcon name={isCopied ? "checked" : "copy"} />}
    </button>
  );
};
export default CopyButton;
